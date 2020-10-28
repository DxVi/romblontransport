import { Button, FormControl, Input } from '@material-ui/core'
import React, { useState } from 'react'
import db, {storage} from '../firebase';
import './Avatar.css';
import { useStateValue } from '../StateProvider';

function Avatar() {
    const [{user,userid}, dispatch] = useStateValue();

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => { 
                // progress function...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // error function...
                console.log("here>>>");
                console.log(error);
                alert(error.message);
            },
            () => {
                // complete function...
                storage 
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    // post image inside db
                    db.collection('users')
                    .doc(userid).update({
                        image: url,
                    });
                    setProgress(0);
                    setImage(null);
                    dispatch({
                        type: "SET_AVATAR",
                        avatar: url
                    })
                })
            }
        )
    }

    return (
        <div className="imageupload">
            <form>
                <FormControl>
                <progress className="imageupload__progress" value={progress} max="100" />
                <Input type="file" onChange={handleChange} />
                <Button disabled={!image} color="primary" onClick={handleUpload}>
                    Upload
                </Button>
                </FormControl>    
            </form>
        </div>
    )
}

export default Avatar

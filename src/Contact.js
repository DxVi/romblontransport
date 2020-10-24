import React, {useState} from 'react';
import "./Contact.css";
import {TextField, TextareaAutosize, Button, FormControl} from "@material-ui/core";
import EmailIcon from '@material-ui/icons/Email';
import { useStateValue } from './StateProvider';

function Contact({data}) {
    const [{RTC}] = useStateValue();
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    // let email = "";

    const handleSubmit = (e) => {
        e.preventDefault();
        window.open(`mailto:${RTC ? RTC.main?.email : ""}?subject=${subject}&body=${name}: ${message}`);
    };

    // if (data) {
    //     email = data?.email
    // }
    return (
        <div id="contact" className="contact">
            
            <div className="contact__head">
                <h2>Send email</h2>
                <EmailIcon />
            </div>

            <div className="contact__form">
                <form className="contact__input">
                    <FormControl>
                        <TextField
                            key="Name"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />

                        <TextField
                            key="subject"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="subject"
                            label="Subject"
                            name="subject"
                            autoComplete="subject"
                            onChange={e => setSubject(e.target.value)}
                            value={subject}
                        />

                        <TextareaAutosize
                            rowsMin={10} 
                            rowsMax={30}
                            placeholder=" Message..."
                            aria-label="empty textarea" 
                            height="50px"
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                        />

                        <Button
                            disabled = {!name || !subject || !message}
                            type = "submit"
                            onClick = {handleSubmit}
                            variant = "contained"
                            color = "primary"
                        >Submit</Button>
                    </FormControl>
                </form>
            </div>
        </div>
    )
}

export default Contact

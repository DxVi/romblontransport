import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Login.css';
import db from '../firebase';
import firebase from "firebase";
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';
 

 

function SignUp() {
    const [{user, avatar}, dispatch] = useStateValue();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [image, setImage] = useState("");
    
    
    const [usernameValid, setUsernameValid] = useState("FALSE");

    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const [invalidUser, setInvalidUser] = useState("");




    const check_username = (e) => {
        e.preventDefault();
        setUsernameValid("TRUE");
        if(username.length < 3 || username.length > 10){
            setUsernameError("User Name should be 4 to 10 letters.")
        }

        if (usernameError==="") {
            db.collection("users")
            .where("username", "==", username)
            .get()
            .then(function(querySnapshot) {
                 querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log("doc.id>>>",doc.id)
                return setUsernameValid("FALSE")
                });
            })
            .catch(function(error) {
                console.log(error);
                alert(error.message);
            });
        }
        
    }




    // const sign_up = (e) => {
    //   e.preventDefault();

    //     setUsernameError("");
    //     setPasswordError("");
    //     setConfirmError("");

    //     if(username.length < 3){
    //       setUsernameError("User Name should be more than 3 letters.")
    //     }
    //     if(password.length < 3){
    //       setPasswordError("Password should be more than 3 letters.")
    //     }
    //     if(password !== confirm){
    //       setConfirmError("Password confirmation is incorrect.")
    //     }        

    //     if (usernameError==="" && passwordError ==="" && confirmError==="")
    //     {
    //         db.collection("users")
    //         .where("username", "==", username)
    //         .where("password","==",password)
    //         .get()
    //         .then(function(querySnapshot) {
    //             querySnapshot.forEach(function(doc) {
    //             // doc.data() is never undefined for query doc snapshots
    //             // console.log("doc.id>>>",doc.id)
    //             dispatch({
    //                 type: "SET_USER",
    //                 user: username
    //                 });

    //             dispatch({
    //                 type: "SET_AVATAR",
    //                 avatar: doc.data().image
    //                 })
    //         });
    //         })
    //         .catch(function(error) {
    //             console.log("Error getting documents: ", error);
    //         });
    //     }
        

    //     if (!user){
    //       setInvalidUser("Invalid User Name/Password");
    //     }

    // }

    return (
        <div className="signup">
             
            <h2>Sign Up</h2>
            <br />
            <form className="signupDetails">

                <div hidden={usernameValid==="TRUE"} className="username">
                    <div className="username__input">
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value.toLowerCase())}
                            placeholder="Enter User Name"
                            type="text"
                        />
                        
                        <p>{usernameValid}</p>

                    </div>
                    <div className="username__buttons">
                        <Button
                            disabled = {!username}
                            type = "submit"
                            onClick = {check_username}
                            variant = "contained"
                            color = "primary"
                            >Submit</Button>
                         <Button
                            type = "submit"
                            onClick = {(e) => setUsername("")}
                            variant = "contained"
                            color = "secondary"
                            >Cancel</Button>
                    </div>
                </div>

                <div hidden={usernameValid==="FALSE"} className="password">
                    <div className="password__input">
                        <input
                            // hidden = {usernameValid=="FALSE"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value.toLowerCase())}
                            placeholder="Enter Password"
                            type="password"
                        />
                        <div className="username__buttons">
                        <Button
                            disabled = {!password}
                            type = "submit"
                            onClick = {check_username}
                            variant = "contained"
                            color = "primary"
                            >Submit</Button>
                         <Button
                            type = "submit"
                            onClick = {(e) => setUsername("")}
                            variant = "contained"
                            color = "secondary"
                            >Cancel</Button>
                    </div>
                        
                    </div>
                </div>
{/* 


              <br />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value.toLowerCase())}
                placeholder="Password"
                type="password"
              />
              <p>{passerror}</p>
              <br />

              <input
                value={confirm}
                onChange={(e) => setConfirm(e.target.value.toLowerCase())}
                placeholder="Confirm Password"
                type="password"
              />
              <p>{passerror}</p>
              <br />

              <div className="signup__buttons">
                <Button
                  disabled = {!username || !password}
                  type = "submit"
                  onClick = {sign_up}
                  variant = "contained"
                  color = "primary"
                >Submit</Button>
               
                <Button
                  type = "submit"
                  variant = "contained"
                  color = "secondary"
                > 
                  <Link to="/login">Login</Link>
                </Button>
                
              </div>
              <p>{invalidUser}</p>
              <br /> */}
            </form>



            
        </div>  

 
    )
}

export default SignUp

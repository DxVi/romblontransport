import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Login.css';
import db from '../firebase';
import firebase from "firebase";
import { useStateValue } from '../StateProvider';

// rules_version = '2';
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

function Login() {
  const [{user}, dispatch] = useStateValue(null);
  const [hidePanel, setHidePanel] = useState("SIGNUP");

  /********** LOGIN **********/
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
    
  const [loginInputValid, setLoginInputValid] = useState(false); //--> IF loginInputValid = TRUE then query DB 
  const [loginInputError, setLoginInputError] = useState("");
  const [loginValid, setLoginValid] = useState(true);
  
  /* Reset login input variables */
  const LoginCancel = (e) => {
    e.preventDefault();
    setLoginUsername("");
    setLoginPassword("");
    setLoginInputError("");
    setLoginValid(true);
  }

  /* Validate input variables */
  const Login = (e) => {
    e.preventDefault()
    setLoginInputError("");
    if(loginUsername.length < 3 || loginUsername.length > 10 || 
       loginPassword.length < 3 || loginPassword.length > 10) {
       setLoginInputError("Username and Password must be 3 to 10 letters.")
    }else {
       setLoginInputValid(true);
    }
  }

  /** Trigger DB query qhen loginInputValid is True */
  useEffect(() => {
    if(loginInputValid){
      db.collection("users")
      .where("username", "==", loginUsername)
      .where("password","==",loginPassword)
      .get()
      .then(function(querySnapshot) {
 
        if(querySnapshot.size === 0){
          setLoginValid(false);
        }
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log("doc.id>>>",doc.id)
          dispatch({
            type: "SET_USERID",
            userid: doc.id
          });
          dispatch({
            type: "SET_USER",
            user: loginUsername
          });
          dispatch({
            type: "SET_AVATAR",
            avatar: doc.data().image
          })
          setLoginValid(true);
          setLoginInputError("You are now LOGGED IN !!!");
        });
      })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });

      setLoginUsername("");
      setLoginPassword("");
      setLoginInputValid(false);
    }
  }, [loginInputValid,dispatch, loginUsername, loginPassword])

  /** Trigger when LoginValid is False */
  useEffect(()=>{
    if (!loginValid){
      setLoginInputError("Invalid User Name/Password");
    }
  },[loginValid])

  /********** SIGNUP **********/
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");

  const [signupInputValid, setSignupInputValid] = useState(false); //--> IF signupInputValid = TRUE then query DB
  const [signupInputError, setSignupInputError] = useState("");
  // const [signupValid, setSignupValid] = useState(true);

  /* Reset signup input variables */
  const SignupCancel = (e) => {
    e.preventDefault();
    setSignupUsername("");
    setSignupPassword("");
    setSignupPasswordConfirm("");
    setSignupInputError();
  }

  const Signup = (e) => {
    e.preventDefault();
    setSignupInputError("");
    if(signupUsername.length < 3 || signupUsername.length > 10 || 
       signupPassword.length < 3 || signupPassword.length > 10){
       setSignupInputError("User Name and Password must be 3 to 10 letters.")
    }else if((signupPassword.length !== signupPasswordConfirm.length) ||
             (signupPassword !== signupPasswordConfirm)){
      setSignupInputError("Password confirmation is incorect.")
    }
    else {
       setSignupInputValid(true);
    }
  }

  useEffect(() => {
    if(signupInputValid){
      db.collection("users")
      .where("username", "==", signupUsername)
      .get()
      .then(function(querySnapshot) {
        if(querySnapshot.size === 0){
          /** size=0 Username does not exist, add to DB */
          // setSignupValid(true);
          // SignupUser();
          db.collection('users').add({
            username: signupUsername,
            password: signupPassword,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
      
          dispatch({
            type: "SET_USER",
            user: signupUsername
          });
          setSignupInputError("You are now LOGGED IN !!!");
          setSignupUsername("");
          setSignupPassword("");
          setSignupPasswordConfirm("");

        }else{
          /** size=1 Username exists  Signup is invalid, display message */
          // setSignupValid(false);
          setSignupInputError("Username already exists !!!");
          console.log("snapshot size=1>>>",querySnapshot.size)
        }
      })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }

  },[signupInputValid, dispatch, signupUsername, signupPassword])




    return (
        <div className="login">

          <div className="choice__panel">
            <div className={`login__panel ${hidePanel === 'LOGIN' ? 'hide__panel' : ''}`}>
            <h2>Login</h2>
            <br />
            <form>
              <div className="login__inputs">
              <input
                type="text"
                value={loginUsername}
                placeholder="Username"
                onChange={(e) => setLoginUsername(e.target.value.toLowerCase())}
              />
              <br />
              <input
                type="password"
                value={loginPassword}
                placeholder="Password"
                onChange={(e) => setLoginPassword(e.target.value.toLowerCase())}
              />
              <br />
              <p>{loginInputError}</p>
              {/* <p>{user? "" : loginValid}</p> */}
            </div>
              <div className="login__buttons">
              <Button
                type = "submit"
                color = "primary"
                variant = "contained"
                onClick = {Login}
                disabled = {!loginUsername || !loginPassword}
              >Submit</Button>
               
              <Button
                type = "submit"
                color = "secondary"
                variant = "contained"
                onClick = {LoginCancel}
              >Cancel</Button>
            </div>
              
            </form>
          </div>

            <div className={`signup__panel ${hidePanel === 'SIGNUP' ? 'hide__panel' : ''}`}>
            <h2>Sign-Up</h2>
            <br />
            <form>
              <div className="signup__inputs">
                <input
                  type="text"
                  value={signupUsername}
                  placeholder="Username"
                  onChange={(e) => setSignupUsername(e.target.value.toLowerCase())}
                />
                <br />
                <input
                  type="password"
                  value={signupPassword}
                  placeholder="Password"
                  onChange={(e) => setSignupPassword(e.target.value.toLowerCase())}
                />
                <br />
                <input
                  type="password"
                  value={signupPasswordConfirm}
                  placeholder="Confirm Password"
                  onChange={(e) => setSignupPasswordConfirm(e.target.value.toLowerCase())}
                />
                <br />
                <p>{signupInputError}</p>
                {/* <p>{user? "" : signupValid}</p> */}
              </div>
              <div className="signup__buttons">
                <Button
                  type = "submit"
                  color = "primary"
                  variant = "contained"
                  onClick = {Signup}
                  disabled = {!signupUsername || !signupPassword || !signupPasswordConfirm}
                >Submit</Button>
                
                <Button
                  type = "submit"
                  color = "secondary"
                  variant = "contained"
                  onClick = {SignupCancel}
                >Cancel</Button>
              </div>
            </form>
          </div>
          </div>
          <div className="choice__buttons">
            {/* <form className="choiceButtons__button"> */}
              <div>
                <Button 
                    className="choice__login"
                    type = "submit"
                    color = "primary"
                    variant = "contained"
                    onClick = {(e)=>{setHidePanel('SIGNUP')}}
                >Login</Button>
              </div>
              <div>
                <Button
                    className="choice__signup"
                    type = "submit"
                    color = "primary"
                    variant = "contained"
                    onClick = {(e)=>{setHidePanel('LOGIN')}}
                >Sign-Up</Button>
              </div>
            {/* </form> */}
          </div>
        
        </div>
    )
}

export default Login

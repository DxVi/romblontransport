import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Login.css';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

 
function Login() {
  const [{user, avatar}, dispatch] = useStateValue(null);
  const [hidePanel, setHidePanel] = useState("SIGNUP");

  /********** LOGIN **********/
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
    
  const [loginInputValid, setLoginInputValid] = useState(false); //--> IF loginInputValid = TRUE then query DB 
  const [loginInputError, setLoginInputError] = useState("");
  const [loginValid, setLoginValid] = useState(true);
  
  const LoginCancel = (e) => {
    e.preventDefault();
    setLoginUsername("");
    setLoginPassword("");
    setLoginInputError("");
    setLoginValid(true);
  }

  const Login = (e) => {
    e.preventDefault()
    setLoginInputError("");
    // setLoginValid(true);
      if(loginUsername.length < 3 || loginUsername.length > 10 || 
         loginPassword.length < 3 || loginPassword.length > 10) {
         setLoginInputError("User Name and Password must be 3 to 10 letters.")
      }else {
         setLoginInputValid(true);
      }
  }

  useEffect(() => {
    if(loginInputValid){
      console.log("im here....")
      db.collection("users")
      .where("username", "==", loginUsername)
      .where("password","==",loginPassword)
      .get()
      .then(function(querySnapshot) {
        console.log("test if exist....",querySnapshot.count)
 
        setLoginValid(false);
        console.log("outsideloginvalid>>>>>>",loginValid)
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log("doc.id>>>",doc.id)
          
          if(doc.exists){
            setLoginValid(true);
            dispatch({
              type: "SET_USER",
              user: loginUsername
            });
            dispatch({
              type: "SET_AVATAR",
              avatar: doc.data().image
            })
            console.log("found>>>>", doc.data().image)
          }else{
            console.log("not found>>>>")
          }
          
        });
      })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
    }
    if (loginInputValid){
      setLoginUsername("");
      setLoginPassword("");
      setLoginInputValid(false);
      // setLoginValid(false);
    }
  }, [loginInputValid,dispatch, loginUsername, loginPassword,  user])

  useEffect(()=>{
    if (!loginValid){
      setLoginInputError("Invalid User Name/Password");
    }
    console.log(">>>>", loginValid)
  },[loginValid])


  /********** SIGNUP **********/
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");

  const [signupValidInput, setSignupValidInput] = useState(false); //--> IF signupValidInput = TRUE then query DB
  const [signupInputError, setSignupInputError] = useState("");
  const [signupValid, setSignupValid] = useState();

  const SignupCancel = (e) => {
    e.preventDefault();

  }

  const Signup = (e) => {
    e.preventDefault();
  }

  useEffect(() => {

  },[signupValidInput, dispatch, signupUsername, signupPassword, user])



  
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
                placeholder="User Name"
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
              <p>{user? "" : loginValid}</p>
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
                  placeholder="User Name"
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
                  placeholder="Password"
                  onChange={(e) => setSignupPasswordConfirm(e.target.value.toLowerCase())}
                />
                <br />
              </div>
              <div className="signup__buttons">
                <Button
                  type = "submit"
                  color = "primary"
                  variant = "contained"
                  onClick = {(Signup)}
                  disabled = {!signupUsername || !signupPassword || signupPasswordConfirm}
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

import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) =>
    //     dispatch({
    //       type: actionTypes.SET_USER,
    //       user: result.user,
    //     })
    //   )
    //   .catch((error) => alert(error.message));

    const username = prompt("Please enter username");
    if (username) {
      dispatch({
              type: actionTypes.SET_USER,
              user: username,
            })
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="../images/logo512.png"
          alt=""
        />

        <div className="login__text">
          <h1>Sign in to Romblon Transport</h1>
        </div>

        <Button onClick={signIn}>Sign In</Button>
      </div>
    </div>
  );
}

export default Login;

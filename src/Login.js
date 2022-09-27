import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import React from "react";
import "./Login.css";

function Login() {
  const signIn = () => {
    //do a google login
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://i.redd.it/hzb86t3qa9h51.png" alt="" />
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;

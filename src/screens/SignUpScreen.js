import React, { useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./SignUpScreen.css";
import { useDispatch } from "react-redux";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((result) => {
        // console.log(result, "RESULT");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={(e) => signIn(e)}>
          Sign In
        </button>
        <h4>
          <span className="SignupScreen__gray">New to Netflix? </span>
          <span className="SignupScreen__link" onClick={(e) => register(e)}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;

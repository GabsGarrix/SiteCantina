import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import GoogleLogo from "../assets/google.png";
import canteen from "../assets/canteen.jpeg";
import { auth, googleProvider } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log(auth?.currentUser?.email);

  

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Navigate to the Home page after successful registration
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // Navigate to the Home page after successful registration
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="registration-form" style={{ background: `url(${canteen})` }}>
      <h2 className="title">Registration Form</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className="registerButton" onClick={signIn}>
        Register
      </button>
      <div className="google-signin">
        <button className="google-button" onClick={signInWithGoogle}>
          <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
          Sign in with Google
        </button>
        <button className="registerButton" onClick={logOut}>logOUT</button>
      </div>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import "../styles/Login.css";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/Firebase";
import { useNavigate } from "react-router-dom";
import canteen from "../assets/canteen.jpeg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register"); // Navigate to the "/register" route
  };

  const logIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      const user = userCredential.user;
      console.log("Logged in user:", user.email);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const logInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      // Login successful
      const user = userCredential.user;
      console.log("Logged in user:", user.email);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container" style={{ background: `url(${canteen})` }}>
      <h2>Login</h2>
      
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton1" onClick={logIn}>Login</button>
        <button onClick={logInWithGoogle} className="loginButton1">Login with Google</button>
        <button onClick={goToRegister} className="loginButton1">Create an account</button>
      
    </div>
  );
}

export default Login;

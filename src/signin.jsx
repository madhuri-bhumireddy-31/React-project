import React, { useContext, useState, useRef, useEffect } from "react";
import "./assets/styles/signin.css";
import { Link } from "react-router-dom";
import { Context } from "./App";

const Signin = ({ switchToSignup }) => {
  const { setUsername, setPage} = useContext(Context);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
   

  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleLogin = () => {
    if (name.trim() === "" || password.trim() === "") {
      alert("Please fill in both name and password.");
    } else {
      alert(`Welcome, ${name}!`);
       setUsername(name); 
       setPage("home");
    }
  };

  return (
    <div className="signin-container">
      <h2 className="form-title">Login</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameInputRef}
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Enter your password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Link to="/home">
      <button className="primary-button" onClick={handleLogin}>
        Login
      </button>
      </Link>

      <div className="divider">or</div>
      
      <p className="switch-text">
        New to My Foods?{" "}
        
        <Link to="/signup">
        <span className="switch-link" onClick={switchToSignup}>
          Create account
        </span>
        </Link>
      </p>
    </div>
  );
};

export default Signin;

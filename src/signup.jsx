import React, { useContext, useState } from "react";
import { Context } from "./App";
import { Link } from "react-router-dom";
import './assets/styles/signup.css';


const Signup = ({ switchToSignin }) => {
   const { setUsername, setPage } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSignup = () => {
    if (agreed) {
      console.log("Create account for:", fullName, email);
      alert(" Your account is Successfully created")
      setUsername(fullName); // Save username in context
      setPage("home"); // Switch to Home page
    }
  };


  return (
    <div  className="signin-container">
      <h2 className="form-title">Sign up</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="input-field"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
            <input
        type="password"
        placeholder="Create Password"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
            <input
        type="password"
        placeholder="Re- enter password"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        I agree to My Foods's <span className="terms-link">Terms and Policies</span>
      </label>
      
      <Link to="/home">
      <button
        className={`primary-button ${!agreed ? "disabled" : ""}`}
        disabled={!agreed}
        onClick={handleSignup}      >
        Create account
      </button>
     </Link>
     
      <p className="switch-text">
        Already have an account?{" "}
        <Link to="/signin">
        <span className="switch-link" onClick={switchToSignin}>
          Log in
        </span>
        </Link>
      </p>
    </div>
  );
};

export default Signup;

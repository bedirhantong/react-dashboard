import React from "react";
import "./SignUpForm.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Assets/akdeniz_logo.png";

const SignUpForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" />
        </div>
        <h1>Sign Up</h1>
        <div className="input-box">
          <input
            className="input-holder"
            type="text"
            placeholder="Username"
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            className="input-holder"
            type="email"
            placeholder="Email"
            required
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            className="input-holder"
            type="password"
            placeholder="Password"
            required
          />
          <FaLock className="icon" />
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-link">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;

import React from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import logo from "../Assets/akdeniz_logo.png";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <form action="">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" />
        </div>
        <h1>Login</h1>
        <div className="input-box">
          <input
            className="input-holder"
            type="email"
            placeholder="User email"
            required
          />
          <FaUser className="icon" />
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
        <div className="remember-forgot">
          <label>
            <input className="input-checkbox" type="checkbox" />
            Remember me
          </label>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account?<Link to="/sign-up">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

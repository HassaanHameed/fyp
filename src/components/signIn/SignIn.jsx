import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import Checkbox from "@mui/material/Checkbox";

function SignIn() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="login">
      <div className="login__form">
        <div className="login__formTop">
          <h4>Welcome Back</h4>
        </div>

        <div className="login__formMiddle">
          <input type="email" placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <h5>
            <Checkbox {...label} defaultChecked />
            Remember Me
            <span className="login__formMiddle-space">Forgot Password?</span>
          </h5>
          <button type="submit" className="login__signInButton">
            Log In
          </button>
        </div>
        <div className="login__formBottom">
          <hr />
          <h5>
            Don't have an account?
            <Link to="/join"> Sign Up</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

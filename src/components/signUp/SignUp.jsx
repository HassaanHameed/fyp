import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";

function SignUp() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="signup">
      <div className="signup__form">
        <div className="signup__formTop">
          <h4>Sign Up</h4>
        </div>

        <div className="signup__formMiddle">
          <input type="email" placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <h5>
            <Checkbox {...label} defaultChecked />I agree to the Bloclance and
            User Agreement and Privacy Policy.
          </h5>
          <button type="submit" className="login__signInButton">
            Join Bloclance
          </button>
        </div>
        <div className="signup__formBottom">
          <hr />
          <h5>
            Already have an account?
            <Link to="/signin"> Log in</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

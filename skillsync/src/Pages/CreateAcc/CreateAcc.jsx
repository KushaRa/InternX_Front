import React from "react";
import "./CreateAcc.css";

export const CreateAcc = () => {
  return (
    <>
    <div className="flex-container">
      <div className="flex-box1">
        <div className="logo"></div>
        <div className="welcome">Welcome to</div>
        <div className="internx">InternX Community</div>
      </div>
      <div className="flex-box2">
        <div className="createAcc">
          <h5>Create a InternX acount</h5>
          <div className="input-box">
            <form action="past">
              <input type="text" placeholder="Full Name" required />
            </form>
          </div>
          <div className="input-box">
            <form action="past">
              <input type="text" placeholder="Email" required />
            </form>
          </div>
          <div className="input-box">
            <form action="past">
              <input type="password" placeholder="Your Password" required />
            </form>
          </div>
          <div className="terms">
            <label>
              <input type="checkbox" />I agree to InternX Terms of Services and
              Privacy Policy.
            </label>
          </div>
          <button type="submit" id="signupButton">
            Sign up
          </button>
          <div className="or">
            <p>---------------------------- OR ---------------------------</p>
          </div>
          <button className="google-button" type="submit" id="googleButton">
            Continue with google
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateAcc;
import React from "react";
import "./CreateAcc.css";

export const CreateAcc = () => {
  return (
    <>
      <div className="flex-Container">
        <div className="flex-box01">
          <div className="logo">logo</div>
          <div className="welcome">Welcome to</div>
          <div className="internx">InternX Community</div>
        </div>
        <div className="flex-box02">
          <div className="createAcc">
            <h5>Create a InternX account</h5>
            <div className="input-box1">
              <form action="past">
                <input type="text" placeholder="Full Name" required />
              </form>
            </div>
            <div className="input-box1">
              <form action="past">
                <input type="text" placeholder="Email" required />
              </form>
            </div>
            <div className="input-box1">
              <form action="past">
                <input type="password" placeholder="Your Password" required />
              </form>
            </div>
            <div className="terms">
              <label>
                <input type="checkbox" />I agree with InternX Terms of Services
                and Privacy Policy.
              </label>
            </div>
            <button type="submit" id="signupButton">
              Sign up
            </button>
            <div class="divider-container">
              <div class="divider"></div>
              <div class="divider-text">or</div>
              <div class="divider"></div>
            </div>
            <button className="google-button" type="submit" id="googleButton">
             <img src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" alt="Google logo"></img>
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAcc;

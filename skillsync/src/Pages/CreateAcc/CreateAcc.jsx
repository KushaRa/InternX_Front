import React, { useState } from "react";
import "./CreateAcc.css";
import axios from "axios";

export const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/Signup", {
        fullname,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex-Container">
        <div className="flex-box01" style={{width:"750px"}}> 
          <div className="logo">logo</div>
          <div className="welcome">Welcome to</div>
          <div className="internx">InternX Community</div>
        </div>
        <div className="flex-box02">
          <div className="createAcc">
            <h5 style={{marginLeft:"10px", marginTop:"50px"}}>Create a InternX account</h5>
            <form onSubmit={handleSignup} className="input-box1">
              <input style={{width:"280px", height:"20px"}}
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />

              <input  style={{width:"280px", height:"20px"}}
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input style={{width:"280px", height:"20px"}}
                type="password"
                placeholder="Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="terms">
                <label>
                  <input style={{width:"15px"}} type="checkbox" className="checkbox1" />I agree with InternX Terms of
                  Services and Privacy Policy.
                </label>
              </div>
              <button type="submit" id="signupButton" className="signupButton">
                Sign up
              </button>
            </form>
            <div className="divider-container">
              <div className="divider"></div>
              <div className="divider-text">or</div>
              <div className="divider"></div>
            </div>
            <button className="google-button" type="submit" id="googleButton">
              <img
                src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                alt="Google logo"
              ></img>
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

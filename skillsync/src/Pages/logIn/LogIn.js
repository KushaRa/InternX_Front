import React, { useState } from "react";
import "./logIn.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/Login", {
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
      <div className="flex-container">
        <div className="flex-box1">
          <div className="logo2">logo</div>
          <div className="welcome">Welcome to</div>
          <div className="internx">InternX Community</div>
        </div>
        <div className="flex-box2">
          <div className="login">
            <h5>Login to your account</h5>
            <div>
              <form onSubmit={handleLogin} className="input-box1">
                <input style={{width:"280px", height:"20px"}}
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input style={{width:"280px", height:"20px", marginRight:"10px"}}
                  type="password"
                  placeholder="Your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="terms">
                  <label>
                    <input type="checkbox" />I agree with InternX Terms of
                    Services and Privacy Policy.
                  </label>
                </div>
                <button type="submit" id="loginButton" className="loginButton">
                  <Link to="/Card">Login</Link>
                </button>
              </form>
              <div class="divider-container">
                <div class="divider"></div>
                <div class="divider-text">or</div>
                <div class="divider"></div>
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
      </div>
    </>
  );
};

export default LogIn;

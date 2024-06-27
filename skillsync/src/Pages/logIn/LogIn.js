import React, { useState } from "react";
import "./logIn.css";
import axios from "axios";

export const LogIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // "http://localhost:8000/api/login",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
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
              <form onSubmit={loginUser} className="input-box1">
                <input
                  className="Linput"
                  type="text"
                  placeholder="Your user name OR email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                />
                <input
                  type="password"
                  placeholder="Your password "
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                />
                <div className="terms">
                  <label>
                    <input type="checkbox" />I agree with InternX Terms of
                    Services and Privacy Policy.
                  </label>
                </div>
                <button type="submit" id="loginButton" className="loginButton">
                  Login
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

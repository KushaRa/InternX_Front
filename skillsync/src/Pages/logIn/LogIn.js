import React, { useState } from "react";
import "./logIn.css";
import axios from "axios";

export default function LogIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login", data);
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
              <form onSubmit={loginUser} className="Login_input-box">
                <input
                  className="Linput"
                  type="text"
                  placeholder="Your user name OR email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                />
              </form>
            </div>
            <div>
              <form onSubmit={loginUser} className="Login_input-box">
                <input
                  type="password"
                  placeholder="Your password "
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  required
                />
              </form>
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/">Forgot password</a>
            </div>
            <button type="submit" id="loginButton">
              Login
            </button>
            <div className="Or">
              <p>---------------------------- OR ---------------------------</p>
            </div>
            <button className="Google-button" type="submit" id="googleButton">
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./logIn.css";

export default function LogIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = (e) => {
    e.preventDefault();
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
            <div className="input-box">
              <form onSubmit={loginUser}>
                <input
                  type="text"
                  placeholder="Your user name OR email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  required
                />
              </form>
            </div>
            <div className="input-box">
              <form onSubmit={loginUser}>
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
              <a href="#">Forgot password</a>
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

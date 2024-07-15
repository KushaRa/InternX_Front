import React, { useState } from "react";
import "./logIn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/Login", {
        email,
        password,
      });
      if (response.status === 200) {
        navigate("/Card");
      } else {
        toast.error("Login failed", {
          style: { backgroundColor: "#00b4d8", color: "black" },
        });
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data, {
          style: { backgroundColor: "#00b4d8", color: "black" },
        }); // Display the error message from the server
      } else {
        toast.error("An unexpected error occurred. Please try again.", {
          style: { backgroundColor: "#00b4d8", color: "black" },
        });
      }
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
                  Login
                </button>
              </form>
              <div className="divider-container">
                <div className="divider"></div>
                <div className="divider-text">or</div>
                <div className="divider"></div>
              </div>
              <button className="google-button" type="button" id="googleButton">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
                  alt="Google logo"
                ></img>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LogIn;

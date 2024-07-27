import React from "react";
import "./Lognavbar.css";
import { Link } from "react-router-dom";

export default function Lnavbar() {
  return (
    <>
      <nav className="navBar">
        <div className="navDiv">
          <div className="logo1">
            <Link to='/'>InternX</Link>
          </div>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="navUl">
            <li>
              <Link to="/card">Home</Link>
            </li>
            <li>
              <Link to="/internships">Internships</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <Link to="/login">
              <button className="Nbutton">Log in</button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import profileicon from "../../assets/profileicon.png";
import "./MainNav.css";

export const MainNav = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navDiv">
          <div className="logo">
            <a href="#">InternX</a>
          </div>
          <ul className='navUl'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internships">Internships</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <Link to="/profile"><img src={profileicon}></img></Link>
          </ul>
        </div>
      </nav>
    </>
  );
};
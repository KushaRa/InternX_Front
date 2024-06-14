import React from "react";
import "./MainNav.css";
import { Link } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';


export default function Lnavbar() {
  return (
    <>
      <nav className="navBar">
        <div className="navDiv">
          <div className="logo1">
          <Link to='/'>InternX</Link>
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
            <Link to='/'><IconButton style={{color: '#00B4D8'}}> <AccountCircle /></IconButton></Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

import React, {useState} from "react";
import "./Lognavbar.css";
import { Link } from "react-router-dom";

export default function Lnavbar() {
  const[menuOpen, setMenu] =useState(false);

 return (

    <>
      <nav className="navBar">
        <div className="navDiv">
          <div className="logo1">
            <Link to='/'>InternX</Link>
          </div>
          <div className="menu" 
          onClick={()=>setMenu(menuOpen)          }>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className ="navUl">
          <ul className={menuOpen ? "open": ""}>

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
        </div>
      </nav>
    </>
  );
}

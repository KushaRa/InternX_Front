import React, {useState} from "react";
import "./Lognavbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_trprnt.png";

export default function Lnavbar() {
  const[menuOpen, setMenu] =useState(false);

 return (

    <>
      <nav className="navBar">
        <div className="navDiv">
          <div className="logo1" style={{height:"35px", width:"auto",marginTop:"12px", padding:"0px", marginBottom:"36px"}}>
            <Link to='/'> <img src={logo} alt="InternX Logo" className="logoImage"  style={{height:"45px", width:"auto",marginTop:"0px", padding:"0px"}}  /></Link>
          </div>
          <div className="menu" 
          onClick={()=>setMenu(!menuOpen)} >
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <ul className={`navUl ${menuOpen ? "open" : ""}`} >

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

import React,{useState} from "react";
import "./MainNav.css";
import { Link } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import logo from "../../assets/logo_trprnt.png";


export default function Lnavbar() {
  const[menuOpen, setMenu] =useState(false);
  return (
    <>
      <nav className="MnavBar">
        <div className="MnavDiv">
        <div className="logo1" style={{height:"25px", width:"auto",marginTop:"12px", padding:"0px", marginBottom:"30px"}}>
        <Link to='/'> <img src={logo} alt="InternX Logo" className="logoImage"  style={{height:"45px", width:"auto",marginTop:"0px", padding:"0px"}}  /></Link>
          </div>
          <div className="menu" 
          onClick={()=>setMenu(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          

          <ul className="MnavUl">
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
            <Link to='/internships'><IconButton style={{color: '#00B4D8'}}> <AccountCircle /></IconButton></Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

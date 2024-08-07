import React,{useState} from "react";
import "./MainNav.css";
import { Link } from "react-router-dom";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';



export default function Lnavbar() {
  const[menuOpen, setMenu] =useState(false);
  return (
    <>
      <nav className="MnavBar">
        <div className="MnavDiv">
          <div className="logo1">
          <Link to='/'>InternX</Link>
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
            <Link to='/'><IconButton style={{color: '#00B4D8'}}> <AccountCircle /></IconButton></Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

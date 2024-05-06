import React from 'react'
import './lnavbar.css'

export default function Lnavbar() {
  return (
    <>
       <nav className="navBar">
        <div className="navDiv">
         <div className="logo"><a href="#">InternX</a></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Interships</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <button><a href="#">Log in</a></button>
            </ul>
        </div>
     </nav>
    </>
  )
}


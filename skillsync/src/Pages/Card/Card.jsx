import React from "react";
import "./Card.css";
import Lnavbar from "../../components/NavBar/Lognavbar";
import { Link } from 'react-router-dom';

export const Card = () => {
    return (
        <div className="cardPage">
            <header classname="cardHeader">
            <Lnavbar/>
            </header>
            <h1 className="cardHeader">Unlock endless<br/ > possibilities for your<br/ > future career</h1>
            <div className="cardSearchBar">
                <input type= "text" placeholder="Type Here"/>
                <button className="cardButton">Search</button> 
            </div>
        </div>
        
        
    )
}
export default Card;
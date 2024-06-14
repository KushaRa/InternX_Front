import React from "react";
import "./Card.css";
import MainNav from '../../components/MainNav/MainNav';
import Lnavbar from "../../components/MainNav/MainNav";

export const Card = () => {
    return (
        <div className="cardPage">
            <header className="cardHeader">
            <Lnavbar/>
            </header>
            {/* <section className="card-section"> */}
            <h1 className="cardHeader">Unlock endless<br/ > possibilities for your<br/ > future career</h1>
            <div className="cardSearchBar">
                <input type="text" placeholder="Type Here"/>
                <button className="cardButton">Search</button>
            </div>
             {/* </section>  */}
            <section className="card-featured-internships">
            <h2>Featured Internship Offers</h2>
            </section>
                <div className="internship-cards">
                    {Array(6).fill().map((_, index) => (
                        <div className="internship-card" key={index}>
                        <h3>Delivergate (Private) Limited</h3>
                        <p>Front-End Developer Intern</p>
                        <div className="card-details">
                            <span>Colombo</span>
                            <span>Remote</span>
                            <span>6 Months</span>
              </div>
            </div>
          ))}
        </div>
        <a href="/" className="all-job-offers">All Job Offers</a>

        </div>
    )};
        <>
    <div className="cardPage">
        <div className='Mnavbar-container'>
            <MainNav/>
            </div>
            </div>
        </>


export default Card;

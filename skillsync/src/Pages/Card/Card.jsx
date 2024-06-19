import React from "react";
import "./Card.css";
import MainNav from "../../components/MainNav/MainNav";
import location from "../../assets/location.jpg";
import remote from "../../assets/remote.webp";
import time from "../../assets/time.png";

export const Card = () => {
  return (
    <div className="cardPage">
      <header className="cardHeader">
        {/* <Lnavbar/> */}
        <MainNav />
      </header>
      {/* <section className="card-section"> */}
      <h1 className="cardHeader">
        Unlock endless
        <br /> possibilities for your
        <br /> future career
      </h1>
      <div className="cardSearchBar">
        <input className="card-search" type ="text" placeholder="Type Here" />
        <button className="cardButton">Search</button>
      </div>
      {/* </section>  */}
      <div className="card-featured-internships">
        <h2>Featured Internship Offers</h2>
      </div>
      <div className="internship-cards">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div className="internship-card" key={index}>
              <div className="card-header">
                <h3>Delivergate (Private) Limited</h3>
                <p>Front-End Developer Intern</p>
              </div>
              <div className="card-details">
                <img className="locationlogo " src={location} alt="Logo" />
                <span>Colombo</span>
                <img className="remotelogo" src={remote} alt="Logo" />
                <span>Remote</span>
                <img className="timelogo" src={time} alt="Logo" />
                <span>6 Months</span>
              </div>
            </div>
          ))}
      </div>
      <link to="Categories">
        All Job Offers
        </link>
    </div>
  );
};
<>
  <div className="cardPage">
    <div className="Mnavbar-container">
      <MainNav />
    </div>
  </div>
</>;

export default Card;

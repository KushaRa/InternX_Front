import React, {useState, useEffect}  from "react";
import "./Card.css";
import MainNav from "../../components/MainNav/MainNav";
import location from "../../assets/location.jpg";
import remote from "../../assets/remote.webp";
import time from "../../assets/time.png";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export const Card = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/display-add');
        setDataProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/categories");
  };
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
        <input className="card-search" type="text" placeholder="Type Here" />
        <button className="cardButton">Search</button>
      </div>
      {/* </section>  */}
      <div className="card-featured-internships">
        <h2>Featured Internship Offers</h2>
      </div>
      <div className="internship-cards">
        {dataProduct.map((item, i) => (
            <div
              className="internship-card"
              key={i}
              onClick={handleCardClick}
            >
              <div className="card-header">
                <h3>{item.company_name}</h3>
                <p>{item.title}</p>
              </div>
              <div className="card-details">
                <img className="locationlogo " src={location} alt="Logo" />
                <span>{item.location}</span>
                <img className="remotelogo" src={remote} alt="Logo" />
                <span>{item.job_type}</span>
                <img className="timelogo" src={time} alt="Logo" />
                <span>{item.duration}</span>
              </div>
            </div>
          ))}
      </div>
      <a href="/" className="all-job-offers">
        All Job Offers
      </a>
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

import React, {useState, useEffect}  from "react";
import "./Card.css";
import MainNav from "../../components/MainNav/MainNav";
import location from "../../assets/location.jpg";
import remote from "../../assets/remote.webp";
import time from "../../assets/time.png";
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';


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
      <> <MainNav /></>
      <div className="cardHeader" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
       <h4>
        Unlock Endless Possibilities for Your Future Career
        </h4>
        <p>InternX revolutionizes the internship search process in the dynamic IT industry.
        <br></br> Discover your perfect internship effortlessly, while IT companies find top talent seamlessly.
        <br></br> Explore boundless opportunities with InternX.
        </p>
      
      <div className="cardSearchBar"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        marginTop: "20px"
              
      }}>
      <input 
          type="text" 
          placeholder="Type Here.." 
          style={{
            border: "none",
            outline: 0,
            padding: "12px 25px",
            fontSize: "18px",
            backgroundColor: "aliceblue",
            color: "black",
            borderRadius: "30px",
            flex: 1,
            marginRight: "18px",
            marginLeft: "50px",
            marginTop: "20px"
          }}
        />      
            <button className="searchButton"><SearchIcon /></button>
          </div> 
      {/* </section>  */}
      </div>
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
    <div className="all-job" style={{ padding: "20px", display: "block", marginTop: "20px", marginBottom: "20px", color: "#000", textDecoration: "none", fontSize: "1em", fontWeight: "bold" }}>
        <a href="/" style={{ color: "#000", textDecoration: "none" }}>
        All Job Offers
        </a>
    </div>
    
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

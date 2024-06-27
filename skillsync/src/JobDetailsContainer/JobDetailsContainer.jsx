import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './JobDetailsContainer.css';
//import JobDetails from "../JobDetails/JobDetails";

const JobDetailsContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/display-add/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

 return (
    <div className='jobDetails'>
      <div className="titleCard"><h2>Title: {data.title}</h2></div>
      <div className="companyCard"><p>Company: {data.company_name}</p></div>
      <div className="jobtypeCard"><p>Job Type: {data.job_type}</p></div>
      <div className="durationCard"><p>Duration: {data.duration}</p></div>
      <div className="locationCard"><p>Location: {data.location}</p></div>
      <div className="emailCard"><p>Email: {data.email}</p></div>
      <div className="decriptionCard"><p>Description: {data.description}</p></div>
    </div>
  );
};

export default JobDetailsContainer;
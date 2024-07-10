import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
//import './JobDetailsContainer.css';

const JDetailsStd = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

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

  const deleteRecord = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/display-add/${id}`);
      alert('Deleted Successfully');
      navigate('/internships'); // Redirect to another page after deletion

    } catch (error) {
      console.error('Error deleting record:', error);
      alert('Failed to Delete Advertisment');
    }
  };

//

  if (!data) {
    return <div className="load">Loading...</div>;
  }

 return (
    <div className='fullPage'>
    <div className='jobDetails'>
      <div className="titleCard"><h2>{data.title}</h2></div>
      <div className="companyCard"><p><b>Company: </b>{data.company_name}</p></div>
      <div className="jobtypeCard"><p><b>Job Type: </b>{data.job_type}</p></div>
      <div className="durationCard"><p><b>Duration: </b>{data.duration}</p></div>
      <div className="locationCard"><p><b>Location: </b>{data.location}</p></div>
      <div className="emailCard"><p><b>Email: </b><a href={`mailto:${data.email}`} className="emailLink">{data.email} </a></p></div>
      <div className="decriptionCard"><p><b>Description:</b><br></br> {data.description}</p></div>
    </div>
    <div className="section-two">
    <button className="EditButton">Responses</button>
    <button className="DeleteButton" onClick={deleteRecord}>Delete</button>
  </div>
  </div>
  );
};

export default JDetailsStd;
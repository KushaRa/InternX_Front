import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import './jDetailsStd.css';
import NewCV from "../ApplyJob/applyJob";


const JDetailsStd = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  

//

  if (!data) {
    return <div className="load">Loading...</div>;
  }

 return (
    <div className='fullPage'>
      <NewCV open={open} handleClose={handleClose} />
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
    <button className="ApplyButton" onClick={handleOpen}>Apply Now</button>
      </div>
  </div>
  );
};

export default JDetailsStd;
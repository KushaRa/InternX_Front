import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import './studentCard.css'
import { Link } from "react-router-dom";

export const CompanyCard = (props) => {
  return (
    <div className="card">
      <div className="part1">
        <div className="company_name">{props.company_name}</div>
        <div className="title">{props.title}</div>
      </div>

      <div className="part2">
        <div className="duration"> <AccessTimeIcon/>{props.duration}</div>
        <div className="type"><WorkIcon />{props.job_type}</div>
        <div className="location"><LocationOnIcon />{props.location}</div>

        <div className="viewbutton">
        <Link to='/'>  
          <button className="apply">View</button>
         </Link>
        </div>
      </div>
    </div>
  );
};
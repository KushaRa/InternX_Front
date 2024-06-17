import React from "react";
import './companyCard.css'

export const CompanyCard = (props) => {
  return (
    <div className="card">
      <div className="part1">
        <div className="company_name">{props.company_name}</div>
        <div className="title">{props.title}</div>
      </div>

      <div className="part2">
        <div className="duration">{props.duration}</div>
        <div className="type">{props.job_type}</div>
        <div className="location">{props.location}</div>

        <div className="viewbutton">
          <button className="apply">View Applicants</button>
        </div>
      </div>
    </div>
  );
};

// {
//   /*id:1,
//     company_name: "Draft PVT LTD",
//     title:"Frontend Developer Internship",
//     duration: "6 months",
//     type:"Remote",
//     locatio:"Colombo",*/
// }

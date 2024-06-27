// src/Pages/ViewCard/ViewCard.jsx
import React from "react";
import "./viewCard.css";
import MainNav from "../../components/MainNav/MainNav";
import JobDetailsContainer from "../../components/JobDetailsContainer/JobDetailsContainer";

export const ViewCard = () => {
  return (
    <div className="VCard">
      <MainNav/>
      <JobDetailsContainer />
    </div>
  );
};

export default ViewCard;

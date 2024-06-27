// src/Pages/ViewCard/ViewCard.jsx
import React from "react";
import "./viewCard.css";
import MainNav from "../../Components/NavBar-Main/MainNavBar";
import JobDetailsContainer from "../../Components/JobDetailsContainer/JobDetailsContainer";

export const ViewCard = () => {
  return (
    <div className="VCard">
      <MainNav/>
      <JobDetailsContainer />
    </div>
  );
};

export default ViewCard;

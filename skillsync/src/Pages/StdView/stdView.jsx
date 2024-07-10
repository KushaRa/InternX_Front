import React from "react";
import "./viewCard.css";
import MainNav from "../../components/MainNav/MainNav";
import JDetailsStd from "../../components/JobDetailsContainerSTD/jDetailsStd";


export const StdViewCard = () =>   
 { 
  return (

    <div className="VCard">
      <MainNav/>
      <JDetailsStd />
    </div>
  );
};

export default StdViewCard;

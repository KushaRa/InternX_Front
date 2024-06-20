import React from "react";
import "./Company.css";
import NavBar from "../../components/NavBar/Lognavbar";
import { Popular } from "../../components/Popular/popular";

export const Company = () => {
  return (
    <div className="Content">
      <NavBar />

      {/*<div className="CDetails"></div>*/}
      <div className="InternCards">
        <Popular />
      </div>

      <div className="NewIntern">
            <button className="NewAdd">ADD NEW</button>
      </div>
    </div>
  );
};

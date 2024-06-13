import React from "react";
import "./Company.css";
import MainNav from "../../components/MainNav/MainNav";
import { Popular } from "../../components/Popular/popular";

export const Company = () => {
  return (
    <div className="Content">
      <MainNav />

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

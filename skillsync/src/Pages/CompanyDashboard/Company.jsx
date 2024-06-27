import React, { useState } from "react";
import "./Company.css";
import MainNav from "../../components/MainNav/MainNav";
import { Popular } from "../../components/Popular/popular";
import NewIntern from "../../components/NewJobAdd/newIntern";

export const Company = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Content">
      <MainNav />
      <NewIntern open={open} handleClose={handleClose} />
      <div className="NewInt">
       
      </div>

      {/*<div className="CDetails"></div>*/}
      <div className="InternCards">
      <button className="NewAdd" onClick={handleOpen}>
          ADD NEW
      </button>
         <Popular />
      </div>
    </div>
  );
};

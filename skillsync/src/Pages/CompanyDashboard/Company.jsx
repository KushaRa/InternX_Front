import React, { useState } from "react";
import "./Company.css";
import MainNav from "../../components/MainNav/MainNav";
import { Popular } from "../../components/Popular/popular";
import NewIntern from "../../components/NewJobAdd/newIntern";

export const Company = () => {
  const [profile, setProfile] = useState({
    name: "",
    companyInformation: "",
    profilePicture: null,
  });

  const [profilePicturePreview, setProfilePicturePreview] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setProfile({ ...profile, profilePicture: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicturePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Content">
      <MainNav />
      <div className="profile-box"
      style={{
        width: "90%",
        height: "200px",
        background: "rgba(0, 180, 216, 0.22)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "10px",
        marginTop:"100px"
      }}>
          <div className="profile-picture-container">
            {profilePicturePreview && (
              <img src={profilePicturePreview} alt="Profile" className="profile-picture" />
            )}
            <label htmlFor="file-upload" className="custom-file-upload">
              Choose File
            </label>
            <input id="file-upload" type="file" onChange={handleFileChange} />
          </div>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
      <div className="container">     

        <div className="company-info"
         style={{display: "flex",
                  padding: "10px",
                  justifycontent: "center", /* Center items horizontally */ 
                  /* Ensure it takes up full width */
                  }}>
          <div className="header">Company Information</div>
          <input
            type="text"
            name="companyInformation"
            value={profile.companyInformation}
            onChange={handleChange}
            placeholder="Add your company information here"
          />
        </div>
            <div calssName="cardNbutton" style={{marginTop:"70px"}}>
        <div className="InternCards">
          <Popular />
        </div>
        <div className="NewIntern">
          <button className="NewAdd" onClick={handleOpen}>
            ADD NEW
          </button>
          <NewIntern open={open} handleClose={handleClose} />
        </div>
        </div>
      </div>
    </div>
  );
};

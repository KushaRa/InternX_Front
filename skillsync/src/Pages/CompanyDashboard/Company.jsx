import React, { useState } from "react";
import "./Company.css";
import MainNav from "../../components/MainNav/MainNav";
import { Popular } from "../../components/Popular/popular";
import NewIntern from "../../components/NewJobAdd/newIntern";

export const Company = () => {
  const [profile, setProfile] = useState({
    companyName: "",
    address: "",
    telephone: "",
    email: "",
    establishedYear: "",
    profilePicture: null
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile updated:", profile);
    // Add logic to submit data to API
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
      <div className="profile-box">
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
        <form className="company-info" onSubmit={handleSubmit}>
          <div className="header">Update Company Profile</div>
          
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={profile.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Company Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Enter company address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Telephone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={profile.telephone}
              onChange={handleChange}
              placeholder="Enter telephone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter company email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="establishedYear">Established Year</label>
            <input
              type="number"
              id="establishedYear"
              name="establishedYear"
              value={profile.establishedYear}
              onChange={handleChange}
              placeholder="Enter established year"
            />
          </div>

          <button className="update-button" type="submit">
            Update Profile
          </button>
        </form>

        <div className="cardNbutton">
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

import React, { useState, useEffect } from 'react';
import Lnavbar from '../../components/NavBar/Lognavbar'; // Import the navbar
import axios from 'axios';
import './StudentProfile.css';

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    resume: '',
    workExperience: '',
    education: '',
    profilePicture: null,
  });

  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  useEffect(() => {
    // Fetch profile data from the backend (use an actual ID)
    axios.get('http://localhost:8000/api/profiles').then((response) => {
      setProfile(response.data);
      setProfilePicturePreview(response.data.profilePicture);
    });
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfile({ ...profile, profilePicture: e.target.files[0] });
    setProfilePicturePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in profile) {
      formData.append(key, profile[key]);
    }

    // Update profile (use an actual ID)
    await axios.post('http://localhost:8000/api/profiles', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-page">
      <Lnavbar />
      <div className="container">
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
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
        </div>
        <div className="personal-info box">
          <div className="header">Personal Information</div>
          <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Add your email" />
          <input type="text" name="mobile" value={profile.mobile} onChange={handleChange} placeholder="Add your mobile number" />
          <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Add your address" />
        </div>
        <div className="work-experience box">
          <div className="header">Work Experience</div>
          <input type="text" name="workExperience" value={profile.workExperience} onChange={handleChange} placeholder="Add your work experience here" />
        </div>
        <div className="education box">
          <div className="header">Education</div>
          <input type="text" name="education" value={profile.education} onChange={handleChange} placeholder="Add your education skills here" />
        </div>
        <div className="resume box">
          <div className="header">My Resume</div>
          <input type="text" name="resume" value={profile.resume} onChange={handleChange} placeholder="Add your resume here" />
        </div>
        <div className="save-button-container">
          <button onClick={handleSubmit} className="save-button">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

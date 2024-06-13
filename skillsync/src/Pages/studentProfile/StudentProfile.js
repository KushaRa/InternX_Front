import React, { useState, useEffect } from 'react';
import Lnavbar from '../../components/NavBar/Lognavbar'; //imort the navbar
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
    <div className="profile-page" >
      <Lnavbar/>
      <div className="profile-container">
        <div className="profile-box">
          <input type="file" onChange={handleFileChange} />
          {profilePicturePreview && <img src={profilePicturePreview} alt="Profile" className="profile-picture" />}
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Name" />
        </div>
        <div className="info-box">
          <h2>Personal Information</h2>
          <input type="email" name="email" value={profile.email} onChange={handleChange} placeholder="Add your email" />
          <input type="text" name="mobile" value={profile.mobile} onChange={handleChange} placeholder="Add your mobile number" />
          <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="Add your address" />
        </div>
        <div className="resume-box">
          <h2>My Resume</h2>
          <input type="text" name="resume" value={profile.resume} onChange={handleChange} placeholder="Add your resume here" />
        </div>
        <div className="work-experience-box">
          <h2>Work Experience</h2>
          <input type="text" name="workExperience" value={profile.workExperience} onChange={handleChange} placeholder="Add your work experience here" />
        </div>
        <div className="education-box">
          <h2>Education</h2>
          <input type="text" name="education" value={profile.education} onChange={handleChange} placeholder="Add your education skills here" />
        </div>
        <button onClick={handleSubmit} className="save-button">Save Changes</button>
      </div>
    </div>
  );
};

export default StudentProfile;


import React from 'react';
import Lnavbar from '../../components/NavBar/Lognavbar'; //imort the navbar
import './SelectUser.css'; //import SelectUser.css file

const SelectUser = () => {
  return (
    <div className="select-user">
      <Lnavbar/>
      <div className="select-user-content">
        <div className="job-seekers">
          <h2>For Job Seekers</h2>
          <p>Find valuable hands-on experience to boost your career.</p>
          <button className="login-button">Login</button>
          <p>Don't have an account? <br></br><span className="signup-link">Sign up</span></p>
        </div>
        <div className="companies">
          <h2>For Companies</h2>
          <p>Post opportunities and find talented interns.</p>
          <button className="login-button">Login</button>
          <p>Don't have an account? <br></br><span className="signup-link">Sign up</span></p>
        </div>
      </div>
    </div>
  );
}

export default SelectUser;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
//import { AboutUs } from "./Pages/AboutUs/AboutUs";
//import { Contact } from "./Pages/Contact/Contact";
//import { Company } from "./Pages/CompanyDashboard/Company";
//import { Login } from "./Pages/logIn/LogIn";
//import SelectUser from "./Pages/selectUser/SelectUser";
import StudentProfile from "./Pages/studentProfile/StudentProfile";

function App() {
  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<StudentProfile />} />
        </Routes>
      </div>
    
  );
}

export default App;

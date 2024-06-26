import React from "react";
import { Home } from "./Pages/Home/Home";
//import { AboutUs } from "./Pages/AboutUs/AboutUs";
//import { Contact } from "./Pages/Contact/Contact";
import { Company } from "./Pages/CompanyDashboard/Company";
//import  Login  from "./Pages/logIn/LogIn";
//import SelectUser from "./Pages/selectUser/SelectUser";
//import StudentProfile from "./Pages/studentProfile/StudentProfile";
//import Signup   from "./Pages/CreateAcc/CreateAcc";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
<div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*<Route path="/internships" element={<Internships/>}></Route>*/}
        
        <Route path="/internships" element={<Company />}></Route>
     
      </Routes>
    </div>
);
}

export default App;
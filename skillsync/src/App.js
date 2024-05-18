import React from 'react';
import { Home } from './Pages/Home/Home';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { Contact } from './Pages/Contact/Contact';
import logIn from './Pages/logIn/logIn';
import { Route,Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <div>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/*<Route path="/internships" element={<Internships/>}></Route>*/}
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
        <Route path="/login" element={<logIn/>}></Route>
        {/*<Route path="/signin" element={<AboutUs/>}></Route>*/}
     </Routes>
      </div>
      );
}

export default App;
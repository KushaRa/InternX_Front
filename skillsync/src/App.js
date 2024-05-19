import { Home } from "./Pages/Home/Home";
import LogIn from "./Pages/logIn/logIn";

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

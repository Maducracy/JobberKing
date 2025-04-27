import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/Home.jsx";
import Signup from "../src/Signup.jsx";
import Login from "../src/Login.jsx";
import Employer from "../src/Employer.jsx";
import JobSeeker from "../src/JobSeeker.jsx";
import Careers from "../src/Careers.jsx";
import HelpCentre from "../src/HelpCentre.jsx";
import Jobs from "./Component/Jobs.jsx";
import Postjob from "./Postjob.jsx";
import Postenterjob from "./Postenterjob.jsx";
import  Upgradecv from "./Upgradecv.jsx" 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/JobSeeker" element={<JobSeeker />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/HelpCentre" element={<HelpCentre />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Employer" element={<Employer />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Postjob" element={<Postjob />}></Route>
          <Route path="/Postenterjob" element={<Postenterjob />}></Route>
          <Route path="/Upgradecv" element={<Upgradecv />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

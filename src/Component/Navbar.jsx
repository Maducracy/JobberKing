import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import briefcase from "../assets/briefcase.png";
import menu from "../assets/menu.png";
import user from "../assets/user.png"; // You can replace this with your profile icon path

function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false); // Mobile menu
  const [open, setOpen] = useState(false); // Desktop dropdown
  const [showJobSeekerMobile, setShowJobSeekerMobile] = useState(false); // Mobile dropdown
  const [authOpen, setAuthOpen] = useState(false); // Auth dropdown for Login/Signup/Profile

  const handleLogin = () => {
    setAuthOpen(false);
    navigate("/Login");
  };

  const handleSignup = () => {
    setAuthOpen(false);
    navigate("/Signup");
  };

  return (
    <>
      <nav className="bg-white p-4 shadow-md sticky top-0 z-40">
        {/* Top Nav */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <h4 className="text-3xl font-extrabold tracking-tight text-gray-900 font-sans">
              <span className="text-indigo-600">Work</span>Naija
            </h4>
            <img className="w-7" src={briefcase} alt="Briefcase" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/Careers" className="relative group">
              Careers
              <span className="absolute left-0 top-full mt-4 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>

            {/* Desktop Dropdown for Job Seeker */}
            <div className="relative group">
              <button onClick={() => setOpen(!open)} className="relative group text-gray-700 focus:outline-none">
                Job Seeker ▾
                <span className="absolute left-0 top-full mt-4 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </button>
              {open && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                  <Link to="/JobSeeker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Job Vacancies
                  </Link>
                  <Link to="/JobSeeker/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                    CV Reviews
                  </Link>
                  <Link to="/JobSeeker/applications" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Job Search Advice
                  </Link>
                  <Link to="/ResumeBuilder" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setOpen(false)}>
                    Resume Builder
                  </Link>
                </div>
              )}
            </div>

            <Link to="/Employer" className="relative group">
              Employer
              <span className="absolute left-0 top-full mt-4 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/HelpCentre" className="relative group">
              Help Centre
              <span className="absolute left-0 top-full mt-4 w-0.5 h-0.5 mt=7 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>

            {/* Dropdown for Auth (Login, Signup, Profile) */}
            <div className="relative group">
              <button onClick={() => setAuthOpen(!authOpen)} className="flex items-center gap-2 text-gray-700 focus:outline-none">
                <img src={user} alt="Profile" className="w-6 h-6 rounded-full" />
                <span>Account ▾</span>
                <span className="absolute left-0 top-full mt-4 w-0 h-0.5"></span>
              </button>
              {authOpen && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                  <Link to="/Login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogin}>
                    Login
                  </Link>
                  <Link to="/Signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleSignup}>
                    Signup
                  </Link>
                  {/* <Link to="/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setAuthOpen(false)}>
                    Profile
                  </Link> */}
                </div>
              )}
            </div>

            {/* Post Job Button */}
            <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={() => navigate("/PostJob")}>
              Post a Job
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button onClick={() => setShow(true)} className="md:hidden focus:outline-none">
            <img src={menu} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${show ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="p-4 flex flex-col gap-6">
          <button className="self-end text-3xl font-bold text-gray-600" onClick={() => setShow(false)}>&times;</button>

          <Link to="/Careers" onClick={() => setShow(false)}>Careers</Link>

          {/* Mobile Dropdown for Job Seeker */}
          <div className="flex flex-col w-full">
            <button className="text-left w-full text-gray-700 font-medium" onClick={() => setShowJobSeekerMobile(!showJobSeekerMobile)}>
              Job Seeker {showJobSeekerMobile ? "▲" : "▼"}
            </button>
            {showJobSeekerMobile && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                <Link to="/JobSeeker" onClick={() => setShow(false)}>Job Vacancies</Link>
                <Link to="/JobSeeker/profile" onClick={() => setShow(false)}>CV Reviews</Link>
                <Link to="/JobSeeker/applications" onClick={() => setShow(false)}>Job Search Advice</Link>
                <Link to="/ResumeBuilder" onClick={() => setShow(false)}>Resume Builder</Link>
              </div>
            )}
          </div>

          <Link to="/Employer" onClick={() => setShow(false)}>Employer</Link>
          <Link to="/HelpCentre" onClick={() => setShow(false)}>Help Centre</Link>

          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition" onClick={handleLogin}>
            Login
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition" onClick={handleSignup}>
            Signup
          </button>
          <button onClick={() => { setShow(false); navigate("/PostJob"); }} className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Post a Job
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

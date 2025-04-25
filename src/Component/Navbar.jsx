// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import briefcase from "../assets/briefcase.png";
// import menu from "../assets/menu.png";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const [show, setShow] = useState(false);
//   const [open, setOpen] = useState(false);

//   const handleLogin = () => {
//     setShow(false); // Close menu (for mobile)
//     navigate("/Login");
//   };

//   const handleSignup = () => {
//     setShow(false);
//     navigate("/Signup");
//   };

//   return (
//     <nav className="bg-white shadow-md p-4">
//       {/* Top Nav */}
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <h4 className="text-3xl font-extrabold tracking-tight text-gray-900 font-sans">
//             <span className="text-indigo-600">Work</span>Naija
//           </h4>
//           <img className="w-7" src={briefcase} alt="Briefcase" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 items-center">
//           <Link to="/Careers">Careers</Link>
//           {/* <Link to="/JobSeeker">Job Seeker</Link> */}
//           <div className="relative">
//       <button
//         onClick={() => setOpen(!open)}
//         className="text-1xl text-gray-700 hover:text-blue-600 focus:outline-none"
//       >
//         Job Seeker ▾
//       </button>

//       {open && (
//         <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 z-50">
//           <Link
//             to="/JobSeeker"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             onClick={() => {
//               setShow(false);
//               setOpen(false);
//             }}
//           >
//             Job Vacancies
//           </Link>
//           <Link
//             to="/JobSeeker/profile"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             onClick={() => {
//               setShow(false);
//               setOpen(false);
//             }}
//           >
//             CV Reviews
//           </Link>
//           <Link
//             to="/JobSeeker/applications"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             onClick={() => {
//               setShow(false);
//               setOpen(false);
//             }}
//           >
//             Job Search Advice
//           </Link>
//         </div>
//       )}
//     </div>
//           <Link to="/Employer">Employer</Link>
//           <Link to="/HelpCentre">Help Centre</Link>
//           <button className="cursor-pointer" onClick={handleLogin}>
//             Login
//           </button>
//           <div className="h-6 w-0.5 bg-black"></div>
//           <button className="cursor-pointer" onClick={handleSignup}>
//             Signup
//           </button>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//             onClick={() => navigate("/PostJob")} // Optional: Add this route
//           >
//             Post a Job
//           </button>
//         </div>

//         {/* Hamburger Icon */}
//       {/* Hamburger Icon */}
// <button
//   onClick={() => setShow(!show)}
//   className="md:hidden focus:outline-none"
// >
//   {show ? (
//     <span className="text-4xl font-bold">&times;</span> 
//   ) : (
//     <img src={menu} alt="Menu" className="w-6 h-6" />
//   )}
// </button>

//       </div>

//       {/* Mobile Menu */}
//       {show && (
//         <div className="flex flex-col gap-4 mt-4 md:hidden">
//           <Link to="/Careers" onClick={() => setShow(false)}>Careers</Link>
//           <Link to="/JobSeeker" onClick={() => setShow(false)}>Job Seeker</Link>
//           <Link to="/Employer" onClick={() => setShow(false)}>Employer</Link>
//           <Link to="/HelpCentre" onClick={() => setShow(false)}>Help Centre</Link>
//           <button onClick={handleLogin}>Login</button>
//           <button onClick={handleSignup}>Signup</button>
//           <button
//             onClick={() => {
//               setShow(false);
//               navigate("/PostJob"); // Optional route
//             }}
//             className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
//           >
//             Post a Job
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import briefcase from "../assets/briefcase.png";
import menu from "../assets/menu.png";

function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false); // Desktop dropdown
  const [showJobSeekerMobile, setShowJobSeekerMobile] = useState(false); // Mobile dropdown

  const handleLogin = () => {
    setShow(false);
    navigate("/Login");
  };

  const handleSignup = () => {
    setShow(false);
    navigate("/Signup");
  };

  return (
    <>
      <nav className="bg-white shadow-md p-4 sticky top-0 z-40">
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
          <div className="hidden md:flex gap-6 items-center">
            <Link to="/Careers">Careers</Link>

            {/* Desktop Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="text-gray-700 focus:outline-none"
              >
                Job Seeker ▾
              </button>
              {open && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-100 z-50">
                  <Link
                    to="/JobSeeker"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Job Vacancies
                  </Link>
                  <Link
                    to="/JobSeeker/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    CV Reviews
                  </Link>
                  <Link
                    to="/JobSeeker/applications"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Job Search Advice
                  </Link>
                  <Link
                    to="/ResumeBuilder"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Resume Builder
                  </Link>
                </div>
              )}
            </div>

            <Link to="/Employer">Employer</Link>
            <Link to="/HelpCentre">Help Centre</Link>

            {/* Login / Signup */}
        
            <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition"
            onClick={handleSignup}
          >
            Signup
          </button>

            {/* Post Job Button */}
            <button
              className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => navigate("/PostJob")}
            >
              Post a Job
            </button>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setShow(true)}
            className="md:hidden focus:outline-none"
          >
            <img src={menu} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          show ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 flex flex-col gap-4">
          <button
            className="self-end text-3xl font-bold text-gray-600"
            onClick={() => setShow(false)}
          >
            &times;
          </button>

          <Link to="/Careers" onClick={() => setShow(false)}>Careers</Link>

          {/* Mobile Dropdown */}
          <div className="flex flex-col">
            <button
              className="text-left w-full text-gray-700 font-medium"
              onClick={() => setShowJobSeekerMobile(!showJobSeekerMobile)}
            >
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

          <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100 transition"
            onClick={handleSignup}
          >
            Signup
          </button>
          <button
            onClick={() => {
              setShow(false);
              navigate("/PostJob");
            }}
            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Post a Job
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;


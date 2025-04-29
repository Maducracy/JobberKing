import React from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Man from "../assets/Man.png";
import laptop from "../assets/laptop.jpeg";
import cv from "../assets/cv.jpeg";
import { useApistore } from "../Zustand";
import { motion } from "framer-motion"

function Hero() {
  const { fetchData } = useApistore();
  const navigate = useNavigate();

  const handleUpgradeCV = () => {
    navigate("/upgradecv");
  };

  // const handleFetchJobs = () => {
  //   fetchData();
  // };

  const handleExplorePartnerships = () => {
    navigate("/partnerships");
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
<div className="relative w-full min-h-[30vh] bg-gradient-to-r from-indigo-100 via-white to-purple-100 animate-gradient-x flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      
      {/* Animated Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-200 via-white to-purple-200 opacity-30 animate-pulse-slow"></div>

      {/* Main Content */}
      <motion.div 
        className="z-20 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-5xl md:text-8xl font-bold text-gray-800 mb-4 leading-tight">
          
          Explore <span className="text-indigo-600">Your Next Opportunity  🚀</span>
        </h2>
        <h1 className="text-lg md:text-2xl text-gray-700 max-w-2xl mx-auto">
          <Typewriter
            words={[
              "Your journey begins today.",
              "Find the career you deserve.",
              "Upgrade your future with us."
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>
      </motion.div>

      {/* Animated Man Image */}
      <motion.img
        src={Man}
        alt="Man working"
        className="w-40 md:w-60 z-20 my-8 drop-shadow-xl"
        initial={{ scale: 0.9 }}
        animate={{ y: [0, -15, 0], scale: [0.9, 1, 0.9] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
      />

      {/* Call-To-Action Button */}
  

      {/* Wavy Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 leading-none">
        <svg
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path d="M0,30 C150,70 350,0 500,30 L500,0 L0,0 Z" fill="#f3f4f6" />
        </svg>
      </div>
    </div>

      {/* Career Advancement Section */}
      <div className="bg-[#0d1624] text-white py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Advance Your Career
          </h1>
          <p className="text-lg mb-6">
            Create a free account, complete your profile, and get matched with your dream job in no time.
          </p>
          <div className="flex gap-6 flex-wrap justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white hover:bg-white hover:text-[#0d1624] px-6 py-3 rounded-md transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Laptop Image */}
        <div className="flex-1 flex justify-center">
          <img src={laptop} alt="Laptop" className="w-72 md:w-80 object-cover rounded-lg" />
        </div>
      </div>

      {/* CV Upgrade Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-100 py-16 px-6">
        {/* CV Image */}
        <div className="flex-1 flex justify-center gap-5 mb-6 md:mb-0">
          <img src={cv} alt="CV Upgrade" className="w-60 h-60 object-cover rounded-lg" />
        </div>

        {/* CV Text and Button */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Level Up Your CV?
          </h2>
          <p className="text-gray-700 mb-6">
            Collaborate with a professional CV writer to showcase your skills and achievements in the best light.
          </p>
          <button onClick={handleUpgradeCV} className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-all duration-300">
            Upgrade My CV
          </button>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="bg-[#f3f4f6] py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Empowering Careers Through Partnerships
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We are committed to fostering collaboration between private companies, government agencies, and job seekers to create more opportunities.
            </p>
            <div className="flex gap-6 flex-wrap justify-center md:justify-start">
              <button onClick={handleExplorePartnerships} className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-all duration-300">
                Explore Partnerships
              </button>
            </div>
          </div>

          {/* Text Section for Additional Information */}
          <div className="flex-1 text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Join Us in Building a Better Job Market
            </h3>
            <p className="text-md text-gray-700 mb-6">
              By working together, we can shape a job market that provides inclusive and diverse opportunities to every individual. Whether you're a startup or an established organization, we can help you connect with talent.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}

export default Hero;


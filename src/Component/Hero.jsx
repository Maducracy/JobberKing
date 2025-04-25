import React from "react";
import { useApistore } from "../Zustand";
import { Typewriter } from "react-simple-typewriter";
import Man from "../assets/Man.png";
import laptop from "../assets/laptop.jpeg";
import cv from "../assets/cv.jpeg";

function Hero() {
  const { output, fetchData } = useApistore();

  const handleFetchJobs = () => {
    fetchData();
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Top Section */}
      <div className="relative w-full min-h-[50vh] bg-gradient-to-r from-indigo-100 via-white to-purple-100 flex flex-col items-center justify-center px-4 text-center">
        {/* Typewriter Content */}
        <div className="z-10 animate-fade-in-up mt-14">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Explore <span className="text-indigo-600">Your Next Opportunity</span>
          </h2>
          <h1 className="text-md md:text-2xl text-gray-700">
            <Typewriter
              words={['Your journey to', 'finding the perfect.', 'job starts here!']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>

        {/* Animated Man Image */}
        <img
          src={Man}
          alt="Man at work"
          className="w-40 md:w-56 animate-bounce-slow z-10 my-6"
        />

        {/* Wavy Bottom SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 leading-none">
          <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-20">
            <path d="M0,30 C150,70 350,0 500,30 L500,0 L0,0 Z" fill="#f3f4f6" />
          </svg>
        </div>
      </div>

      {/* Career Advancement Section */}
      <div className="bg-[#0d1624] text-white py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Advance your career
          </h1>
          <p className="text-lg mb-6">
            Create a free account, complete your profile,
            <br className="hidden md:block" />
            and get matched with your dream job.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
              Get Started
            </button>
            <button className="border border-white hover:bg-white hover:text-[#0d1624] px-6 py-3 rounded">
              Learn More
            </button>
          </div>
        </div>

        {/* Laptop Image */}
        <div className="flex-1 flex justify-center">
          <img src={laptop} alt="Laptop" className="w-72 md:w-80 object-cover rounded-lg" />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0d1624] text-white py-8 px-4 flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white text-[#0d1624] rounded-full flex items-center justify-center text-2xl mb-2">
            👀
          </div>
          <p className="text-center">Get seen by employers</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white text-[#0d1624] rounded-full flex items-center justify-center text-2xl mb-2">
            🧠
          </div>
          <p className="text-center">Access the best jobs for you</p>
        </div>
      </div>

      {/* CV Upgrade Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-gray-100 py-12 px-6">
        {/* CV Image */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img src={cv} alt="CV Upgrade" className="w-60 h-60 object-cover rounded-lg" />
        </div>

        {/* CV Text and Button */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Ready to level up your CV game?
          </h2>
          <p className="text-gray-700 mb-6">
            Collaborate with a professional CV writer to highlight your skills and achievements like never before.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded">
            Upgrade My CV
          </button>
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

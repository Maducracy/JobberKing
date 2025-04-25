import React from "react";
import { useApistore } from "../Zustand";
import { Typewriter } from 'react-simple-typewriter';
import Man from "../assets/Man.png";

function Hero() {
  const data = useApistore();
  const { output, fetchData } = data;

  const handleFetchJobs = () => {
    fetchData(); 
  };

  return (
    <div className="relative w-full min-h-[45vh] bg-gradient-to-r from-indigo-100 via-white to-purple-100 overflow-hidden flex flex-col items-center justify-center">
      {/* Content */}
      <div className="relative z-10 text-center animate-fade-in-up px-4 mb-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 mt-14">
          Explore <span className="text-indigo-600">Your Next Opportunity</span>
        </h2>

        <h1 className="text-lg md:text-2xl text-gray-700">
          <Typewriter
            words={['Your journey to', 'finding the perfect.', 'job starts here!']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>

      {/* Centered Image */}
      <img
        src={Man}
        alt="Man at work"
        className="w-40 md:w-100 animate-bounce-slow z-10"
      />

      {/* Wavy Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,30 C150,70 350,0 500,30 L500,00 L0,0 Z" fill="#f3f4f6" />
        </svg>
      </div>

      {/* Animations */}
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

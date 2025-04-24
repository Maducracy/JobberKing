import React from "react";
import { useApistore } from "../Zustand";
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  const data = useApistore();
  const { output, fetchData } = data;
  const handleFetchJobs = () => {
    fetchData(); 
  };
  return (
    <div className="flex flex-col items-center justify-center py-10 mt-12">
    
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900">
          Explore {" "}
          <span className="text-indigo-600">Your Next Opportunity</span>
        </h2>

        {/* <p className="text-gray-600 mt-2">
          Your journey to finding the perfect job starts here.
        </p> */}
            <h1 className="text-2xl md:text-xl font-bold text-gray-900 mt-4">
      <Typewriter
        words={[ 'Your journey to', 'finding the perfect.', 'job starts here!']}
        loop={true}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
      </div>
    </div>
  );
}

export default Hero;

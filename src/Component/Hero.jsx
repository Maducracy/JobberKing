import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaBriefcase, FaChartLine, FaUsers } from "react-icons/fa";
import JOB from "../assets/JOB.mp4";

function Hero() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const handleUpgradeCV = () => navigate("/upgradecv");
  const handleExplorePartnerships = () => navigate("/Partnership");
  

  return (
    <section className="relative w-full h-[110vh] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={JOB} type="video/mp4" />
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [Math.random() * window.innerHeight, -20],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center 
                min-h-[20vh] sm:min-h-[30vh] md:min-h-screen 
                px-2 py-1 sm:py-12  
                text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" bg-white/3 border border-white/20 rounded-2xl p-6 md:p-10 max-w-2xl shadow-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Discover <span className="text-blue-500">Endless Career Paths</span>
          </h1>
          <h2 className="text-lg md:text-2xl text-gray-200 mb-6">
            <Typewriter
              words={[
                "AI-matched job opportunities.",
                "CV upgrades with expert support.",
                "Your future starts here.",
              ]}
              loop
              cursor
              cursorBlinking
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              onClick={handleUpgradeCV}
              className="bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_20px_#3b82f6] text-white px-6 py-3 rounded-md shadow-lg transition-all duration-300"
            >
              Upgrade My CV
            </button>
            <button
              onClick={handleExplorePartnerships}
              className="border border-white text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_white] px-6 py-3 rounded-md transition-all duration-300"
            >
              Explore Partnerships
            </button>
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-gray-300 hover:text-white underline underline-offset-4"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Learn More Section */}
          {showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-sm text-gray-300 space-y-2 text-left"
            >
              <p>🎯 Personalized coaching from experts</p>
              <p>🔔 Get interview alerts in real-time</p>
              <p>📊 Track your job application journey</p>
              <p>🌐 Join a career-driven community</p>
            </motion.div>
          )}

          {/* Analysis Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200"
          >
            {/* Stat 1 */}
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 shadow-md hover:scale-105 transition">
              <FaBriefcase className="text-blue-400 text-3xl " />
              <h3 className="text-lg font-semibold">4,200+</h3>
              <p className="text-sm">Active Job Listings</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 shadow-md hover:scale-105 transition ">
              <FaUsers className="text-green-400 text-3xl " />
              <h3 className="text-lg font-semibold">12k+</h3>
              <p className="text-sm">Successful Placements</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 shadow-md hover:scale-105 transition">
              <FaChartLine className="text-yellow-400 text-3xl " />
              <h3 className="text-lg font-semibold">89%</h3>
              <p className="text-sm">CV Upgrade Success Rate</p>
            </div>
          </motion.div>
        </motion.div>

       
      </div>
    </section>
  );
}

export default Hero;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import JOB from "../assets/JOB.mp4";
// import JOBPoster from "../assets/job-poster.jpg"; // fallback image

// function Hero() {
//   const navigate = useNavigate();
//   const [showMore, setShowMore] = useState(false);
//   const [voiceOn, setVoiceOn] = useState(false);

//   const handleUpgradeCV = () => navigate("/upgradecv");
//   const handleExplorePartnerships = () => navigate("/partnerships");

//   // Voice Assistant
//   useEffect(() => {
//     if (voiceOn) {
//       const utterance = new SpeechSynthesisUtterance("Welcome to your next career destination.");
//       utterance.lang = "en-US";
//       speechSynthesis.speak(utterance);
//     }
//   }, [voiceOn]);

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         poster={JOBPoster}
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src={JOB} type="video/mp4" />
//         <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//         Your browser does not support HTML5 video.
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
//         {/* Language Selector + Voice Toggle */}
//         <div className="absolute top-6 right-6 flex gap-3">
//           <select className="bg-black/40 border border-white rounded px-2 py-1 text-sm">
//             <option>EN</option>
//             <option>FR</option>
//             <option>ES</option>
//           </select>
//           <button
//             onClick={() => setVoiceOn(!voiceOn)}
//             className={`bg-black/40 border rounded px-2 py-1 text-sm ${voiceOn ? "border-green-400" : "border-white"}`}
//           >
//             {voiceOn ? "🔊 Voice On" : "🔈 Voice Off"}
//           </button>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 md:p-10 max-w-2xl"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//             🚀 <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Launch Your Career</span> Today
//           </h1>

//           <h2 className="text-lg md:text-2xl text-gray-200 mb-6">
//             <Typewriter
//               words={[
//                 "Join 10,000+ job seekers.",
//                 "Instant job matching with AI.",
//                 "CV tips that land interviews.",
//               ]}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={55}
//               deleteSpeed={40}
//               delaySpeed={1500}
//             />
//           </h2>

//           {/* Animated stats */}
//           <div className="flex justify-center gap-10 text-sm text-gray-300 mb-4">
//             <div>
//               <CountUp end={12000} duration={2.5} />+ Profiles Upgraded
//             </div>
//             <div>
//               <CountUp end={500} duration={2.5} />+ Partnerships Formed
//             </div>
//             <div>
//               <CountUp end={1000} duration={2.5} />+ Active Listings
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mt-4">
//             <button
//               onClick={handleUpgradeCV}
//               className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-6 py-3 rounded-md shadow-xl transition"
//             >
//               Upgrade My CV
//             </button>
//             <button
//               onClick={handleExplorePartnerships}
//               className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-md"
//             >
//               Explore Partnerships
//             </button>
//             <button
//               onClick={() => setShowMore(!showMore)}
//               className="text-sm underline text-gray-300 hover:text-white"
//             >
//               {showMore ? "Show Less" : "Learn More"}
//             </button>
//           </div>

//           {/* Expandable features */}
//           {showMore && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="mt-6 text-sm text-left text-gray-300 space-y-2"
//             >
//               <p>🎓 Career mentor matching</p>
//               <p>🗓 Interview scheduling tools</p>
//               <p>🛠 Skill growth recommendations</p>
//               <p>📥 Export PDF-ready CV templates</p>
//             </motion.div>
//           )}

//           {/* Search bar */}
//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="🔍 Search for 'Remote frontend jobs'..."
//               className="w-full md:w-[80%] p-3 rounded-md bg-white/20 text-white placeholder:text-gray-300 border border-white/30"
//             />
//           </div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-6 animate-bounce text-white">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//             <path d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


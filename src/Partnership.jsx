import React from "react";
import { FaBuilding, FaUsers, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion"; // for animation

const Partnership = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Partner with <span className="text-blue-600">WorkNaija</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Whether you're in tech, finance, logistics, FMCG, energy, or public service — we welcome impactful partnerships to build the future of work and opportunity across Nigeria.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
          {[{
            icon: <FaBuilding className="text-4xl text-blue-500 mb-4" />,
            title: "Corporate Partnerships",
            desc: "Work with us to design programs that align with your CSR goals, support employment, and upskill Nigeria’s talent."
          },
          {
            icon: <FaUsers className="text-4xl text-green-500 mb-4" />,
            title: "Talent Pipeline",
            desc: "Get access to pre-vetted young professionals in tech, finance, customer service, logistics, and more."
          },
          {
            icon: <FaGlobe className="text-4xl text-yellow-500 mb-4" />,
            title: "National & Global Reach",
            desc: "Amplify your brand while creating real impact through employment and skills initiatives across Nigeria."
          }].map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-md transition duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="mailto:partners@worknaija.com"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Become a Partner
        </a>

        {/* Partner Logos Slider */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Trusted by Leading Brands</h3>
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-80">
            {["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"].map((logo, i) => (
              <img key={i} src={logo} alt={`partner-${i}`} className="h-12 w-auto object-contain" />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">What Our Partners Say</h3>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                “WorkNaija helped us connect with amazing young professionals. The process was smooth, and the impact is clear.”
              </p>
              <p className="font-semibold text-gray-800">— HR Director, TechCo Ltd.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                “We’ve built a long-term CSR program with WorkNaija. It’s fulfilling to contribute to youth development.”
              </p>
              <p className="font-semibold text-gray-800">— CSR Manager, FinBank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;

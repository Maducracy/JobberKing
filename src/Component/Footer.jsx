import React from "react";
import {
  FaQuoteLeft,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { motion } from "framer-motion";

/* ------------------ TESTIMONIAL DATA ------------------ */
const testimonials = [
  {
    text: "Work Naija helped me land my first remote job. The platform is easy to use and very supportive.",
    name: "Chinonso E.",
    role: "Frontend Developer",
  },
  {
    text: "I love the community feature. It feels like Discord but more focused on Web3 jobs and networking.",
    name: "Amara O.",
    role: "Blockchain Enthusiast",
  },
  {
    text: "The learning hub with certifications is amazing. It keeps me motivated and also boosts my portfolio.",
    name: "David M.",
    role: "Smart Contract Developer",
  },
  {
    text: "I joined Work Naija a month ago, and I’ve already connected with mentors and secured freelance gigs.",
    name: "Fatima S.",
    role: "Web3 Designer",
  },
];

/* ------------------ JOB LIST DATA ------------------ */
const jobs = [
  { title: "Frontend Developer", company: "TechNova", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Backend Engineer", company: "InnovaSoft", location: "Remote", type: "Contract" },
  { title: "Blockchain Developer", company: "ChainLabs", location: "Abuja, Nigeria", type: "Full-time" },
  { title: "UI/UX Designer", company: "DesignHub", location: "Lagos, Nigeria", type: "Part-time" },
  { title: "Product Manager", company: "FinFlow", location: "Remote", type: "Full-time" },
  { title: "Smart Contract Engineer", company: "Web3 Africa", location: "Kenya", type: "Full-time" },
  { title: "Mobile App Developer", company: "SoftNet", location: "Accra, Ghana", type: "Full-time" },
  { title: "Community Manager", company: "CryptoVerse", location: "Remote", type: "Contract" },
  { title: "QA Tester", company: "BuildIt", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Data Analyst", company: "InsightPro", location: "Remote", type: "Full-time" },
  { title: "Cloud Engineer", company: "CloudNet", location: "Abuja, Nigeria", type: "Full-time" },
  { title: "DevOps Engineer", company: "DeployX", location: "Remote", type: "Full-time" },
  { title: "AI Engineer", company: "AIWorks", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Cybersecurity Analyst", company: "SecureNet", location: "Remote", type: "Contract" },
  { title: "Project Coordinator", company: "BuildSmart", location: "Abuja, Nigeria", type: "Full-time" },
  { title: "Customer Success Officer", company: "PayLink", location: "Lagos, Nigeria", type: "Full-time" },
  { title: "Fullstack Developer", company: "CodeLabs", location: "Remote", type: "Full-time" },
  { title: "Marketing Specialist", company: "AdPro", location: "Lagos, Nigeria", type: "Part-time" },
  { title: "Technical Writer", company: "DocuTech", location: "Remote", type: "Contract" },
  { title: "Sales Executive", company: "GrowthPoint", location: "Port Harcourt, Nigeria", type: "Full-time" },
];

/* ------------------ ANIMATIONS ------------------ */
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ------------------ MAIN COMPONENT ------------------ */
const WorkNaijaPage = () => {
  return (
    <>
      {/* Job List Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
          >
            Latest Job Openings
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaBriefcase className="text-blue-500 text-xl" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {job.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">{job.company}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-gray-400" />
                    {job.location}
                  </span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs">
                    {job.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            What People Say
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <FaQuoteLeft className="text-blue-500 text-3xl mb-4 mx-auto animate-pulse" />
                <p className="text-gray-600 mb-4">{item.text}</p>
                <h4 className="font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20 mt-16"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {/* About */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <h3 className="text-white font-bold text-lg mb-4">Work Naija</h3>
            <p className="text-sm leading-relaxed">
              Empowering developers and professionals with Web3 jobs, learning
              resources, and community-driven growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Jobs", "Community", "Learning Hub", "Contact"].map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#3B82F6" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#">{link}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <h3 className="text-white font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for updates and job alerts.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 px-4 py-2 rounded-r-md text-white hover:bg-blue-600"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>

          {/* Social + App Icons */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get Our App</h3>
            <div className="flex gap-4 mb-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
              >
                <SiGoogleplay className="text-xl" />
                <span>Google Play</span>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md hover:bg-gray-700"
              >
                <SiAppstore className="text-xl" />
                <span>App Store</span>
              </motion.a>
            </div>

            <h3 className="text-white font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.3, rotate: 5, color: "#3B82F6" }}
                    className="hover:text-blue-400"
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              )}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6"
        >
          © {new Date().getFullYear()} Work Naija. All Rights Reserved.
        </motion.div>
      </motion.footer>
    </>
  );
};

export default WorkNaijaPage;

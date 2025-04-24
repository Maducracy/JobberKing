
import React, { useState } from "react";
import { MapPin } from "lucide-react";

function HelpCentre() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the 'Signup' button and fill in your details to get started.",
    },
    {
      question: "How do I apply for a job?",
      answer: "Browse jobs as a job seeker and click 'Apply' on any job you like.",
    },
    {
      question: "How do I post a job as an employer?",
      answer: "Log in as an employer and go to your dashboard to post a job.",
    },
    {
      question: "I forgot my password, what do I do?",
      answer: "Click on 'Forgot Password' on the login page to reset it.",
    },
    {
      question: "Can I apply to multiple jobs at once?",
      answer: "Yes, you can apply to as many jobs as you qualify for.",
    },
    {
      question: "How do I edit my profile?",
      answer: "Go to your dashboard, click 'Profile', and then 'Edit'.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFaq = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl  p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Help Centre
        </h2>

        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-8 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <button
                  className="flex justify-between w-full font-semibold text-left text-gray-800"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No matching questions found.</p>
          )}
        </div>

        {/* Nigerian Office Locations */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Our Offices in Nigeria</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Abuja, FCT",
              "Lagos Island, Lagos",
              "Kano Central, Kano",
              "Port Harcourt, Rivers",
              "Enugu North, Enugu",
              "Ibadan, Oyo",
              "Benin City, Edo",
            ].map((location, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-5 h-5 text-indigo-500" />
                {location}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Still need help?</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HelpCentre;


import React from "react";
import worknaija from "./assets/worknaija.jpg";
import engineerblack from "./assets/engineerblack.jpeg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RecruitmentPortal() {
  const navigate = useNavigate();
  const handlePostJob = () => {
    navigate("/Postenterjob"); // Navigate to the Post a Job page
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
   

      {/* Hero Section - Post a Job */}
      <section className="flex flex-col-reverse md:flex-row justify-between items-center p-6">
        <div className="text-center md:text-left space-y-4 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Let's make your next great hire. Fast.
          </h1>
          <button onClick={handlePostJob} className="bg-blue-800 text-white text-2xl px-6 py-4 mt-10 rounded-md hover:bg-blue-600 transition duration-300">
            Post a Job
          </button>
        </div>

        <div className="mb-6 md:mb-0 md:w-1/2">
          <img src={worknaija} alt="WorkNaija" className="max-w-50% h-50% rounded-4xl" />
        </div>
      </section>

      {/* Grid: Onboarding Steps */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
          <p className="text-gray-600">
            Create your employer account to access hiring tools and manage your listings.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Build Your Job</h3>
          <p className="text-gray-600">
            Customize your job post to attract the right candidates effectively.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Create a Job</h3>
          <p className="text-gray-600">
            Easily publish your job listings and reach thousands of job seekers instantly.
          </p>
        </div>
      </section>

      {/* Grid: Features */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Post Jobs Easily</h3>
          <p className="text-gray-600">
            Reach millions of job seekers quickly and effectively.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Applications</h3>
          <p className="text-gray-600">
            Track, review, and communicate with applicants in one place.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Find the Best Fit</h3>
          <p className="text-gray-600">
            Advanced filtering tools to help you find the ideal candidate.
          </p>
        </div>
      </section>
      <section className="bg-blue-900 text-white py-16">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
    {/* Text Section */}
    <div className="md:w-1/2 space-y-4">
      <blockquote className="text-2xl font-semibold leading-relaxed italic">
        "I've used other websites in the past for hiring; nothing has ever been this easy, this simple, and this effective."
      </blockquote>
      <p className="text-lg mt-2">– Bola</p>
    </div>

    {/* Image Section */}
    <div className="md:w-1/2">
      <img src={engineerblack} alt="Engineer" className="w-full h-auto rounded-xl shadow-lg" />
    </div>
  </div>
</section>










      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} WorkNaija All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

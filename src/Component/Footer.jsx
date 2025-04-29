import React from "react";

import {  FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import getit2 from "../assets/getit2.png";

function Footer() {
  return (
    
    <footer className="bg-white text-gray-700 text-sm mt-12">
      <section class="p-8  min-h-screen">
  <div class="max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Explore Jobs by Function</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Accounting, Auditing & Finance</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Admin & Office</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Creative & Design</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Building & Architecture</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Consulting & Strategy</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Customer Service & Support</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Engineering & Technology</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Farming & Agriculture</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Food Services & Catering</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Hospitality & Leisure</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Software & Data</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Legal Services</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Marketing & Communications</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Medical & Pharmaceutical</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Product & Project Management</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Estate Agents & Property Management</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Quality Control & Assurance</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Human Resources</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Management & Business Development</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Community & Social Services</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Supply Chain & Procurement</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Sales</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Research, Teaching & Training</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Trades & Services</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Driver & Transport Services</div>
      <div class="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">Health & Safety</div>
    </div>
  </div>
</section>

      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><a href="#jobs" className="hover:underline">Browse jobs</a></li>
            <li><a href="#companies" className="hover:underline">Browse companies</a></li>
            <li><a href="#countries" className="hover:underline">Countries</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#help" className="hover:underline">Help</a></li>
            {/* <li><a href="#esg" className="hover:underline">ESG at Indeed</a></li> */}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#privacy" className="hover:underline">Privacy Center and Ad Choices</a></li>
            <li><a href="#terms" className="hover:underline">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Accessibility</h4>
          <ul className="space-y-1">
            <li><a href="#accessibility" className="hover:underline">Accessibility at WorkNaija</a></li>
            <li><a href="#language" className="hover:underline">Language: English (EN)</a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-6 items-center">
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 border border-black hover:text-blue-400 transition">
    <FaXTwitter className="text-lg" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 border border-black hover:text-black-600 transition">
    <AiFillLinkedin className="text-lg" />
  </a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 border border-black hover:text--300 transition">
    <FiGithub className="text-lg" />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 border border-black hover:text-black-500 transition">
    <FaFacebookF className="text-lg" />
  </a>
  <a
  href="https://play.google.com/store"
  target="_blank"
  rel="noopener noreferrer"
>
  <img className="w-30 h-auto" src={getit2} alt="Get it on Play Store" />
</a>


</div>


      <div className="border-gray-300 text-center py-4 text-4x1">
        &copy; 2025 WorkNaija All Right Reserved
      </div>
     
    </footer>
  );
}

export default Footer;

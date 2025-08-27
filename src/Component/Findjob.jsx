import React, { useEffect, useState } from "react";
import { useApistore } from "../Zustand";
import {
  FaEllipsisV,
  FaBriefcase,
  FaBookmark,
  FaFilter,
  FaTimes,
  FaMapMarkerAlt,
  FaDollarSign,
  FaShareAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const JobList = () => {
  const { output, fetchData, loading, error } = useApistore();
  const [savedJobs, setSavedJobs] = useState([]);
  const [dropdownJob, setDropdownJob] = useState(null);

  // Mobile drawers
  const [showFilters, setShowFilters] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Sort jobs by posted date (newest first)
  const jobs = (output?.jobs || [])
    .map((job) => ({
      ...job,
      postedDate: job.postedDate || new Date().toISOString(), // fallback if API has no date
    }))
    .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));

  // Check if job is new (last 3 days)
  const isNewJob = (date) => {
    const posted = new Date(date);
    const now = new Date();
    const diffDays = (now - posted) / (1000 * 60 * 60 * 24);
    return diffDays <= 3;
  };

  // Split into New vs Older jobs
  const newJobs = jobs.filter((job) => isNewJob(job.postedDate));
  const oldJobs = jobs.filter((job) => !isNewJob(job.postedDate));

  const handleSaveJob = (job) => {
    if (!savedJobs.some((saved) => saved.id === job.id)) {
      const updated = [...savedJobs, job];
      setSavedJobs(updated);
      localStorage.setItem("savedJobs", JSON.stringify(updated));
    } else {
      const updated = savedJobs.filter((saved) => saved.id !== job.id);
      setSavedJobs(updated);
      localStorage.setItem("savedJobs", JSON.stringify(updated));
    }
  };

  const handleReportJob = (job) => {
    alert(`Reporting job: ${job.jobTitle}`);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(saved);
  }, []);

  return (
    <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-6">
      {/* Mobile header */}
      <div className="flex lg:hidden gap-3 mb-4">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          <FaFilter /> Filters
        </button>
        <button
          onClick={() => setShowSaved(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          <FaBookmark /> Saved Jobs ({savedJobs.length})
        </button>
      </div>

      {/* Sidebar Filters */}
      <aside className="hidden lg:block w-64 bg-white border rounded p-4 h-fit shadow">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <FaFilter className="text-blue-500" /> Filters
        </h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Job Type</p>
            <label className="block"><input type="checkbox" /> Full-time</label>
            <label className="block"><input type="checkbox" /> Part-time</label>
            <label className="block"><input type="checkbox" /> Remote</label>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <input
              type="text"
              placeholder="Search city..."
              className="w-full border rounded px-2 py-1 text-sm"
            />
          </div>
          <div>
            <p className="font-semibold">Skills</p>
            <input
              type="text"
              placeholder="e.g. React, Node"
              className="w-full border rounded px-2 py-1 text-sm"
            />
          </div>
          <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
            Apply Filters
          </button>
        </div>
      </aside>

      {/* Job List */}
      <div className="p-4 rounded flex-1 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FaBriefcase className="text-blue-600" />
          Jobs for you
        </h1>

        {loading && (
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 animate-pulse rounded"></div>
            ))}
          </div>
        )}
        {error && <p className="text-red-500">Error fetching jobs.</p>}

        {/* New Jobs Section */}
        {newJobs.length > 0 && (
          <>
            <h3 className="text-lg font-bold mb-2 text-green-600">✨ New Jobs</h3>
            <ul className="space-y-4">
              {newJobs.map((job) => {
                const isSaved = savedJobs.some((saved) => saved.id === job.id);
                return (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSaved={isSaved}
                    dropdownJob={dropdownJob}
                    setDropdownJob={setDropdownJob}
                    handleSaveJob={handleSaveJob}
                    handleReportJob={handleReportJob}
                    isNew={true}
                  />
                );
              })}
            </ul>
          </>
        )}

        {/* Older Jobs Section */}
        {oldJobs.length > 0 && (
          <>
            <h3 className="text-lg font-bold mt-6 mb-2 text-gray-700">📌 Older Jobs</h3>
            <ul className="space-y-4">
              {oldJobs.map((job) => {
                const isSaved = savedJobs.some((saved) => saved.id === job.id);
                return (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSaved={isSaved}
                    dropdownJob={dropdownJob}
                    setDropdownJob={setDropdownJob}
                    handleSaveJob={handleSaveJob}
                    handleReportJob={handleReportJob}
                  />
                );
              })}
            </ul>
          </>
        )}
      </div>

      {/* Saved Jobs Sidebar */}
      <aside className="hidden lg:block w-72 bg-white border rounded p-4 shadow h-fit">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <FaBookmark className="text-blue-500" /> Saved Jobs
        </h2>
        {savedJobs.length === 0 ? (
          <p className="text-sm text-gray-500">No jobs saved yet.</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {savedJobs.map((job) => (
              <li
                key={job.id}
                className="border-b pb-2 mb-2 flex justify-between items-center"
              >
                <span>{job.jobTitle}</span>
                <button
                  onClick={() => handleSaveJob(job)}
                  className="text-red-500 text-xs"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
};

// 🔹 Job Card Component
const JobCard = ({
  job,
  isSaved,
  dropdownJob,
  setDropdownJob,
  handleSaveJob,
  handleReportJob,
  isNew,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`p-4 border rounded-lg shadow-sm flex justify-between items-start gap-4 transition hover:shadow-md ${
        isSaved ? "bg-green-50 border-green-300" : "bg-white"
      }`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-600">
            {job.companyName?.[0]}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">{job.jobTitle}</h2>
              {isNew && (
                <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                  NEW
                </span>
              )}
            </div>
            <p className="text-gray-600">{job.companyName}</p>
          </div>
        </div>

        <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600">
          {job.location && (
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> {job.location}
            </span>
          )}
          {job.salary && (
            <span className="flex items-center gap-1">
              <FaDollarSign /> {job.salary}
            </span>
          )}
          <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
            {job.jobType || "Full-time"}
          </span>
        </div>

        {job.skills && (
          <div className="mt-2 flex gap-2 flex-wrap">
            {job.skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <a
          href={job.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 mt-2 inline-block font-medium"
        >
          View Job →
        </a>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <FaEllipsisV
          size={18}
          onClick={() =>
            setDropdownJob(dropdownJob?.id === job.id ? null : job)
          }
          className="cursor-pointer mt-1"
        />

        <AnimatePresence>
          {dropdownJob?.id === job.id && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-6 right-0 bg-white shadow-md p-3 rounded w-44 z-10"
            >
              <ul className="space-y-2 text-sm">
                <li
                  className="cursor-pointer text-blue-600 hover:underline"
                  onClick={() => handleSaveJob(job)}
                >
                  {isSaved ? "Unsave Job" : "Save for Later"}
                </li>
                <li
                  className="cursor-pointer text-red-500 hover:underline"
                  onClick={() => handleReportJob(job)}
                >
                  Report Job
                </li>
                <li className="cursor-pointer text-gray-700 hover:underline flex items-center gap-1">
                  <FaShareAlt /> Share
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.li>
  );
};

export default JobList;

import React, { useEffect, useState, useRef } from 'react';
import { useApistore } from '../Zustand';
import { FaEllipsisV } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const JobList = () => {
  const { output, fetchData, loading, error } = useApistore();
  const [savedJobs, setSavedJobs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownJob, setDropdownJob] = useState(null);
  const dropdownRef = useRef();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const jobs = output?.jobs || [];

  const handleSaveJob = (job) => {
    if (!savedJobs.some(saved => saved.id === job.id)) {
      const updated = [...savedJobs, job];
      setSavedJobs(updated);
      localStorage.setItem('savedJobs', JSON.stringify(updated));
      console.log('Job saved for later:', job);
    }
  };

  const handleReportJob = (job) => {
    alert(`Reporting job: ${job.jobTitle}`);
  };

  const handleDropdownToggle = (job) => {
    if (dropdownJob?.id === job.id) {
      setDropdownOpen(!dropdownOpen);
    } else {
      setDropdownOpen(true);
      setDropdownJob(job);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load saved jobs from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedJobs')) || [];
    setSavedJobs(saved);
  }, []);

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      <div className="bg-white p-4 rounded flex-1 shadow-md">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
  <FaBriefcase className="text-blue-600" />
  Jobs for you
</h1>

        {loading && <p className="text-blue-500">Loading jobs...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <ul className="space-y-4">
          {jobs.map((job) => {
            const isSaved = savedJobs.some((saved) => saved.id === job.id);
            return (
              <li
                key={job.id}
                className={`p-4 border rounded-md flex justify-between items-start gap-4 transition-all ${
                  isSaved ? 'bg-green-50 border-green-300' : 'bg-white'
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      New
                    </span>
                  </div>
                  <p className="text-gray-600">{job.companyName}</p>
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
                    className="text-blue-500 mt-2 inline-block"
                  >
                    View Job
                  </a>
                </div>

                {/* Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <FaEllipsisV
                    size={18}
                    onClick={() => handleDropdownToggle(job)}
                    className="cursor-pointer mt-1"
                  />

                  <AnimatePresence>
                    {dropdownOpen && dropdownJob?.id === job.id && (
                      <motion.div
                        className="absolute top-6 right-0 bg-white shadow-md p-4 rounded w-40 z-10"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul className="space-y-2">
                          <li
                            className="text-blue-500 cursor-pointer"
                            onClick={() => handleSaveJob(job)}
                          >
                            {isSaved ? 'Saved ✔' : 'Save for Later'}
                          </li>
                          <li
                            className="text-red-500 cursor-pointer"
                            onClick={() => handleReportJob(job)}
                          >
                            Report Job
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="hidden lg:block w-16"></div>
    </div>
  );
};

export default JobList;

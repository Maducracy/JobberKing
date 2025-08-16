import React, { useEffect, useState, useRef } from 'react';
import { useApistore } from '../Zustand';
import { FaEllipsisV, FaBriefcase, FaBookmark, FaFilter, FaTimes } from 'react-icons/fa';

const JobList = () => {
  const { output, fetchData, loading, error } = useApistore();
  const [savedJobs, setSavedJobs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownJob, setDropdownJob] = useState(null);
  const dropdownRef = useRef();

  // Mobile drawer state
  const [showFilters, setShowFilters] = useState(false);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const jobs = output?.jobs || [];

  const handleSaveJob = (job) => {
    if (!savedJobs.some(saved => saved.id === job.id)) {
      const updated = [...savedJobs, job];
      setSavedJobs(updated);
      localStorage.setItem('savedJobs', JSON.stringify(updated));
      alert('Job saved for later: ' + job.jobTitle);
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
    <div className="p-4 lg:p-6 flex flex-col lg:flex-row gap-6">
      {/* Mobile header buttons */}
      <div className="flex lg:hidden gap-3 mb-4">
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
        >
          <FaFilter /> Filters
        </button>
        <button
          onClick={() => setShowSaved(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded"
        >
          <FaBookmark /> Saved Jobs
        </button>
      </div>

      {/* Sidebar Filters (desktop) */}
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

        {loading && <p className="text-gray-500">Loading jobs...</p>}
        {error && <p className="text-red-500">Error fetching jobs.</p>}

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

                  {dropdownOpen && dropdownJob?.id === job.id && (
                    <div className="absolute top-6 right-0 bg-white shadow-md p-4 rounded w-40 z-10">
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
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Saved Jobs Panel (desktop) */}
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
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-xs"
                >
                  View
                </a>
              </li>
            ))}
          </ul>
        )}
      </aside>

      {/* Mobile Drawer: Filters */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div className="bg-white w-72 p-4 h-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <FaFilter className="text-blue-500" /> Filters
              </h2>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setShowFilters(false)}
              />
            </div>
            <p className="text-sm text-gray-500 mb-2">Job Type</p>
            <label className="block"><input type="checkbox" /> Full-time</label>
            <label className="block"><input type="checkbox" /> Part-time</label>
            <label className="block"><input type="checkbox" /> Remote</label>

            <p className="text-sm text-gray-500 mt-4">Location</p>
            <input className="w-full border rounded px-2 py-1 text-sm" placeholder="Search city..." />

            <p className="text-sm text-gray-500 mt-4">Skills</p>
            <input className="w-full border rounded px-2 py-1 text-sm" placeholder="e.g. React, Node" />

            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded">Apply Filters</button>
          </div>
        </div>
      )}

      {/* Mobile Drawer: Saved Jobs */}
      {showSaved && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
          <div className="bg-white w-72 p-4 h-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <FaBookmark className="text-green-600" /> Saved Jobs
              </h2>
              <FaTimes
                className="cursor-pointer"
                onClick={() => setShowSaved(false)}
              />
            </div>
            {savedJobs.length === 0 ? (
              <p className="text-sm text-gray-500">No jobs saved yet.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {savedJobs.map((job) => (
                  <li key={job.id} className="border-b pb-2 mb-2 flex justify-between items-center">
                    <span>{job.jobTitle}</span>
                    <a href={job.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs">
                      View
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;

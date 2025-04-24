import React, { useEffect, useState } from 'react';
import { useApistore } from '../Zustand';
import { FaEllipsisV } from 'react-icons/fa'; // For vertical dots

const JobList = () => {
  const { output, fetchData, loading, error } = useApistore();
  const [savedJobs, setSavedJobs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
  const [dropdownJob, setDropdownJob] = useState(null); // State to track which job the dropdown is for

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Adjust if needed depending on the API response structure
  const jobs = output?.jobs || [];

  const handleSaveJob = (job) => {
    setSavedJobs((prevSaved) => [...prevSaved, job]);
    console.log('Job saved for later:', job);
  };

  const handleReportJob = (job) => {
    alert(`Reporting job: ${job.jobTitle}`);
    // Add report logic here
  };

  const handleDropdownToggle = (job) => {
    // Toggle the dropdown for the clicked job
    if (dropdownJob?.id === job.id) {
      setDropdownOpen(!dropdownOpen);
    } else {
      setDropdownOpen(true);
      setDropdownJob(job);
    }
  };

  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      {/* Left Column: Job List */}
      <div className="bg-white p-4 rounded flex-1">
        <h1 className="text-2xl font-bold mb-4">Jobs for you</h1>

        {/* Uncomment for loading/error states */}
        {/* {loading && <p className="text-blue-500">Loading jobs...</p>}
        {error && <p className="text-red-500">Error: {error}</p>} */}

        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className=" flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{job.jobTitle}</h2>
                <p className="text-gray-600">{job.companyName}</p>
               
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline-none"
                >
                  View Job
                </a>
              </div>

              {/* Three Vertical Dots for Dropdown */}
              <div className="relative">
                <FaEllipsisV
                  size={18}
                  onClick={() => handleDropdownToggle(job)}
                  className="cursor-pointer"
                />
                {dropdownOpen && dropdownJob?.id === job.id && (
                  <div className="absolute top-0 right-0 bg-white shadow-md p-4 rounded w-40 mt-2">
                    <ul className="space-y-2">
                      <li
                        className="text-blue-500 cursor-pointer"
                        onClick={() => handleSaveJob(job)}
                      >
                        Save for Later
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
          ))}
        </ul>
      </div>

      {/* Right Column (optional, if you want to make the layout more clear) */}
      <div className="hidden lg:block w-16"></div>
    </div>
  );
};

export default JobList;

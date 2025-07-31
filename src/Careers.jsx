import React, { useState } from "react";

const Career = () => {
  const [Search, setSearch] = useState( false)
  
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Careers</h1>
        <p className="text-gray-600">Join our team and make a difference!</p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6">
          <input onChange={()=> setSearch}
            type="text"
            placeholder="Search job title..."
            className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none"
          />
          <select className="w-full md:w-1/4 px-4 py-2 border rounded shadow-sm focus:outline-none">
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Software Engineer</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button onClick={()=>setShow} className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Product Manager</h2>
            <p className="text-gray-600">Location: On-site</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">UI/UX Designer</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Frontend Developer</h2>
            <p className="text-gray-600">Location: Hybrid</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Backend Developer</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">QA Engineer</h2>
            <p className="text-gray-600">Location: On-site</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">DevOps Engineer</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Technical Writer</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">HR Specialist</h2>
            <p className="text-gray-600">Location: On-site</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Marketing Coordinator</h2>
            <p className="text-gray-600">Location: Hybrid</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Data Scientist</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Customer Success Manager</h2>
            <p className="text-gray-600">Location: On-site</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Sales Executive</h2>
            <p className="text-gray-600">Location: Hybrid</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Security Analyst</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Mobile App Developer</h2>
            <p className="text-gray-600">Location: Remote</p>
            <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

// App.jsx
import { useState } from 'react';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    const newJob = { title, location, salary };
    setJobs([...jobs, newJob]);
    setTitle('');
    setLocation('');
    setSalary('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow p-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Employer - Post a Job</h1>

          <form onSubmit={handlePost} className="grid gap-4 mb-8 bg-white p-6 rounded-lg ">
            <input
              type="text"
              placeholder="Job Title"
              className="border p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              className="border p-2 rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Salary"
              className="border p-2 rounded"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit">
              Post Job
            </button>
          </form>

          <div className="grid gap-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-green-600 font-bold">{job.salary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional footer to push content */}
      <footer className="text-center p-4 text-gray-500">
        © 2025 JobBoard
      </footer>
    </div>
  );
}

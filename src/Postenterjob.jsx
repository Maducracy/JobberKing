import React, { useState } from 'react';

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    type: 'Full-Time',
    salary: '',
    link: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Job:', formData);
    alert('Job submitted successfully!');
    setFormData({
      title: '',
      company: '',
      description: '',
      location: '',
      type: 'Full-Time',
      salary: '',
      link: '',
      skills: '',
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl ">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Submit a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
          rows="5"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Remote, Lagos)"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
        <input
          type="text"
          name="salary"
          placeholder="Salary Range (e.g. ₦200,000 - ₦300,000)"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="url"
          name="link"
          placeholder="Application Link (e.g. https://...)" 
          value={formData.link}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />
        <input
          type="text"
          name="skills"
          placeholder="Required Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border p-3 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default PostJobForm;

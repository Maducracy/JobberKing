import React, { useState } from 'react';

const UpgradeCvLandingPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }

    setUploading(true);

    setTimeout(() => {
      setUploading(false);
      alert('CV Uploaded Successfully and Upgraded!');
    }, 2000); // Simulating upload time
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Upgrade Your Career with a New CV
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Upload your updated CV and get noticed by top recruiters. Fast, secure, and easy.
        </p>
      </div>

      {/* Upload Section */}
      <div className="mt-10 w-full max-w-lg bg-white shadow-lg rounded-2xl p-8">
        <div className="flex flex-col space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload New CV
          </label>
          <input 
            type="file" 
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />

          {selectedFile && (
            <div className="text-green-600 font-semibold mt-2">
              Selected: {selectedFile.name}
            </div>
          )}

          <button 
            onClick={handleUpload}
            disabled={uploading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 transition"
          >
            {uploading ? 'Uploading...' : 'Upload CV'}
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-400 text-sm">
        &copy; 2025  WorkNaija . All rights reserved.
      </footer>
    </div>
  );
};

export default UpgradeCvLandingPage;

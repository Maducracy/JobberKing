import React from 'react'
import { FaTwitter, FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';


function Application() {
  return (
    <div className="flex justify-center gap-10 items-center  font-bold">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="text-xl hover:text-blue-600 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-xl hover:text-gray-300 transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-xl hover:text-blue-500 transition" />
          </a>
        </div>
  )
}

export default Application


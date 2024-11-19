'use client'

import React from 'react'
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Talk = () => {
  return (
    <div id="talk" className="bg-gray-100 dark:bg-gray-900 text-foreground py-12">
      <div className="container mx-auto px-6 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
        <h2 className="text-3xl font-extrabold text-center mb-4 text-primary">
          Discuss a Project or Just Wanna Say Hi? Shoot a DM
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
          Let's Work Together
        </h3>

        <div className="flex justify-center space-x-6 sm:space-x-4 md:space-x-6">
          {/* Social Media Icons */}
          <a
            href="https://x.com/mahak_porwal6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com/mahak24342"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-600 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahak-porwal-43b3b420b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          {/* Mail Icon */}
          <a  href="mailto:porwalmahak784@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-500 transition-colors duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Talk

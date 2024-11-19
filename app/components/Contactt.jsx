'use client';

import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contactt = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-foreground py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-4 text-primary">
          Discuss a Project or Just Wanna Say Hi? Shoot a DM
        </h2>
        <h3 className="text-2xl font-semibold text-center mb-8 text-primary">
          Let's Work Together
        </h3>

        <div className="flex justify-center space-x-6">
          {/* Social Media Icons */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-gray-800 dark:hover:text-gray-600 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contactt;

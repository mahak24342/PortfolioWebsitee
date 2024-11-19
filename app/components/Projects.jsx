'use client'

import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-900 text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8 transition-all text-primary">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img
              src="/231.jpg"
              alt="Project 1"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Travel Stories</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
              A Next.js and MongoDB platform for sharing, editing, and preserving travel adventures
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mahak24342/travelstories"
                  className="text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a
                  href="https://travelstories-one.vercel.app/"
                  className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors duration-300 dark:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img
              src="/link.png"
              alt="Project 2"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Links Sharing App</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
              Developed a social link-sharing app using Next.js and MongoDB for customizable user profiles.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mahak24342/bittreee"
                  className="text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a
                  href="https://bittreee.vercel.app/"
                  className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors duration-300 dark:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img
              src="/i1.jfif"
              alt="Project 3"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Github User Search App</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
              Next.js app with MongoDB to search GitHub profiles via API.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mahak24342/github-User-Search-App"
                  className="text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <a
                  href="https://github-zeta-three.vercel.app/"
                  className="text-white bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg transition-colors duration-300 dark:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

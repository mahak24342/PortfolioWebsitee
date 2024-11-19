'use client'

import React from 'react'

const Blog = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-primary">Latest Blog Posts</h1>

        {/* Single Blog Post */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden mb-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <img src="/web3.jfif" alt="Blog Post" className="w-full h-72 object-cover rounded-t-lg" />
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Exploring the Future of Web3 Technology
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Web3 is revolutionizing the internet, offering decentralized applications and blockchain-powered platforms.
            </p>
            <a
  href="#"
  className="inline-block text-gray-100 dark:text-gray-900 bg-gray-900 dark:bg-white hover:bg-gray-100 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors duration-300"
>
  Read More
</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog

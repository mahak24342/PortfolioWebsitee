'use client'

import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const Hero = () => {
  const { theme } = useTheme()

  return (
    <div
      className={`flex items-center justify-center min-h-screen p-4 transition-all ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <div className="max-w-3xl text-center space-y-6 p-6">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-extrabold transition-all ${theme === 'dark' ? 'text-white' : 'text-gray-900'} leading-tight md:leading-snug lg:leading-normal text-center p-4 md:p-6 lg:p-8 shadow-lg`}
        >
          Hello There! Mahak this side
        </h2>

        <p
          className={`text-lg md:text-xl lg:text-2xl transition-all ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
        >
          I’m a passionate <span className="font-bold">Fullstack Developer</span> dedicated to building efficient, user-friendly applications from front to back.
        </p>
        
        <div className="flex items-center justify-center space-x-3">
  <a
    href="mailto:porwalmahak784@gmail.com"
    className={`font-semibold py-3 px-8 rounded-md transition duration-300 ${theme === 'dark' ? 'bg-white text-gray-900 hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-700'}`}
  >
    Contact Me
    <FaEnvelope className="inline-block ml-2" size={20} />
  </a>
</div>

      </div>
    </div>
  )
}

export default Hero

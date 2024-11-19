import React from 'react'
import Nav from '@/app/components/Nav'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Projects from '@/app/components/Projects'
import Blog from '@/app/components/Blog'
import Contactt from '@/app/components/Contactt'
import Talk from '@/app/components/Talk'
 const page = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Blog/>
      <Talk/>
    </div>
  )
}

export default page
'use client'

const About = () => {
  return (
    <section
      id="about"
      className="py-12 bg-gray-100 dark:bg-gray-900 text-foreground"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
          
          {/* Image Section */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl mx-auto">
            <img
              src="/1.jpg"
              alt="Mahak Porwal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3 transition-colors duration-300">
              Hi, I'm Mahak!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
              I'm a full-stack developer with a passion for Web3 and blockchain technology. My journey has been fueled by curiosity and a drive to build the future of decentralized applications. I’m excited to craft seamless, responsive web apps while exploring the latest in tech.
            </p>
        
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

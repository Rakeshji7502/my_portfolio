import React from 'react'

const Skill = () => {
  return (
    <>
      <section className="py-16 bg-gray-900 text-white" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
            <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <p className="text-gray-400">
                I have experience in building responsive and interactive user interfaces using React, Redux, and other modern frontend technologies.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <p className="text-gray-400">
                I am proficient in developing scalable backend solutions using Node.js, Express.js, and MongoDB.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-xl font-bold mb-4">Database Design</h3>
              <p className="text-gray-400">
                I have a strong understanding of database design and optimization techniques to ensure data integrity and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
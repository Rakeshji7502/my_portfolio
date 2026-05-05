import React from "react";

const Hero = () => {
  
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white" id="home">
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 "
          data-aos="fade-down"
        >
          Hi, I'm Rakesh Mishra 🙋
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 " data-aos="fade-up">
          A Mern Stack Developer
        </h1>
        <p className = " text-gray-400 max-w-xl mx-auto px-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="200">
          I Build Scalable and Efficient Web Applications using MongoDB,
          Express.js, React, and Node.js. With a passion for creating seamless
          user experiences and robust backend solutions, I specialize in
          crafting dynamic web applications that meet modern development
          standards. Let's connect and bring your ideas to life!
        </p>
        <button className = "mt-6 bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300" data-aos="fade-up" data-aos-delay="400">
          View Projects
        </button>
      </section>
    </>
  );
};

export default Hero;

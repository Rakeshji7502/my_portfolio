import { CodeXml, Database, Layers, Server } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="min-h-screen bg-linear-to-br from-gray-950 via-slate-800 to-gray-950 flex flex-col justify-center items-center text-center text-white"
        id="home"
      >
        <div
          className="container w-full p-5   flex justify-center items-center mb-1 gap-8"
          data-aos="zoom-in"
        >
          <Database
            size={60}
            className="text-green-600 transition-transform duration-300 hover:rotate-360"
          />
          <Server
            size={60}
            className="text-yellow-300 transition-transform duration-300 hover:rotate-360"
          />
          <CodeXml
            size={60}
            className="text-indigo-500 transition-transform duration-300 hover:rotate-360"
          />
          <Layers
            size={60}
            className="text-green-400 transition-transform duration-300 hover:rotate-360"
          />
        </div>

        <h1
          className="text-4xl md:text-7xl font-bold mb-4 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Mern Stack Developer
        </h1>

        <p
          className=" text-gray-400 max-w-xl mx-auto px-4 text-lg md:text-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I Build Scalable and Efficient Web Applications using MongoDB,
          Express.js, React, and Node.js. With a passion for creating seamless
          user experiences and robust backend solutions, I specialize in
          crafting dynamic web applications that meet modern development
          standards. Let's connect and bring your ideas to life!
        </p>

        <div className="container w-full h auto p-2 flex justify-center items-center gap-10 mt-5">
          <button
            className=" text-2xlmt-6 bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Hire me!
          </button>
          <button
            className=" text-2xlmt-6 bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() =>
              document.getElementById("project").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View Projects
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;

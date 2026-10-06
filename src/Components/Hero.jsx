import React from "react";
import {
  CodeXml,
  Database,
  Server,
  Layers,
  ArrowRight,
  Download,
} from "lucide-react";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-linear-to-br from-gray-950 via-slate-800 to-gray-950 text-white flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div
            className="text-center lg:text-left"
            data-aos="fade-right"
          >
            {/* Developer Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              Full Stack Developer
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Rakesh Mishra
              </span>
            </h1>

            {/* Designation */}
            <h2
              className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              MERN Stack Developer
            </h2>

            {/* Description */}
            <p
              className="mt-6 max-w-2xl mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I build responsive, scalable and database-driven web applications
              using React.js, Node.js, Express.js and MongoDB. I focus on
              creating clean user interfaces, reusable components, REST APIs
              and practical solutions for real-world requirements.
            </p>

            {/* CTA Buttons */}
            <div
              className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* Projects */}
              <button
                type="button"
                onClick={() => scrollToSection("project")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 font-semibold text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                View Projects
                <ArrowRight size={18} />
              </button>

              {/* Contact */}
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-600 bg-gray-800/70 text-gray-200 font-semibold hover:border-blue-500 hover:bg-gray-800 transition-all duration-300"
              >
                Contact Me
              </button>

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:text-white hover:border-gray-500 transition-all duration-300"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Technology Tags */}
            <div
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "TypeScript",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-400 text-xs sm:text-sm hover:border-blue-500/50 hover:text-gray-200 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ================= RIGHT TECH STACK ================= */}
          <div
            className="flex justify-center lg:justify-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative w-full max-w-md">

              {/* Main Card */}
              <div className="relative bg-gray-900/80 border border-gray-700 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">

                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-500">
                      Technology Stack
                    </p>

                    <h3 className="text-xl font-bold text-gray-100 mt-1">
                      MERN Development
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <CodeXml size={21} />
                  </div>
                </div>

                {/* Technology Cards */}
                <div className="grid grid-cols-2 gap-4">

                  {/* MongoDB */}
                  <div className="group p-4 sm:p-5 rounded-2xl bg-gray-800 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
                    <Database
                      size={34}
                      className="text-green-500 group-hover:scale-110 transition-transform duration-300"
                    />

                    <h4 className="mt-3 font-semibold">
                      MongoDB
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      Database
                    </p>
                  </div>

                  {/* Node.js */}
                  <div className="group p-4 sm:p-5 rounded-2xl bg-gray-800 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                    <Server
                      size={34}
                      className="text-yellow-300 group-hover:scale-110 transition-transform duration-300"
                    />

                    <h4 className="mt-3 font-semibold">
                      Node.js
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      Backend
                    </p>
                  </div>

                  {/* React */}
                  <div className="group p-4 sm:p-5 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                    <CodeXml
                      size={34}
                      className="text-blue-500 group-hover:scale-110 transition-transform duration-300"
                    />

                    <h4 className="mt-3 font-semibold">
                      React.js
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      Frontend
                    </p>
                  </div>

                  {/* Express */}
                  <div className="group p-4 sm:p-5 rounded-2xl bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                    <Layers
                      size={34}
                      className="text-purple-400 group-hover:scale-110 transition-transform duration-300"
                    />

                    <h4 className="mt-3 font-semibold">
                      Express.js
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      REST APIs
                    </p>
                  </div>
                </div>

                {/* Bottom Information */}
                <div className="mt-6 p-4 rounded-xl bg-gray-800/70 border border-gray-700">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Building{" "}
                    <span className="text-blue-400 font-medium">
                      real-world web applications
                    </span>{" "}
                    with modern technologies and clean development practices.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-blue-500/20 rounded-2xl" />

              <div className="absolute -bottom-4 -left-4 w-20 h-20 border border-purple-500/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
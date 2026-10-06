import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { CodeXml, Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-gray-950/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleNavClick}
            className="flex items-center gap-2 group"
            data-aos="fade-down"
          >
            <div className="w-9 h-9 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <CodeXml size={21} className="text-white" />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-none text-white">
                Rakesh Mishra
              </h1>

              <span className="text-xs text-gray-400">
                Full Stack Developer
              </span>
            </div>

            <span className="sm:hidden text-lg font-bold text-white">
              Rakesh
            </span>
          </a>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center gap-6"
            data-aos="fade-down"
            data-aos-delay="150"
          >
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    {link.name}

                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
              {/* LinkedIn Text Button */}
              <a
                href="https://www.linkedin.com/in/rakeshmishra7502/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm font-medium hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
              >
                LinkedIn
              </a>

              {/* GitHub Text Button */}
              <a
                href="https://github.com/Rakeshji7502"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-gray-800 text-gray-300 text-sm font-medium hover:text-white hover:bg-gray-700 transition-all duration-300"
              >
                GitHub
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download="Rakesh-Mishra-Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-200 hover:bg-gray-700 transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[600px] pb-5" : "max-h-0"
          }`}
        >
          <div className="border-t border-gray-800 pt-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={handleNavClick}
                    className="flex items-center px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Links */}
            <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col gap-3">
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/rakeshmishra7502/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-lg bg-gray-800 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Rakeshji7502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
                >
                  GitHub
                </a>
              </div>

              {/* Mobile Resume */}
              <a
                href="/resume.pdf"
                download="Rakesh-Mishra-Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

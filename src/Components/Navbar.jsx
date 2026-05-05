import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Project", path: "#project" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <>
      <nav className="w-full bg-gray-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <h1
            className="text-2xl font-bold text-blue-400 cursor-pointer italic"
            data-aos="fade-down"
          >
            Mern Developer
          </h1>
          {/* Desktop Menu */}
          <ul
            className="hidden md:flex gap-8"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {isOpen ? (
              <X size={28} onClick={() => setIsOpen(false)} />
            ) : (
              <Menu size={28} onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className=" md:hidden bg-gray-800 px-4 pb-4"
            
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py--2 border-b border-gray-700 hover:text-blue-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

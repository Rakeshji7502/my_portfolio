
import React from "react";
import {
  CodeXml,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#project" },
    { name: "Contact", path: "#contact" },
  ];

 

  return (
    <footer className="relative bg-gray-950 text-white border-t border-gray-800">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <a
              href="#home"
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                <CodeXml size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Rakesh Mishra
                </h2>

                <p className="text-xs text-gray-500">
                  Full Stack Developer
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm text-gray-400 leading-relaxed">
              Full Stack Developer focused on building responsive,
              scalable and database-driven web applications using
              modern web technologies.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs text-gray-500"
                >
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-3">

              {navLinks.map((link) => (
                <li key={link.name}>

                  <a
                    href={link.path}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:r.mishraa41@gmail.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail
                  size={17}
                  className="text-blue-400 shrink-0"
                />

                <span>
                  r.mishraa41@gmail.com
                </span>
              </a>

              <a
                href="tel:+919584207502"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <Phone
                  size={17}
                  className="text-green-400 shrink-0"
                />

                <span>
                  +91 95842 07502
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/rakeshmishra7502/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <span className="w-5 h-5 rounded bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">
                  in
                </span>

                <span>
                  LinkedIn Profile
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © {currentYear} Rakesh Mishra. All rights reserved.
            </p>

            <p className="text-xs text-gray-600">
              Built with React.js & Tailwind CSS
            </p>

            

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;


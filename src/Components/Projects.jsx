
import React from "react";
import {
  CodeXml,
  Database,
  Server,
  ShieldCheck,
  QrCode,
  ShoppingCart,
  GraduationCap,
  Plane,
  School,
} from "lucide-react";

const Projects = () => {
  const projectList = [
    {
      title: "College ERP System with RFID Tracking",
      category: "Full Stack / ERP",
      icon: <ShieldCheck size={22} />,
      color: "text-blue-400",
      description:
        "A comprehensive college ERP platform for managing academic, administrative and campus operations.",
      features:
        "Student, faculty, attendance, examination, fees, assignment, transport, hostel, library, RFID tracking and system configuration.",
      technologies:
        "React.js, JavaScript, Node.js, Express.js, MySQL, Axios, REST API, JWT",
    },
    {
      title: "Employee Attendance & Tracking System",
      category: "Web Application",
      icon: <CodeXml size={22} />,
      color: "text-green-400",
      description:
        "A web-based employee management and attendance system for managing employees, departments and tracking information.",
      features:
        "Login, employee registration, department management, attendance and live tracking directory.",
      technologies:
        "React.js, JavaScript, REST API, CSS, Axios",
    },
    {
      title: "Project Finance Management",
      category: "Management System",
      icon: <Database size={22} />,
      color: "text-yellow-400",
      description:
        "A finance management application for organizing project-related financial information and expenses.",
      features:
        "Project-wise financial records, expense management, financial tracking and structured project information.",
      technologies:
        "React.js, JavaScript, Node.js, Express.js, Database, REST API",
    },
    {
      title: "Smart Ticketing Tool",
      category: "Management Tool",
      icon: <Server size={22} />,
      color: "text-purple-400",
      description:
        "A smart ticket management application for creating, tracking and managing support or operational requests.",
      features:
        "Ticket creation, tracking, status management, request handling and organized ticket information.",
      technologies:
        "React.js, JavaScript, Node.js, Express.js, REST API",
    },
    {
      title: "Smart QR Generator Tool",
      category: "Utility Tool",
      icon: <QrCode size={22} />,
      color: "text-cyan-400",
      description:
        "A QR code generation tool for quickly creating QR codes from different types of information.",
      features:
        "QR generation, dynamic input handling, responsive interface and easy-to-use workflow.",
      technologies:
        "React.js, JavaScript, QR Code Library, CSS",
    },
    {
      title: "Electrashop Ecommerce Store",
      category: "E-Commerce",
      icon: <ShoppingCart size={22} />,
      color: "text-orange-400",
      description:
        "An e-commerce web application for showcasing and managing electronic products through an online shopping interface.",
      features:
        "Product listing, product details, shopping workflow, responsive UI and e-commerce interface.",
      technologies:
        "React.js, JavaScript, Node.js, Express.js, MongoDB",
    },
    {
      title: "Get Courses",
      category: "Education Platform",
      icon: <GraduationCap size={22} />,
      color: "text-pink-400",
      description:
        "An online course platform designed to present educational courses and provide an organized learning experience.",
      features:
        "Course listing, course information, categorized content and responsive educational interface.",
      technologies:
        "React.js, JavaScript, REST API, Responsive UI",
    },
    {
      title: "Trip By MS",
      category: "Travel Platform",
      icon: <Plane size={22} />,
      color: "text-sky-400",
      description:
        "A travel-focused web application presenting trip-related information through a modern browsing experience.",
      features:
        "Travel information, trip presentation, responsive layouts and user-friendly navigation.",
      technologies:
        "React.js, JavaScript, Responsive Design, REST API",
    },
    {
      title: "School Management",
      category: "Education / ERP",
      icon: <School size={22} />,
      color: "text-emerald-400",
      description:
        "A school management platform for centralizing academic and administrative activities.",
      features:
        "Student, teacher, attendance, fees, examinations, homework, timetable and notices.",
      technologies:
        "React.js, JavaScript, Node.js, Express.js, MongoDB, REST API",
    },
  ];

  return (
    <section
      id="project"
      className="relative py-20 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className="text-center mb-10"
          data-aos="fade-down"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gray-800 border border-gray-700 text-blue-400 text-xs font-medium mb-3">
            Portfolio
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            A collection of web applications and management systems built
            using modern frontend, backend and database technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {projectList.map((project, index) => (
            <div
              key={project.title}
              className="group flex flex-col bg-gray-950/80 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-700 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Main Card */}
              <div className="p-5">

                {/* Icon + Number */}
                <div className="flex items-start justify-between">

                  <div
                    className={`w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center ${project.color} group-hover:scale-105 transition-transform duration-300`}
                  >
                    {project.icon}
                  </div>

                  <span className="text-xs text-gray-600 font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* Project Info */}
                <div className="mt-4">

                  <span className="text-[11px] text-blue-400 font-medium">
                    {project.category}
                  </span>

                  <h3 className="mt-1.5 text-lg font-bold text-gray-100 leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                </div>

                {/* Technology Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies
                    .split(", ")
                    .slice(0, 4)
                    .map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-[10px] text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

              </div>

              {/* Static Details */}
              <div className="mt-auto border-t border-gray-800 px-5 py-4 space-y-3">

                {/* Features */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold">
                    Key Features
                  </p>

                  <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                    {project.features}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-green-400 font-semibold">
                    Technologies Used
                  </p>

                  <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                    {project.technologies}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Building practical solutions with modern web technologies.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;


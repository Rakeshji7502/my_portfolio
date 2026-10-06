
import React from "react";
import {
  CodeXml,
  Database,
  Server,
  Layers,
  GitBranch,
} from "lucide-react";

const Skill = () => {
  const skills = [
    {
      name: "React.js",
      category: "Frontend",
      level: "Strong",
      icon: <CodeXml size={22} />,
      color: "text-blue-400",
      description:
        "Used React.js to build reusable, responsive and component-based user interfaces.",
      usage:
        "College ERP System and Employee Attendance & Tracking System",
      howUsed:
        "Created reusable components, dashboards, forms, tables, filters, modals and module-based pages. Integrated frontend components with REST APIs.",
    },
    {
      name: "JavaScript",
      category: "Programming",
      level: "Strong",
      icon: <CodeXml size={22} />,
      color: "text-yellow-400",
      description:
        "Used modern JavaScript for application logic, dynamic UI behaviour, API communication and data processing.",
      usage:
        "College ERP, Employee Attendance System and React applications",
      howUsed:
        "Worked with ES6+, async/await, promises, array methods, functions, objects, state handling and API response processing.",
    },
    {
      name: "TypeScript",
      category: "Programming",
      level: "Learning",
      icon: <CodeXml size={22} />,
      color: "text-blue-500",
      description:
        "Currently learning TypeScript to improve type safety and maintainability in modern applications.",
      usage:
        "Learning and practice projects",
      howUsed:
        "Practicing interfaces, types, union types, function parameters, arrays and typed objects.",
    },
    {
      name: "Node.js",
      category: "Backend",
      level: "Intermediate",
      icon: <Server size={22} />,
      color: "text-green-400",
      description:
        "Used Node.js to develop backend services and server-side application logic.",
      usage:
        "College ERP backend",
      howUsed:
        "Built backend services with Express.js running on Node.js and handled API requests, authentication and database operations.",
    },
    {
      name: "Express.js",
      category: "Backend",
      level: "Intermediate",
      icon: <Server size={22} />,
      color: "text-gray-300",
      description:
        "Used Express.js to create REST APIs and organize backend routes.",
      usage:
        "College ERP System",
      howUsed:
        "Created APIs for authentication, students, faculty, attendance, examination, fees, assignments, transport, hostel, library and configuration.",
    },
    {
      name: "MongoDB",
      category: "Database",
      level: "Intermediate",
      icon: <Database size={22} />,
      color: "text-green-500",
      description:
        "Used MongoDB for document-based data storage in MERN applications.",
      usage:
        "MERN projects and web application development",
      howUsed:
        "Worked with collections, documents, CRUD operations, queries and MongoDB Atlas/Compass.",
    },
    {
      name: "MySQL",
      category: "Database",
      level: "Intermediate",
      icon: <Database size={22} />,
      color: "text-blue-400",
      description:
        "Used MySQL for structured relational data and database-driven application modules.",
      usage:
        "College ERP System",
      howUsed:
        "Worked with relational tables, CRUD operations, joins, filtering, pagination and backend database workflows.",
    },
    {
      name: "REST API",
      category: "Backend",
      level: "Strong",
      icon: <Layers size={22} />,
      color: "text-purple-400",
      description:
        "Used REST APIs to connect frontend applications with backend services.",
      usage:
        "College ERP and Employee Attendance System",
      howUsed:
        "Integrated GET, POST, PUT and DELETE APIs, handled request/response data, loading states, errors and authentication.",
    },
    {
      name: "Axios",
      category: "API Integration",
      level: "Strong",
      icon: <Layers size={22} />,
      color: "text-cyan-400",
      description:
        "Used Axios for communication between React applications and backend APIs.",
      usage:
        "College ERP and React applications",
      howUsed:
        "Implemented API calls, request headers, authentication tokens, CRUD operations and response/error handling.",
    },
    {
      name: "JWT Authentication",
      category: "Security",
      level: "Intermediate",
      icon: <Server size={22} />,
      color: "text-red-400",
      description:
        "Used token-based authentication for securing application access and API requests.",
      usage:
        "College ERP System",
      howUsed:
        "Worked with login authentication, JWT tokens, protected API requests and role-based access.",
    },
    {
      name: "Tailwind CSS",
      category: "UI",
      level: "Intermediate",
      icon: <Layers size={22} />,
      color: "text-cyan-400",
      description:
        "Used Tailwind CSS to create responsive and modern user interfaces.",
      usage:
        "Portfolio and React applications",
      howUsed:
        "Created responsive layouts, cards, forms, tables, buttons, navigation components and mobile designs.",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      level: "Intermediate",
      icon: <GitBranch size={22} />,
      color: "text-orange-400",
      description:
        "Used Git for source-code management and maintaining development history.",
      usage:
        "Web development projects",
      howUsed:
        "Worked with repositories, commits, branches, code changes and version control.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gray-800 border border-gray-700 text-blue-400 text-xs font-medium mb-3">
            Technical Skills
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Skills &{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Practical Experience
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Technologies I have learned and used while building web
            applications, APIs, database-driven systems and responsive
            interfaces.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-700 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Skill Header */}
              <div className="p-5">

                <div className="flex items-start justify-between">

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center ${skill.color} group-hover:scale-105 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>

                  {/* Level */}
                  <span className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-[10px] text-gray-400">
                    {skill.level}
                  </span>

                </div>

                {/* Name + Category */}
                <div className="mt-4">

                  <h3 className="text-lg font-semibold text-gray-100">
                    {skill.name}
                  </h3>

                  <span className="text-xs text-gray-500">
                    {skill.category}
                  </span>

                </div>

              </div>

              {/* Static Details */}
              <div className="mt-auto border-t border-gray-800 px-5 py-4 space-y-3">

                {/* What I Know */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold">
                    What I Know
                  </p>

                  <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Where Used */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold">
                    Where I Used It
                  </p>

                  <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                    {skill.usage}
                  </p>
                </div>

                {/* How Used */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-green-400 font-semibold">
                    How I Used It
                  </p>

                  <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
                    {skill.howUsed}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 p-6 rounded-2xl bg-gray-900/80 border border-gray-800">

          <div className="text-center">

            <h3 className="text-lg font-bold text-gray-200">
              Always Learning & Improving
            </h3>

            <p className="mt-2 max-w-3xl mx-auto text-xs sm:text-sm text-gray-500 leading-relaxed">
              Currently focusing on TypeScript and AI-enabled full-stack
              development while strengthening my React, Node.js and backend
              development skills.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skill;


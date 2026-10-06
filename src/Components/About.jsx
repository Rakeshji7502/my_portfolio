
import React from "react";
import {
  CodeXml,
  Database,
  Server,
  Layers,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      title: "Frontend Development",
      icon: <CodeXml size={22} />,
      color: "text-blue-400",
      description:
        "Building responsive and reusable user interfaces using React.js, JavaScript, Tailwind CSS and modern frontend practices.",
    },
    {
      title: "Backend Development",
      icon: <Server size={22} />,
      color: "text-green-400",
      description:
        "Developing backend services and REST APIs using Node.js and Express.js with authentication and CRUD-based workflows.",
    },
    {
      title: "Database Development",
      icon: <Database size={22} />,
      color: "text-yellow-400",
      description:
        "Working with MongoDB and MySQL for database-driven applications, including CRUD operations, queries and data management.",
    },
    {
      title: "Full Stack Solutions",
      icon: <Layers size={22} />,
      color: "text-purple-400",
      description:
        "Connecting frontend, backend and databases to build complete web applications for real-world business requirements.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-linear-to-br from-gray-950 via-slate-800 to-gray-950 text-white py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className="text-center mb-10"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gray-800 border border-gray-700 text-blue-400 text-xs font-medium mb-3">
            About Me
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Full Stack{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            I am a Full Stack Developer focused on building responsive,
            scalable and database-driven web applications. I work primarily
            with React.js, JavaScript, Node.js, Express.js, MongoDB and MySQL.
            I enjoy turning real-world requirements into practical and
            user-friendly web solutions.
          </p>
        </div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">

          {/* Professional Profile */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-7">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400">
                <CodeXml size={21} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Professional Profile
                </p>

                <h3 className="text-xl font-bold text-gray-100">
                  My Development Approach
                </h3>
              </div>

            </div>

            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">

              <p>
                My development work focuses on creating clean interfaces,
                reusable React components, REST API integrations and
                database-driven functionality.
              </p>

              <p>
                I have worked on management systems and web applications
                involving authentication, CRUD operations, dashboards,
                forms, tables, API communication and database workflows.
              </p>

              <p>
                Along with web development, my background in IT infrastructure
                and technical support helps me understand troubleshooting,
                system-level problems and practical business requirements.
              </p>

            </div>
          </div>

          {/* Current Focus */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 sm:p-7">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-purple-400">
                <Layers size={21} />
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Current Focus
                </p>

                <h3 className="text-xl font-bold text-gray-100">
                  Growing as a Developer
                </h3>
              </div>

            </div>

            <div className="space-y-3">

              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                <p className="text-sm text-gray-400">
                  Strengthening React.js and Node.js development skills.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                <p className="text-sm text-gray-400">
                  Learning TypeScript for better type-safe development.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <p className="text-sm text-gray-400">
                  Improving backend, API and database development.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                <p className="text-sm text-gray-400">
                  Exploring AI-enabled full-stack development.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {highlights.map((item) => (
            <div
              key={item.title}
              className="group bg-gray-900/80 border border-gray-800 rounded-2xl p-5 transition-all duration-300 hover:border-gray-700 hover:-translate-y-1 hover:shadow-lg"
            >

              <div
                className={`w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              <h3 className="mt-4 text-base font-bold text-gray-100">
                {item.title}
              </h3>

              <p className="mt-2 text-xs text-gray-400 leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;


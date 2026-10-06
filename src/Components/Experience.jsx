
import React from "react";
import {
  BriefcaseBusiness,
  CodeXml,
  MonitorCog,
  Building2,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Web Developer",
      company: "Hasthini Technology",
      duration: "May 2026 – Present",
      icon: <CodeXml size={22} />,
      color: "text-blue-400",
      current: true,
      description:
        "Working on web application development using modern frontend and backend technologies, with a focus on responsive interfaces, API integration and database-driven functionality.",
      responsibilities: [
        "Developing web applications using React.js and JavaScript.",
        "Working with Node.js and Express.js for backend and REST API development.",
        "Integrating APIs with frontend applications and handling application data.",
        "Working with MongoDB, MySQL and PostgreSQL database technologies.",
        "Developing responsive interfaces and reusable UI components.",
        "Debugging application issues and implementing practical solutions.",
      ],
      technologies:
        "React.js, JavaScript, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, REST API",
    },

    {
      role: "Desktop Support Engineer",
      company: "MP Police Recruitment Project",
      duration: "Sep 2024 – Nov 2024",
      icon: <MonitorCog size={22} />,
      color: "text-green-400",
      current: false,
      description:
        "Worked as a contractual support engineer for the MP Police Recruitment physical examination project, supporting operational software and hardware requirements.",
      responsibilities: [
        "Provided technical support for operational software and hardware.",
        "Troubleshot system, device and application-related issues.",
        "Supported smooth execution of the recruitment examination process.",
        "Worked with teams to resolve technical problems during operations.",
      ],
      technologies:
        "IT Support, Hardware Troubleshooting, Software Support, System Operations",
    },

    {
      role: "Computer Operator cum Assistant Grade III Accountant",
      company: "Government of Chhattisgarh",
      duration: "Jun 2021 – Feb 2022",
      icon: <Building2 size={22} />,
      color: "text-yellow-400",
      current: false,
      description:
        "Worked on computer operations, payroll-related activities, treasury document verification and accounts-related administrative work.",
      responsibilities: [
        "Worked with payroll-related web-based systems.",
        "Performed treasury document verification and data processing.",
        "Prepared and managed official documents and records.",
        "Supported accounts-related computer operations and administrative tasks.",
      ],
      technologies:
        "Computer Operations, Web Applications, Data Processing, Documentation",
    },

    {
      role: "IT Infrastructure Developer",
      company: "Power to Empower Skills",
      duration: "Jun 2016 – Feb 2020",
      icon: <BriefcaseBusiness size={22} />,
      color: "text-purple-400",
      current: false,
      description:
        "Worked on IT infrastructure development and management for skill development centres along with computer training responsibilities.",
      responsibilities: [
        "Managed IT infrastructure and computer systems.",
        "Supported setup and maintenance of computer labs and systems.",
        "Handled technical troubleshooting and system-related issues.",
        "Provided computer training and technical guidance to users.",
      ],
      technologies:
        "IT Infrastructure, System Administration, Hardware, Networking, Computer Training",
    },

    {
      role: "IT Desktop & Peripheral Devices Service Engineer",
      company: "Global Computers",
      duration: "Jan 2010 – Jun 2013",
      icon: <MonitorCog size={22} />,
      color: "text-cyan-400",
      current: false,
      description:
        "Worked on desktop systems, peripheral devices and technical support activities.",
      responsibilities: [
        "Diagnosed and resolved desktop hardware issues.",
        "Provided support for computer peripherals and related devices.",
        "Performed system maintenance and troubleshooting.",
        "Supported customers with technical and hardware-related issues.",
      ],
      technologies:
        "Desktop Support, Hardware Troubleshooting, Peripherals, System Maintenance",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 bg-gray-950 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-gray-900 border border-gray-800 text-blue-400 text-xs font-medium mb-3">
            Career Journey
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Professional{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            My professional journey across web development, IT support,
            infrastructure management and technical operations.
          </p>
        </div>

        {/* Experience List */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 -translate-x-1/2" />

          <div className="space-y-8">

            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${experience.company}-${experience.role}`}
                  className="relative grid md:grid-cols-2 gap-6"
                >

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-gray-950 border border-gray-700 items-center justify-center">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        experience.current
                          ? "bg-green-400 animate-pulse"
                          : "bg-blue-500"
                      }`}
                    />
                  </div>

                  {/* Empty Side */}
                  <div
                    className={`hidden md:block ${
                      isLeft ? "order-2" : "order-1"
                    }`}
                  />

                  {/* Experience Card */}
                  <div
                    className={`${
                      isLeft ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">

                        <div className="flex items-start gap-3">

                          <div
                            className={`w-10 h-10 shrink-0 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center ${experience.color}`}
                          >
                            {experience.icon}
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-gray-100">
                              {experience.role}
                            </h3>

                            <p className="mt-1 text-sm text-blue-400 font-medium">
                              {experience.company}
                            </p>
                          </div>

                        </div>

                        {experience.current && (
                          <span className="shrink-0 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-medium">
                            Current
                          </span>
                        )}

                      </div>

                      {/* Duration */}
                      <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-xs text-gray-400">
                        {experience.duration}
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mt-5">

                        <p className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold">
                          Responsibilities
                        </p>

                        <ul className="mt-2 space-y-2">
                          {experience.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                      </div>

                      {/* Technologies */}
                      <div className="mt-5 pt-4 border-t border-gray-800">

                        <p className="text-[10px] uppercase tracking-wider text-green-400 font-semibold">
                          Technologies / Areas
                        </p>

                        <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">
                          {experience.technologies}
                        </p>

                      </div>

                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;


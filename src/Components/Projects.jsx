import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: " E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with the MERN stack, featuring user authentication, product management, and a responsive design.",
    },
    {
      title: "Social Media App",
      description:
        "A social media application that allows users to create profiles, post updates, and connect with friends, built using MongoDB, Express.js, React, and Node.js.",
    },
    {
      title: "Task Management Tool",
      description:
        "A task management tool that helps users organize their tasks and projects, with features like drag-and-drop functionality and real-time updates, developed using the MERN stack.",
    },
    {
      title: "Blog Platform",
      description:
        "A blogging platform that allows users to create and share their blogs, with features like user authentication, rich text editing, and a responsive design, built using MongoDB, Express.js, React, and Node.js.",
    },
    {
      title: "Real-time Chat Application",
      description:
        "A real-time chat application that enables users to communicate with each other, featuring private messaging, group chats, and a user-friendly interface, developed using the MERN stack.",
    },
    {
      title: "Portfolio Website",
      description:
        "A professional portfolio website that showcases my skills and projects, built using React and modern web technologies.",
    },
  ];
  return (
    <>
      <section className="py-20 bg-gray-900 text-white" id="project">
        <h2
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 ">
            {projectList.map((p,index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay={index * 200}>
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-400">{p.description}</p>
                </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

import React from "react";
import { Code, CodeXml, Rocket, UsersRound, Zap } from "lucide-react";

const About = () => {
  return (
    <>
      <section
        className="  bg-linear-to-br from-gray-950 via-slate-800 to-gray-950 flex flex-col justify-center items-center text-center text-white"
        id="about"
      >
        <div className="container mx-auto p-10 mt-5 flex flex-col justify-center items-center gap-10">
          <h1
            class="text-5xl font-extrabold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            data-aos="zoom-in"
          >
            About Me{" "}
          </h1>

          <div className="w-220">
            <p className="text-shadow-indigo-200 text-xl " data-aos="zoom-in">
              Passionate MERN stack developer with a focus on creating robust,
              scalable web applications. I transform ideas into elegant digital
              solutions that drive business growth and user engagement.
            </p>
          </div>

          <div className="container w-full   p-5 flex justify-around items-center gap-5">
            <div className="w-72 h-60 border border-gray-500 rounded-2xl bg-slate-800 flex flex-col p-5 gap-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:bg-slate-900 hover:border-indigo-700" data-aos="zoom-in">
              <div className=" w-10 h-10  bg-indigo-500 flex items-center justify-center rounded-2xl  ">
                <CodeXml size={30} />
              </div>
              <h1 className="font-bold text-2xl text-gray-400 ">Clean Code</h1>
              <p className="text-gray-400">
                Writing maintainable, scalable, and well-documented code that
                stands the test of time
              </p>
            </div>

            <div className="w-72 h-60 border border-gray-500 rounded-2xl bg-slate-800 flex flex-col p-5 gap-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:bg-slate-900 hover:border-indigo-700" data-aos="zoom-in">
              <div className=" w-10 h-10  bg-indigo-500 flex items-center justify-center rounded-2xl ">
                <Zap size={30} />
              </div>
              <h1 className="font-bold text-2xl text-gray-400 ">Performance</h1>
              <p className=" text-gray-400 ">
                Optimizing applications for speed and efficiency across all
                devices and platforms
              </p>
            </div>

            <div className="w-72 h-60 border border-gray-500 rounded-2xl bg-slate-800 flex flex-col p-5 gap-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:bg-slate-900 hover:border-indigo-700" data-aos="zoom-in">
              <div className=" w-10 h-10  bg-indigo-500 flex items-center justify-center rounded-2xl ">
                <UsersRound size={30} />
              </div>
              <h1 className="font-bold text-2xl text-gray-400">User-Centric</h1>
              <p className=" text-gray-400 ">
                Building intuitive experiences that delight users and solve real
                problems
              </p>
            </div>

            <div className="w-72 h-60 border border-gray-500 rounded-2xl bg-slate-800 flex flex-col p-5 gap-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-2 hover:bg-slate-900 hover:border-indigo-700" data-aos="zoom-in">
              <div className=" w-10 h-10  bg-indigo-500 flex items-center justify-center rounded-2xl ">
                <Rocket size={30} />
              </div>
              <h1 className="font-bold text-2xl text-gray-400">Innovation</h1>
              <p className=" text-gray-400 ">
                Staying ahead with cutting-edge technologies and modern
                development practices
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

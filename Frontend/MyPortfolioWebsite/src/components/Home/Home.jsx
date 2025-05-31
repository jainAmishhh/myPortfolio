import React from "react";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen bg-[#2D4739] flex flex-col md:flex-row items-center justify-between px-16 py-4"
      >
        <div className="md:w-1/2 space-y-6">
          <p className="text-2xl text-gray-400">Hello There!</p>
          <h1 className="text-green-950 text-5xl font-bold leading-tight">
            I'm <span className="text-yellow-500">Amish Jain</span>
            <br />
            <span className="text-green-950">Full Stack Web Developer</span>
          </h1>
          <p className="text-gray-400 text-lg">
            A passionate Web Developer skilled in React, Tailwind CSS, and
            MongoDB.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-green-950  border-4 border-yellow-500 text-green-50 px-6 py-2 rounded-full font-bold shadow-lg shadow-green-950 transition-all duration-500 ease-in-out hover:bg-yellow-500 hover:text-green-950 hover:scale-110 "
            >
              View My Portfolio
            </a>
            <a
              href="/Amish-Jain-Resume.pdf"
              download
              className="border-2 border-green-50 px-6 py-2 text-green-50 rounded-full font-bold shadow-lg shadow-green-950 transition duration-500 ease-in-out hover:bg-green-50 hover:text-green-950 hover:scale-110"
            >
              My resume
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
          <div className="absolute -inset-6 rounded-full bg-yellow-500 opacity-30 blur-xl"></div>
          <img
            src="https://via.placeholder.com/300x300.png?text=Jensen"
            alt="Amish"
            className="relative z-10 rounded-full w-72 mx-auto"
          />
        </div>
      </section>

      <div class="relative z-10">
        <div class="bg-yellow-400 text-green-950 px-16 py-4 flex flex-wrap justify-evenly gap-6 font-bold relative z-20">
          <div>HTML5</div>
          <div>CSS</div>
          <div>TailwindCSS</div>
          <div>Javascript</div>
          <div>Node.js</div>
          <div>Express.js</div>
          <div>MongoDb</div>
          <div>React</div>
          <div>Git</div>
          <div>Github</div>
          <div>C++</div>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-12 z-0">
          <div class="absolute w-full h-full bg-green-950 origin-bottom -skew-y-3"></div>
          <div class="absolute w-full h-full bg-green-950 origin-bottom skew-y-1"></div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#2D4739] text-white py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center overflow-hidden relative">
      <div class="w-full h-12"></div>
      <h2 className="text-4xl font-bold mb-16 text-yellow-500 text-center">
            — About Me
          </h2>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 md:w-[60%] md:h-[40%]  rounded-[40%] md:rounded-full overflow-hidden z-10">
            <img
              src="/Amishh.jpg"
              alt="Amish Jain"
              className="object-cover w-full h-full"
            />
          </div>
          {/* <div className="absolute top-0 w-80 h-80 rounded-full bg-yellow-400 z-0"></div> */}
        </div>

        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white">
            Who is <span className="text-yellow-400">Amish Jain?</span>
          </h2>
          <p className="text-white italic">
            "I don’t just write code—I build experiences, solve real problems,
            and constantly push myself to learn what's next."
          </p>

          <p className="text-white">
            Hi, I’m Amish Jain, a second-year B.Tech student, passionate Full
            Stack Developer specializing in building dynamic and scalable web
            solutions and elegant user interfaces using the MERN stack. With a
            strong foundation in C++ and a growing expertise in full-stack web
            development, I’m on a mission to build meaningful digital products.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 mt-10">
            {/* What I Do Best */}
            <div className="bg-yellow-500 text-green-950 w-72 h-72 rounded-full flex flex-col justify-center items-center text-center p-6 shadow-lg shadow-green-950">
              <h3 className="font-semibold text-lg mb-4">What I Do Best</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-center">
                <li>Think like a developer, act like a designer</li>
                <li>Build dynamic, responsive websites</li>
                <li>Solve logic-heavy problems using C++</li>
                <li>Collaborate using Git and GitHub</li>
                <li>Continuously learn new tech and frameworks</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="bg-green-950 text-yellow-500 w-72 h-72 rounded-full flex flex-col justify-center items-center text-center p-6 shadow-lg shadow-yellow-600">
              <h3 className="font-semibold text-center md:text-left mb-4">
                Tech Stack I Work With:
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-6 items-center justify-items-center">
                {/* HTML5 */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                    className="w-7 h-7"
                  />
                </div>
                {/* CSS3 */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                    className="w-7 h-7"
                  />
                </div>
                {/* TailwindCSS */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="TailwindCSS"
                    className="w-7 h-7 text-blue-400"
                  />
                </div>
                {/* JavaScript */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    className="w-7 h-7"
                  />
                </div>
                {/* React */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                    className="w-7 h-7"
                  />
                </div>
                {/* Node.js */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                    className="w-7 h-7"
                  />
                </div>
                {/* Express.js */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                    alt="Express.js"
                    className="w-7 h-7 invert"
                  />
                </div>
                {/* MongoDB */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                    alt="MongoDB"
                    className="w-7 h-7"
                  />
                </div>
                {/* Git */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                    className="w-7 h-7"
                  />
                </div>
                {/* GitHub */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="w-7 h-7 invert"
                  />
                </div>
                {/* C++ */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                    className="w-7 h-7"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies & Interests */}
<div className="bg-yellow-100 text-green-900 w-full h-fit rounded-full flex flex-col justify-center items-center text-center p-4 shadow-lg shadow-green-950">
  <h3 className="font-semibold text-lg mb-4">Hobbies & Interests</h3>
  <div className="grid grid-rows-2 grid-cols-3 gap-3 text-sm text-center">
  <div className="col-span-1"> Exploring new trends</div>
  <div className="col-span-1"> Reading</div>
  <div className="col-span-1"> Music and Podcasts</div>
  <div className="col-span-1"></div> {/* Empty cell for symmetry */}
  <div className="col-span-1"> Gaming & puzzles</div>
  <div className="col-span-1"></div> {/* Empty cell for symmetry */}
</div>

</div>


          <p className="text-white">
            💬 Whether I’m writing algorithms or building full-stack apps, I
            love turning ideas into clean, efficient, and impactful code.
          </p>

          {/* CV Button & Signature */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
            <a href="/Amish-Jain-Resume.pdf"
              download className="flex items-center gap-3 px-6 py-3 bg-yellow-400 text-green-950 rounded-full font-medium hover:scale-110 hover:border-4 hover:border-green-950 transition-all duration-300 shadow-2xl shadow-green-950">
              Download Resume
              <span className="text-xl">→</span>
            </a>
            <span className="text-yellow-500 text-xl italic font-signature">
              Amish Jain <span className="text-green-950">.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

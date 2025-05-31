import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-green-950 text-white pt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="w-full">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-500 p-2 rounded-full"></div>
              <h2 className="text-xl font-bold">Amish Jain</h2>
            </div>
            <p className="text-sm mb-4">
              Full Stack Web Developer specializing in React, Node.js, and
              MongoDB. Passionate about building modern web apps.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 inline-flex items-center border border-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-[#003c37] transition"
            >
              ↑ Back to Top
            </button>
          </div>

          <div className="ml-64">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">
              Quick Links
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#home" className="hover:underline hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline hover:text-yellow-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline hover:text-yellow-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:underline hover:text-yellow-400">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contactMe" className="hover:underline hover:text-yellow-400">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-32">
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">
              Social
            </h3>
            <div className="flex space-x-4 mt-2">
              {/* GitHub */}
              <a
                href="https://github.com/jainAmishhh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 fill-current hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.55 0-.27-.01-1.15-.01-2.1-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.07-.73.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.58-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.16 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.64.23 2.86.11 3.16.75.81 1.2 1.84 1.2 3.1 0 4.43-2.71 5.41-5.29 5.69.42.36.8 1.08.8 2.17 0 1.56-.01 2.82-.01 3.2 0 .31.21.67.8.55A10.5 10.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
</svg>

              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/amishhh-jain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 fill-current hover:text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M4.98 3.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM2.5 24V7.98h5V24h-5zM9 24h5v-8.4c0-2 .7-3.3 2.4-3.3 1.6 0 2.2 1.2 2.2 3.1V24h5v-9.4c0-4.6-2.5-6.7-5.8-6.7-2.7 0-3.8 1.5-4.4 2.5V8h-5v16z" />
</svg>

              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/AmishJain423035"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
               <svg
                  className="w-6 h-6 fill-current hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.61 3H4.39A1.39 1.39 0 003 4.39v15.22A1.39 1.39 0 004.39 21h15.22A1.39 1.39 0 0021 19.61V4.39A1.39 1.39 0 0019.61 3zM17.3 17h-2.04l-2.56-3.28L9.96 17H7.7l3.36-4.35L7.9 7h2.13l2.28 2.93L14.62 7h2.15l-3.36 4.22L17.3 17z" />
                </svg>

              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/_.amishhh15/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
  className="w-6 h-6 fill-current hover:text-yellow-400"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
</svg>


              </a>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500 text-center text-sm text-green-950 mt-10 p-2 font-bold w-full">
          © 2025 Amish Jain. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;

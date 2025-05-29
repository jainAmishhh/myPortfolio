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
                <svg
                  className="w-6 h-6 fill-current hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.6 0-12 5.4-12 12..." />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/amishhh-jain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 fill-current hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 2.1 6.07 1 7.5 1..." />
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
                  <path d="M19.61 3H4.39A1.39 1.39 0..." />
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
                  <path d="M7.75 2h8.5A5.76 5.76..." />
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

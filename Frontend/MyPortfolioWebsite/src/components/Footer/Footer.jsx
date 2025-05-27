import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer class="bg-green-950 text-white pt-12 ">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div class="w-full">
            <div class="flex items-center space-x-2 mb-4">
              <div class="bg-yellow-500 p-2 rounded-full"></div>
              <h2 class="text-xl font-bold">Amish Jain</h2>
            </div>
            <p class="text-sm mb-4">
              Full Stack Web Developer specializing in React, Node.js, and
              MongoDB. Passionate about building modern web apps.
            </p>

            <button
              onclick="window.scrollTo({ top: 0, behavior: 'smooth' });"
              class="mt-6 inline-flex items-center border border-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-white hover:text-[#003c37] transition"
            >
              ↑ Back to Top
            </button>
          </div>
          <div class="ml-64">
            <h3 class="text-xl font-semibold mb-2 text-yellow-500">
              Quick Links
            </h3>
            <ul class="text-sm space-y-1">
              <li>
                <NavLink 
                to="/"
                 class="hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" class="hover:underline">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" class="hover:underline">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" class="hover:underline">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contactMe" class="hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <div class="flex space-x-4">
        <a href="#" aria-label="Instagram" class="hover:text-yellow-400">Instagram</a>
        <a href="#" aria-label="Facebook" class="hover:text-yellow-400">Facebook</a>
      </div> */}
          <div class="ml-32">
            <h3 class="text-xl font-semibold mb-2 text-yellow-500">Social</h3>
            <div class="flex space-x-4 mt-2">
              <a
                href="https://github.com/jainAmishhh"
                target="_blank"
                aria-label="GitHub"
              >
                <svg
                  class="w-6 h-6 fill-current hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.5-1.5-1.9-1.5-1.9-1.2-.9.1-.9.1-.9 1.3.1 2 .8 2 .8 1.2 2 3.1 1.4 3.8 1.1.1-.9.5-1.4.9-1.7-2.7-.3-5.6-1.3-5.6-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.2 1.8-.3 2.8-.3s1.9.1 2.8.3c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.7-2.9 5.6-5.6 6 .5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/amishhh-jain"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg
                  class="w-6 h-6 fill-current hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 2.1 6.07 1 7.5 1s2.5 1.1 2.5 2.5S8.93 6 7.5 6 4.98 4.9 4.98 3.5zM.5 8.5h4v12h-4v-12zm6 0h3.6v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.7 4.7 6.1v6.2h-4v-5.4c0-1.3 0-3-1.8-3s-2.2 1.4-2.2 2.9v5.5h-4v-12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/your_handle"
                target="_blank"
                aria-label="X (Twitter)"
              >
                <svg
                  class="w-6 h-6 fill-current hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.61 3H4.39A1.39 1.39 0 003 4.39v15.22A1.39 1.39 0 004.39 21h15.22A1.39 1.39 0 0021 19.61V4.39A1.39 1.39 0 0019.61 3zM17.3 17h-2.04l-2.56-3.28L9.96 17H7.7l3.36-4.35L7.9 7h2.13l2.28 2.93L14.62 7h2.15l-3.36 4.22L17.3 17z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_.amishhh15/"
                target="_blank"
                aria-label="Instagram"
              >
                <svg
                  class="w-6 h-6 fill-current hover:text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 1.5A4.26 4.26 0 003.5 7.75v8.5A4.26 4.26 0 007.75 20.5h8.5a4.26 4.26 0 004.25-4.25v-8.5A4.26 4.26 0 0016.25 3.5h-8.5zM12 7a5 5 0 11-.001 10.001A5 5 0 0112 7zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="bg-yellow-500 text-center text-sm text-green-950 mt-10 p-2 font-bold w-[100%]">
          © 2025 Amish Jain. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;


import React from "react";

const Services = () => {
  return (
    
    <section id="services" class="min-h-screen bg-[#2D4739] text-white py-12 px-4 md:px-8 lg:px-16 flex flex-col items-center overflow-hidden relative">
      <div class="w-full h-12"></div>
      <div class="text-center mb-12">
        <p className="text-xl uppercase tracking-wide text-center text-yellow-500 mb-2 font-bold">
          — Services
        </p>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          What <span class="text-yellow-500">Services</span> 
          <div class="bg-yellow-500 w-[50%] h-0.5 rounded-2xl mx-2 my-0.5"></div>
          We're Offering
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        <div class="bg-transparent p-8 rounded-2xl shadow-xl shadow-green-950 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-md flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M3 19h18a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Webflow development</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              Webflow magic turns visions into reality, when no code is
              preferred and the best part? You're in charge of your content.
              Update a description, add new blog post etc.
            </p>
          </div>
          <a
            href="#"
            class="inline-flex items-center text-yellow-400 font-medium group"
          >
            Start a Project
            <svg
              class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>

        <div class="bg-transparent p-8 rounded-2xl shadow-xl shadow-green-950 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-md flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5l-1-1H9l-1 1v5m4 0h.01M12 12h.01M12 15h.01M12 18h.01"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">UI/UX design</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              We craft pixel-perfect designs with Figma, designing experiences
              that captivate and convert. No chunky layouts, just smooth flows
              that guide your visitors.
            </p>
          </div>
          <a
            href="#"
            class="inline-flex items-center text-yellow-400 font-medium group"
          >
            Start a Project
            <svg
              class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>

        <div class="bg-transparent p-8 rounded-2xl shadow-xl shadow-green-950 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-md flex items-center justify-center mb-4">
              <svg
                class="w-6 h-6 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Web development</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-6">
              We help convert your UI design into real website using the latest
              technology - Tailwind, React & Next JS, so that you can focus on
              growing your business
            </p>
          </div>
          <a
            href="#"
            class="inline-flex items-center text-yellow-400 font-medium group"
          >
            Start a Project
            <svg
              class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

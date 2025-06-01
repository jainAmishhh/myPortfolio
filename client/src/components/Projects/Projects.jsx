import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, ChevronDown } from "lucide-react";

const projectsData = {
  Frontend: [
    {
      title: "Razorpay Clone",
      description:
        "A full-stack clone of Razorpay, a popular Indian payment gateway.",
      details:
        "This clone replicates Razorpay's UI and payment flow using React, TailwindCSS, and a fake backend for testing transactions.",
      link: "https://example.com",
    },
  ],
  MERN: [
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with animated routing and custom UI.",
      details:
        "Built with React, React Router, and TailwindCSS. Includes animations, theme switching, and a contact form.",
      link: "https://example.com",
    },
  ],
  On_Going: [
    {
      title: "TNT",
      description:
        "A MERN-based food community platform with chat and video tutorials.",
      details:
        "Currently under development. Features real-time chat, recipe uploads, and video guides.",
      link: "#",
    },
  ],
};

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (projectKey) => {
    setExpandedProject((prev) => (prev === projectKey ? null : projectKey));
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#2D4739] text-white py-12 px-4"
    >
      <div className="w-full h-16"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-yellow-500 text-center">
          — My Project Showcase
        </h2>

        {Object.entries(projectsData).map(([tech, projects]) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-white border-l-4 border-yellow-500 pl-4">
              {tech} Projects
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => {
                const projectKey = `${tech}-${index}`;
                const isExpanded = expandedProject === projectKey;

                return (
                  <motion.div
                    key={projectKey}
                    onClick={() => toggleExpand(projectKey)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer bg-transparent rounded-2xl p-6 shadow-lg shadow-green-950 border transition-all ${
                      isExpanded ? "border-yellow-500" : "border-transparent"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <Code className="text-yellow-500" />
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          isExpanded
                            ? "rotate-180 text-yellow-500"
                            : "text-gray-400"
                        }`}
                      />
                    </div>

                    <h4 className="text-lg font-semibold text-yellow-500 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {project.description}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 text-sm text-gray-300"
                        >
                          <p className="mb-2">{project.details}</p>
                          {project.link !== "#" && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-yellow-500 hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View Project →
                            </a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

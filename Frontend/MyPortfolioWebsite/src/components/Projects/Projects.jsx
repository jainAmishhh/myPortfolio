import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const projectsData = {
  React: [
    {
      title: 'Recipe Finder',
      description: 'A dynamic food search app with live API calls and animations.',
      link: 'https://example.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio with animated routing and custom UI.',
      link: 'https://example.com',
    },
  ],
  MERN: [
    {
      title: 'Tasty Talks',
      description: 'A MERN-based food community platform with chat and video tutorials.',
      link: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description: 'Full-stack blog system with comments and ratings.',
      link: 'https://example.com',
    },
  ],
  'C++': [
    {
      title: 'DSA Visualizer',
      description: 'Visual representation of data structures using C++ logic.',
      link: 'https://example.com',
    },
  ],
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-[#2D4739] text-white py-12 px-4">
      <div class="w-full h-16"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-yellow-500 text-center">
          My Project Showcase
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
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent rounded-2xl p-6 shadow-lg shadow-green-950 hover:border-yellow-500 transition-all"
                >
                  <div className="flex justify-between items-center mb-3">
                    <Code className="text-yellow-500" />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 hover:text-yellow-500"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h4 className="text-lg font-semibold text-yellow-500 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
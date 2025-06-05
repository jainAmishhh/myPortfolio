import React, { useState } from "react";
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    services: "",
    aboutProject: "",
    message: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contactMe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type");
      if (!res.ok) {
        const errorText = await res.text();
        alert("Failed to send message: " + errorText);
        return;
      }

      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();
        if (data.success) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send message: " + data.message);
        }
      } else {
        alert("Unexpected response format.");
      }
    } catch (error) {
      alert("Something went wrong!");
      console.error("Something went wrong", error);
    }
  };

  return (
    <section
      id="contactMe"
      name="contactMeForm"
      className="bg-[#2D4739] text-white py-16 px-6"
    >
      <div className="w-full h-12"></div>
      <h2 className="text-yellow-500 font-bold text-4xl text-center mb-6">
        — Contact Me
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Let’s work together!
          </h2>
          <p className="text-gray-300 mb-8">
            Excited to work with you on your idea? Tell me about your vision and
            let’s make it real. Fill out the form and I’ll get back to you
            within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-semibold text-sm">
                01. What’s your name?
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleData}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-yellow-400 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm">
                02. What’s your email address?
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleData}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-yellow-400 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm">
                03. What’s your phone number?
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                name="number"
                type="tel"
                placeholder="+91 923xx xxxxx"
                value={formData.number}
                onChange={handleData}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-yellow-500 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm">
                04. What services are you looking for?
              </label>
              <select
                name="services"
                value={formData.services}
                onChange={handleData}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-yellow-500 py-2"
              >
                <option value="" className="text-black">
                  Choose from the list
                </option>
                <option className="text-black">Web Development</option>
                <option className="text-black">UI/UX Design</option>
                <option className="text-black">Full Stack App</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm">
                05. Tell me about your project
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                name="aboutProject"
                type="text"
                placeholder="Project title or idea"
                value={formData.aboutProject}
                onChange={handleData}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-yellow-400 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-sm">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Share your thoughts..."
                value={formData.message}
                onChange={handleData}
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-yellow-400 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Send Message →
            </button>
          </form>
        </div>

        <div className="space-y-10">
          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">Nationality</h4>
            <p>Indian</p>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">Based In</h4>
            <p>Bhopal, India</p>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">Reach Out</h4>
            <p>Email: amishhh.15.jn@gmail.com</p>
            <p>Phone: +91 93697 37943</p>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-2">
              Connect With Me
            </h4>
            <div className="flex gap-4 text-yellow-400 text-2xl">
              <a href="https://github.com/jainAmishhh">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/amishhh-jain">
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/AmishJain423035"
                target="_blank"
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
              <a href="https://www.instagram.com/_.amishhh15/">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-green-950 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <div className="font-bold text-xl">Amish Jain</div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-orange-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-400 hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-400 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-orange-400 hover:underline">
                Experience
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <a
          href="#contactMe"
          className="hidden md:inline-block bg-white text-green-950 px-5 py-2 rounded-full font-bold"
        >
          Contact Me
        </a>

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-950 text-white px-6 pb-4">
          <ul className="space-y-4">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contactMe"
                className="block bg-white text-green-950 px-4 py-2 rounded-full font-bold text-center mt-2"
                onClick={toggleMenu}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

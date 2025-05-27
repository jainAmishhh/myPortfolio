import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-16 py-6 bg-green-950 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="font-bold text-xl">Amish Jain</div>
      <nav>
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
        </ul>
      </nav>
      <a
        href="#contactMe"
        className="bg-white text-green-950 px-5 py-2 rounded-full font-bold"
      >
        Contact Me
      </a>
    </header>
  );
};


export default Header;

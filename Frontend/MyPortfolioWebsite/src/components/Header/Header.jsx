import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center px-16 py-6 bg-green-950 text-white">
        <div className="font-bold text-xl">Amish Jain</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink to='/' className="hover:text-orange-400 hover:underline">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className="hover:text-orange-400 hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' className="hover:text-orange-400 hover:underline">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' className="hover:text-orange-400 hover:underline">
                Services
              </NavLink>
            </li>
          </ul>
        </nav>
        <NavLink
          to='/contactMe'
          className="bg-white text-green-950 px-5 py-2 rounded-full font-bold"
        >
          Contact Me
        </NavLink>
      </header>
    </>
  );
};

export default Header;

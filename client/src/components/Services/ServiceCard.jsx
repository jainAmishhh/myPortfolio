import React from "react";

const ServiceCard = ({ title, shortDescription, iconPath, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-transparent p-8 rounded-2xl shadow-xl shadow-green-950 flex flex-col justify-between hover:border-yellow-500 border border-transparent transition"
    >
      <div>
        <div className="w-12 h-12 bg-yellow-600 bg-opacity-20 rounded-md flex items-center justify-center mb-4">
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={iconPath}
            ></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          {shortDescription}
        </p>
      </div>
      <p className="text-yellow-400 font-medium hover:underline">Read More</p>
    </div>
  );
};

export default ServiceCard;

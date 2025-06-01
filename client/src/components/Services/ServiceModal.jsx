import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2D4739]/30 backdrop-blur-sm flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-green-50 text-green-50 max-w-lg w-full p-8 rounded-2xl relative shadow-2xl"
      >
        <button
          className="absolute top-4 right-4 text-green-900 hover:text-green-600"
          onClick={onClose}
        >
          <X />
        </button>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-md flex items-center justify-center mr-4">
            <svg
              className="w-6 h-6 text-yellow-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={service.iconPath}
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-900">{service.title}</h2>
        </div>
        <p className="text-gray-600 text-sm">{service.fullDescription}</p>
      </motion.div>
    </div>
  );
};

export default ServiceModal;

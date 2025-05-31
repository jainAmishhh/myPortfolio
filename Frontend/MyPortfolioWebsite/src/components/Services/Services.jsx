import React, { useState } from "react";
import servicesData from "./servicesData.js";
import ServiceCard from "./ServiceCard";
import ServiceModal from "./ServiceModal";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="min-h-screen bg-[#2D4739] text-white py-12 px-4 md:px-8 lg:px-16 flex flex-col items-center overflow-hidden relative"
    >
      <div className="w-full h-12"></div>
      <div className="text-center mb-12">
        <p className="text-xl uppercase tracking-wide text-center text-yellow-500 mb-2 font-bold">
          — Services
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          What <span className="text-yellow-500">Services</span>
          <div className="bg-yellow-500 w-[50%] h-0.5 rounded-2xl mx-2 my-0.5"></div>
          We're Offering
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            shortDescription={service.shortDescription}
            iconPath={service.iconPath}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;

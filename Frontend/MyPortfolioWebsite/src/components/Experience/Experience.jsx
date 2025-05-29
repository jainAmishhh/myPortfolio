import React from "react";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";

const educationData = [
  {
    year: "2023 - Present",
    institute: "Lakshmi Narain College Of Technology",
    degree: "B.Tech in Computer Science & Engineering",
    location: "Bhopal, Madhya Pradesh",
    grade: "8.2 CGPA",
  },
  {
    year: "2021 - 2023",
    institute: "Angel's Abode Public School",
    degree: "Higher Secondary Education (PCM)",
    location: "Tikamgarh, Madhya Pradesh",
    grade: "79%",
  },
  {
    year: "2019 - 2021",
    institute: "St. Lawrence School",
    degree: "Matriculation",
    location: "Mahroni, Lalitpur, Uttar Pradesh",
    grade: "85%",
  },
];

const professionalData = [

]

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-16 px-4 text-green-50">
      <div class="w-full h-12"></div>
      <div className="max-w-6xl mx-auto">
        <p className="text-xl uppercase tracking-wide text-center text-yellow-500 mb-2 font-bold">
          — Education & Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-yellow-500">Academic</span> and{" "}
          <span className="text-yellow-500">Professional</span> Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Education Section */}
          <div className="bg-green-50 p-8 rounded-2xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 text-white p-3 rounded-full">
                <GraduationCap />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-green-900">
                Education
              </h3>
            </div>

            <ul className="space-y-6">
              {educationData.map((edu, index) => (
                <li key={index}>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                  <h4 className="text-lg font-semibold text-green-900">
                    {edu.institute}
                  </h4>
                  <p className="text-sm text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-600 italic">{edu.location}</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Grade: {edu.grade}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* You can create a similar block for Work Experience here */}
          <div className="bg-green-50 p-8 rounded-2xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-500 text-white p-3 rounded-full">
                <BriefcaseBusiness />
              </div>
              <h3 className="ml-4 text-2xl font-semibold text-green-900">
                Work
              </h3>
            </div>

            <ul className="space-y-6">
              {professionalData.map((exp, index) => (
                <li key={index}>
                  <p className="text-sm text-gray-500">{exp.year}</p>
                  <h4 className="text-lg font-semibold text-green-900">
                    {exp.institute}
                  </h4>
                  <p className="text-sm text-gray-700">{exp.degree}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

/* eslint-disable no-unused-vars */
import React from "react";
import path_to_image_1 from "../asset/4.png";
import path_to_image_2 from "../asset/5.png";
import path_to_image_3 from "../asset/3.png";

const teamMembers = [
  {
    name: "Biloo Franck",
    title: "Co-founder & CTO",
    image: path_to_image_1,
    bgColor: "bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400",
  },
  {
    name: "Alossa",
    title: "Co-founder & CEO",
    image: path_to_image_2,
    bgColor: "bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400",
  },
  {
    name: "Agu Collins",
    title: "Co-founder & CEO",
    image: path_to_image_3,
    bgColor: "bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400",
  },
];

const OurTeam = () => {
  return (
    <section className=" text-white py-20 px-8 max-w-[1300px] mx-auto">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Text */}
        <div className="w-full md:w-3/4 lg:w-1/2 mb-6 md:mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Our team!
          </h2>
          <p className="text-gray-500 sm:text-gray-400">
            Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            forsitan, si contigerit, quamobrem cum oratio ad ea monstrandam
            deflexerit quae Romae gererentur.
          </p>
        </div>

        {/* Right Section: Team Members */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-[40px] p-6 flex items-center  border-4 border-[#099CF6]  ${member.bgColor}`}
            >
              <div className="flex flex-col items-center w-full text-center">
                <div className="w-24 h-24 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-[40px] "
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-200">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ServicesBox from "./ServicesBox";

const Service = ({ platform, imageUrl }) => {
  return (
    <div className="border-t-8 bg-gray-800 p-4 rounded-3xl md:p-6">
      <img
        src={imageUrl}
        alt={`${platform} thumbnail`}
        className="w-full rounded-lg mb-4"
      />
      <div className="flex flex-col items-start">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
          <span className="text-xs text-purple-500 mb-2 sm:mb-0">
            {platform}
          </span>
          <button className="text-sm text-gray-200 bg-purple-500 px-2 py-1 mt-2 sm:mt-0 sm:ml-4 rounded-xl">
            View more
          </button>
        </div>
        <h3 className="text-lg font-semibold text-white mt-2 sm:mt-4 mb-2">
          Set title
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Banner, Logo, Emoji, Sub title
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between w-full">
          <button className="text-sm text-gray-200 border px-3 py-1 rounded-lg mb-2 sm:mb-0">
            View more
          </button>
          <button className="text-sm text-white bg-orange-500 px-3 py-1 rounded-md">
            Get for $9
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    { platform: "Marketing", imageUrl: "https://via.placeholder.com/150" },
    { platform: "Web Design", imageUrl: "https://via.placeholder.com/150" },
    {
      platform: "Graphics Design",
      imageUrl: "https://via.placeholder.com/150",
    },
    { platform: "Mobile Dev", imageUrl: "https://via.placeholder.com/150" },
    { platform: "Web Dev", imageUrl: "https://via.placeholder.com/150" },
    { platform: "Backend Dev ", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div className=" py-8">
      <h2 className="text-center text-3xl font-semibold text-white mb-8">
        Nos services
      </h2>
      <div className="grid grid-cols-5 md:grid-cols-3 gap-7 px-4 md:px-16">
        {services.map((service, index) => (
          <Service
            key={index}
            platform={service.platform}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

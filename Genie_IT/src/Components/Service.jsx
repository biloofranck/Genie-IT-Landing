<<<<<<< HEAD
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
=======
import React from "react";

import dig from "../asset/digital.webp";
import dev from "../asset/mobile_application_development_ad3f711b7d.jpg";
import graphic from "../asset/graphics.jpg";
import Programming from "../asset/Programming_Languages.png";
import Inspiration from "../asset/Inspiration_.jpg";
import technologies from "../asset/technology.webp";
import ServicesBox from "./ServicesBox";

// ***************************** Importing of Images found in the Asset *************************************//
const services = [
  { platform: "Marketing", imageUrl: dig },
  { platform: "Web Design", imageUrl: dev },
  { platform: "Graphics Design", imageUrl: graphic },
  { platform: "Mobile Dev", imageUrl: Programming },
  { platform: "Web Dev", imageUrl: Inspiration },
  { platform: "Backend Dev ", imageUrl: technologies },
];

const Service = ({ platform, imageUrl }) => {
  return (
    <div className="border-t-8 border-t-[#6e6f9e] bg-[#252935] p-2 rounded-3xl">
      <img
        src={imageUrl}
        alt={`${platform} thumbnail`}
        className="w-full rounded-lg mb-4 h-[250px] object-cover max-[1130px]:h-[200px]"
      />
      <div className=" flex flex-col items-start px-3 pb-3">
        <span className="text-xs text-purple-500 mb-2 bg-[#2d3b5d] px-4 py-1 rounded-3xl">
          {platform}
        </span>

        <h3 className="text-lg font-semibold text-white mb-2">Set title</h3>
        <p className="text-gray-400 text-sm mb-4">
          Banner, Logo, Emoji, Sub title
        </p>
        <div className="flex items-center gap-x-3 w-full">
          <button className="text-sm text-gray-200 border px-6 py-2 rounded-lg">
            View more
          </button>
          <button className="text-sm text-white bg-[#ffb281] px-6 py-2 rounded-md">
>>>>>>> 663986115ab33ba0437c19273c0df20e3f9a2449
            Get for $9
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
<<<<<<< HEAD
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
=======
  // ***************************** Images displayment *************************************//

  return (
    <div className="px-5 py-12 max-w-[1300px] mx-auto max-[410px]:px-0">
      <h2 className="text-center text-5xl font-semibold text-white mb-12">
        Nos services
      </h2>
      <div className="grid lg:grid-cols-3 gap-7 px-4 sm:grid-cols-2 ">
>>>>>>> 663986115ab33ba0437c19273c0df20e3f9a2449
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

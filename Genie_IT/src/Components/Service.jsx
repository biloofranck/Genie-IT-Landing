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
            Get for $9
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  // ***************************** Images displayment *************************************//
// collins changed   
  return (
    <div className="px-5 py-12 max-w-[1300px] mx-auto max-[410px]:px-0">
      <h2 className="text-center text-5xl font-semibold text-white mb-12">
        Nos services
      </h2>
      <div className="grid lg:grid-cols-3 gap-7 px-4 sm:grid-cols-2 ">
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

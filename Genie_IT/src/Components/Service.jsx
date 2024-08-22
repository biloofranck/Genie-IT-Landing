import React from 'react';

import dig from "../asset/digital.webp"
import dev from '../asset/mobile_application_development_ad3f711b7d.jpg';
import graphic from '../asset/graphics.jpg';
import Programming from '../asset/Programming_Languages.png';
import Inspiration from '../asset/Inspiration_.jpg';
import technologies from '../asset/technology.webp';
import ServicesBox from './ServicesBox'

// ***************************** Importing of Images found in the Asset *************************************//
 const services = [
    { platform: 'Marketing', imageUrl: dig },
    { platform: 'Web Design', imageUrl: dev },
    { platform: 'Graphics Design', imageUrl: graphic },
    { platform: 'Mobile Dev', imageUrl: Programming },
    { platform: 'Web Dev', imageUrl: Inspiration },
    { platform: 'Backend Dev ', imageUrl: technologies },
  ];

const Service =({ platform, imageUrl }) => {
  return (
    <div className="border-t-8 border-t-blue-500 bg-gray-800 p-2 rounded-3xl ">
     
      <img src={imageUrl} alt={`${platform} thumbnail`} className="w-full rounded-lg mb-4 h-[200px] object-cover" />
      <div className=" flex flex-col items-start">
        <div>
          <span className="text-xs text-purple-500 mb-2">{platform}</span>
          <button className="text-sm text-gray-200 bg-purple-500 px-2 py-1 ml-20 rounded-xl">View more</button>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Set title</h3>
        <p className="text-gray-400 text-sm mb-4">Banner, Logo, Emoji, Sub title</p>
        <div className="flex justify-between w-full">
          <button className="text-sm text-gray-200 border px-3 py-1 rounded-lg">View more</button>
          <button className="text-sm text-white bg-orange-500 px-3 py-1 rounded-md">Get for $9</button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
 

  // ***************************** Images displayment *************************************//

  return (
   <div className="p-14 py-8">
      <h2 className="text-center text-3xl font-semibold text-white mb-10">Nos services</h2>
      <div className="grid lg:grid-cols-3 gap-7 px-4 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service, index) => (
          <Service key={index} platform={service.platform} imageUrl={service.imageUrl} />
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
import React from 'react';
import marketing-digital from './asset/marketing-digital.webp';
import mobile_application_development_ad3f711b7d from './asset/mobile_application_development.jpg';
import pexels-pixabay-414974 from './asset/pexels-pixabay-414974.jpg';
import Programming_Languages from './asset/Programming_Languages.png';
import Web-Design-Project-Post_Inspiration_ from './asset/Web-Design-Project-Post_Inspiration_.jpg';
import web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-100232725 from './asset/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-100232725.jpg';
import ServicesBox from './ServicesBox'



const Service =({ platform, imageUrl }) => {
  return (
    <div className="border-t-8 border-t-blue-500 bg-gray-800 p-2 rounded-3xl ">
     
      <img src={imageUrl} alt={`${platform} thumbnail`} className="w-full rounded-lg mb-4" />
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
  const services = [
    { platform: 'Marketing', imageUrl: marketing-digital },
    { platform: 'Web Design', imageUrl: mobile_application_development_ad3f711b7d },
    { platform: 'Graphics Design', imageUrl: 'https://via.placeholder.com/150' },
    { platform: 'Mobile Dev', imageUrl: 'https://via.placeholder.com/150' },
    { platform: 'Web Dev', imageUrl: 'https://via.placeholder.com/150' },
    { platform: 'Backend Dev ', imageUrl: 'https://via.placeholder.com/150' },
  ];

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
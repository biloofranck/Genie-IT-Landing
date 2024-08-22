/* eslint-disable no-unused-vars */
import React from "react";
import Box from "./Box";
// ======================================================
// === importing image assets
// ======================================================
import bonom from "../asset/8.png";

const Testimonials = () => {
  return (
    <div className="bg-gray-800 text-white rounded-[60px] m-10 md:m-20 h-auto md:h-[420px] z-0 relative p-6 md:p-10">
      <img
        src={bonom}
        alt="bonom image"
        className="absolute -left-12 -z-10 ml-10 md:ml-20 w-20 md:w-auto"
      />
      <div className="text-center md:text-right">
        <h2 className="text-[40px] md:text-[80px] font-bold mr-0 md:mr-16 pt-4 md:pt-8">
          Avis des experts
        </h2>
        <p className="mt-4 md:mt-8 text-gray-400 italic mb-8 md:mb-14 mx-6 md:mx-0 md:mr-[100px]">
          We will take care of everything else
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 mx-auto px-5 md:px-10">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};
export default Testimonials;

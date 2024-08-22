/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import buns from "../asset/1.png"

const Box = () => {
  return (
    <div className=" ">
    <div className="bg-gray-900 p-6 rounded-[40px] w-full mb-[100px] h-[280px] md:h-[250px] sm:h-auto">
      <p className="italic text-[50px] mt-5 ml-5 sm:text-[30px]">"</p>
      <p className="text-lg italic ml-4 sm:text-base">
        Et quoniam mirari posse quosdam sonare peregrinos
      </p>
      <div className="mt-4">
        <div className="flex items-center">
          <div className="bg-white ml-4 rounded-full w-10 h-10 sm:w-8 sm:h-8">
            <img
              src={buns}
              alt="buns image"
              className="w-6 h-10 ml-2 rounded-full sm:w-4 sm:h-8"
            />
          </div>
          <div className="ml-8 sm:ml-4">
            <p className="mt-2 font-semibold text-base sm:text-sm">Mark Grabbs</p>
            <p className="text-sm text-gray-400 sm:text-xs">Verified Artist</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Box;
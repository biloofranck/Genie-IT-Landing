import React from "react";
import buns from "../asset/1.png"

const Box = () => {
  return (
    <div>
      <div className="bg-gray-900 p-6 rounded-[40px] w-full h-[280px]">
        <p className=" italic text-[50px] mt-5 ml-5 "> "</p>
        <p className="text-lg italic ml-4 ">
          Et quoniam mirari posse quosdam sonare peregrinos
        </p>
        <div className="mt-4">
          <div className="flex">
         <div className="bg-white ml-4 rounded-full w-10 h-10">
         <img
         src={buns}
         alt="buns image"
         className="w-6 h-10 ml-2 rounded-full" />
         </div>
         <div className="ml-8"> 
         <p className="mt-2 font-semibold">Mark Grabbs</p>
         <p className="text-sm text-gray-400">Verified Artist</p>
         </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
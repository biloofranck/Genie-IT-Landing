/* eslint-disable no-unused-vars */
import React from "react";
import Box from "./Box";
// ======================================================
// === importing image assets
// ======================================================
import bonom from "../asset/man.png";

const Testimonials = () => {
  return (
    <div className="mx-5">
      <div className="bg-[#242834] mx-auto max-w-[1300px] p-10 pt-8 pb-24 lg:rounded-[80px] rounded-3xl text-white max-[590px]:pb-28">
        {/*  */}
        <div className="flex justify-between items-center lg:px-16 px-1">
          <div>
            <h2 className="xl:text-8xl lg:text-6xl text-4xl">
              Avis des experts
            </h2>
            <p className="pt-10 italic text-gray-400">
              We will take care of everything else
            </p>
          </div>
          <img
            src={bonom}
            alt="bonom image"
            className="max-w-[300px] max-[700px]:max-w-[200px] max-[590px]:hidden"
          />
        </div>
      </div>
      {/*  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 xl:px-40 px-14 -translate-y-24 max-[590px]:px-5">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};
export default Testimonials;

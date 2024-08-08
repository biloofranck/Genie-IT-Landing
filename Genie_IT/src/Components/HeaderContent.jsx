import React from "react";
// ======================================================
// === importing image
// ======================================================
import logoRep from "../asset/34.png";
import playIcon from "../asset/15.png";
import search from "../asset/12.png";
import hand from "../asset/9.png";
import lock from "../asset/11.png";

const HeaderContent = () => {
  return (
    <div className="flex items-center relative z-0">
      <img
        src={hand}
        alt="header hand icon"
        className="absolute blur-[3px] -bottom-2 rotate-12 right-0 w-20 -z-10"
      />
      <div className="flex-1 mb-10">
        <h1 className="text-8xl text-white">
          Find the best <span className="text-7xl">with </span>
          <span className="text-[#00aff1] text-7xl">Genie iT.</span>
        </h1>
        <p className="text-[#8790a2] my-6">
          Landing page, <br /> Youtube banner, twitch and many other !
        </p>
        <div className="flex items-center gap-x-6">
          <button className="bg-[#00aff1] text-white py-3 px-16 rounded-xl">
            Find design
          </button>
          <button className="flex items-center gap-x-2 bg-transparent border border-[#8790a2]] text-white py-3 px-16 rounded-xl">
            <img src={playIcon} alt="play icon" className="w-5" />
            Intro Video
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative">
        <img
          src={search}
          alt="search icon"
          className="absolute top-32 left-24 w-20 -rotate-90 blur-[1.5px]"
        />
        <img
          src={logoRep}
          alt="header logo representative"
          className="w-[530px] translate-x-10"
        />
        <img
          src={lock}
          alt="header lock image"
          className=" absolute -bottom-40 left-0 w-36 blur-sm -z-10 rotate-[25deg]"
        />
      </div>
    </div>
  );
};

export default HeaderContent;

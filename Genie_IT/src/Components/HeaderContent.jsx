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
    <div className="flex items-center relative z-0 max-[760px]:flex-col">
      <img
        src={hand}
        alt="header hand icon"
        className="absolute blur-[3px] -bottom-2 rotate-12 right-0 w-20 -z-10"
      />
      <div className="flex-1 mb-10">
        <h1 className="text-8xl text-white max-[1345px]:text-6xl">
          Find the best <span className="text-7xl max-[1345px]:text-5xl">with </span>
          <span className="text-[#00aff1] text-7xl max-[1345px]:text-5xl">Genie iT.</span>
        </h1>
        <p className="text-[#8790a2] my-6 max-[325px]:text-sm">
          Landing page, <br /> Youtube banner, twitch and many other !
        </p>
        <div className="flex items-center gap-x-6 max-[375px]:gap-x-3">
          <button className="bg-[#00aff1] text-white py-3 px-16 rounded-xl max-[1090px]:px-10 max-[822px]:px-5 max-[325px]:text-sm max-[325px]:py-2 max-[325px]:px-3">
            Find design
          </button>
          <button className="flex items-center gap-x-2 bg-transparent border border-[#8790a2] text-white py-3 px-16 rounded-xl max-[1090px]:px-10 max-[822px]:px-5 max-[325px]:text-sm max-[325px]:py-2 max-[325px]:px-3">
            <img src={playIcon} alt="play icon" className="w-5" />
            Intro Video
          </button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center relative max-[760px]:justify-end max-[760px]:w-[80%]">
        <img
          src={search}
          alt="search icon"
          className="absolute top-32 left-24 w-20 -rotate-90 blur-[1.5px] max-[1450px]:left-10 max-[1345px]:-left-5 max-[1250px]:-left-16 max-[940px]:-left-5 max-[860px]:scale-90 max-[760px]:left-[55%] max-[760px]:-top-20 max-[625px]:-z-10 max-[625px]:scale-75 max-[625px]:-top-52"
        />
        <img
          src={logoRep}
          alt="header logo representative"
          className="w-[530px] translate-x-10 max-[1450px]:translate-x-4 max-[1345px]:-translate-x-10 max-[940px]:-translate-x-5  max-[860px]:-translate-y-5 max-[760px]:w-52 max-[760px]:-translate-y-44 max-[760px]:translate-x-0 max-[705px]:-translate-y-64 max-[705px]:translate-x-5 max-[705px]:scale-90 max-[625px]:translate-x-20 max-[570px]:scale-75 max-[510px]:absolute max-[510px]:top-0 max-[510px]:-right-5 max-[510px]:scale-50 max-[505px]:-top-6 max-[505px]:-right-14 max-[505px]:scale-[0.3] max-[500px]:-top-14 max-[418px]:hidden"
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

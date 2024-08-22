/* eslint-disable no-unused-vars */
import React from "react";

// ======================================================
// === importing components
// ======================================================
import Nav from "./Nav";
import HeaderContent from "./HeaderContent";

import polygon from "../asset/polygon.png";
import timer from "../asset/10.png";
import phone from "../asset/14.png";

const Header = () => {
  return (
    <div className="relative min-[1300px]:w-fit min-[1300px]:px-32 min-[1300px]:mx-auto">
      <img
        src={polygon}
        alt="header polygon image"
        className="absolute -top-10 -right-12  scale-105 max-[1250px]:scale-90 max-[1250px]:-right-32 max-[1060px]:scale-75 max-[1060px]:-top-20 max-[1060px]:-right-40 max-[760px]:scale-90 max-[705px]:-top-10 max-[625px]:top-0 max-[570px]:top-20 max-[510px]:scale-150 max-[510px]:top-32 max-[510px]:right-0 max-[414px]:hidden max-[510px]:-z-50"
      />
      <img
        src={phone}
        alt="header timer image"
        className=" absolute top-48 right-8 w-32 blur-sm -z-10 rotate-[25deg]"
      />

      <div className="max-w-[1300px] mx-auto min-h-screen relative z-0 pb-6 max-[1300px]:max-w-full max-[1300px]:mx-20 max-[880px]:mx-10 max-[375px]:mx-5 min-[1250px]:min-h-fit max-[760px]:min-h-[80vh]">
        <img
          src={timer}
          alt="header timer image"
          className=" absolute -top-24 right-[15%] w-52 blur-sm -z-10"
        />
        <Nav />
        <HeaderContent />
      </div>
    </div>
  );
};

export default Header;

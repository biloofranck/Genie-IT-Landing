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
    <div className="relative z-0">
      <img
        src={polygon}
        alt="header polygon image"
        className="absolute -top-10 -right-12 -z-10 scale-105"
      />
      <img
        src={phone}
        alt="header timer image"
        className=" absolute top-48 right-8 w-32 blur-sm -z-10 rotate-[25deg]"
      />

      <div className="max-w-[80%] mx-auto min-h-screen relative z-0 pb-6">
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

import React from "react";
// ======================================================
// === importing image
// ======================================================
import logo from "../asset/33.png";

const Nav = () => {
  return (
    <div className="flex py-14 items-center text-[#8790a2]">
      <div className="w-[250px] self-start">
        <img src={logo} alt="this is the website logo" className="w-52" />
      </div>
      <div className="flex gap-x-8 flex-1 items-center justify-center font-medium">
        <p className="text-white">Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Portfolio</p>
        <p>Contact</p>
      </div>
      <div className="w-[250px] flex items-center justify-end gap-x-7">
        <p>Log in</p>
        <p className="border border-[#8790a2] text-white py-2 px-8 rounded-3xl">
          Sign up
        </p>
      </div>
    </div>
  );
};

export default Nav;

import React from "react";
// ======================================================
// === importing image
// ======================================================
import logo from "../asset/33.png";

const Nav = () => {
  return (
    <div className="flex py-14 items-center text-[#8790a2]">
      <div className="w-[250px] self-start max-[1000px]:w-[150px]">
        <img src={logo} alt="this is the website logo" className="w-52" />
      </div>
      <div className="flex-1 flex flex-row max-[1160px]:flex-col max-[1160px]:fixed max-[1160px]:top-0 max-[1160px]:bottom-0 max-[1160px]:right-0 max-[1160px]:bg-[#363f46] max-[1160px]:z-40 max-[1160px]:py-10 max-[1160px]:px-5 max-[1160px]:hidden">
        <div className="flex gap-x-8 flex-1 items-center justify-center font-medium  max-[1160px]:flex-col  max-[1160px]:gap-y-4">
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
    </div>
  );
};

export default Nav;

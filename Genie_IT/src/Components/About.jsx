import React from "react";
import pc from "../asset/13.png";
import phone from "../asset/14.png";
import timer from "../asset/10.png";
import CalenderIcon from "../asset/17.png";
import StopWatchIcon from "../asset/18.png";

const About1 = () => {
  return (
    <section className=" mx-auto items-center mt-8">
      
      <div className="relative bg-gradient-to-b from-[#099bf683] to-[#00d9e8f3] w-[350px] sm:w-[500px] md:w-[900px] h-[80vh]  rounded-[30px] mb-12 pt-1 mx-auto  ">
        <div className="bg-[#225e8383] h-[70%] rounded-t-3xl mx-1  text-white flex flex-col  md:flex-row">
          <img src={pc} className="w-[700px] h-[400px] md:w-[900px] md:h-[600px] md:-ml-28 " alt="pc-icon" />
          <div className="flex flex-col mx-auto  -mt-24 md:mt-24 md:-ml-20 text-center md:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl md:mt-8  ">Why Genie iT is a new begging</h2>
            <p className="text-slate-600 mt-4 md:mt-8 md:pr-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Harum modi alias illum mollitia fugiat odit voluptatum vel adipisci eos unde perspiciatis.
            </p>
            <button className="bg-[#00d9e8f3] max-w-[50%] py-3 px-4 mx-auto md:mx-2 mt-4  md:mt-8 rounded-3xl">Find Our Designs</button>
          </div>
        </div>
        <div className="absolute top-0 -right-12 ">
          <img src={timer} className=" blur-sm" alt="sand-timer-img" />
        </div>
        <div className="absolute bottom-4 -left-12">
          <img
            src={phone}
            className="  rotate-45 blur-sm"
            alt="phone-img"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mt-4 md:my-12 mx-auto ">
        <div className="flex divide-x-2 divide-violet-900 mb-4">
          <div>
            <img src={CalenderIcon} className="w-[70px]" alt="" />
          </div>
          <div className="pl-4">
            <span className="text-slate-200 text-2xl font-medium">
              Best qualities
            </span>
            <p className="text-md text-slate-500 font-medium w-[200px]">
              Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            </p>
          </div>
        </div>
        <div className="flex divide-x-2 divide-violet-900 mb-4">
          <div>
            <img src={StopWatchIcon} className="w-[70px]" alt="" />
          </div>
          <div className="pl-4">
            <span className="text-slate-200 text-2xl font-medium">
              +100 templates
            </span>
            <p className="text-md text-slate-500 font-medium w-[200px]">
              Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            </p>
          </div>
        </div>
        <div className="flex divide-x-2 divide-violet-900 mb-4">
          <div>
            <img src={StopWatchIcon} className="w-[70px]" alt="" />
          </div>
          <div className="pl-4">
            <span className="text-slate-200 text-2xl font-medium">
              For all social media
            </span>
            <p className="text-md text-slate-500 font-medium w-[200px]">
              Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            </p>
          </div>
        </div>
        <div className="flex divide-x-2 divide-violet-900">
          <div>
            <img src={StopWatchIcon} className="w-[70px]" alt="" />
          </div>
          <div className="pl-4">
            <span className="text-slate-200 text-2xl font-medium">
              Lorem Ipsum
            </span>
            <p className="text-md text-slate-500 font-medium w-[200px]">
              Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;

import React from "react";
import pc from "../asset/13.png";
import phone from "../asset/14.png";
import timer from "../asset/10.png";
import CalenderIcon from "../asset/17.png";
import StopWatchIcon from "../asset/18.png";

const About = () => {
  return (
    <section>
      <div className=" relative container bg-gradient-to-b from-[#099bf683] to-[#00d9e8f3] mx-auto rounded-[30px] w-[1000px] h-[500px] px-1 pt-1">
        <div className="bg-[#225e8383] w-[100%] h-[80%] rounded-t-3xl ">
          <div className=" absolute top-0 flex">
            <img src={pc} className="w-[900px] h-[620px] -ml-28 -mt-4" alt="" />
            <div className="mt-24 -ml-16 pr-12">
              <span className="text-slate-200 font-semibold text-5xl pr-3">
                Why Genie iT is a new begging
              </span>
              <p className="mt-6 text-xl font-medium text-slate-700 sm:">
                Et quoniam mirari posse quosdam peregrinos existimo haec
                lecturos forsitan, si contigerit, quamobrem cum oratio ad ea
                monstranda deflexerit quae Romae gererentur
              </p>
              <button className="bg-[#099CF6] px-8 py-2 text-slate-100 text-lg font-semibold my-2 mt-4  rounded-3xl ">
                Find my design
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={phone}
            className="w-[200px] h-[200px] rotate-45 -ml-24 -mt-16 blur-sm"
            alt=""
          />
        </div>
        <div className="absolute top-0 -right-28">
          <img src={timer} className="w-[200px] h-[200px] blur-sm " alt="" />
        </div>
      </div>

      <div className="flex gap-24 justify-center mt-28  ">
        <div className="flex divide-x-2 divide-violet-900">
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
        <div className="flex divide-x-2 divide-violet-900">
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
        <div className="flex divide-x-2 divide-violet-900">
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

export default About;

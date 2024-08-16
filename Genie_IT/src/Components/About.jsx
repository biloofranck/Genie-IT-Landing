import React from "react";
import pc from "../asset/13.png";
import phone from "../asset/14.png";
import timer from "../asset/10.png";
import CalenderIcon from "../asset/17.png";
import StopWatchIcon from "../asset/18.png";

const About1 = () => {
  return (
    <section>
      <div className=" relative container  bg-gradient-to-b from-[#099bf683] to-[#00d9e8f3] mx-auto rounded-[30px] w-[100%] h-[100vh] ">
        <div className="bg-[#225e8383] w-[100%] h-[80%] rounded-t-3xl  ">
          <div className=" flex flex-col mx-auto justify-center items-center p-0  ">
            <img src={pc} className="w-full h-[50%]  ml-8mx-auto" alt="" />
            <div className=" ">
              <span className="text-white font-bold text-[50px]">
                Why Genie iT is a new begging
              </span>
              <p className="mt-6 text-xl font-medium text-slate-600 ">
                Et quoniam mirari posse quosdam peregrinos existimo haec
                lecturos forsitan, si contigerit, quamobrem cum oratio ad ea
                monstranda deflexerit quae Romae gererentur
              </p>
              <button className="bg-[#099CF6] px-8 py-2 text-slate-100 text-lg font-semibold   rounded-3xl ">
                Find my design
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={phone}
            className="w-[150px] h-[150px] rotate-45 -ml-24 -mt-16 blur-sm"
            alt=""
          />
        </div>
        <div className="absolute top-0 -right-28">
          <img src={timer} className="w-[200px] h-[200px] blur-sm " alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4  gap-24 justify-center mt-36   ">
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

export default About1;

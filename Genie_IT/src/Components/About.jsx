import React from "react";
import pc from "../asset/pc.png";
import phone from "../asset/14.png";
import timer from "../asset/10.png";
import CalenderIcon from "../asset/17.png";
import StopWatchIcon from "../asset/18.png";

const About1 = () => {
  return (
    // <section className=" mx-auto items-center mt-8">
    //   <div className=" bg-gradient-to-b from-[#099bf683] to-[#00d9e8f3] w-[350px] sm:w-[500px] md:w-[1200px] h-[80vh]  rounded-[30px] mb-12 pt-1 mx-auto  ">
    //     <div className="bg-[#225e8383] h-[70%] rounded-t-3xl mx-1  text-white flex flex-col  md:flex-row">
    //       <img src={pc} className="w-[700px] h-[400px] md:w-[900px] md:h-[600px] md:-ml-28 " alt="pc-icon" />
    //       <div className="flex flex-col mx-auto  -mt-24 md:mt-24 md:-ml-20 text-center md:text-left">
    //         <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl md:mt-8  ">Why Genie iT is a new begging</h2>
    //         <p className="text-slate-600 mt-4 md:mt-8 md:pr-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //           Harum modi alias illum mollitia fugiat odit voluptatum vel adipisci eos unde perspiciatis.
    //         </p>
    //         <button className="bg-[#00d9e8f3] max-w-[50%] py-3 px-4 mx-auto md:mx-2 mt-4  md:mt-8 rounded-3xl">Find Our Designs</button>
    //       </div>
    //     </div>
    //     <div className="absolute top-0 -right-12">
    //       <img src={timer} className=" blur-sm" alt="sand-timer-img" />
    //     </div>
    //     <div className="absolute bottom-4 -left-12">
    //       <img
    //         src={phone}
    //         className="  rotate-45 blur-sm"
    //         alt="phone-img"
    //       />
    //     </div>
    //   </div>

    //   <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center items-center mt-4 md:my-12 mx-auto ">
    //     <div className="flex divide-x-2 divide-violet-900 mb-4">
    //       <div>
    //         <img src={CalenderIcon} className="w-[70px]" alt="" />
    //       </div>
    //       <div className="pl-4">
    //         <span className="text-slate-200 text-2xl font-medium">
    //           Best qualities
    //         </span>
    //         <p className="text-md text-slate-500 font-medium w-[200px]">
    //           Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex divide-x-2 divide-violet-900 mb-4">
    //       <div>
    //         <img src={StopWatchIcon} className="w-[70px]" alt="" />
    //       </div>
    //       <div className="pl-4">
    //         <span className="text-slate-200 text-2xl font-medium">
    //           +100 templates
    //         </span>
    //         <p className="text-md text-slate-500 font-medium w-[200px]">
    //           Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex divide-x-2 divide-violet-900 mb-4">
    //       <div>
    //         <img src={StopWatchIcon} className="w-[70px]" alt="" />
    //       </div>
    //       <div className="pl-4">
    //         <span className="text-slate-200 text-2xl font-medium">
    //           For all social media
    //         </span>
    //         <p className="text-md text-slate-500 font-medium w-[200px]">
    //           Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
    //         </p>
    //       </div>
    //     </div>
    //     <div className="flex divide-x-2 divide-violet-900">
    //       <div>
    //         <img src={StopWatchIcon} className="w-[70px]" alt="" />
    //       </div>
    //       <div className="pl-4">
    //         <span className="text-slate-200 text-2xl font-medium">
    //           Lorem Ipsum
    //         </span>
    //         <p className="text-md text-slate-500 font-medium w-[200px]">
    //           Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="max-w-[1450px] mx-auto px-20 max-[880px]:px-10 max-[460px]:px-4 max-[920px]:overflow-hidden">
      <div className="relative bg-red600">
        <img
          src={phone}
          alt="Phone image"
          className="absolute bottom-8 -left-12 rotate-[25deg] blur-sm scale-110 max-[640px]:-z-20"
        />
        <img
          src={timer}
          alt="Phone image"
          className="absolute -right-14 top-24  blur-[2px] scale-110 -z-10"
        />
        <div className="relative -z-20 overflow-hidden flex items-center py-5 px-10 pb-14 w-full bg-[#2a72a0] mt-40 border-4 border-[#0f83d8] rounded-[70px] max-[1060px]:mt-20 max-[950px]:pb-10 max-[725px]:px-4 max-[725px]:flex-col max-[860px]:mt-5 max-[510px]:-z-10">
          <div className="flex-1 flex items-center justify-center">
            <img src={pc} alt="icon of a computer" className="max-[725px]:w-[80%]" />
          </div>
          <div className="flex-[1.2] text-white z-50 max-[725px]:mb-10 ">
            <div className=" max-w-[450px]">
              <h2 className="text-6xl max-[1150px]:text-4xl max-[880px]:text-2xl">Why Genie iT is a new begging</h2>
              <p className="py-6 italic text-gray-400 max-[950px]:py-2 max-[880px]:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam illo veniam earum, dolor possimus, vitae repellendus
                doloremque vel debitis dignissimos facilis dolores officia sed
                numquam?
              </p>
              <button className="bg-[#099cf6] shadow-lg px-10 py-2 rounded-3xl max-[880px]:text-sm">
                Find my Design
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-[#00d1e9] py-11 -z-30 max-[950px]:py-8"></div>
        </div>
      </div>
      <div className="py-20 bg-red-600"></div>
    </section>
  );
};

export default About1;

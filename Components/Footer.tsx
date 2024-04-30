import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const Footer = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="">
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Address
            </h1>
            <p className="text-[16px] w-[90%] text-white opacity-60">
              F-176, Beta II, Greater Noida
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="">
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Phone No
            </h1>
            <p className="text-[16px] w-[100%] text-white opacity-60">
              +91-7827449252
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
            <EnvelopeIcon className="md:w-[6rem] md:h-[5rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div className="">
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Send Email
            </h1>
            <p className="text-[16px] w-[90%] text-white opacity-60">
              fiitjeeashishkumar@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-40 hidden md:block">
          ASHISH KUMAR | PORTFOLIO
        </div>
        <div className="flex items-center space-x-10">
          <a className="text-white text-[15px] hover:bg-yellow-400 transition-all duration-250 lg:w-[20%] w-[50%] bg-blue-700 h-[3rem] flex items-center justify-center" href="https://github.com/AashishKr27" target="_blank">GitHub</a>
          <a className="text-white text-[15px] hover:bg-yellow-400 transition-all duration-250 lg:w-[20%] w-[50%] bg-blue-700 h-[3rem] flex items-center justify-center" href="https://www.linkedin.com/in/ashish-kumar-3a692b2b4/" target="_blank">LinkedIN</a>
          <a className="text-white text-[15px] hover:bg-yellow-400 transition-all duration-250 lg:w-[20%] w-[50%] bg-blue-700 h-[3rem] flex items-center justify-center" href="https://leetcode.com/u/Ashish_Kumar_Sa_2003/" target="_blank">LeetCode</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

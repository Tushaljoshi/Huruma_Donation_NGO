import React from "react";
import { PlayCircle } from "lucide-react";

const AboutSection = () => {
  const openVideo = () => {
    window.open("https://youtu.be/uemObN8_dcw", "_blank");
  };

  return (
    <section className="py-12 mb-[-200] mt-10 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-wide">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 leading-snug">
            An International Independent Charity Organization
          </h2>
          <h1 className="text-orange-500 mb-4 text-base sm:text-lg">
            Your support will help us to make life better living for poor vulnerable children consectetur adipisicing elit.
          </h1>
          <p className="text-gray-600 italic mb-6 text-sm sm:text-base">
            Konin wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 sm:px-10 sm:py-4 rounded-md hover:bg-[#2c2546] transition">
              Donate Now
            </button>
            <button className="bg-[#2c2546] text-white px-6 py-3 sm:px-10 sm:py-4 rounded-md hover:bg-orange-100 transition">
              More About Us
            </button>
          </div>
        </div>
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[350px]">
          <img
            src="https://img.freepik.com/free-photo/volunteers-holding-donation-boxes_53876-124515.jpg"
            alt="About Us"
            className="absolute top-0 left-0 w-2/3 sm:w-[70%] rounded-lg shadow-lg object-cover h-[60%] sm:h-[65%]"
          />
          <img
            src="https://img.freepik.com/free-photo/group-young-volunteers_23-2148961532.jpg"
            alt="Volunteers"
            className="absolute bottom-0 right-0 w-1/2 sm:w-[50%] rounded-lg shadow-xl border-4 border-white object-cover h-[50%] sm:h-[55%]"
          />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={openVideo}
              className="relative w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-full text-orange-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="absolute w-full h-full rounded-full bg-orange-500 opacity-20 animate-ping z-[-1]"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

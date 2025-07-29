import React from "react";
import { PlayCircle } from "lucide-react";

const AboutSection = () => {
  const openVideo = () => {
    window.open("https://youtu.be/uemObN8_dcw", "_blank");
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-wide">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-snug">
            An International Independent Charity Organization
          </h2>
          <h1 className="text-orange-500 mb-4">
           Your support will help us to make life better living for poor vulnerable children consectetur adipisicing elit.
          </h1>
          <p className="text-gray-600 italic mb-6">
            Konin wansis dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-10 py-4 rounded-md hover:bg-[#2c2546]  transition">
              Donate Now
            </button>
            <button className="bg-[#2c2546]  text-white px-10 py-4 rounded-md hover:bg-orange-100 transition">
              More About Us
            </button>
          </div>
        </div>

        {/* Image Grid with Play Button */}
        <div className="relative w-full h-[350px]">
          <img
            src="https://img.freepik.com/free-photo/volunteers-holding-donation-boxes_53876-124515.jpg"
            alt="About Us"
            className="absolute top-0 left-0 w-2/3 rounded-lg shadow-lg"
          />
          <img
            src="https://img.freepik.com/free-photo/group-young-volunteers_23-2148961532.jpg"
            alt="Volunteers"
            className="absolute bottom-0 right-0 w-1/2 rounded-lg shadow-xl border-4 border-white"
          />

          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={openVideo}
              className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            >
              <PlayCircle className="w-10 h-10 md:w-12 md:h-12" />
              {/* Pulse Animation */}
              <span className="absolute w-full h-full rounded-full bg-orange-500 opacity-50 animate-ping z-[-1]"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

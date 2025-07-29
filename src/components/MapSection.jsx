import React from "react";
import mapImage from "/dotted.avif"; // Update the path as per your folder

const StateSupportSection = () => {
  const supportData = [
    { country: "Australia", percent: 68, color: "bg-orange-500" },
    { country: "Argentina", percent: 90, color: "bg-indigo-900" },
    { country: "Netherland", percent: 95, color: "bg-cyan-500" },
  ];

  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h5 className="text-orange-500 font-semibold mb-2">🔥 Our Area</h5>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            People Generous Is Your State
          </h2>
          <p className="text-gray-500 mb-6">
            We are working wansis dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>
          <p className="text-gray-500 mb-10">
            incididunt ut labore et dolore labore et dolore.
          </p>

          {supportData.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{item.country}</span>
                <span className="text-gray-800 font-semibold">{item.percent}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className={`h-2 rounded-full ${item.color}`}
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Map with Country Labels */}
        <div className="relative w-full h-full">
          <img
            src={mapImage}
            alt="World Map"
            className="w-full h-auto object-contain"
          />

          {/* Labels — position these absolutely */}
          {/* Australia */}
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2">
            <div className="flex flex-col items-center space-y-1">
              <div className="bg-white px-3 py-1 rounded shadow text-orange-500 text-sm">
                Australia
              </div>
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
            </div>
          </div>

          {/* Argentina */}
          <div className="absolute top-[40%] left-[30%] -translate-x-1/2">
            <div className="flex flex-col items-center space-y-1">
              <div className="bg-white px-3 py-1 rounded shadow text-orange-500 text-sm">
                Argentina
              </div>
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
            </div>
          </div>

          {/* Netherland */}
          <div className="absolute bottom-[20%] left-[45%] -translate-x-1/2">
            <div className="flex flex-col items-center space-y-1">
              <div className="bg-white px-3 py-1 rounded shadow text-orange-500 text-sm">
                Netherland
              </div>
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StateSupportSection;

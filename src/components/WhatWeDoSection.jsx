import React from "react";
import { GraduationCap, Stethoscope, Users, Droplet } from "lucide-react";

const WhatWeDoSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold flex items-center justify-center gap-2">
            <span className="text-xl"></span> What We Do
          </p>
          <h2 className="text-4xl font-extrabold text-slate-800 mt-3 mb-4 font-serif">
            A Mission To Solve A Problem
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Quis ipsum suspendice consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendices gravida.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded border border-orange-200 text-center hover:bg-orange-50">
            <GraduationCap className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Education Facilities
            </h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet
              Rem in dolor
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded border border-orange-200 text-center hover:bg-orange-50">
            <Stethoscope className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Medical Facilities
            </h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet
              Rem in dolor
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded border border-orange-200 text-center hover:bg-orange-50">
            <Users className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Healthy Food
            </h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet
              Rem in dolor
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded border border-orange-200 text-center hover:bg-orange-50">
            <Droplet className="mx-auto h-10 w-10 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Pure Water
            </h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. amet
              Rem in dolor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;

import React from "react";
import { motion } from "framer-motion";

const HelpSection = () => {
  return (
    <div className="relative bg-[#2c234d] text-white py-16 overflow-hidden">
      {/* Floating Leaves */}
      <motion.img
        src="/leaf2.png"
        alt="Leaf Left"
        className="absolute left-0 top-1/2 w-28 transform -translate-y-1/2"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src="/leaf2.png"
        alt="Leaf Right"
        className="absolute right-0 top-1/2 w-28 transform -translate-y-1/2"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
            <motion.img
        src="/leaf2.png"
        alt="Leaf Left"
        className="absolute left-5 top-1 w-28 transform -translate-x-1/2"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.img
        src="/leaf2.png"
        alt="Leaf Right"
        className="absolute right-5  top-1 w-28 transform -translate-y-1/2"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Want You Know How Can Help?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Toiken ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididuntlabore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#2c2546] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-500 transition">
            Donate Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;

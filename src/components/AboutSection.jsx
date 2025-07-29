import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-wide">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 leading-snug">
            An International Independent Charity Organization
          </h2>
          <p className="text-gray-700 mb-4">
            We’re a non-profit organization working in multiple countries helping underprivileged children, 
            supporting education, health, and overall well-being of families in need. Our mission is rooted 
            in love, compassion, and dignity for all.
          </p>
          <p className="text-gray-600 italic mb-6">
            “We believe in empowering lives through community support and charitable outreach.”
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition">
              Join With Us
            </button>
            <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-md hover:bg-orange-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Grid */}
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

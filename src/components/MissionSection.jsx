import React, { useState } from "react";
import missionImage from "/Mission.jpg";

const tabData = {
  "Our Mission": {
    title: "Concern About Our Mission",
    content: [
      "Magna hpsum rolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, soluta, aspernatur."
    ]
  },
  "Our Vision": {
    title: "We Believe in the Power of Unity",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pulvinar nunc. Integer id semper metus.",
      "Ut fermentum mauris in pharetra pulvinar. Suspendisse id risus nec lorem aliquet tincidunt."
    ]
  },
  "Our Goal": {
    title: "Our Goal is Helping People in Need",
    content: [
      "Fusce tincidunt sapien sed libero eleifend vulputate. Integer vel gravida nisi. Vestibulum a felis velit.",
      "Sed vulputate, justo ut ultricies tincidunt, ex elit placerat ante, sed porta erat arcu eget urna."
    ]
  }
};

const MissionSection = () => {
  const [activeTab, setActiveTab] = useState("Our Mission");

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 bg-white px-4 md:px-16">
      <div className="px-10 md:w-1/2 mb-6 md:mb-0 postion-sticky top-0">
        <img
          src={missionImage}
          alt="Mission"
          className="rounded-lg w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 relative">
        <p className="text-orange-500 font-semibold mb-4 flex items-center gap-2">
         Our Mission
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
          {tabData[activeTab].title}
        </h2>
        <div className="flex space-x-8 border-b mb-4 text-gray-700 font-medium">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-all duration-200 ${
                activeTab === tab
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "hover:text-orange-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="text-gray-600 space-y-4 mb-6">
          {tabData[activeTab].content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
        <div className="flex items-center">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Our Mission →
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

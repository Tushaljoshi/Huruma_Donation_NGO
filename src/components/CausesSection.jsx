import React from "react";
import waterImg from "/water.jpg";
import educationImg from "/education.jpg";

const causes = [
  {
    id: 1,
    title: "Clean Water for Africa",
    image: waterImg,
    description:
      "Help us provide clean and safe drinking water to remote villages where water scarcity is a daily struggle.",
    raised: 45000,
    goal: 75000,
  },
  {
    id: 2,
    title: "Food for Malnourished Children",
    image: educationImg,
    description:
      "Help us provide clean and safe drinking water to remote villages where water scarcity is a daily struggle.",
    raised: 32000,
    goal: 50000,
  },
  {
    id: 3,
    title: "Education for All",
    image: educationImg,
    description:
      "We aim to build schools and offer learning supplies to ensure education is accessible for every child.",
    raised: 60000,
    goal: 100000,
  },
];

const CausesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wide">
            Causes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Explore Our Latest Causes
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your donations can help us change lives. Browse our causes below and
            contribute to what matters most to you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause) => {
            const percentage = Math.min(
              (cause.raised / cause.goal) * 100,
              100
            );

            return (
              <div
                key={cause.id}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-56 object-cover"
                />

                {/* Content Card */}
                <div className="relative bg-[#2c2546] z-10 -mt-6 mx-15 p-10 rounded-t-lg shadow-lg overflow-hidden">
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition duration-300 z-0 rounded-t-lg" />

                  {/* Content */}
                  <div className="relative  border-radius-20 z-10">
                    <h3 className="text-xl text-white font-semibold mt-1 mb-2">
                      {cause.title}
                    </h3>
                    <p className="text-sm text-white mb-4">
                      {cause.description}
                    </p>

                    {/* Progress */}
                    <div className="mb-3">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-2 bg-orange-500 rounded-full"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-white mt-1">
                        <span>Raised: ₹{cause.raised.toLocaleString()}</span>
                        <span>Goal: ₹{cause.goal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-full font-medium hover:bg-orange-600 transition">
                      Donate Now →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;

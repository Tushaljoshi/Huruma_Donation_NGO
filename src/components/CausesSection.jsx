import React from "react";
import waterImg from '../assets/water.jpg';
import foodImg from '../assets/food.jpg';
import educationImg from '../assets/education.jpg';

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
    image: foodImg,
    description:
      "Support our food drive to fight hunger and malnutrition among children in need.",
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
          <span className="text-orange-500 font-semibold uppercase tracking-wide">Causes</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Explore Our Latest Causes
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your donations can help us change lives. Browse our causes below and contribute to what matters most to you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause) => {
            const percentage = Math.min((cause.raised / cause.goal) * 100, 100);

            return (
              <div key={cause.id} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cause.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-orange-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>Raised: ₹{cause.raised.toLocaleString()}</span>
                      <span>Goal: ₹{cause.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
                    Donate Now
                  </button>
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

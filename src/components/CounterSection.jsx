import React from "react";
import { motion } from "framer-motion";

const counters = [
  { label: "Funds Raised", value: 1250000 },
  { label: "Volunteers", value: 8600 },
  { label: "States Reached", value: 28 },
  { label: "Children Helped", value: 48000 },
];

const CounterSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 text-center relative">
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative p-6 transition rounded-xl ${
              index !== counters.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <p className="text-gray-700 mt-1 text-lg font-large">{counter.label}</p>
            <h3 className="text-5xl font-extrabold text-orange-500">
              +{counter.value.toLocaleString()}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;

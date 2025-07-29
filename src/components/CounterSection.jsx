import React, { useEffect, useState } from "react";
import { HandHeart, Users, MapPin, Baby } from "lucide-react";

const counters = [
  { icon: <HandHeart size={36} className="text-orange-500" />, label: "Funds Raised", value: 1250000 },
  { icon: <Users size={36} className="text-orange-500" />, label: "Volunteers", value: 8600 },
  { icon: <MapPin size={36} className="text-orange-500" />, label: "States Reached", value: 28 },
  { icon: <Baby size={36} className="text-orange-500" />, label: "Children Helped", value: 48000 },
];

const CounterSection = () => {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, index) =>
          val < counters[index].value
            ? Math.min(val + Math.ceil(counters[index].value / 50), counters[index].value)
            : val
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {counters.map((counter, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <div className="flex justify-center mb-3">{counter.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800">
              {counts[index].toLocaleString()}
            </h3>
            <p className="text-gray-600 mt-1">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useMotionValue, animate } from "framer-motion";

const counters = [
  { label: "Funds Raised", value: 1250000 },
  { label: "Volunteers", value: 8600 },
  { label: "States Reached", value: 28 },
  { label: "Children Helped", value: 48000 },
];

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      +{count.toLocaleString()}
    </span>
  );
};

const CounterSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-4 relative"
            >
              {index !== counters.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 h-16 border-r border-gray-300" />
              )}

              <p className="text-gray-700 mt-1 text-base md:text-lg font-medium">
                {counter.label}
              </p>
              <h3 className="text-3xl md:text-5xl font-extrabold text-orange-500 mt-2">
                <AnimatedCounter target={counter.value} />
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;

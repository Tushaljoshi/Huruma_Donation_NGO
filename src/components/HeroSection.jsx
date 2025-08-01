import React, { useState } from "react";
import { motion } from "framer-motion";
import hero1 from "/hero1.jpg";
import hero2 from "/hero2.jpg";
import hero3 from "/hero3.jpg";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
   const heroImages = [hero1, hero2, hero3];
  const currentImage = heroImages[currentImageIndex];


  // Animation for each letter
  const letterVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };
  const renderAnimatedText = (text, fontClass = "", sizeClass = "", uniqueKey = "") => (
    <div
      key={uniqueKey}
      className={`flex justify-center flex-wrap ${fontClass} ${sizeClass} mb-3`}
    >
      {[...text].map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={letterVariant}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
  return (
    <section
      className="relative min-h-[80vh] md:min-h-screen w-full-screen bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl mx-auto">
          {renderAnimatedText("Huruma", "font-serif", "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold", `heading-${currentImageIndex}`)}
          {renderAnimatedText("Bringing Smiles To Millions!", "font-mono", "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold", `subheading-${currentImageIndex}`)}
          {renderAnimatedText("We are a charity organization supporting vulnerable children and families.", "font-semibold", "text-base sm:text-lg md:text-xl font-light", `desc-${currentImageIndex}`)}


          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-8 rounded-full transition duration-300"
          >
            Donate
          </motion.button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero-${index}`}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 cursor-pointer transition-transform duration-300 transform hover:scale-110 ${currentImage === img ? "border-orange-500 scale-110" : "border-white"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

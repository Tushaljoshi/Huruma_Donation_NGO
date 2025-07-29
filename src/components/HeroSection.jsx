import React, { useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(hero1);

  const heroImages = [hero1, hero2, hero3];

  return (
    <section
      className="relative min-h-[80vh] md:min-h-screen w-full bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Bringing Smiles To Millions!
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            We are a charity organization supporting vulnerable children and families.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            Donate
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero-${index}`}
            onClick={() => setCurrentImage(img)}
            className={`
        w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 cursor-pointer 
        transition-transform duration-300 transform
        hover:scale-110
        ${currentImage === img ? "border-orange-500 scale-110" : "border-white"}
      `}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;

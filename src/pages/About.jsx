import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import team1 from "/team1.jpeg";
import team2 from "/team2.jpeg";
import team3 from "/team3.jpeg";
import hero1 from "/hero1.jpg";
import videoThumb from "/video_thumb.png";
import Trans_Navbar from "../components/Trans_Navbar";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"
import AboutSection from "../components/AboutSection"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // mobile
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const testimonials = [
  {
    quoteTitle: "It’s Just Amazed Us To Be With You”",
    quoteBody:
      "Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.",
    name: "Morgan Ando",
    location: "Ustino Charity Canada",
    image: "/team1.jpeg",
  },
  {
    quoteTitle: "Precious Journey With You”",
    quoteBody:
      "Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.",
    name: "Juhan Luis",
    location: "Charity Bingo UK",
    image: "/team2.jpeg",
  },
  {
    quoteTitle: "It’s Just Amazed Us To Be With You”",
    quoteBody:
      "Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.",
    name: "Morgan Ando",
    location: "Ustino Charity Canada",
    image: "/team1.jpeg",
  },
  {
    quoteTitle: "Precious Journey With You”",
    quoteBody:
      "Every works inton sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad will not be does.",
    name: "Juhan Luis",
    location: "Charity Bingo UK",
    image: "/team2.jpeg",
  },
];
const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="text-gray-800">
      <Trans_Navbar />
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-white text-4xl font-bold z-10">About</h1>
      </section>

      {/* About Us Section */}
      <AboutSection />
      <MissionSection />
      {/* Meet Our Team */}
      <TeamSection />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 font-semibold flex justify-center items-center gap-2">
            <span role="img" aria-label="testimonial"></span> Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 my-4">
            Don’t Believe Us? See Review
          </h2>

          {/* Slick Slider for testimonials */}
          <Slider {...settings} className="mt-12">
            {testimonials.map((item, index) => (
              <div key={index} className="px-4">
                <div className="rounded-t-lg bg-[#2D2750] px-6 py-4 text-white text-left text-lg font-semibold">
                  {item.quoteTitle}
                </div>
                <div className="border border-dashed border-orange-400 p-6 text-left text-gray-600 text-base rounded-b-lg">
                  {item.quoteBody}
                </div>
                <div className="flex items-center gap-4 mt-6 px-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                  />
                  <div className="text-left">
                    <p className="text-lg font-bold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="bg-white hidden sm:block">
        <div className="max-w-[35000px] mx-auto text-center px-2">
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((id) => (
              <div
                key={id}
                className="relative group overflow-hidden rounded-lg shadow w-full"
              >
                <img
                  src={`/child${id}.jpeg`}
                  alt={`Child ${id}`}
                  className="w-full h-40 sm:h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <FaInstagram className="text-white text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />


    </div>
  );
};

export default About;

import React, { useState } from "react";
import { PlayCircle } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import team1 from "../assets/team1.jpeg";
import team2 from "../assets/team2.jpeg";
import team3 from "../assets/team3.jpeg";
import hero1 from "../assets/hero1.jpg"; // Your background image
import videoThumb from "../assets/video_thumb.png"; // Thumbnail
import Navbar from "../components/Navbar";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection"
import Footer from "../components/Footer"
import AboutSection from "../components/AboutSection"
const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="text-gray-800">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center"
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
      {/* Testimonials */}
      <TestimonialsSection />
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-9xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Children We Helped</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
            {[1, 2, 3, 4, 5].map((id) => (
              <div key={id} className="relative group overflow-hidden rounded-lg shadow">
                <img
                  src={`./src/assets/child${id}.jpeg`}
                  alt={`Child ${id}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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

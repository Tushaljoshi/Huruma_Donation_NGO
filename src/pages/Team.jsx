import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";
import Team from "../components/TeamSection"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import TeamSection from "../components/TeamSection";
const TeamPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Trans_Navbar/>
            <section
                className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(/causes.jpg)` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="relative text-white text-4xl font-bold z-10">Meet Our Team</h1>
            </section>
            <TeamSection/>
            <Footer />
        </div>
    );
};

export default TeamPage;

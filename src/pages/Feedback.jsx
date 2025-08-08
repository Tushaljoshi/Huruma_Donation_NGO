import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";
import TestimonialsSwiper from "../components/TestimonialsSection";
import TeamSection from "../components/TeamSection";
export default function SingleCausesPage() {
    return (
        <div className="w-full">
            <Trans_Navbar/>
            <div
                className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/causes.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[white]">
                        Feedback
                    </h2>
                </div>
            </div>
            <TestimonialsSwiper />
            <TeamSection />
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

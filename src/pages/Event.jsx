import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";
import TeamSection from "../components/TeamSection"
import EventsSection from "../components/EventsSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialsSwiper from "../components/TestimonialsSection";

const services = [
    {
        title: "Volunteer",
        description:
            "Lorem ipsum dolor sit amet.",
        button: "Join Now +",
        icon: "/volunteer.png",
    },
    {
        title: "Fundraiser",
        description:
            "Lorem ipsum dolor sit amet.",
        button: "Give Now +",
        icon: "/fund.png",
    },
    {
        title: "Donate",
        description:
            "Lorem ipsum dolor sit amet.",
        button: "Donate Now +",
        icon: "/donate.png",
    },
    {
        title: "Be Member",
        description:
            "Lorem ipsum dolor sit amet.",
        button: "Join Now +",
        icon: "/member.png",
    },
];

const ServicesSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="text-gray-800">
            <Trans_Navbar />
            <section
                className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(/event.jpg)` }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <h1 className="relative text-white text-4xl font-bold z-10">About</h1>
            </section>
            <div className="bg-white py-16 md:px-24">
                <div className="grid md:grid-cols-2 items-center ml-20">
                    <div>
                        <p className="text-orange-500 text-lg">Services</p>
                        <h2 className="text-4xl font-bold text-[#1b1941] my-4 leading-tight">
                            You Can Help The Poor <br /> Through Us
                        </h2>
                        <p className="text-gray-500 text-md">
                            Ukoin ilosum dolorsit ametesicing incidelsed tempomet innoative
                            scing.
                        </p>
                        <button className="mt-6 px-6 py-3 bg-[#1b1941] text-white rounded-full hover:bg-orange-500 transition">
                            Read More →
                        </button>
                    </div>
                    <div>
                        <Swiper
                            modules={[ Autoplay, Navigation]}
                            loop={true}
                            autoplay={{ delay: 2000 }}
                            speed={1000}
                            spaceBetween={80}
                            slidesPerView={1}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {services.map((s, index) => (
                                <SwiperSlide key={index}>
                                    <div className="group relative border border-dashed border-orange-400 text-center shadow-md bg-white transition  duration-4000 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-600 w-60 h-40">

                                        <img
                                            src={s.icon}
                                            alt={s.title}
                                            className="mx-auto h-12 transition duration-500 group-hover:brightness-200"
                                        />
                                        <h3 className="text-xl font-semibold text-[#1b1941]  group-hover:text-white transition">
                                            {s.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm group-hover:text-white transition">
                                            {s.description}
                                        </p>
                                        <div className="mt-4">
                                            <button className="px-5 py-2 rounded-full text-orange-500 group-hover:text-white54 transition">
                                                {s.button}
                                            </button>

                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <EventsSection />
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

export default ServicesSlider;

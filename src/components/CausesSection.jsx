import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from 'lucide-react';
const causesData = [
    {
        id: 1,
        image: "/child1.jpeg",
        tag: "#Education",
        title: "Sponsor a Child’s Education",
        raised: "₹25,000",
        goal: "₹50,000",
        people: "42",
        days: "15 days left",
    },
    {
        id: 2,
        image: "/child2.jpeg",
        tag: "#Donation",
        title: "Provide Clean Drinking Water",
        raised: "₹10,000",
        goal: "₹30,000",
        people: "28",
        days: "10 days left",
    },
    {
        id: 3,
        image: "/child3.jpeg",
        tag: "#Medical",
        title: "Help Children with Medication",
        raised: "₹40,000",
        goal: "₹60,000",
        people: "50",
        days: "20 days left",
    },
];

const CausesPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const causesPerPage = 6;

    const totalPages = Math.ceil(causesData.length / causesPerPage);
    const startIndex = (currentPage - 1) * causesPerPage;
    const currentCauses = causesData.slice(startIndex, startIndex + causesPerPage);
    return (
        <div className="min-h-screen bg-gray-100">
            <section className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-center mb-10">Children We Helped</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {currentCauses.map((cause) => {
                        const percent =
                            (parseInt(cause.raised.replace(/\D/g, "")) /
                                parseInt(cause.goal.replace(/\D/g, ""))) *
                            100;

                        return (
                            <div
                                key={cause.id}
                                className="group relative overflow-hidden rounded-xl shadow-md transition-transform duration-300">
                                <img
                                    src={cause.image}
                                    alt={cause.title}
                                    className="w-full h-85 object-cover"
                                />
                                <div
                                    className={`absolute inset-x-0 bottom-0 z-5 rounded-t-[40px] px-6 pt-10 pb-20 transition-all duration-500 ease-in-out 
                                                translate-y-[1%] group-hover:translate-y-0 
                                                    bg-[#2c2546] group-hover:bg-orange-500`}
                                >
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                                        <span className="text-orange-500 text-xl">
                                            {cause.tag === "#Education"
                                                ? "📖"
                                                : cause.tag === "#Donation"
                                                    ? "💧"
                                                    : "🏥"}
                                        </span>
                                    </div>

                                    <p className="text-sm text-white font-semibold">{cause.tag}</p>
                                    <h3 className="text-lg font-bold text-white mt-1">{cause.title}</h3>
                                    <p className="text-sm text-white mt-1">
                                        Lorem ipsum dolor sit amet, consecteturad eiusmod tempor.
                                    </p>

                                    <div className="mt-3 text-sm flex justify-between text-white">
                                        <span>Raised: {cause.raised}</span>
                                        <span>Goal: {cause.goal}</span>
                                    </div>

                                    <div className="mt-2 w-full bg-white/30 rounded-full h-2">
                                        <div
                                            className="bg-white h-2 rounded-full"
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>

                                    <p className="text-xs text-white mt-2">
                                        Raised by {cause.people} people within {cause.days}
                                    </p>

                                    <div className="relative group">
                                        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-5">
                                            <button className="bg-white text-orange-500 font-semibold px-5 py-2 rounded-full text-sm shadow hover:bg-gray-100 transition">
                                                Donate Now →
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default CausesPage;
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        question: "Which Material Types Can You Work With?",
        answer: "We work with a variety of materials including metal, plastic, wood, and composite materials for various industries."
    },
    {
        question: "What Access Do I Have On The Free Plan?",
        answer: "The free plan gives you access to basic features including project tracking, 3 users, and limited storage."
    },
    {
        question: "Can I Have Multiple Activities In A Single Feature?",
        answer: "Yes, you can group and manage multiple tasks or activities within a single feature for better organization."
    },
    {
        question: "Why Choose Our Services In Your Business?",
        answer: "We provide tailored solutions with industry expertise, fast delivery, and excellent customer support."
    },
    {
        question: "How To Get Start With Us?",
        answer: "Simply create an account, choose a service plan, and our team will guide you through the onboarding process."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        termsAccepted: false,
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let temp = {};
        temp.name = formData.name ? '' : 'Please enter your name';
        temp.email = /^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'Enter a valid email';
        temp.phone = /^[0-9]{10}$/.test(formData.phone) ? '' : 'Enter a valid 10-digit phone number';
        temp.subject = formData.subject ? '' : 'Please enter a subject';
        temp.message = formData.message ? '' : 'Please enter your message';
        temp.termsAccepted = formData.termsAccepted ? '' : 'Please accept the terms';
        setErrors(temp);
        return Object.values(temp).every((x) => x === '');
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            // Here you can handle the form submission, e.g., send data to an API
            alert("Form submitted successfully!");
        }
    };
    return (
        <div className="w-full">
            <Trans_Navbar />
            <div
                className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/causes.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[white]">
                        Frequent Questioning & Answering
                    </h2>
                </div>
            </div>
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-800">Frequently Asked Questions</h2>
                    <p className="mt-2 text-gray-500">Find answers to common questions about our services and features.</p>
                </div>

                <div className="space-y-2 max-w-1x2 ml-20 mr-20 mx-auto bg-white p-6 shadow-md">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border rounded-md h-12 bg-white shadow-sm">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-start gap-2 items-center px-4 py-2 text-right text-lg font-medium text-gray-800 focus:outline-none"
                            >
                                <span className="text-white ml-0 bg-orange-600 px-1 py-2">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                                <span>{faq.question}</span>

                            </button>
                            {activeIndex === index && (
                                <div
                                    className={`overflow-hidden transition-max-height duration-10000 ease-in-out ${activeIndex === index ? 'max-h-20' : 'max-h-0'
                                        } px-6 text-gray-600`}
                                >
                                    <div className="py-4">
                                        {faq.answer}
                                    </div>
                                </div>

                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-16 px-4 bg-white">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-[#2c2546]">Do You Have Any Questions?</h2>
                    <p className="mt-2 text-[#2c2544]">Let us know your query and we'll respond as soon as possible.</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-8 space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-md p-3 shadow-sm"
                            />
                            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-md p-3 shadow-sm "
                            />
                            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-md p-3 shadow-sm"
                            />
                            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-md p-3 shadow-sm"
                            />
                            {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject}</p>}
                        </div>
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="2"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-200 rounded-md px-3 shadow-sm"
                        ></textarea>
                        {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#2c2546]"
                        />
                        <label className="text-sm text-gray-700">
                            I agree to the terms and privacy policy
                        </label>
                    </div>
                    {errors.termsAccepted && <p className="text-sm text-red-500 mt-1">{errors.termsAccepted}</p>}

                    <div>
                        <button
                            type="submit"
                            className="bg-[#2c2546] text-white px-8 py-3 rounded-full hover:bg-orange-500 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
            <Footer />
        </div>
    );
};
export default FAQSection;
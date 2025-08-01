import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";

const posts = [
    {
        id: 1,
        title: "Delicate Contempt Received Two Yet Advanced",
        date: "June 30, 2024",
        image: <img src="/charity.jpeg" alt="Cause" className="rounded-md w-full mb-6" />

    },
    {
        id: 2,
        title: "Future Plan & Strategy For Construction",
        date: "June 30, 2024",
        image: <img src="/charity.jpeg" alt="Cause" className="rounded-md w-full mb-6" />

    },
    {
        id: 3,
        title: "Melancholy Devonshire Alteration",
        date: "June 30, 2024",
        image: <img src="/charity.jpeg" alt="Cause" className="rounded-md w-full mb-6" />
        ,
    },
    {
        id: 4,
        title: "Delicate Contempt Received Two Yet Advanced",
        date: "June 30, 2024",
        image: <img src="/charity.jpeg" alt="Cause" className="rounded-md w-full mb-6" />
        ,
    },
];


export default function SingleCausesPage() {
    return (
        <div className="w-full">
            <Trans_Navbar />
            {/* Hero Section */}
            <section
                    className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: `url(/event.jpg)` }}
                  >
                    <div className="absolute inset-0 bg-black/60" />
                    <h1 className="relative text-white text-4xl font-bold z-10">Single Causes</h1>
                  </section>

            <div className="bg-white text-gray-800 font-sans">
                {/* Main Section */}
                <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2 bg-white p-4 rounded shadow-lg">
                        {/* Cause Image */}
                        <img
                            src="/charity.jpeg"
                            alt="Cause"
                            className="rounded-md w-full h-15 mb-6"
                        />

                        {/* Progress Bar */}
                        <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Raised: $5000.00</span>
                                <span>Goal: $8000.00</span>
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                                <div className="bg-orange-500 h-2 rounded-full w-3/5"></div>
                            </div>
                        </div>

                        {/* Cause Content */}
                        <h2 className="text-2xl font-bold mb-4">
                            Education For Poor Children
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostrum,
                            accusantium cupiditate exercitationem quaerat dolorum architecto
                            fugiat suscipit praesentium iusto!
                        </p>
                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia
                            cupiditate nihil ipsam atque!
                        </p>

                        <p className="text-sm text-gray-500 mb-1">
                            <strong>Posted On:</strong> September 31, 2024
                        </p>

                        <h3 className="text-xl font-semibold mt-4 mb-2">
                            Raise Fund For Healthy Food
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Quuntur magnis dolores eos qui ratione voluptatem sequi nesciunt.
                            Neque porro quia non numquam eius modi tempora incidunt ut labore
                            et dolore magnam dolor sit amet, consectetur.
                        </p>

                        <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>

                        <p className="text-gray-700 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>

                        {/* Donation Form */}
                        <div className="bg-gray-100 p-6 rounded-md mt-10">
                            <h3 className="text-lg font-bold mb-4">Select Payment Method</h3>
                            <div className="flex flex-wrap gap-4 mb-4">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="payment" /> PayPal
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="payment" /> Credit Card
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="payment" /> Debit Card
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="payment" /> Others
                                </label>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="p-2 border rounded w-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="p-2 border rounded w-full"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-2 border rounded w-full"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="p-2 border rounded w-full"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Amount"
                                className="p-2 border rounded w-full mt-4"
                            />
                            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                                Donate Now
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Search */}
                        <div className="relative bg-white p-4 rounded shadow-lg">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 border border-gray-300 rounded pr-10"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-orange-500 hover:bg-orange-600 px-2 py-1 rounded">
                                🔍
                            </button>
                        </div>

                        {/* Popular Posts */}
                        <div className="bg-white p-4 rounded shadow-lg">
                            <h4 className="text-xl font-bold mb-4 border-b pb-2 text-[#1e1e1e]">Popular Posts</h4>
                            <ul className="space-y-4">
                                {posts.map((post) => (
                                    <li key={post.id} className="flex items-start space-x-3">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-14 h-14 object-cover rounded"
                                        />
                                        <div>
                                            <p className="text-xs text-gray-500">{post.date}</p>
                                            <p className="text-sm font-semibold hover:text-blue-600 cursor-pointer leading-snug">
                                                {post.title}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Archives */}
                        <div className="bg-white p-4 rounded shadow-lg">
                            <h4 className="text-lg font-bold mb-2">Archives</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>May 2024</li>
                                <li>April 2024</li>
                                <li>June 2024</li>
                                <li>July 2024</li>
                            </ul>
                        </div>


                        {/* Categories */}
                        <div className="bg-white p-4 rounded shadow-lg">
                            <h4 className="text-lg font-bold mb-2">Categories</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>Education (10)</li>
                                <li>National (20)</li>
                                <li>Sports (10)</li>
                                <li>Magazine (12)</li>
                                <li>Health (16)</li>
                            </ul>
                        </div>

                        {/* Tags */}
                        <div className="bg-white p-4 rounded shadow-lg">
                            <h4 className="text-lg font-bold mb-2">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Fashion", "Education", "Health", "Travel", "Science", "Study"].map(
                                    (tag) => (
                                        <span
                                            key={tag}
                                            className="bg-gray-200 px-3 py-1 text-sm rounded cursor-pointer hover:bg-orange-500 hover:text-white"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

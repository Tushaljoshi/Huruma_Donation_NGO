import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import new1 from '/new1.jpg';
import new2 from '/new2.jpg';
import new3 from '/new3.jpg';

const blogData = [
    {
        id: 1,
        category: "Poor",
        date: "22 January",
        title: "Poverty Not Only Money It Can Be Food Sometimes",
        image: new1,
    },
    {
        id: 2,
        category: "Food",
        date: "21 December",
        title: "Strawberry-Banana Quinoa Muffins Recipe For Poor",
        image: new2,
    },
    {
        id: 3,
        category: "Healthy",
        date: "23 June",
        title: "The Plant-Powered Dietitian To Consume Habit",
        image: new3,
    },
    {
        id: 4,
        category: "Support",
        date: "10 May",
        title: "Helping Hands for Needy Children in Villages",
        image: new1,
    },
    {
        id: 5,
        category: "Awareness",
        date: "5 April",
        title: "Spreading Awareness about Hygiene in Slums",
        image: new2,
    },
    {
        id: 6,
        category: "Health",
        date: "2 March",
        title: "Raising Funds for Medical Aid to the Poor",
        image: new3,
    },
    {
        id: 7,
        category: "Water",
        date: "1 February",
        title: "Access to Clean Water for Remote Areas",
        image: new1,
    },
    {
        id: 8,
        category: "Education",
        date: "28 January",
        title: "Building Schools for Underprivileged Kids",
        image: new2,
    },
    {
        id: 9,
        category: "Shelter",
        date: "15 January",
        title: "Providing Winter Shelter for Homeless",
        image: new3,
    },
];

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(blogData.length / postsPerPage);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            {/* Hero Section */}
            <section
                className="relative h-[700px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: "url('/event.jpg')" }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-4xl font-bold">Check Our Blogs</h1>
                </div>
            </section>

            {/* Content */}
            <div className="bg-white py-10 px-4 sm:px-8 lg:px-16">
                <h2 className="text-center text-3xl font-bold mb-8">The Causes We Care About</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {currentPosts.map((post) => (
                        <div
                            key={post.id}
                            className="relative rounded-xl overflow-hidden shadow-lg group transition duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <img
                                src={post.image}
                                alt={post.title}
                                className="h-96 w-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
                            />
                            {/* Content */}
                            <div className={`
                  p-5 relative
                  bg-white text-gray-800
                  group-hover:bg-orange-500 group-hover:text-white
                  transition-all duration-300
                `}>
                                <p className="text-sm font-medium">{post.category}, {post.date}</p>
                                <h3 className="text-lg md:text-xl font-bold leading-tight mt-1">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-4 py-2 rounded border text-sm font-medium ${currentPage === number
                                    ? 'bg-orange-600 text-white'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-200'
                                }`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
            <section className="bg-gray-100 py-12 px-4">
                <div className="max-w-9xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Children We Helped</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
                        {[1, 2, 3, 4, 5].map((id) => (
                            <div key={id} className="relative group overflow-hidden rounded-lg shadow">
                                <img
                                    src={`/child${id}.jpeg`}
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

export default BlogPage;

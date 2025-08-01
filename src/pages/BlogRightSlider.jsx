import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Footer from "../components/Footer";
import Trans_Navbar from "../components/Trans_Navbar";
const BlogRightSliderData = [
    {
        image: "/child1.jpeg",
        date: "June 30, 2024",
        title: "Delicate Contempt Received Two Yet Advanced"
    },
    {
        image: "/child2.jpeg",
        date: "June 30, 2024",
        title: "Future Plan & Strategy For Construction"
    },
    {
        image: "/child3.jpeg",
        date: "June 30, 2024",
        title: "Melancholy Devonshire Alteration"
    },
    {
        image: "/child4.jpeg",
        date: "June 30, 2024",
        title: "Delicate Contempt Received Two Yet Advanced"
    },
    {
        image: "/child5.jpeg",
        date: "June 30, 2024",
        title: "Melancholy Devonshire Alteration"
    },
    {
        image: "/child6.jpeg",
        date: "June 30, 2024",
        title: "Delicate Contempt Received Two Yet Advanced"
    },
    {
        image: "/child7.jpeg",
        date: "June 30, 2024",
        title: "Melancholy Devonshire Alteration"
    },
    {
        image: "/new1.jpg",
        date: "June 30, 2024",
        title: "Delicate Contempt Received Two Yet Advanced"
    },
    {
        image: "/new2.jpg",
        date: "June 30, 2024",
        title: "Melancholy Devonshire Alteration"
    },
    {
        image: "/new3.jpg",
        date: "June 30, 2024",
        title: "Delicate Contempt Received Two Yet Advanced"
    },
    {
        image: "/child4.jpeg",
        date: "June 30, 2024",
        title: "Melancholy Devonshire Alteration"
    },
    {
        image: "/child4.jpeg",
        date: "June 30, 2024",
        title: "Delicate Contempt Received Two Yet Advanced"
    }

];

const BlogRightSlider = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = BlogRightSliderData.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const totalPages = Math.ceil(BlogRightSliderData.length / postsPerPage);
    return (
        <div className="w-full">
            <Trans_Navbar/>
            <div
                className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/causes.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>A

                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl font-bold">Single Blog Slider</h1>
                    <p className="mt-2">Home / Blog Silder</p>
                </div>
            </div>

            <div className="bg-white text-gray-800 font-sans min-h-screen">
                {/* Main Container */}
                <div className="max-w-[1440px] mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10">

                    {/* Blog Cards Section */}
                    <div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {currentPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="relative rounded-xl overflow-hidden shadow-md group transition duration-300 hover:-translate-y-1"
                                >
                                    {/* Image */}
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-60 w-full object-cover grayscale group-hover:grayscale-0 transition duration-300"
                                    />

                                    {/* Content */}
                                    <div className="p-4 bg-white text-gray-800 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
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

                    {/* Sidebar */}
                    <aside className="space-y-8">
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
                                {BlogRightSliderData.slice(0, 4).map((post, index) => (
                                    <div key={index} className="flex items-start space-x-3 mb-2">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-16 h-16 object-cover rounded"
                                        />
                                        <div>
                                            <p className="text-xs text-gray-500">{post.date}</p>
                                            <h4 className="text-sm font-semibold hover:text-orange-500 cursor-pointer">
                                                {post.title}
                                            </h4>
                                        </div>
                                    </div>
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
                    </aside>
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
            {/* Footer */}
            <Footer />
        </div>
    );
};
export default BlogRightSlider;
import React from "react";
import { User } from "lucide-react";
import new1 from "/new1.jpg";
import new2 from "/new2.jpg";
import new3 from "/new3.jpg";

const newsPosts = [
  {
    id: 1,
    category: "Poor",
    date: "22 January",
    title: "Poverty Not Only Money It Can Be Food Sometimes",
    summary: "Read more +",
    image: new1,
  },
  {
    id: 2,
    category: "Food",
    date: "21 December",
    title: "Strawberry-Banana Quinoa Muffins Recipe For Poor",
    summary: "Read more +",
    image: new2,
  },
  {
    id: 3,
    category: "Healthy",
    date: "23 June",
    title: "The Plant-Powered Dietitian To Consume Habit",
    summary: "Buy Now",
    image: new3,
  },
];


const LatestNewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wide">📖 Our Blog</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Check Out Our Latest News</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsPosts.map((post, idx) => (
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

              {/* Bottom Panel */}
              <div
                className={`
                  p-5 relative
                  bg-white text-gray-800
                  group-hover:bg-orange-500 group-hover:text-white
                  transition-all duration-300
                `}
              >
                <p className="text-sm font-medium">
                  {post.category}, {post.date}
                </p>
                <h3 className="text-lg md:text-xl font-bold leading-tight mt-1">{post.title}</h3>
                <p className="mt-3 text-sm">{post.summary}</p>

                {/* Profile Icon */}
                <div className="absolute bottom-[1px] right-4 w-8 h-8 bg-indigo-800 text-white rounded-full flex items-center justify-center border-4 border-white">
                  <User className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;

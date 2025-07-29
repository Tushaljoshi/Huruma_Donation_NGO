import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    role: "Operations Head",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Anita Verma",
    role: "Community Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Lee",
    role: "Fundraising Manager",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wide">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[#1e1b4b]">
            Meet Our Dedicated Volunteers
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            These are the faces behind our mission. Passionate, skilled, and committed to driving change.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden text-center shadow-md group transition duration-300"
            >
              <div className="p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-white shadow"
                />
                <h3 className="text-lg font-semibold text-[#1e1b4b]">{member.name}</h3>
                <p className="text-sm text-orange-500 mb-4">{member.role}</p>
              </div>

              {/* Social Icons on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <a href="#" className="text-white hover:text-orange-400 transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-white hover:text-orange-400 transition">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

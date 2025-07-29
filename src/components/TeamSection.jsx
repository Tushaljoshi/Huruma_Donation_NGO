import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const team = [
  {
    name: "Alex Maxwel",
    role: "Founder",
    image: "/team1.jpeg",
  },
  {
    name: "Williams Halimton",
    role: "Manager",
    image: "/team2.jpeg",
  },
  {
    name: "Juhon Dew",
    role: "CEO",
    image: "/team3.jpeg",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-orange-500 font-medium text-lg">
            <span>📣</span>
            <span>Meet Our Team</span>
          </div>
          <div className="flex justify-end">
            <button className="bg-[#1e1b4b] text-white px-6 py-3 rounded-full hover:bg-orange-500 transition font-medium flex items-center gap-2">
              Meet Our Team →
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[#1e1b4b]">
            Talented Team Behind Huruma
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Quis ipsum suspendisse consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse gravida.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover"
              />

              {/* Info */}
              <div className="p-5 text-center bg-white">
                <h3 className="text-xl font-semibold text-[#1e1b4b]">{member.name}</h3>
                <p className="text-orange-500 mt-1">{member.role}</p>
              </div>

              {/* Sliding Social Icons */}
              <div className="absolute bottom-0 left-0 w-full py-20 translate-y-full group-hover:translate-y-0 transition-all duration-500 flex justify-center gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-2 rounded-full hover:bg-orange-500 transition-all duration-300"
                  >
                    <Icon size={20} className="text-[#1e1b4b] hover:text-white" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}

      </div>
    </section>
  );
};

export default TeamSection;

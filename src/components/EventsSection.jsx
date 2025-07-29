import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import event from "../assets/event.jpg"; // adjust path as needed


const events = [
  {
    id: 1,
    title: "Poor Funding For Helpless",
    date: "2025-08-30T09:00:00",
    time: "9:00 - 12:00",
    location: "California City",
    image: "", // optional background
  },
  {
    id: 2,
    title: "Huruma Con Donation 2024",
    date: "2025-12-05T08:00:00",
    time: "8:00 - 10:00",
    location: "Newyork City",
    image: "",
  },
];

const getRemainingDays = (targetDate) => {
  const total = new Date(targetDate) - new Date();
  return Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
};

const EventCard = ({ event }) => {
  const [daysLeft, setDaysLeft] = useState(getRemainingDays(event.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(getRemainingDays(event.date));
    }, 1000 * 60 * 60); // refresh hourly
    return () => clearInterval(timer);
  }, [event.date]);

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-6 min-w-[350px] md:min-w-[500px]">
      {/* Left - Countdown */}
      <div className="text-center border-r md:border-r border-gray-200 pr-6">
        <h1 className="text-3xl text-orange-500 font-bold">0-{daysLeft}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="mt-4 mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
          <Clock size={28} className="text-orange-500" />
        </div>
      </div>

      {/* Right - Event Info */}
      <div className="flex-1 px-0 md:px-4 text-center md:text-left">
        <h3 className="text-lg font-bold text-slate-800 mb-1">{event.title}</h3>
        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm mb-1">
          <Clock size={16} />
          <span>{event.time}</span>
          <MapPin size={16} />
          <span>{event.location}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          Suspendice quis ipsum consectetucaquuis ipsums gravida.
        </p>
        <a href="#" className="text-orange-500 font-semibold text-sm hover:underline">
          Join Now +
        </a>
      </div>
    </div>
  );
};

const EventsSection = () => {
  return (
    <section
      className="py-20 bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${event})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold uppercase tracking-wide">Upcoming Events</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Be Ready For Our Events</h2>
          <p className="max-w-2xl mx-auto text-white text-md">
            Event makes suspendice adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Cards */}
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row justify-between gap-6 p-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import event from "/event.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const events = [
  {
    id: 1,
    title: "Poor Funding For Helpless",
    date: "2025-08-30T09:00:00",
    time: "9:00 - 12:00",
    location: "California City",
    image: "",
  },
  {
    id: 2,
    title: "Huruma Con Donation 2024",
    date: "2025-12-05T08:00:00",
    time: "8:00 - 10:00",
    location: "New York City",
    image: "",
  },
    {
    id: 3,
    title: "Poor Funding For Helpless",
    date: "2025-08-30T09:00:00",
    time: "9:00 - 12:00",
    location: "California City",
    image: "",
  },
  {
    id: 4,
    title: "Huruma Con Donation 2024",
    date: "2025-12-05T08:00:00",
    time: "8:00 - 10:00",
    location: "New York City",
    image: "",
  },
    {
    id: 5,
    title: "Huruma Donation",
    date: "2025-12-05T08:00:00",
    time: "8:00 - 10:00",
    location: "New York City",
    image: "",
  },
    {
    id: 6,
    title: "Poor Funding For Helpless",
    date: "2025-08-30T09:00:00",
    time: "9:00 - 12:00",
    location: "California City",
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
    }, 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, [event.date]);

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-xl overflow-hidden p-6 gap-6 w-full">
      <div className="text-center sm:border-r sm:pr-6 border-gray-200">
        <h1 className="text-3xl text-orange-500 font-bold">{daysLeft}</h1>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(event.date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="mt-4 mx-auto w-14 h-14 rounded-full flex items-center justify-center">
          <Clock size={60} className="text-gray-500" />
        </div>
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
        <div className="flex flex-wrap justify-center sm:justify-start items-center text-sm text-gray-500 mb-2">
          <div className="flex items-center mr-2">
            <Clock size={16} />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center ml-2">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Suspendice quis ipsum consectetucaquuis ipsums gravida.
        </p>
        <a href="#" className="text-orange-500 mb-3 font-semibold text-sm hover:underline">
          Join Now +
        </a>
      </div>
    </div>
  );
};

const EventsSection = () => {
  return (
    <section
      className="py-5 bg-cover bg-center text-white relative"
      style={{
        backgroundImage: `url(${event})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 px-4">
          <span className="text-orange-500 mt-20 font-semibold uppercase tracking-wide">Upcoming Events</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4">Be Ready For Our Events</h2>
          <p className="max-w-2xl mx-auto text-white text-md">
            Event makes suspendice adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="p-4 sm:p-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            speed={1000}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="flex justify-center">
                  <EventCard event={event} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </div>
      </div>
    </section>

  );
};

export default EventsSection;

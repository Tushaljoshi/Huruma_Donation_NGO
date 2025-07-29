import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Volunteer, Mumbai",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Huruma changed my life. Volunteering with them has been the most rewarding experience. The love and gratitude from the community is priceless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Donor, Bengaluru",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "I’ve seen firsthand how my donations are making a real difference. The transparency and passion of the team is outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Desai",
    role: "Partner NGO",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Collaborating with Huruma has amplified our reach. Together, we're bringing smiles to more children than ever before.",
    rating: 4,
  },
];

const TestimonialsSwiper = () => {
  return (
    <section className="py-16 bg-white relative">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-10">
      <p className="text-orange-500 font-semibold uppercase">Testimonials</p>
      <h2 className="text-4xl font-bold">Don’t Believe Us? See Review</h2>
      <h3 className="text-xl font-semibold mt-2">Precious Journey With You</h3>
    </div>

    {/* Custom navigation buttons */}
    <div className="absolute top-20 left-8 z-10 custom-prev cursor-pointer">
      <div className="bg-white shadow-md rounded-full p-2 text-orange-500 hover:bg-orange-100 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>

    <div className="absolute top-20 right-8 z-10 custom-next cursor-pointer">
      <div className="bg-white shadow-md rounded-full p-2 text-orange-500 hover:bg-orange-100 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>

    {/* Swiper */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 10000 }}
      spaceBetween={30}
      slidesPerView={1}
      loop
      className="relative"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Profile Info */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-orange-100"
              />
              <h3 className="text-2xl font-bold mt-4">{testimonial.name}</h3>
              <p className="text-orange-500 mt-1">{testimonial.role}</p>
              <div className="flex mt-3 text-yellow-400">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} size={20} fill="currentColor" />
                ))}
              </div>
            </div>

            {/* Review */}
            <div className="col-span-2 text-center md:text-left">
              <p className="text-gray-600 text-lg leading-relaxed italic">
                “{testimonial.review}”
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
};

export default TestimonialsSwiper;

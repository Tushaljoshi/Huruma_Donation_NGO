import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star} from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";


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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mt-[-20] mb-6">
          <div className="flex justify-center">
          </div>
          <p className="text-orange-500 font-semibold">Testimonials</p>
          <h2 className="text-4xl font-bold text-slate-800 mt-1">Don’t Believe Us? See Review</h2>
          <p className="text-xl font-semibold text-slate-600 mt-2">Precious Journey With You</p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          speed={1000}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="grid md:grid-cols-3 items-center bg-white p-4">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-orange-100 shadow"
                  />
                  <h3 className="text-xl font-bold mt-4 text-slate-800">{testimonial.name}</h3>
                  <p className="text-orange-500 text-sm">{testimonial.role}</p>
                  <div className="flex mt-3 text-yellow-400">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} size={18} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <div className="hidden h-32 border-l"></div>
                <div className="md:col-span-2 text-center md:text-left">
                  <p className="text-gray-600 text-lg italic leading-relaxed">
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

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-85 bg-black">
        <img
          src="./src/assets/event.jpg"
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">ContactUs</h1>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-white py-12 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Panel - Quick Contact Info */}
          <div className="bg-[#231E66] text-white py-6 px-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Quick Contact</h3>
            <div className="space-y-6 text-lg">
              <div>
                <MapPin className="inline-block mr-2 text-orange-400" />
                <span>205 Fida Wallinton, Tonga, New York, Canada</span>
              </div>
              <div>
                <Phone className="inline-block mr-2 text-orange-400" />
                <span>987-0986-0987</span>
              </div>
              <div>
                <Mail className="inline-block mr-2 text-orange-400" />
                <span>support@huruma.com</span>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="border border-orange-300 p-8 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">Let’s Talk!</h3>
            <p className="text-gray-600 mb-6">
              Contact us to get help. We’re happy to hear from you.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 p-3 rounded w-full focus:outline-orange-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-3 rounded w-full focus:outline-orange-400"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-gray-300 p-3 rounded w-full focus:outline-orange-400"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 p-3 rounded w-full focus:outline-orange-400"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Write Something"
                className="border border-gray-300 p-3 rounded w-full focus:outline-orange-400"
              ></textarea>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input type="checkbox" />
                <label>I agree to the terms and privacy policy</label>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600 transition"
              >
                Contact Us →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps?q=New York, USA&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      <Footer />
    </>
  );
}

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2c2546] text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
          <div className="mb-4 flex items-start gap-3">
            <div className="text-orange-500 flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-orange-500 font-medium">Location</p>
              <p className="text-gray-300">
                205 Fida Walinton, Tongo<br />
                New York, Canada
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-start gap-3">
            <Phone size={20} className="text-orange-500 mt-1" />
            <div>
              <p className="text-orange-500 font-medium">Call Us</p>
              <p className="text-gray-300">987-0986-0987</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail size={20} className="text-orange-500 mt-1" />
            <div>
              <p className="text-orange-500 font-medium">Email Us</p>
              <p className="text-gray-300">support@huruma.com</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Private Policies</a></li>
            <li><a href="#">Donate Now</a></li>
            <li><a href="#">Become A Volunteer</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Paid Programs</a></li>
            <li><a href="#">Partnership</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Donate</a></li>
            <li><a href="#">Sponsor</a></li>
            <li><a href="#">Fundraise</a></li>
            <li><a href="#">Volunteer</a></li>
            <li><a href="#">Partner</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Form</a></li>
          </ul>
        </div>

        {/* Recent News */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Recent News</h3>

          <div className="flex gap-4 mb-6">
            <img
              src="/new1.jpg" 
              alt="news"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="text-gray-300">
              <p className="text-white text-sm mb-1">
                Support About Poverty To Poor Family
              </p>
              <p className="text-xs text-orange-400">• Poor, 22 January</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="/new2.jpg" 
              alt="news"
              className="w-16 h-16 object-cover rounded"
            />
            <div className="text-gray-300">
              <p className="text-white text-sm mb-1">
                Mostly Suffered School Boys Care
              </p>
              <p className="text-xs text-orange-400">• Health, 24 February</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-6 pb-3 text-center">
        <div className="mb-2 flex justify-center">
          <img src="/logo.png" alt="logo" className="h-15" />
        </div>
        <p className="text-gray-400 text-xs">
          Copyright @2025 Huruma. All Rights Reserved
        </p>
        <div className="mt-2 text-orange-500 text-xs flex justify-center gap-3">
          <a href="#" className="hover:underline">Terms & Conditions</a> |
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

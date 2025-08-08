import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  X as CloseIcon,
} from "lucide-react";
import { FaPinterestP } from 'react-icons/fa';


const SideAboutPanel = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <CloseIcon size={24} />
        </button>
      </div>
      <div className="px-6 pb-6 overflow-y-auto h-full">
        <h2 className="text-2xl font-semibold mb-3">About Us</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          We believe brand interaction is key in communication. Real innovations and a positive
          customer experience are the heart of successful communication. No fake products and
          services. The customer is king, their lives and needs are the inspiration.
        </p>

        <h3 className="text-lg font-semibold mb-2">Instagram</h3>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <img
              key={i}
              src={`/child${i}.jpeg`} // you can update with your actual image paths
              alt={`child ${i}`}
              className="w-full h-16 object-cover rounded"
            />
          ))}
        </div>

        <div className="text-center text-sm">
          <p className="text-orange-500 font-semibold">+088 130 629 8615</p>
          <p className="my-1 text-gray-400">or</p>
          <p className="text-blue-500">huruma@gmail.com</p>
        </div>

        <div className="flex justify-center mt-4 space-x-4">
          <Facebook size={20} className="text-gray-600 hover:text-blue-600" />
          <Instagram size={20} className="text-gray-600 hover:text-pink-500" />
          <Twitter size={20} className="text-gray-600 hover:text-sky-500" />
          <Linkedin size={20} className="text-gray-600 hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
};

export default SideAboutPanel;

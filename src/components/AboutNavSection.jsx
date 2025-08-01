import { X } from "lucide-react";

const AboutNavSection = ({ onClose }) => {
  return (
    <div className="w-1/2 h-screen fixed right-0 top-0">
      {/* Close Button */}
      <button onClick={onClose} className="absolute top-6 right-6">
        <X size={28} className="text-gray-800" />
      </button>

      {/* About Us */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">About Us</h2>
      <p className="text-gray-600 mb-6">
        We believe brand interaction is key in communication. Real innovations and a
        positive customer experience are the heart of successful communication.
        No fake products and services. The customer is king, their lives and needs are the inspiration.
      </p>

      {/* Instagram Grid */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Instagram</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {Array.from({ length: 10 }).map((_, i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/random/100x100?sig=${i}`}
            alt={`Insta ${i}`}
            className="w-full h-auto object-cover rounded-sm"
          />
        ))}
      </div>

      {/* Contact Info */}
      <div className="text-center space-y-2 mb-6">
        <p className="text-orange-600 font-semibold text-lg">+088 130 629 8615</p>
        <p className="text-gray-400">or</p>
        <p className="text-indigo-700 font-medium">huruma@gmail.com</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4">
        {['facebook', 'twitter', 'instagram', 'linkedin', 'pinterest'].map((icon, idx) => (
          <a
            key={idx}
            href="#"
            className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <i className={`fab fa-${icon} text-gray-500`}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutNavSection;

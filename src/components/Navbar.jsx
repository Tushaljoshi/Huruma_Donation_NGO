import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Search,
  Menu,
  ChevronDown,
} from "lucide-react";
import SideAboutPanel from "./SideAboutPanel";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 40);

    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) {
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languageOptions = [
    { label: "English", emoji: "🇺🇸" },
    { label: "French", emoji: "🇫🇷" },
    { label: "Hindi", emoji: "🇮🇳" },
    { label: "Spanish", emoji: "🇪🇸" },
  ];

  const HomeDropdown = [{ path: "/", label: "Home one" }];
  const pagesDropdown = [
    { path: "/blog", label: "Blog" },
    { path: "/team", label: "Team" },
    { path: "/event", label: "Events" },
    { path: "/faq", label: "FAQ" },
    { path: "/feedback", label: "Feedbacks" },
  ];
  const CausesDropdown = [
    { path: "/causes", label: "Causes" },
    { path: "/causes/:id", label: "Single Causes" },
  ];
  const BlogDropdown = [
    { path: "/blog", label: "Blog" },
    { path: "/blog-right-slider", label: "Blog Right Slider" },
    { path: "/blog/:id", label: "Blog Details" },
  ];

  return (
    <header className="relative z-50">
      <div className={`hidden md:flex bg-white text-sm text-gray-700 justify-between px-3 items-center border-b transition-all duration-300 ${scrolled ? 'hidden' : 'flex'}`}>

        <span>
          The fund will go to the poor...{" "}
          <a href="#" className="text-orange-500 font-medium">
            Donate Now
          </a>
        </span>
        <div className="flex items-center gap-4">
          <span className="text-sm">Follow us:</span>
          <div className="flex gap-2 text-gray-800">
            <Facebook size={16} />
            <Twitter size={16} />
            <Instagram size={16} />
            <Linkedin size={16} />
          </div>
        </div>
      </div>

      <div className={`fixed left-0 w-full z-50 transition-all ${scrolled ? "top-0 bg-white text-black shadow-md" : "bg-[#2c2546] text-white"}`}>
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center px-6 py-3">
            <img
              src={scrolled ? "/logo_dark.png" : "/logo.png"}
              alt="Logo"
              className="w-100 h-50 object-contain transition-all duration-300"
            />
          </div>
          <nav className="hidden lg:flex gap-8 text-sm items-center relative">
            <Link to="/" className="hover:text-orange-500">
              Home
            </Link>

            <Link to="/about" className="hover:text-orange-500">
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500">
                Causes <ChevronDown size={14} />
              </button>
              <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-30 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {CausesDropdown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm hover:bg-orange-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500">
                Pages <ChevronDown size={14} />
              </button>
              <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-30 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {pagesDropdown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm hover:bg-orange-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-orange-500">
                Blog <ChevronDown size={14} />
              </button>
              <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-30 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {BlogDropdown.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm hover:bg-orange-100"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language 
            <div className="relative group">
              <button className="flex items-center gap-2 border px-2 py-1 rounded text-sm">
                <span>🇺🇸</span> Eng <ChevronDown size={12} />
              </button>
              <ul className="absolute bg-white text-black right-0 mt-2 rounded shadow-md z-20 text-sm min-w-[120px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languageOptions.map((lang, idx) => (
                  <li key={idx}>
                    <button className="block w-full text-left px-4 py-2 hover:bg-orange-100">
                      {lang.emoji} {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>*/}
            <div className="relative group">
              <button className="flex items-center gap-2 border px-2 py-1 rounded text-sm">
                User <ChevronDown size={12} />
              </button>
              <ul className="absolute bg-white text-black right-0 mt-2 rounded shadow-md z-20 text-sm min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-orange-100"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 hover:bg-orange-100"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reset-password"
                    className="block px-4 py-2 hover:bg-orange-100"
                  >
                    Reset Password
                  </Link>
                </li>
              </ul>
            </div>

            <button
              className="p-2 rounded-full hover:bg-white/10"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search size={18} />
            </button>
            {showSearch && (
              <div className="absolute top-full mt-2 right-0 z-50">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            )}
            <>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-orange-500 px-3 py-3 rounded-sm hidden lg:block"
              >
                <Menu size={20} />
              </button>
              <SideAboutPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </>


            <button
              className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${scrolled ? "text-black hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </div>
      <div
        id="scroll-progress"
        className={`h-1 bg-orange-500 fixed left-0 z-[9999] w-0 transition-all duration-300 ease-in-out ${scrolled ? 'top-0' : 'top-[150px]'}`}
      />
      {mobileOpen && (
        <div className="bg-white text-black lg:hidden px-6 py-4 space-y-4 shadow-md">
          <div className="mt-20"></div>
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link to="/about" className="block hover:text-orange-500">About</Link>
          <Link to="/contact" className="block hover:text-orange-500">Contact</Link>
          <details>
            <summary className="cursor-pointer hover:text-orange-500">Causes</summary>
            <div className="ml-4 mt-2 space-y-2">
              {CausesDropdown.map((item, i) => (
                <Link key={i} to={item.path} className="block hover:text-orange-500" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details>
            <summary className="cursor-pointer hover:text-orange-500">Pages</summary>
            <div className="ml-4 mt-2 space-y-2">
              {pagesDropdown.map((item, i) => (
                <Link key={i} to={item.path} className="block hover:text-orange-500" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>

          <details>
            <summary className="cursor-pointer hover:text-orange-500">Blog</summary>
            <div className="ml-4 mt-2 space-y-2">
              {BlogDropdown.map((item, i) => (
                <Link key={i} to={item.path} className="block hover:text-orange-500" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      )}
    </header>
  );
};

export default Navbar;

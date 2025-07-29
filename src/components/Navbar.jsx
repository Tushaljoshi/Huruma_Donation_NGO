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

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [HomeOpen, setHomeOpen] = useState(false);
  const [CausesOpen, setCausesOpen] = useState(false);
  const [BlogOpen, setBlogOpen] = useState(false);

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
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    { path: "/team", label: "Team" },
    { path: "/event", label: "Events" },
    { path: "/faq", label: "FAQ" },
    { path: "/feedback", label: "Feedbacks" },
    { path: "/user", label: "Users" },
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
      {/* Top Bar */}
      <div className={`bg-white text-sm text-gray-700 flex justify-between px-6 py-2 items-center border-b transition-all duration-300 ${scrolled ? 'hidden' : 'block'}`}>
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
      <>
        {/* Top bar - only shows when scrolled is false */}
        {!scrolled && (
          <div className="...">Top bar content</div>
        )}

        {/* Sticky Main Navbar */}
        <div
          className={`fixed left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "top-0 bg-white text-black shadow-md"
            : "top-[40px] bg-[#2c2546] text-white"
            }`}
        >

          <div className="flex justify-between items-center px-6 py-4">
            {/* Logo */}
            <div className="bg-orange-500 px-6 py-3 flex flex-col justify-center items-center text-white text-center h-full">
              <div className="text-3xl font-bold leading-tight">Huruma</div>
              <div className="text-sm">Donate Poor</div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 text-sm items-center relative">
              {/* Home */}
              <div className="relative">
                <button
                  onClick={() => setHomeOpen(!HomeOpen)}
                  className="flex items-center gap-1 hover:text-orange-500"
                >
                  Home <ChevronDown size={14} />
                </button>
                {HomeOpen && (
                  <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-30 min-w-[150px]">
                    {HomeDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setHomeOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-orange-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/about" className="hover:text-orange-500">
                About
              </Link>
              {/* Causes */}
              <div className="relative">
                <button
                  onClick={() => setCausesOpen(!CausesOpen)}
                  className="flex items-center gap-1 hover:text-orange-500"
                >
                  Causes <ChevronDown size={14} />
                </button>
                {CausesOpen && (
                  <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-30 min-w-[150px]">
                    {CausesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setCausesOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-orange-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Pages */}
              <div className="relative">
                <button
                  onClick={() => setPagesOpen(!pagesOpen)}
                  className="flex items-center gap-1 hover:text-orange-500"
                >
                  Pages <ChevronDown size={14} />
                </button>
                {pagesOpen && (
                  <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-30 min-w-[150px]">
                    {pagesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setPagesOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-orange-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Blog */}
              <div className="relative">
                <button
                  onClick={() => setBlogOpen(!BlogOpen)}
                  className="flex items-center gap-1 hover:text-orange-500"
                >
                  Blog <ChevronDown size={14} />
                </button>
                {BlogOpen && (
                  <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded z-30 min-w-[150px]">
                    {BlogDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setBlogOpen(false)}
                        className="block px-4 py-2 text-sm hover:bg-orange-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-2 border px-2 py-1 rounded text-sm"
                >
                  <span>🇺🇸</span> Eng <ChevronDown size={12} />
                </button>
                {langOpen && (
                  <ul className="absolute bg-white text-black right-0 mt-2 rounded shadow-md z-20 text-sm">
                    {languageOptions.map((lang, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => setLangOpen(false)}
                          className="block w-full text-left px-4 py-2 hover:bg-orange-100"
                        >
                          {lang.emoji} {lang.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button className="p-2 rounded-full hover:bg-white/10">
                <Search size={18} />
              </button>

              <Link
                to="/AboutSection"
                className="bg-orange-500 px-3 py-3 rounded-sm hidden lg:block"
              >
                <Menu size={20} />
              </Link>

              <button
                className="lg:hidden text-black"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
        <div
          id="scroll-progress"
          className={`h-1 bg-orange-500 fixed left-0 z-[9999] w-0 transition-all duration-300 ease-in-out ${scrolled ? 'top-0' : 'top-[150px]'
            }`}
        />
      </>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-white text-black lg:hidden px-6 py-4 space-y-4 shadow-md">
          <details>
            <summary className="cursor-pointer hover:text-orange-500">
              Home
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              {HomeDropdown.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="block hover:text-orange-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link to="/about" className="block hover:text-orange-500">
            About
          </Link>
          <details>
            <summary className="cursor-pointer hover:text-orange-500">
              Causes
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              {CausesDropdown.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="block hover:text-orange-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details>
            <summary className="cursor-pointer hover:text-orange-500">
              Pages
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              {pagesDropdown.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="block hover:text-orange-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <details>
            <summary className="cursor-pointer hover:text-orange-500">
              Blog
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              {BlogDropdown.map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  className="block hover:text-orange-500"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link to="/contact" className="block hover:text-orange-500">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

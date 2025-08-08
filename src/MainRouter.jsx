// MainRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App"; // This is Home One
import About from "./pages/About";
import Contact from "./pages/Contact";
import Causes from "./pages/Causes";
import BlogPage from "./pages/BlogPage";
import SingleCauses from "./pages/SingleCauses";
import BlogRightSlider from "./pages/BlogRightSlider";
import Team from "./pages/Team";
import Event from "./pages/Event";
import FAQ from "./pages/FAQ"
import Feedback from "./pages/Feedback"
import SingleBlogPage from "./pages/SingleBlogPage";
import Trans_Navbar from "./components/Trans_Navbar";
import AboutNavSection from "./components/AboutNavSection"; 
import Login from "./pages/login"; 
import Signup from "./pages/SignUp"; 
import ResetPassword from "./pages/ResetPassword";
import SideAboutPanel from "./components/SideAboutPanel";
export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/causes" element={<Causes />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/causes/:id" element={<SingleCauses />} />
      <Route path="/blog-right-slider" element={<BlogRightSlider />} />
      <Route path="/team" element={<Team />} />
      <Route path="/event" element={<Event />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/blog/:id" element={<SingleBlogPage />} />
      <Route path="/tarns_navbar" element={<Trans_Navbar/>}/>
      <Route path="/about-nav-section" element={<AboutNavSection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword/>} />
      <Route path="/side-about-panel" element={<SideAboutPanel />} />
    </Routes>
  );
}

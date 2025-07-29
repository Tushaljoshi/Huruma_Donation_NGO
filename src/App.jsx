import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MapSection from './components/MapSection';
import CounterSection from './components/CounterSection';
import CausesSection from './components/CausesSection';
import TeamSection from './components/TeamSection';
import EventsSection from './components/EventsSection';
import TestimonialsSection from './components/TestimonialsSection';
import LatestNewsSection from './components/LatestNewsSection';
import Footer from './components/Footer';
import MissionSection from './components/MissionSection';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MapSection />
      <CounterSection />
      <CausesSection />
      <MissionSection/>
      <TeamSection/>
      <EventsSection/>
      <TestimonialsSection/>
      <LatestNewsSection/>
      <Footer/>
    </div>
  );
}

export default App;

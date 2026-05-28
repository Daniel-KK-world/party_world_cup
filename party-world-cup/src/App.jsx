import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FanParties from './components/FanParties';
import Sponsorship from './components/Sponsorship';
import Merchandise from './components/Merchandise';
import HostAParty from './components/HostAParty';
import Footer from './components/Footer';

export default function App() {
  return (
    // 'h-screen' locks the app to 100vh so it never scrolls.
    <div 
      className="relative flex flex-col h-screen bg-cover bg-center font-sans text-white"
      style={{ backgroundImage: "url('/stadium-bg.jpg')" }} 
    >
      {/* Dark Overlay to make the text readable */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <Navbar />
      <Hero />
      <About />
      <FanParties />
      <Merchandise />
      <Sponsorship />
      <HostAParty />
      <Footer /> 
    </div>
  );
}
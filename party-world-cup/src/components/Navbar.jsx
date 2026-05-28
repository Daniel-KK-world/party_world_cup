import React from 'react';

export default function Navbar() {
  return (
    <header className="relative z-10 flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black/20">
      {/* LOGO SECTION */}
      <div className="flex flex-col items-center">
        <span className="text-4xl font-serif text-brand-gold leading-none">O1P</span>
        <span className="text-[9px] tracking-[0.25em] text-brand-gold mt-1">ONE 100 PARTIES</span>
      </div>
      
      {/* GROUPED CONTAINER: NAV LINKS + REGISTER BUTTON */}
      <div className="hidden lg:flex items-stretch border border-white/5 bg-black/40">
        
        {/* Nav Links */}
        <nav className="flex items-center space-x-8 px-8 text-[11px] tracking-widest text-gray-300 font-medium">
          <a href="#" className="hover:text-brand-gold transition">ABOUT</a>
          <a href="#" className="hover:text-brand-gold transition">CITIES</a>
          <a href="#" className="hover:text-brand-gold transition">MERCH</a>
          <a href="#" className="hover:text-brand-gold transition">SPONSORS</a>
          <a href="#" className="hover:text-brand-gold transition">CONTACT</a>
        </nav>

        {/* Button attached directly to the links container */}
        <button className="bg-gradient-to-r from-[#b8860b] via-brand-gold to-[#fceb8c] text-black font-bold px-8 py-4 text-xs tracking-widest hover:opacity-90 transition">
          REGISTER NOW
        </button>
      </div>
    </header>
  );
}
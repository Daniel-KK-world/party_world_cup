import React from 'react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  return (
    <header className="relative z-10 w-full border-b border-white/10 bg-black/20">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-5 w-full">
        
        <div className="flex items-center">
          <img 
            src={logoImg} 
            alt="O1P Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </div>
        
        <div className="hidden lg:flex items-stretch border border-white/5 bg-black/40">
          
          {/* NAV LINKS - Updated to text-sm (14px) and Inter font */}
          <nav 
            className="flex items-center space-x-8 px-8 text-sm tracking-widest text-gray-300 font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <a href="#" className="hover:text-brand-gold transition">ABOUT</a>
            <a href="#" className="hover:text-brand-gold transition">CITIES</a>
            <a href="#" className="hover:text-brand-gold transition">MERCH</a>
            <a href="#" className="hover:text-brand-gold transition">SPONSORS</a>
            <a href="#" className="hover:text-brand-gold transition">CONTACT</a>
          </nav>

          {/* BUTTON - Also updated to text-sm (14px) to match */}
          <button 
            className="bg-gradient-to-r from-[#b8860b] via-brand-gold to-[#fceb8c] text-black font-bold px-8 py-4 text-sm tracking-widest hover:opacity-90 transition"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            REGISTER NOW
          </button>
        </div>
        
      </div>
    </header>
  );
}
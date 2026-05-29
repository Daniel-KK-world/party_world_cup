import React from 'react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 pt-16 pb-6 px-4 sm:px-8 relative z-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* TOP SECTION: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col">
            <img src={logoImg} alt="O1P Logo" className="h-14 w-auto object-contain mb-6 self-start" />
            <p className="text-gray-400 text-sm font-sans mb-6 leading-relaxed max-w-xs">
              The world's largest simultaneous Ghana fan party event.<br />
              Win or lose — we celebrate together.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-[#D4A017]/30 flex items-center justify-center text-[#D4A017] hover:bg-[#D4A017]/10 transition">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 border border-[#D4A017]/30 flex items-center justify-center text-[#D4A017] hover:bg-[#D4A017]/10 transition">
                <TwitterIcon />
              </a>
              <a href="#" className="w-10 h-10 border border-[#D4A017]/30 flex items-center justify-center text-[#D4A017] hover:bg-[#D4A017]/10 transition">
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[#D4A017] text-xs font-bold tracking-widest mb-6 font-sans uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#cities" className="hover:text-white transition">Cities</a></li>
              <li><a href="#merchandise" className="hover:text-white transition">Merchandise</a></li>
              <li><a href="#spnsors" className="hover:text-white transition">Sponsors</a></li>
              <li><a href="#contact" className="hover:text-white transition">Host a Party</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h4 className="text-[#D4A017] text-xs font-bold tracking-widest mb-6 font-sans uppercase">
              CONTACT
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li className="flex items-center">
                <span className="text-[#D4A017] mr-3"><EmailIcon /></span>
                <a href="mailto:info@240parties.com" className="hover:text-white transition">info@240parties.com</a>
              </li>
              <li className="flex items-center">
                <span className="text-[#D4A017] mr-3"><PhoneIcon /></span>
                <a href="tel:+1800240PARTY" className="hover:text-white transition">+1 (800) 240-PARTY</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Flag */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 font-sans">
          <p className="mb-4 md:mb-0">© 2026 240 Parties. All rights reserved.</p>
          
          {/* Small Flag Stripes */}
          <div className="flex gap-1.5">
            <div className="w-6 h-1 bg-red-600"></div>
            <div className="w-6 h-1 bg-[#D4A017]"></div>
            <div className="w-6 h-1 bg-green-700"></div>
          </div>
        </div>

      </div>
    </footer>
  );
}

// ----------------------------------------------------
// RAW SVGs for Footer Icons
// ----------------------------------------------------
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}
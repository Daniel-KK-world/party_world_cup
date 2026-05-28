import React from 'react';

export default function FanParties() {
  // Array holding the card data to keep our JSX clean
  const locations = [
    { city: 'LONDON', country: 'UK', spots: '2,000', venue: 'Wembley Arena', date: 'Jun 15, 2026', flag: '🇬🇧', color: 'bg-red-600' },
    { city: 'ACCRA', country: 'Ghana', spots: '5,000', venue: 'Accra Sports Stadium', date: 'Jun 15, 2026', flag: '🇬🇭', color: 'bg-[#D4A017]' },
    { city: 'HAMBURG', country: 'Germany', spots: '1,500', venue: 'Barclays Arena', date: 'Jun 15, 2026', flag: '🇩🇪', color: 'bg-green-700' },
    { city: 'NEW YORK', country: 'USA', spots: '3,000', venue: 'Barclays Center', date: 'Jun 15, 2026', flag: '🇺🇸', color: 'bg-red-600' },
    { city: 'TORONTO', country: 'Canada', spots: '1,800', venue: 'Scotiabank Arena', date: 'Jun 15, 2026', flag: '🇨🇦', color: 'bg-[#D4A017]' },
    { city: 'AMSTERDAM', country: 'Netherlands', spots: '1,200', venue: 'AFAS Live', date: 'Jun 15, 2026', flag: '🇳🇱', color: 'bg-green-700' },
  ];

  return (
    <section className="relative z-10 w-full">
      
      {/* 1. STATS BANNER WITH CUSTOM GRADIENT */}
      <div className="bg-gradient-to-r from-[#D4A017] to-[#E2CB8D] py-12 md:py-16 text-black">
        <div className="max-w-5xl mx-auto flex justify-around items-center text-center px-4">
          
          <div className="flex flex-col items-center">
            <span className="font-bebas text-5xl md:text-7xl leading-none">100+</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold mt-2 font-sans">PARTIES</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="font-bebas text-5xl md:text-7xl leading-none">3</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold mt-2 font-sans">MATCHES</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="font-bebas text-5xl md:text-7xl leading-none">50+</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold mt-2 font-sans">CITIES</span>
          </div>

        </div>
      </div>

      {/* 2. MAIN FAN PARTIES GRID */}
      <div className="bg-[#0D0D0D] py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-bebas text-5xl md:text-6xl text-[#D4A017] tracking-wide mb-3">
              WORLDWIDE FAN PARTIES
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-sans">
              Priority venues with VIP experiences. Secure your spot before they sell out.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
            {locations.map((loc, index) => (
              <div key={index} className="bg-[#141414] border border-white/5 relative flex flex-col p-6 overflow-hidden">
                
                {/* Colored Top Border Strip */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${loc.color}`}></div>

                {/* Card Header (Flag + Spots) */}
                <div className="flex justify-between items-center mb-6 mt-2">
                  <span className="text-xl">{loc.flag}</span>
                  <span className="border border-[#D4A017]/30 text-[#D4A017] text-[10px] tracking-widest px-3 py-1 bg-[#D4A017]/5 font-semibold">
                    {loc.spots} SPOTS
                  </span>
                </div>

                {/* City & Country */}
                <h3 className="font-bebas text-3xl text-[#D4A017] tracking-widest mb-1">
                  {loc.city}
                </h3>
                <p className="text-gray-400 text-xs font-sans mb-5">
                  {loc.country}
                </p>

                {/* Venue Details */}
                <div className="flex flex-col space-y-2 mb-8 flex-grow">
                  <div className="flex items-center text-gray-400 text-xs font-sans">
                    <LocationPin />
                    <span className="ml-2">{loc.venue}</span>
                  </div>
                  <div className="text-gray-500 text-[11px] font-sans ml-5">
                    {loc.date}
                  </div>
                </div>

                {/* Claim Button */}
                <button className="w-full bg-gradient-to-r from-[#D4A017] to-[#E2CB8D] text-black font-bold py-3 text-xs tracking-widest hover:opacity-90 transition">
                  CLAIM YOUR SPOT
                </button>
              </div>
            ))}
          </div>

          {/* Footer View All Button */}
          <button className="border border-[#D4A017] text-[#D4A017] font-bold px-8 py-3 text-xs tracking-widest hover:bg-[#D4A017]/10 transition">
            VIEW ALL 240+ LOCATIONS
          </button>

        </div>
      </div>
    </section>
  );
}

// Simple inline SVG for the venue pin so you don't need external libraries
function LocationPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}
import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-[#0D0D0D] py-24 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-10">
          <h2 className="font-bebas text-5xl md:text-6xl text-brand-gold tracking-wide mb-3">
            WHAT IS ONE 100 PARTIES?
          </h2>
          <p className="text-gray-400 text-xs md:text-sm tracking-[0.2em] font-medium uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Our Manifesto, In Three Lines
          </p>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mb-16 max-w-5xl"></div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* CARD 1 */}
          <div className="bg-[#141414] border border-brand-gold/30 shadow-[0_0_10px_rgba(255,215,0,0.1)] p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-brand-gold/50">
            <div className="text-brand-gold mb-6">
              <GlobeIcon />
            </div>
            <h3 className="font-bebas text-2xl md:text-3xl text-brand-gold tracking-wider mb-4">
              AFRICA'S GATEWAY IS OPEN.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Jollof on every table. Afrobeats on every speaker. Akwaaba in every language. The world is invited - are you in?
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#141414] border border-brand-gold/30 shadow-[0_0_10px_rgba(255,215,0,0.1)] p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-brand-gold/50">
            <div className="text-brand-gold mb-6">
              <UsersIcon />
            </div>
            <h3 className="font-bebas text-2xl md:text-3xl text-brand-gold tracking-wider mb-4">
              ONE NATION. ONE TEAM.<br />ONE PARTY.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              At the same second, on every continent, we roar as one. Miss it, and you miss history.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#141414] border border-brand-gold/30 shadow-[0_0_10px_rgba(255,215,0,0.1)] p-10 flex flex-col items-center text-center transition-all duration-300 hover:border-brand-gold/50">
            <div className="text-brand-gold mb-6">
              <MusicIcon />
            </div>
            <h3 className="font-bebas text-2xl md:text-3xl text-brand-gold tracking-wider mb-4">
              ONE NATION. ONE TEAM.<br />ONE PARTY.
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              At the same second, on every continent, we roar as one. Miss it, and you miss history.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function GlobeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  );
}
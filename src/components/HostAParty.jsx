import React from 'react';

export default function HostAParty() {
  return (
    <section id="contact" className="bg-[#0D0D0D] py-24 px-4 sm:px-8 relative z-10 w-full">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* GHANA FLAG STRIPES */}
        <div className="flex gap-2 mb-8">
          <div className="w-8 h-1.5 bg-red-600"></div>
          <div className="w-8 h-1.5 bg-[#D4A017]"></div>
          <div className="w-8 h-1.5 bg-green-700"></div>
        </div>

        {/* HEADER TEXT */}
        <h2 className="font-bebas text-5xl md:text-6xl text-[#D4A017] tracking-wide mb-4 text-center">
          HOST A PARTY
        </h2>
        <p className="text-gray-400 text-sm md:text-base font-sans mb-12 text-center max-w-2xl leading-relaxed">
          Want to be an official party host? Register your venue and join the movement. Whether it is your living room or a stadium — all parties count.
        </p>

        {/* FORM CONTAINER */}
        <div className="w-full bg-[#141414] border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl">
          <form className="flex flex-col items-center w-full">
            
            {/* Input Grid (2x2 on Desktop, Stacked on Mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
              
              <input 
                type="text" 
                placeholder="Your Name" 
                className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-4 outline-none focus:border-[#D4A017] transition-colors w-full font-sans placeholder-gray-500" 
              />
              
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-4 outline-none focus:border-[#D4A017] transition-colors w-full font-sans placeholder-gray-500" 
              />
              
              <input 
                type="text" 
                placeholder="City / Country" 
                className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-4 outline-none focus:border-[#D4A017] transition-colors w-full font-sans placeholder-gray-500" 
              />
              
              <input 
                type="text" 
                placeholder="Expected Guest Count" 
                className="bg-[#1A1A1A] border border-white/10 text-white text-sm px-4 py-4 outline-none focus:border-[#D4A017] transition-colors w-full font-sans placeholder-gray-500" 
              />
              
            </div>

            {/* SUBMIT BUTTON */}
            <button 
              type="submit" 
              className="bg-gradient-to-r from-[#D4A017] to-[#E2CB8D] text-black font-bold px-12 py-4 text-xs tracking-widest hover:opacity-90 transition shadow-lg"
            >
              REGISTER AS A HOST
            </button>
            
          </form>
        </div>

      </div>
    </section>
  );
}
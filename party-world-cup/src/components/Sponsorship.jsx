import React from 'react';

export default function Sponsorship() {
  const tiers = [
    {
      name: 'PLATINUM',
      price: '$15,000',
      color: 'text-white',
      borderColor: 'border-[#E5E7EB]',
      btnBg: 'bg-[#E5E7EB]',
      btnText: 'text-black',
      highlight: false,
      features: [
        'Premium stage branding',
        'VIP hospitality suite',
        '30-second ad slot',
        '5 VIP passes',
        'Social media features',
        'Logo on all materials'
      ]
    },
    {
      name: 'GOLD',
      price: '$8,000',
      color: 'text-[#D4A017]',
      borderColor: 'border-[#D4A017]',
      btnBg: 'bg-gradient-to-r from-[#D4A017] to-[#E2CB8D]',
      btnText: 'text-black',
      highlight: true, // This adds the gold border around the whole card
      features: [
        'Stage banner placement',
        '2-minute brand segment',
        '3 VIP passes',
        'Social media mention',
        'Logo on event materials'
      ]
    },
    {
      name: 'SILVER',
      price: '$3,500',
      color: 'text-[#9CA3AF]',
      borderColor: 'border-[#9CA3AF]',
      btnBg: 'bg-[#9CA3AF]',
      btnText: 'text-black',
      highlight: false,
      features: [
        'Banner at venue entrance',
        '1 VIP pass',
        'Logo on event program',
        'Social media mention'
      ]
    }
  ];

  return (
    <section className="bg-[#0D0D0D] py-24 px-4 sm:px-8 relative z-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* --- PART 1: SPONSORSHIP TIERS --- */}
        <div className="text-center mb-16 w-full">
          <h2 className="font-bebas text-5xl md:text-6xl text-[#D4A017] tracking-wide mb-3">
            SPONSORSHIP TIERS
          </h2>
          <p className="text-gray-400 text-sm font-sans mb-8">
            Partner with the biggest Ghana fan event in history. Choose your tier.
          </p>
          {/* Subtle divider */}
          <div className="w-full h-px bg-white/5 max-w-4xl mx-auto"></div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-32">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`bg-[#141414] relative flex flex-col p-8 ${
                tier.highlight ? 'border border-[#D4A017]' : 'border border-white/5'
              }`}
            >
              {/* Top Color Bar */}
              <div className={`absolute top-0 left-0 w-full h-2 ${tier.borderColor} border-t-4`}></div>
              
              {/* Header */}
              <div className="mt-4 mb-8">
                <h3 className={`font-bebas text-xl tracking-widest flex items-center gap-2 mb-2 ${tier.color}`}>
                  <span>★</span> {tier.name}
                </h3>
                <div className={`font-bebas text-5xl tracking-wider ${tier.name === 'GOLD' ? 'text-[#D4A017]' : 'text-white'}`}>
                  {tier.price}
                </div>
              </div>

              {/* Features List */}
              <ul className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-xs font-sans">
                    <CheckIcon color={tier.name === 'GOLD' ? '#D4A017' : '#FFFFFF'} />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full font-bold py-4 text-xs tracking-widest transition hover:opacity-90 ${tier.btnBg} ${tier.btnText}`}>
                BECOME A {tier.name} SPONSOR
              </button>
            </div>
          ))}
        </div>


        {/* --- PART 2: SPONSOR ENQUIRY FORM --- */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          
          <div className="text-center mb-10">
            <h2 className="font-bebas text-4xl md:text-5xl text-[#D4A017] tracking-wide mb-3">
              SPONSOR ENQUIRY
            </h2>
            <p className="text-gray-400 text-sm font-sans mb-8">
              Interested in sponsoring or hosting? Reach out to our team.
            </p>
            <div className="w-48 h-px bg-[#D4A017]/30 mx-auto"></div>
          </div>

          <form className="w-full space-y-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-[#D4A017] text-[10px] tracking-widest font-semibold mb-2 uppercase">Full Name</label>
              <input 
                type="text" 
                placeholder="Kwame Mensah" 
                className="bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#D4A017] transition-colors w-full font-sans"
              />
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label className="text-[#D4A017] text-[10px] tracking-widest font-semibold mb-2 uppercase">Company / Organisation</label>
              <input 
                type="text" 
                placeholder="Acme Corp" 
                className="bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#D4A017] transition-colors w-full font-sans"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#D4A017] text-[10px] tracking-widest font-semibold mb-2 uppercase">Email Address</label>
              <input 
                type="email" 
                placeholder="kwame@example.com" 
                className="bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#D4A017] transition-colors w-full font-sans"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-[#D4A017] text-[10px] tracking-widest font-semibold mb-2 uppercase">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 000 000 0000" 
                className="bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#D4A017] transition-colors w-full font-sans"
              />
            </div>

            {/* Tier Select */}
            <div className="flex flex-col">
              <label className="text-[#D4A017] text-[10px] tracking-widest font-semibold mb-2 uppercase">Partnership Tier</label>
              <select className="bg-[#141414] border border-white/10 text-gray-400 text-sm px-4 py-3 outline-none focus:border-[#D4A017] transition-colors w-full font-sans appearance-none">
                <option>Select a tier...</option>
                <option value="platinum">Platinum ($15,000)</option>
                <option value="gold">Gold ($8,000)</option>
                <option value="silver">Silver ($3,500)</option>
                <option value="other">Other / Custom</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-[#D4A017] text-[10px] tracking-widest font-semibold mb-2 uppercase">Message</label>
              <textarea 
                rows="4" 
                placeholder="Tell us about your brand and goals..." 
                className="bg-[#141414] border border-white/10 text-white text-sm px-4 py-3 outline-none focus:border-[#D4A017] transition-colors w-full font-sans resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-gradient-to-r from-[#D4A017] to-[#E2CB8D] text-black font-bold px-8 py-4 text-xs tracking-widest hover:opacity-90 transition mt-4"
            >
              SUBMIT ENQUIRY
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
}

// Reusable inline checkmark SVG
function CheckIcon({ color }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 opacity-80">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
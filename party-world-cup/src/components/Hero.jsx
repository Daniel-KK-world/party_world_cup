import React, { useState, useEffect } from 'react';
import heroBg from '../assets/stadiumbg.png';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('June 15, 2026 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval); 
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <main className="relative flex-1 flex flex-col items-center justify-center text-center px-4 overflow-hidden min-h-[calc(100vh-80px)]">
      
      <img 
        src={heroBg} 
        alt="Hero Background" 
        className="absolute inset-0 w-full h-full object-cover z-0" 
      />
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="text-brand-gold tracking-[0.3em] text-xs md:text-sm font-semibold mb-3">
          GHANA BLACK STARS · FIFA WORLD CUP 2026
        </h2>
        
        <h1 className="font-bebas text-6xl md:text-[8rem] uppercase leading-[0.85] tracking-tight mb-1 drop-shadow-2xl">
          WIN OR LOSE,
        </h1>
        <h1 className="font-bebas text-6xl md:text-[8rem] uppercase text-brand-gold leading-[0.85] tracking-tight mb-5 drop-shadow-2xl">
          WE GO PARTY.
        </h1>

        <p className="max-w-2xl text-xl text-gray-300 mb-8 drop-shadow-md px-4">
        Join thousands of Black Stars fans worldwide for the biggest simultaneous fan party in history. June 15, 2026 · Worldwide
        </p>

        <div className="flex items-end space-x-4 md:space-x-8 mb-8">
          <TimeUnit number={formatNum(timeLeft.days)} label="DAYS" />
          <span className="font-bebas text-brand-gold text-4xl md:text-6xl mb-3 md:mb-4">:</span>
          <TimeUnit number={formatNum(timeLeft.hours)} label="HOURS" />
          <span className="font-bebas text-brand-gold text-4xl md:text-6xl mb-3 md:mb-4">:</span>
          <TimeUnit number={formatNum(timeLeft.minutes)} label="MINS" />
          <span className="font-bebas text-brand-gold text-4xl md:text-6xl mb-3 md:mb-4">:</span>
          <TimeUnit number={formatNum(timeLeft.seconds)} label="SECS" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 relative mt-2">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-brand-gold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          
          <button className="bg-brand-gold text-black font-bold px-10 py-3 w-56 hover:bg-yellow-600 transition tracking-[0.15em] text-xs md:text-sm">
            GET TICKETS
          </button>
          <button className="border-2 border-brand-gold text-brand-gold bg-black/40 backdrop-blur-sm font-bold px-10 py-3 w-56 hover:bg-brand-gold/10 transition tracking-[0.15em] text-xs md:text-sm">
            HOST A PARTY
          </button>
        </div>
      </div>
    </main>
  );
}

function TimeUnit({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-bebas text-5xl md:text-7xl text-brand-gold leading-none drop-shadow-md w-14 md:w-20 text-center">
        {number}
      </span>
      <span className="text-[9px] md:text-[10px] tracking-[0.3em] mt-2 text-gray-400">
        {label}
      </span>
    </div>
  );
}
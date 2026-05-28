import React from 'react';
import jerseyImg from '../assets/jersey.PNG';
import hatImg from '../assets/hat.PNG';
import scarfImg from '../assets/scarf.PNG';

export default function Merchandise() {
  const products = [
    {
      name: 'Black Stars Jersey',
      price: '$85',
      tag: 'LIMITED EDITION',
      image: jerseyImg
    },
    {
      name: 'Fan Bucket Hat',
      price: '$35',
      tag: 'BESTSELLER',
      image: hatImg
    },
    {
      name: 'Ghana Scarf',
      price: '$25',
      tag: 'NEW ARRIVAL',
      image: scarfImg
    }
  ];

  return (
    <section className="bg-[#0D0D0D] py-24 px-4 sm:px-8 relative z-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* HEADER */}
        <div className="text-center mb-16 w-full">
          <h2 className="font-bebas text-5xl md:text-6xl text-[#D4A017] tracking-wide mb-3">
            OFFICIAL MERCHANDISE
          </h2>
          <p className="text-gray-400 text-sm font-sans mb-8">
            Rep the Black Stars in style. Official licensed merchandise.
          </p>
          <div className="w-full h-px bg-white/5 max-w-4xl mx-auto"></div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-16">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-[#141414] border border-white/5 p-8 flex flex-col items-center text-center"
            >
              {/* Product Image & Tag */}
              <div className="relative mb-8 flex flex-col items-center w-full">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-48 h-48 object-cover rounded-3xl bg-white/5" 
                />
                <span className="bg-[#1a150b] border border-[#D4A017]/20 text-[#D4A017] text-[9px] tracking-widest px-4 py-1.5 font-bold absolute -bottom-3 uppercase">
                  {product.tag}
                </span>
              </div>

              {/* Product Details */}
              <h3 className="text-white font-bold text-lg font-sans tracking-wide">
                {product.name}
              </h3>
              <p className="text-[#D4A017] font-bold mt-2 text-lg font-sans">
                {product.price}
              </p>

              {/* Add to Cart Button */}
              <button className="mt-8 w-full bg-gradient-to-r from-[#D4A017] to-[#E2CB8D] text-black font-bold py-3 text-xs tracking-widest hover:opacity-90 transition">
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <button className="border border-[#D4A017] text-[#D4A017] font-bold px-10 py-4 text-xs tracking-widest hover:bg-[#D4A017]/10 transition">
          SHOP ALL MERCHANDISE
        </button>

      </div>
    </section>
  );
}
import React, { useState, useEffect } from 'react';
import { featuredBundle, dailyWeapons } from '../data/storeData';

// ============================================================
// FEATURED & DAILY ROTATION SCREEN
// Shows the main bundle and 4 daily rotating weapon cards
// ============================================================
export default function FeaturedStore({ userVP, onBuyItem, onGoToBuyVP }) {
  // Simple countdown seconds state for the live timer
  const [seconds, setSeconds] = useState(15 * 3600 + 26 * 60);

  // Timer effect to count down every second
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 86400));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Helper function to format seconds into HH:MM:SS
  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
    return `${h}H : ${m}M : ${s}S`;
  };

  // Helper function when user clicks "Purchase"
  const handlePurchase = (item) => {
    if (userVP < item.price) {
      alert(`⚠️ Not enough VP! You have ${userVP.toLocaleString()} VP, but this costs ${item.price.toLocaleString()} VP. Please visit the 'Buy Valorant Points' tab to top up!`);
    } else {
      onBuyItem(item);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">

      {/* ======================================================= */}
      {/* 1. FEATURED BUNDLE (KURONAMI)                           */}
      {/* ======================================================= */}
      <section className="bg-[#121c27] border border-[#2c3641] rounded-lg p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Bundle Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-[#b60129] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                {featuredBundle.edition}
              </span>
              <span className="text-[#ffd000] text-xs font-mono bg-[#17202b] border border-[#2c3641] px-2 py-0.5 rounded">
                ⏳ EXPIRES IN: {formatTime(seconds)}
              </span>
            </div>

            <div>
              <p className="text-xs text-[#00efcf] font-mono tracking-widest uppercase font-bold">
                {featuredBundle.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl font-black text-[#fff0cc] tracking-tight">
                {featuredBundle.name}
              </h1>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              {featuredBundle.description}
            </p>

            {/* Included weapons list */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {featuredBundle.weapons.map((w, index) => (
                <span key={index} className="text-[10px] font-mono bg-[#17202b] text-gray-300 border border-[#2c3641] px-2 py-0.5 rounded">
                  ✓ {w}
                </span>
              ))}
            </div>

            {/* Price & Buy Button */}
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-[#17202b] border border-[#2c3641] px-3 py-2 rounded">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#ffd000] font-mono">
                    🪙 {featuredBundle.price.toLocaleString()} VP
                  </span>
                  <span className="text-xs text-gray-500 line-through font-mono">
                    {featuredBundle.originalPrice.toLocaleString()} VP
                  </span>
                </div>
                <span className="text-[10px] text-[#00efcf] font-mono font-bold">
                  {featuredBundle.discount}
                </span>
              </div>

              <button
                onClick={() => handlePurchase(featuredBundle)}
                className="bg-[#ffd000] hover:bg-yellow-400 text-black font-bold font-mono text-sm px-6 py-3 rounded shadow-md hover:scale-105 transition-all"
              >
                ACQUIRE BUNDLE
              </button>
            </div>
          </div>

          {/* Bundle Hero Image */}
          <div className="flex justify-center items-center">
            <img 
              src={featuredBundle.image} 
              alt={featuredBundle.name}
              className="max-h-72 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300" 
            />
          </div>

        </div>
      </section>


      {/* ======================================================= */}
      {/* 2. DAILY STORE ROTATION (4 WEAPON CARDS)                */}
      {/* ======================================================= */}
      <section className="space-y-4">
        
        {/* Section Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2c3641] pb-3">
          <div>
            <span className="text-[10px] text-[#00efcf] font-mono tracking-widest uppercase block font-bold">
              DIRECT ARMORY OFFERS
            </span>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              DAILY STORE ROTATION
            </h2>
          </div>

          <button
            onClick={onGoToBuyVP}
            className="self-start sm:self-auto text-xs font-mono bg-[#17202b] hover:bg-[#212b35] text-[#ffd000] border border-[#2c3641] px-3 py-1.5 rounded transition-colors"
          >
            + TOP UP VALORANT POINTS
          </button>
        </div>

        {/* 4 Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dailyWeapons.map((weapon) => (
            <div
              key={weapon.id}
              className="bg-[#121c27] border border-[#2c3641] hover:border-[#ffd000] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-200 group shadow-md"
            >
              {/* Card Top: Type & Tier */}
              <div className="p-3 bg-[#17202b] flex justify-between items-center text-[10px] font-mono">
                <span className="text-gray-400 uppercase">{weapon.type}</span>
                <span className="bg-[#ffd000]/10 text-[#ffd000] border border-[#ffd000]/30 px-1.5 py-0.5 rounded font-bold uppercase">
                  {weapon.tier}
                </span>
              </div>

              {/* Card Image */}
              <div className="h-44 p-4 flex items-center justify-center bg-gradient-to-b from-[#121c27] to-[#17202b]">
                <img
                  src={weapon.image}
                  alt={weapon.name}
                  className="max-h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Card Bottom: Name, Description, Price & Button */}
              <div className="p-4 space-y-3 bg-[#17202b] border-t border-[#2c3641]">
                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-[#ffd000] transition-colors">
                    {weapon.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                    {weapon.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#2c3641]">
                  <span className="text-[#ffd000] font-mono font-bold text-sm">
                    🪙 {weapon.price.toLocaleString()} VP
                  </span>

                  <button
                    onClick={() => handlePurchase(weapon)}
                    className="bg-[#b60129] hover:bg-[#ff4655] text-white text-xs font-mono font-bold px-3 py-1.5 rounded transition-colors"
                  >
                    PURCHASE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

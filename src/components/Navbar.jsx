import React, { useState } from 'react';

// ============================================================
// NAVBAR COMPONENT
// ============================================================
export default function Navbar({ currentPage, setCurrentPage, userVP }) {
  // Simple state to toggle mobile hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to change page and close the mobile dropdown
  const goToPage = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a141e]/90 backdrop-blur-md border-b border-[#2c3641] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left Side: Valorant Logo & Brand */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => goToPage('store')} 
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            {/* Valorant Icon */}
            <div className="w-9 h-9 bg-[#212b35] border border-[#2c3641] flex items-center justify-center rounded group-hover:border-[#ffd000] transition-colors">
              <svg className="w-5 h-5 fill-current text-[#ffd000]" viewBox="0 0 100 100">
                <polygon points="0,15 38,0 48,100 10,100" />
                <polygon points="58,0 100,0 80,52 38,52" />
              </svg>
            </div>
            <div>
              <span className="block font-bold text-sm tracking-widest text-[#fff0cc] uppercase font-sans">
                VALORANT
              </span>
              <span className="block text-[9px] tracking-widest text-gray-400 font-mono">
                STORE PROTOCOL
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (hidden on mobile, visible on desktop) */}
          <nav className="hidden md:flex items-center gap-2">
            <button
              onClick={() => goToPage('store')}
              className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider rounded transition-all ${
                currentPage === 'store'
                  ? 'bg-[#ffd000] text-black shadow'
                  : 'text-gray-300 hover:text-white hover:bg-[#17202b]'
              }`}
            >
              FEATURED & STORE
            </button>

            <button
              onClick={() => goToPage('buy-points')}
              className={`px-3 py-1.5 text-xs font-mono font-bold tracking-wider rounded transition-all ${
                currentPage === 'buy-points'
                  ? 'bg-[#ffd000] text-black shadow'
                  : 'text-gray-300 hover:text-white hover:bg-[#17202b]'
              }`}
            >
              BUY VALORANT POINTS (PHP)
            </button>
          </nav>
        </div>

        {/* Right Side: Currency Counters & User Profile */}
        <div className="flex items-center gap-3">
          
          {/* Currency Pill */}
          <div className="hidden sm:flex items-center gap-2 bg-[#121c27] border border-[#2c3641] px-3 py-1 rounded text-xs font-mono">
            {/* Valorant Points (VP) */}
            <div className="flex items-center gap-1 text-[#ffd000] font-bold">
              <span>🪙</span>
              <span>{userVP.toLocaleString()} VP</span>
            </div>
            <span className="text-gray-500">|</span>
            {/* Radianite Points (RP) */}
            <div className="flex items-center gap-1 text-[#00efcf]">
              <span>🔷</span>
              <span>140 RP</span>
            </div>
          </div>

          {/* User Tag Badge */}
          <div className="hidden sm:flex items-center gap-2 bg-[#17202b] border border-[#2c3641] px-2.5 py-1 rounded text-xs">
            <span className="w-2 h-2 rounded-full bg-[#00efcf] animate-pulse"></span>
            <span className="font-mono text-gray-200 font-bold">PHOENIX#EUW</span>
          </div>

          {/* Mobile Hamburger Button (visible on mobile only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 bg-[#17202b] text-gray-200 border border-[#2c3641] rounded hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (shown when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a141e] border-b border-[#2c3641] px-4 py-4 space-y-3">
          {/* Mobile Currency info */}
          <div className="flex justify-between bg-[#17202b] p-2.5 rounded text-xs font-mono">
            <span className="text-[#ffd000] font-bold">🪙 {userVP.toLocaleString()} VP</span>
            <span className="text-[#00efcf]">🔷 140 RP</span>
            <span className="text-gray-300">PHOENIX#EUW</span>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => goToPage('store')}
              className={`w-full text-left px-3 py-2 text-xs font-mono font-bold rounded ${
                currentPage === 'store' ? 'bg-[#ffd000] text-black' : 'text-gray-300 hover:bg-[#17202b]'
              }`}
            >
              FEATURED & STORE
            </button>

            <button
              onClick={() => goToPage('buy-points')}
              className={`w-full text-left px-3 py-2 text-xs font-mono font-bold rounded ${
                currentPage === 'buy-points' ? 'bg-[#ffd000] text-black' : 'text-gray-300 hover:bg-[#17202b]'
              }`}
            >
              BUY VALORANT POINTS (PHP)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { paymentMethods, vpPackages } from '../data/storeData';

// ============================================================
// BUY VALORANT POINTS SCREEN (Screen 3)
// ============================================================
export default function BuyPoints({ userVP, onCompleteOrder, onBackToStore }) {
  const [activeMethod, setActiveMethod] = useState("gcash");

  // Handler when user clicks on a VP package
  const handleSelectPackage = (pkg) => {
    const methodObj = paymentMethods.find(m => m.id === activeMethod) || paymentMethods[0];
    
    // Create an order object to display in the receipt modal
    const orderData = {
      vpAmount: pkg.vp,
      bonusVP: pkg.bonus,
      baseVP: pkg.vp - pkg.bonus,
      price: pkg.pricePHP,
      methodName: methodObj.name,
      accountNo: activeMethod === "gcash" ? "• 0917••••482" : "• 4111••••8899",
      refCode: `#TXN-PH-${Math.floor(10000 + Math.random() * 90000)}-VAL`,
      prevBalance: userVP,
      newBalance: userVP + pkg.vp
    };

    onCompleteOrder(orderData);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      
      {/* Top Breadcrumb & Status */}
      <div className="flex justify-between items-center border-b border-[#2c3641] pb-3 text-xs font-mono">
        <button
          onClick={onBackToStore}
          className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
        >
          ← BACK TO STORE
        </button>
        <span className="text-[#ffd000] bg-[#17202b] px-2.5 py-1 rounded border border-[#2c3641]">
          🟢 GATEWAY: PHILIPPINES (PHP ₱)
        </span>
      </div>

      {/* Page Title */}
      <div className="text-center space-y-1">
        <span className="text-[10px] text-[#00efcf] font-mono tracking-widest uppercase font-bold">
          DIRECT ACQUISITION TERMINAL
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          BUY VALORANT POINTS
        </h1>
        <p className="text-xs text-gray-400 font-mono">
          SELECT PURCHASE METHOD • PHILIPPINES (PHP ₱)
        </p>
      </div>

      {/* Step 1: Choose Payment Channel */}
      <div className="space-y-3">
        <h2 className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider text-center">
          STEP 1: SELECT PAYMENT METHOD
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {paymentMethods.map((m) => {
            const isSelected = activeMethod === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMethod(m.id)}
                className={`p-3.5 rounded-lg border text-center transition-all flex flex-col items-center justify-center min-h-[85px] ${
                  isSelected
                    ? 'bg-[#17202b] border-[#00efcf] text-[#00efcf] shadow-md'
                    : 'bg-[#121c27] border-[#2c3641] text-gray-300 hover:bg-[#17202b]'
                }`}
              >
                {/* Shows logo image if you added one in storeData.js */}
                {m.image && (
                  <img 
                    src={m.image} 
                    alt={m.name} 
                    className="max-h-7 max-w-[80px] object-contain mb-1" 
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                <div className="font-bold text-base">{m.name}</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">{m.description}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Choose VP Tier */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-gray-400 font-bold uppercase">
            STEP 2: CHOOSE VALORANT POINTS PACKAGE
          </span>
          <span className="text-[#ffd000]">
            CURRENT BALANCE: {userVP.toLocaleString()} VP
          </span>
        </div>

        {/* Responsive Grid of VP Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vpPackages.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                onClick={() => handleSelectPackage(pkg)}
                className={`cursor-pointer rounded-lg border p-6 flex flex-col justify-between transition-all duration-200 hover:scale-[1.02] shadow-lg ${
                  isPopular
                    ? 'bg-[#17202b] border-[#ffd000] ring-1 ring-[#ffd000]/50'
                    : 'bg-[#121c27] border-[#2c3641] hover:border-[#00efcf]'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="text-[10px] font-mono font-bold bg-[#ffd000] text-black text-center py-1 rounded mb-3 tracking-widest uppercase">
                    ★ MOST POPULAR // BEST VALUE ★
                  </div>
                )}

                {/* VP Amount */}
                <div className="text-center py-4 space-y-1">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#212b35] flex items-center justify-center text-xl mb-2">
                    🪙
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                    {pkg.vp.toLocaleString()} VP
                  </div>
                  {pkg.bonus > 0 ? (
                    <div className="text-xs text-[#00efcf] font-mono">
                      Includes +{pkg.bonus.toLocaleString()} Bonus VP
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500 font-mono">
                      Standard Package
                    </div>
                  )}
                </div>

                {/* Price & Buy Button */}
                <div className="pt-4 border-t border-[#2c3641] flex items-center justify-between font-mono">
                  <span className="text-xs text-gray-400">PRICE:</span>
                  <span className="text-base font-bold text-[#ffd000]">
                    {pkg.pricePHP}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

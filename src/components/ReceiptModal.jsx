import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

// ============================================================
// PURCHASE SUCCESS RECEIPT MODAL
// ============================================================
export default function ReceiptModal({ isOpen, onClose, order, onReturnToStore }) {
  

  useEffect(() => {
    if (isOpen) {

      playTacticalChime();
      try {
        confetti({
          particleCount: 100,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#ffd000', '#00efcf', '#ff4655', '#ffffff']
        });
      } catch (err) {
      }
    }
  }, [isOpen]);


  const playTacticalChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();


      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, ctx.currentTime); 
      gain1.gain.setValueAtTime(0.2, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.25);

  
      setTimeout(() => {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(880, ctx.currentTime); // A5
        gain2.gain.setValueAtTime(0.25, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.4);
      }, 100);
    } catch (e) {

    }
  };

  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Box with tactical golden glow */}
      <div className="bg-[#121c27] border border-[#ffd000]/60 max-w-lg w-full rounded-lg overflow-hidden shadow-[0_0_50px_rgba(255,208,0,0.25)] space-y-5 animate-in zoom-in-95 duration-200">
        
        {/* Top Accent Stripe */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#ffd000] via-[#00efcf] to-[#b60129]" />

        {/* Modal Header */}
        <div className="px-6 pt-3 flex justify-between items-center text-xs font-mono border-b border-[#2c3641] pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00efcf] animate-ping" />
            <span className="text-[#ffd000] font-bold">
              ARMORY REQUISITION // SYNC CONFIRMED
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-base"
          >
            ✕
          </button>
        </div>

        {/* Success Icon & Heading */}
        <div className="px-6 text-center space-y-2">
          {/* Glowing Checkmark Badge */}
          <div className="w-16 h-16 mx-auto rounded-full bg-[#17202b] border-2 border-[#ffd000] flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(255,208,0,0.4)] text-[#ffd000] font-bold">
            ✓
          </div>
          <span className="text-[10px] text-[#00efcf] font-mono tracking-widest uppercase block font-bold">
            PROTOCOL 200 • ACQUISITION CONFIRMED
          </span>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
            SUCCESS! REQUISITION COMPLETE
          </h2>
          <p className="text-xs text-gray-400">
            Your points have been credited directly to your Riot account.
          </p>

          {/* Points Highlight Box with pulse */}
          <div className="bg-[#17202b] border border-[#ffd000]/40 p-3 rounded-lg mt-3 shadow-inner">
            <span className="text-3xl font-extrabold text-[#ffd000] font-mono tracking-wider block">
              +{order.vpAmount.toLocaleString()} VP
            </span>
            {order.bonusVP > 0 && (
              <span className="block text-[11px] text-[#00efcf] font-mono mt-0.5">
                (Base: {order.baseVP.toLocaleString()} VP + {order.bonusVP.toLocaleString()} Bonus VP)
              </span>
            )}
          </div>
        </div>

        {/* Receipt Details Grid */}
        <div className="px-6">
          <div className="bg-[#17202b] border border-[#2c3641] p-4 rounded text-xs font-mono space-y-2.5">
            <div className="flex justify-between">
              <span className="text-gray-400">PAYMENT METHOD:</span>
              <span className="text-[#00efcf] font-bold">{order.methodName} {order.accountNo}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">AMOUNT DEBITED:</span>
              <span className="text-white font-bold">{order.price}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">TRANSACTION REF:</span>
              <span className="text-gray-300 select-all font-mono">{order.refCode}</span>
            </div>

            <div className="flex justify-between border-t border-[#2c3641] pt-2">
              <span className="text-gray-400">UPDATED VP BALANCE:</span>
              <span className="text-[#ffd000] font-bold">{order.newBalance.toLocaleString()} VP</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">DISPATCH STATUS:</span>
              <span className="text-[#00efcf] font-bold">INSTANT IN-GAME</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onReturnToStore();
              onClose();
            }}
            className="flex-1 bg-[#b60129] hover:bg-[#ff4655] text-white font-mono font-bold text-xs py-3 rounded shadow-lg hover:scale-[1.02] transition-all"
          >
            RETURN TO ARMORY STORE →
          </button>

          <button
            onClick={onClose}
            className="bg-[#212b35] hover:bg-[#2c3641] text-gray-300 font-mono text-xs py-3 px-5 rounded transition-colors"
          >
            CLOSE
          </button>
        </div>

      </div>

    </div>
  );
}

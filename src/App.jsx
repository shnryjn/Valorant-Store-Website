import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeaturedStore from './components/FeaturedStore';
import BuyPoints from './components/BuyPoints';
import ReceiptModal from './components/ReceiptModal';

// ============================================================
// MAIN APP COMPONENT
// Manages global state: current page, user VP balance, and modal
// ============================================================
export default function App() {
  // Current active page tab ('store', 'buy-points', or 'design-system')
  const [currentPage, setCurrentPage] = useState('store');

  // User's current Valorant Points balance
  const [userVP, setUserVP] = useState(5550);

  // Receipt Modal State
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [receiptData, setReceiptData] = useState(null);

  // 1. Function called when user buys Valorant Points (Screen 3)
  const handleCompleteOrder = (order) => {
    setUserVP(order.newBalance);
    setReceiptData(order);
    setIsReceiptOpen(true);
  };

  // 2. Function called when user purchases a weapon or bundle (Screen 2)
  const handleBuyItem = (item) => {
    const updatedBalance = userVP - item.price;
    setUserVP(updatedBalance);

    // Show receipt modal for the item purchase
    setReceiptData({
      vpAmount: item.price,
      baseVP: item.price,
      bonusVP: 0,
      price: `${item.price.toLocaleString()} VP`,
      methodName: 'VP BALANCE',
      accountNo: '• IN-GAME REQUISITION',
      refCode: `#ITEM-PH-${Math.floor(10000 + Math.random() * 90000)}-VAL`,
      prevBalance: userVP,
      newBalance: updatedBalance
    });
    setIsReceiptOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a141e] text-[#d9e3f2] flex flex-col font-sans">
      
      {/* 1. Header Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userVP={userVP}
      />

      {/* 2. Main Page Content (switches based on currentPage state) */}
      <main className="flex-1 w-full pt-20 pb-12">
        {/* Screen 2: Featured Bundle & Daily Armory Store */}
        {currentPage === 'store' && (
          <FeaturedStore
            userVP={userVP}
            onBuyItem={handleBuyItem}
            onGoToBuyVP={() => setCurrentPage('buy-points')}
          />
        )}

        {/* Screen 3: Buy Valorant Points */}
        {currentPage === 'buy-points' && (
          <BuyPoints
            userVP={userVP}
            onCompleteOrder={handleCompleteOrder}
            onBackToStore={() => setCurrentPage('store')}
          />
        )}
      </main>

      {/* 3. Requisition Success Receipt Modal (Screen 1) */}
      <ReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        order={receiptData}
        onReturnToStore={() => {
          setCurrentPage('store');
          setIsReceiptOpen(false);
        }}
      />

      {/* 4. Footer */}
      <Footer onSelectTab={(page) => setCurrentPage(page)} />

    </div>
  );
}

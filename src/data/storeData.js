// ============================================================
// VALORANT STORE
// ============================================================

// Featured Kuronami Bundle
export const featuredBundle = {
  name: "KURONAMI",
  subtitle: "VENGEANCE BUNDLE",
  edition: "EXCLUSIVE COLLECTION",
  price: 7100,
  originalPrice: 9500,
  discount: "25% OFF",
  description: "Ancient shinobi water style forged into futuristic weaponry. Includes custom water finishers, inspection animations, and dual blades.",
  image: "/assets/hero-tactical-rifle.png",
  weapons: [
    "Kuronami Vandal",
    "Kuronami Sheriff",
    "Kuronami Marshal",
    "Kuronami Spectre",
    "Kuronami No Yaiba (Knife)"
  ]
};

// Daily Rotating Weapon Skins
export const dailyWeapons = [
  {
    id: 1,
    name: "Blackthorn Vandal",
    type: "Rifle",
    tier: "Premium",
    price: 2175,
    image: "/assets/blackthorn-vandal.png",
    description: "Dark thorny vines with glowing magenta crystalline veins."
  },
  {
    id: 2,
    name: "Araxys Vandal",
    type: "Rifle",
    tier: "Exclusive",
    price: 2175,
    image: "/assets/araxys-vandal.png",
    description: "Alien gunmetal armor plates that breathe open with thermal glow."
  },
  {
    id: 3,
    name: "Ayakashi Phantom",
    type: "Silenced Rifle",
    tier: "Deluxe",
    price: 1775,
    image: "/assets/ayakashi-phantom.png",
    description: "Traditional Japanese demon mask motif with cybernetic plating."
  },
  {
    id: 4,
    name: "Dolmir Reaver",
    type: "Rifle",
    tier: "Deluxe",
    price: 1775,
    image: "/assets/dolmir-skin.png",
    description: "Celestial gold and ivory chassis engraved with runic sigils."
  }
];

// Valorant Points Purchase Options 
export const vpPackages = [
  { id: "vp-1", vp: 475, bonus: 0, pricePHP: "₱249.00", popular: false },
  { id: "vp-2", vp: 1000, bonus: 0, pricePHP: "₱499.00", popular: false },
  { id: "vp-3", vp: 2050, bonus: 150, pricePHP: "₱999.00", popular: false },
  { id: "vp-4", vp: 3650, bonus: 325, pricePHP: "₱1,750.00", popular: true },
  { id: "vp-5", vp: 5350, bonus: 600, pricePHP: "₱2,490.00", popular: false },
  { id: "vp-6", vp: 11000, bonus: 1500, pricePHP: "₱4,990.00", popular: false }
];

// Payment Methods 
// Add logo here dave
export const paymentMethods = [
  { id: "gcash", name: "GCash", description: "E-Wallet Direct", image: "/assets/gcash.png" },
  { id: "maya", name: "Maya", description: "Digital Wallet", image: "/assets/maya.png" },
  { id: "visa", name: "VISA", description: "Credit / Debit", image: "/assets/visa.png" },
  { id: "mastercard", name: "Mastercard", description: "Global Cards", image: "/assets/mastercard.png" }
];

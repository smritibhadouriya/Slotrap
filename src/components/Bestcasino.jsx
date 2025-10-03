import React from 'react'
import Betpanda from '../../public/image/betpanda.svg'
import Betplay from '../../public/image/betplay.svg'
import LuckyBlock from '../../public/image/LuckyBlock.svg'

const Bestcasino = () => {
  const casinodata = {
    casinos: [
      {
        id: 1,
        image: Betpanda,
        name: "Betpanda",
        bonus: "100% Bonus Up To 1 BTC + 10% Weekly Cashback",
        rating: 9,
        link: "https://betpanda1.io/"
      },
      {
        id: 2,
        image: Betplay,
        name: "Betplay",
        bonus: "200% Deposit Bonus Up To $30000",
        rating: 10,
        link: "https://coincasino.com"
      },
      {
        id: 3,
        image: LuckyBlock,
        name: "LuckyBlock",
        bonus: "200% Match Bonus Up To $25000 + 50 Free Spins",
        rating: 8,
        link: "https://cryptorino.com"
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-8">
        Best Crypto Casinos for 2025
      </h1>

      <div className="space-y-4 sm:space-y-6">
        {casinodata.casinos.map((casino) => (
          <div
            key={casino.id}
            className="grid grid-cols-1 sm:grid-cols-[150px_1px_1fr_auto] items-center bg-purple-800 py-4 sm:py-6 px-3 sm:px-4 text-white gap-4 sm:gap-6 rounded-lg"
          >
            {/* Left: Logo */}
            <div className="flex justify-center">
              <img 
                src={casino.image} 
                alt={casino.name} 
                className="w-24 sm:w-32 h-16 sm:h-20 object-contain" 
              />
            </div>

            {/* Divider */}
            <div className="border-r border-gray-400 h-full opacity-50 hidden sm:block"></div>

            {/* Bonus + Rating */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              <p className="text-base sm:text-lg text-white font-medium flex-1 break-words text-center sm:text-left">
                {casino.bonus}
              </p>
              <span className="text-yellow-300 font-bold whitespace-nowrap text-sm sm:text-base">
                ★ {casino.rating}/10
              </span>
            </div>

            {/* Right: Button */}
            <div className="flex justify-center sm:justify-end">
              <a
                href={casino.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold py-1.5 sm:py-2 px-4 sm:px-6 rounded-lg transition text-sm sm:text-base"
              >
                Play Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestcasino;

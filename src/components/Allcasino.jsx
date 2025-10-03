import React from 'react';
import { useLocation } from 'react-router-dom';

const Allcasino = () => {
  const casinodata = {
    casinos: [
      {
        id: 1,
        name: 'CoinCasino',
        bonus: '200% Deposit Bonus Up To $30000',
        pros: [
          'Up to $100k Weekly Bonuses',  
          'Instant Withdrawals',
          'Free Spins and Free Bets',
        ],
        rating: 10,
        link: 'https://coincasino.com',
      },
      {
        id: 2,
        name: 'Lucky Block',
        bonus: '200% Match Bonus Up To $25000 + 50 Free Spins',
        pros: [
          'Claim a midweek reload bonus up to €500',
          'Instant payouts with no withdrawal limits',
          'Supports over 20 cryptos & Wallet Connect',
        ],
        rating: 9.9,
        link: 'https://cryptorino.com',
      },
      {
        id: 3,
        name: 'Instant Casino',
        bonus: '200% Match Bonus Up To $7500 + 10% Cashback',
        pros: [
          '10% Weekly Cashback with No Wagering Requirements',
          'Diverse Payment Methods with Instant Withdrawals',
          'Sign Up With Email In Under 10 Seconds',
        ],
        rating: 9.9,
        link: 'https://instantcasino.com',
      },
    ],
  };

  // Dynamic Titles for All Nav Pages
  const casinoContent = {
    '': { title: 'Best Crypto Casinos in 2025' }, // Empty string for root path
    'casinos-instant-withdrawal': { title: 'Best Instant Withdrawal Crypto Casinos in 2025' },
    'telegram-casinos': { title: 'Top Telegram Online Casinos for 2025' },
    'chicken-road-casino': { title: 'Best Chicken Road Casinos for 2025' },
    'no-verification-casinos': { title: 'Top No Verification Casinos in 2025' },
    'vpn-casinos': { title: 'Best VPN Friendly Casinos for 2025' },
    'crash-games': { title: 'Best Crash Games Gambling Sites in 2025' },
    'ethereum-casinos': { title: 'Best Ethereum Casinos in 2025' },
    'usdt-casinos': { title: 'Top USDT Casino Sites in 2025' },
    'crypto-sports-betting': { title: 'Top Crypto Sports Betting Sites in 2025' },
    'metamask-casinos': { title: 'Best MetaMask Crypto Casinos in 2025' },
    'ethereum-sports-betting': { title: 'Top Ethereum Sportsbooks in 2025' },
    'litecoin-casinos': { title: 'Top Litecoin Casinos for 2025' },
    'aviator-casinos': { title: 'Top Aviator Casino Sites for 2025' },
  };

  const location = useLocation();
  const pathname = location.pathname;
  console.log('Raw pathname:', pathname); // Log raw pathname

  // Extract the last segment of the pathname
  const pathSegments = pathname.split('/').filter(segment => segment); // Remove empty segments
  const normalizedCasinotype = pathSegments[pathSegments.length - 1]?.toLowerCase().trim() || '';
  console.log('Normalized casinotype:', normalizedCasinotype);
  console.log('Available casinoContent keys:', Object.keys(casinoContent));

  const content = casinoContent[normalizedCasinotype] || casinoContent[''] || { title: 'All Crypto Casinos' };
  console.log('Selected content:', content);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Dynamic Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-8">
        {content.title}
      </h1>

      {/* Casino List */}
      <div className="space-y-4 sm:space-y-6">
        {casinodata.casinos.map((casino) => (
          <div
            key={casino.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 hover:border-2 hover:border-yellow-400 rounded-lg p-3 sm:p-4 bg-white shadow-lg transition-all duration-200"
          >
            {/* Casino Name */}
            <div className="w-full sm:w-1/6 text-lg sm:text-xl font-bold text-gray-800">
              {casino.name}
            </div>

            {/* Bonus */}
            <div className="w-full sm:w-1/3 text-base sm:text-lg text-gray-900 font-medium">
              {casino.bonus}
            </div>

            {/* Pros */}
            <ul className="w-full sm:w-1/3 text-xs sm:text-sm text-gray-600 list-disc list-inside">
              {casino.pros.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>

            {/* Rating & Button */}
            <div className="w-full sm:w-1/6 flex flex-col items-start sm:items-end">
              <span className="text-yellow-500 font-bold mb-2 text-sm sm:text-base">
                ★ {casino.rating}/10
              </span>
              <a
                href={casino.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition text-sm sm:text-base"
              >
                PLAY NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allcasino;
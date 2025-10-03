import React from 'react'

const CasinoComparison = () => {
      const CasinosDetail = [
    {
      name: 'Lucky Block',
      payout_time: 'Up to 20 minutes',
      crypto_payment_methods: ['BTC', 'ETH', 'USDT', 'XRP', 'BNB', 'LTC', 'TRX', 'DOGE', 'SHIB', 'SAND'],
      casino_games: '5,000+',
      mobile_app: false,
      sports_betting: true,
      live_casino_games: '200+',
      welcome_bonus: '200% deposit match up to €25,000 + 50 free spins',
    },
    {
      name: 'TG.Casino',
      payout_time: 'Within 24 hours',
      crypto_payment_methods: ['BTC', 'ETH', 'USDT', 'XRP', 'BNB', 'LTC', 'TRX', 'DOGE', 'SHIB', 'SAND'],
      casino_games: '5,000+',
      mobile_app: false,
      sports_betting: true,
      live_casino_games: '100+',
      welcome_bonus: '200% rakeback bonus up to 10 ETH + 50 free spins',
    },
    {
      name: 'Mega Dice',
      payout_time: 'Up to 24 hours',
      crypto_payment_methods: ['BTC', 'ETH', 'USDT', 'XRP', 'BNB', 'LTC', 'TRX', 'DOGE', 'SHIB', 'SAND'],
      casino_games: '5,000+',
      mobile_app: false,
      sports_betting: true,
      live_casino_games: '250+',
      welcome_bonus: '200% match up to 1 BTC + 50 free spins',
    },
    {
      name: 'Coin Casino',
      payout_time: 'Instant',
      crypto_payment_methods: ['BTC', 'ETH', 'ADA', 'BCH', 'LTC', 'DOGE', 'XRP', 'USDT', 'TRX', 'USDC', 'WIF', 'SOL', 'POPCAT', 'BRETT', 'PEPE', 'BONK', 'TONCOIN', 'MATIC', 'SHIB', 'FLOKI', 'AVAX', 'BABYDOGE'],
      casino_games: '4,000+',
      mobile_app: false,
      sports_betting: true,
      live_casino_games: '330+',
      welcome_bonus: '200% match up to $30,000 + up to 50 free spins',
    },
    {
      name: 'Instant Casino',
      payout_time: 'Instant',
      crypto_payment_methods: ['BTC', 'ETH', 'USDT', 'XRP', 'BNB', 'LTC', 'TRX', 'DOGE', 'SHIB', 'SAND'],
      casino_games: '5,000+',
      mobile_app: false,
      sports_betting: true,
      live_casino_games: '150+',
      welcome_bonus: '200% deposit match up to $7,500',
    },
    {
      name: 'Golden Panda',
      payout_time: 'Instant (crypto), up to 24 h (fiat)',
      crypto_payment_methods: ['BTC', 'ETH', 'LTC', 'USDT', 'USDC', 'DOGE', 'XRP', 'BNB', 'SOL', 'DASH', 'BCH'],
      casino_games: '3,000+',
      mobile_app: false,
      sports_betting: true,
      live_casino_games: '150+',
      welcome_bonus: '200% up to €7,500 + 10% cashback',
    },
    {
      name: 'DisCasino',
      payout_time: 'Instant – 24 h',
      crypto_payment_methods: ['BTC', 'ADA', 'ETH', 'SHIB', 'LTC', 'USDC', 'DOGE', 'MATIC', 'TRX', 'BONK', 'AVAX', 'BCH', 'XRP', 'SOL', 'LBCK', 'USDT', 'FLOKI', 'TON', 'TAMA', 'BNB'],
      casino_games: '2,000+',
      mobile_app: false,
      sports_betting: true,
      live_casino_games: '150+',
      welcome_bonus: '200% match up to 10,000 USDT + 10% cashback',
    },
    {
      name: 'WSM Casino',
      payout_time: 'Under 1 hour',
      crypto_payment_methods: ['BTC', 'BCH', 'LTC', 'DOGE', 'ETH', 'TRX', 'ADA', 'SOL'],
      casino_games: '5,000+',
      mobile_app: true,
      sports_betting: true,
      live_casino_games: '150+',
      welcome_bonus: '200% up to $25,000 + 20 free spins',
    },
    {
      name: 'Samba Slots',
      payout_time: 'Instant',
      crypto_payment_methods: ['BTC', 'ETH', 'USDT'],
      casino_games: '3,200+',
      mobile_app: false,
      sports_betting: false,
      live_casino_games: '100+',
      welcome_bonus: '200% up to $6,000 + 60 free spins',
    },
  ];
return (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 leading-relaxed font-sans text-base sm:text-lg">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">{/* Assuming heading is dynamic, but keeping the text */}Comparing the Leading Online Crypto Casino Sites in the USA</h2>
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
      We have purposely chosen 10 online Bitcoin casinos because we want our readers to have a lot of choices. Use the table below to narrow down which casino you want to use based on criteria that are important to you. Compared to traditional payment methods like credit cards and bank transfers, crypto payment methods generally offer lower fees, faster processing times, and greater privacy.
    </p>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 mt-4 sm:mt-5">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Casino</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Payout Time</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Crypto Payment Methods</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Casino Games</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Mobile App</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Sports Betting</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Live Casino Games</th>
            <th className="py-2 sm:py-3 px-2 sm:px-4 border-b text-left text-gray-700 text-xs sm:text-sm">Welcome Bonus</th>
          </tr>
        </thead>
        <tbody>
          {CasinosDetail.map((casino, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">{casino.name}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">{casino.payout_time}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">{casino.crypto_payment_methods.join(', ')}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">{casino.casino_games}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">
                {casino.mobile_app ? '✅' : '❌'}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">
                {casino.sports_betting ? '✅' : '❌'}
              </td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">{casino.live_casino_games}</td>
              <td className="py-2 sm:py-3 px-2 sm:px-4 border-b text-gray-900 text-xs sm:text-sm">{casino.welcome_bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default CasinoComparison
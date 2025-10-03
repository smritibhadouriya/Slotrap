import React from 'react';
import { useLocation } from 'react-router-dom';

const Faqndetails = () => {
  const location = useLocation();
  const pathname = location.pathname;

const pageContent = {
  '/': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'To end, we will spotlight CoinCasino, our highest-rated online crypto casino. We currently rank CoinCasino highly because it provides the best all-around experience, especially as a crypto casino. It requires no KYC registration, allowing players to access the site anonymously.',
        'With support for around 15 cryptocurrencies, users can deposit and withdraw using the coin they want. Speaking of withdrawals, you can instantly cash out winnings from CoinCasino. With 3,000 games and a massive $30,000 welcome package, this platform also does the fun stuff well!',
      ],
    },
    highlights: {
      title: 'Main Highlights',
      list: [
        'Use major and smaller cryptocurrencies for deposits and withdrawals',
        '200% deposit match bonus up to $30,000 plus free spins',
        'Play over 3,000 games from 70+ software providers',
        'Licensed under Curacao eGaming Authority',
        'VIP program with up to 25% cashback',
        'Sign up without KYC verification',
      ],
    },
    faqs: [
      {
        question: 'What is the best crypto casino in the US?',
        answer: 'CoinCasino is currently our highest-performing crypto casino in the US. However, we consider brands such as BetPanda, Instant Casino, and several other casinos worthy.',
      },
      {
        question: 'Why should I play at crypto casinos?',
        answer: 'There are obvious benefits to using an online crypto casino. You’ll have more games, generous bonuses, faster withdrawals, anonymous access, and secure transactions.',
      },
      {
        question: 'What payment methods can I use at crypto casinos?',
        answer: 'Most crypto casinos carry important coins like Bitcoin, Ethereum, Litecoin, Dogecoin, and Bitcoin Cash. Some also offer additional altcoins and fiat payment methods.',
      },
      {
        question: 'Are crypto casinos safe?',
        answer: 'Every online Bitcoin casino we recommend is reputable and has a license. However, the overall safety depends on which casino you choose. Look for platforms with licenses and SSL encryption.',
      },
      {
        question: 'Can I claim bonuses at crypto casinos?',
        answer: 'Yes, the top online crypto casinos have bonuses. Promotions include welcome bonuses, deposit match bonuses, no deposit bonuses, and free spins.',
      },
      {
        question: 'Can I play at crypto casinos on my mobile?',
        answer: 'Yes, every casino we list runs on a mobile device. Some even offer a dedicated app you can download on iOS and Android devices.',
      },
    ],
  },

  '/casinos-instant-withdrawal': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'CoinCasino leads our list of instant withdrawal crypto casinos due to its lightning-fast payout system and user-friendly design. Its no-KYC policy ensures players can cash out anonymously and quickly.',
        'With support for multiple cryptocurrencies and a robust game library of over 3,000 titles, CoinCasino combines speed with entertainment, making it a top choice for 2025.',
      ],
    },
    highlights: {
      title: 'Instant Withdrawal Highlights',
      list: [
        'Withdrawals processed in 30–60 minutes',
        'Supports Bitcoin, Ethereum, and Litecoin',
        'No KYC required for instant access',
        '200% deposit match bonus up to $30,000',
        'Over 3,000 games, including slots and live dealers',
        'Mobile-optimized platform',
      ],
    },
    faqs: [
      {
        question: 'Which crypto casino has the fastest withdrawals?',
        answer: 'CoinCasino offers the fastest withdrawals, typically processing payouts in 30–60 minutes, with no KYC delays.',
      },
      {
        question: 'Are instant withdrawal casinos safe?',
        answer: 'Yes, reputable instant withdrawal casinos like CoinCasino use SSL encryption and are licensed under Curacao eGaming Authority to ensure safety.',
      },
      {
        question: 'What cryptocurrencies can I use for instant withdrawals?',
        answer: 'Most instant withdrawal casinos, including CoinCasino, support Bitcoin, Ethereum, and Litecoin, with some offering additional altcoins.',
      },
    ],
  },

  '/telegram-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Telegram casinos bring the casino experience directly to your favorite messaging app, offering seamless and anonymous play.',
        'CoinCasino and others lead this trend with instant access, crypto-friendly payments, and thousands of games.',
      ],
    },
    highlights: {
      title: 'Telegram Casino Highlights',
      list: [
        'Play directly via Telegram bot',
        'Instant crypto deposits & withdrawals',
        'Supports BTC, ETH, LTC, USDT',
        'Anonymous sign-up with no KYC',
        'Wide range of games and sports betting',
      ],
    },
    faqs: [
      {
        question: 'What is a Telegram casino?',
        answer: 'A Telegram casino is an online casino integrated with the Telegram app, allowing play directly within the messenger.',
      },
      {
        question: 'Are Telegram casinos safe?',
        answer: 'Yes, if you choose licensed platforms like CoinCasino that use SSL and blockchain-based security.',
      },
      {
        question: 'Can I claim bonuses at Telegram casinos?',
        answer: 'Yes, bonuses like deposit matches, free spins, and cashback are available in Telegram casinos.',
      },
    ],
  },

  '/chicken-road-casino': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Chicken Road Casino is a quirky and fun platform attracting crypto gamblers with unique mini-games and bonuses.',
        'With anonymous sign-up and crypto payments, it blends entertainment with security and fast payouts.',
      ],
    },
    highlights: {
      title: 'Chicken Road Casino Highlights',
      list: [
        'Unique chicken-themed gameplay',
        'Instant crypto payouts',
        'Supports multiple cryptocurrencies',
        'Anonymous sign-up',
        'Over 2,000 games including slots and live casino',
      ],
    },
    faqs: [
      {
        question: 'What makes Chicken Road Casino unique?',
        answer: 'It features exclusive chicken-themed games and quirky mini-games not found elsewhere.',
      },
      {
        question: 'Does Chicken Road Casino accept crypto?',
        answer: 'Yes, it supports Bitcoin, Ethereum, Litecoin, and other altcoins.',
      },
      {
        question: 'Is it safe to play at Chicken Road Casino?',
        answer: 'Yes, it operates under Curacao eGaming Authority and uses SSL encryption.',
      },
    ],
  },

  '/no-verification-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'No verification casinos allow players to start playing instantly without submitting ID documents.',
        'CoinCasino and others provide anonymous sign-up with secure and fast crypto transactions.',
      ],
    },
    highlights: {
      title: 'No Verification Highlights',
      list: [
        'No ID or KYC required',
        'Instant crypto deposits & withdrawals',
        'Supports multiple cryptocurrencies',
        'Generous bonuses and promotions',
        'Anonymous and secure platform',
      ],
    },
    faqs: [
      {
        question: 'What are no verification casinos?',
        answer: 'They are platforms that don’t require players to submit ID documents before depositing or withdrawing.',
      },
      {
        question: 'Are no verification casinos safe?',
        answer: 'Yes, as long as you choose licensed and reputable platforms with SSL encryption.',
      },
      {
        question: 'Can I still claim bonuses?',
        answer: 'Yes, no verification casinos still offer bonuses like welcome packages and free spins.',
      },
    ],
  },

  '/vpn-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'VPN casinos allow players to access platforms that may be restricted in their region by masking their IP address.',
        'CoinCasino and other trusted operators support VPN play for global users.',
      ],
    },
    highlights: {
      title: 'VPN Casino Highlights',
      list: [
        'Access restricted casinos worldwide',
        'Supports Bitcoin and altcoins',
        'No KYC required in most cases',
        'Fast and anonymous payouts',
        'Thousands of games available',
      ],
    },
    faqs: [
      {
        question: 'Can I use a VPN for online casinos?',
        answer: 'Yes, many players use VPNs to access restricted casinos securely and privately.',
      },
      {
        question: 'Is it legal to use a VPN for casinos?',
        answer: 'Legality depends on your country’s laws. Always check before playing.',
      },
      {
        question: 'Do VPN casinos still offer bonuses?',
        answer: 'Yes, you can claim the same bonuses when accessing casinos via VPN.',
      },
    ],
  },

  '/crash-games': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Crash games have become one of the most popular crypto casino categories, offering high-risk, high-reward gameplay.',
        'CoinCasino offers crash games alongside thousands of slots and table games.',
      ],
    },
    highlights: {
      title: 'Crash Game Highlights',
      list: [
        'Provably fair crash games',
        'Instant crypto betting',
        'Supports BTC, ETH, LTC, USDT',
        'Anonymous play with no KYC',
        'Available on mobile and desktop',
      ],
    },
    faqs: [
      {
        question: 'What are crash games?',
        answer: 'Crash games are fast-paced casino games where players bet on a multiplier before it “crashes.”',
      },
      {
        question: 'Can I play crash games with crypto?',
        answer: 'Yes, crash games are usually designed for crypto betting.',
      },
      {
        question: 'Are crash games fair?',
        answer: 'Yes, top casinos use provably fair algorithms to ensure randomness.',
      },
    ],
  },

  '/ethereum-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Ethereum casinos are perfect for players seeking smart contract-powered security and fast payouts.',
        'CoinCasino ranks high with ETH support, no KYC, and thousands of games.',
      ],
    },
    highlights: {
      title: 'Ethereum Casino Highlights',
      list: [
        'ETH deposits & withdrawals',
        'Instant payouts',
        'Smart contract security',
        'Thousands of games available',
        'No KYC required',
      ],
    },
    faqs: [
      {
        question: 'Why choose Ethereum casinos?',
        answer: 'Ethereum casinos offer fast, secure transactions and access to decentralized features.',
      },
      {
        question: 'Are ETH casinos safe?',
        answer: 'Yes, licensed Ethereum casinos with SSL and blockchain security are safe to use.',
      },
      {
        question: 'Do ETH casinos offer bonuses?',
        answer: 'Yes, most Ethereum casinos provide welcome bonuses and promotions.',
      },
    ],
  },

  '/usdt-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'USDT casinos provide stablecoin transactions, protecting players from crypto volatility.',
        'CoinCasino and others support USDT for deposits, withdrawals, and bonuses.',
      ],
    },
    highlights: {
      title: 'USDT Casino Highlights',
      list: [
        'Stablecoin deposits & withdrawals',
        'No volatility risk',
        'Instant payouts',
        'Supports multiple stablecoins',
        'Anonymous sign-up with no KYC',
      ],
    },
    faqs: [
      {
        question: 'Why use USDT at casinos?',
        answer: 'USDT avoids crypto volatility, making deposits and withdrawals stable in value.',
      },
      {
        question: 'Are USDT casinos safe?',
        answer: 'Yes, licensed USDT casinos are secure and reliable.',
      },
      {
        question: 'Do I get bonuses with USDT?',
        answer: 'Yes, you can claim all the same bonuses when depositing with USDT.',
      },
    ],
  },

  '/crypto-sports-betting': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Crypto sports betting combines the excitement of sports wagering with the speed of crypto transactions.',
        'CoinCasino offers thousands of betting markets and accepts BTC, ETH, and USDT.',
      ],
    },
    highlights: {
      title: 'Crypto Sports Betting Highlights',
      list: [
        'Bet on 30+ sports categories',
        'Supports BTC, ETH, USDT',
        'Instant crypto payouts',
        'Anonymous betting with no KYC',
        'Live betting and cash-out options',
      ],
    },
    faqs: [
      {
        question: 'What is crypto sports betting?',
        answer: 'It means placing sports bets with cryptocurrencies instead of fiat money.',
      },
      {
        question: 'Is crypto sports betting safe?',
        answer: 'Yes, licensed platforms using SSL and blockchain make it safe.',
      },
      {
        question: 'Can I claim bonuses?',
        answer: 'Yes, most crypto sportsbooks offer welcome bonuses, free bets, and cashback.',
      },
    ],
  },

  '/metamask-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Metamask casinos integrate seamlessly with your Web3 wallet, allowing instant deposits and withdrawals.',
        'CoinCasino and others support Metamask for fast Ethereum and ERC-20 transactions.',
      ],
    },
    highlights: {
      title: 'Metamask Casino Highlights',
      list: [
        'Connect wallet instantly via Metamask',
        'Play with ETH and ERC-20 tokens',
        'Anonymous sign-up with no KYC',
        'Instant deposits & withdrawals',
        'Thousands of games available',
      ],
    },
    faqs: [
      {
        question: 'What are Metamask casinos?',
        answer: 'They are crypto casinos that connect directly with the Metamask Web3 wallet for deposits and withdrawals.',
      },
      {
        question: 'Is it safe to use Metamask at casinos?',
        answer: 'Yes, licensed casinos supporting Web3 connections are safe and secure.',
      },
      {
        question: 'What coins can I use with Metamask?',
        answer: 'Any ETH and ERC-20 tokens supported by Metamask can be used.',
      },
    ],
  },

  '/ethereum-sports-betting': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Ethereum sports betting allows players to enjoy fast, decentralized, and secure sports wagering.',
        'CoinCasino offers thousands of sports markets with ETH deposits and withdrawals.',
      ],
    },
    highlights: {
      title: 'Ethereum Sports Betting Highlights',
      list: [
        'ETH deposits & withdrawals',
        'Instant payouts',
        'Decentralized betting options',
        'Live betting markets',
        'Anonymous play with no KYC',
      ],
    },
    faqs: [
      {
        question: 'Why choose Ethereum for sports betting?',
        answer: 'ETH provides fast transactions, decentralized betting, and anonymity.',
      },
      {
        question: 'Is Ethereum sports betting safe?',
        answer: 'Yes, licensed ETH sportsbooks ensure safe betting with SSL and blockchain.',
      },
      {
        question: 'Do ETH sportsbooks offer bonuses?',
        answer: 'Yes, you can claim sports-specific bonuses when betting with ETH.',
      },
    ],
  },

  '/litecoin-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'CoinCasino stands out as the top Litecoin casino in 2025, offering low-fee transactions and instant payouts.',
        'With a $30,000 welcome package and over 3,000 games, CoinCasino delivers a seamless and exciting experience for crypto gamblers.',
      ],
    },
    highlights: {
      title: 'Litecoin Casino Highlights',
      list: [
        'Low-fee Litecoin transactions',
        'Instant withdrawals with no KYC',
        '200% deposit match bonus up to $30,000',
        'Over 3,000 games from top providers',
        'Licensed and secure platform',
        'VIP program with cashback offers',
      ],
    },
    faqs: [
      {
        question: 'Why choose a Litecoin casino?',
        answer: 'Litecoin casinos like CoinCasino offer faster transactions and lower fees compared to Bitcoin, along with anonymous access and provably fair games.',
      },
      {
        question: 'Are Litecoin casinos secure?',
        answer: 'Reputable Litecoin casinos, such as CoinCasino, are licensed and use SSL encryption to protect user data and transactions.',
      },
      {
        question: 'Can I claim bonuses with Litecoin?',
        answer: 'Yes, CoinCasino and other Litecoin casinos offer bonuses like deposit matches and free spins, with clear terms and conditions.',
      },
    ],
  },

  '/aviator-casinos': {
    conclusion: {
      title: 'Conclusion',
      paragraphs: [
        'Aviator casinos specialize in the highly popular “Aviator” crash-style game where players bet on a multiplier before the plane flies away.',
        'CoinCasino offers Aviator along with thousands of other games and crypto-friendly payments.',
      ],
    },
    highlights: {
      title: 'Aviator Casino Highlights',
      list: [
        'Provably fair Aviator crash game',
        'Supports BTC, ETH, LTC, USDT',
        'Fast crypto deposits & withdrawals',
        'Anonymous sign-up with no KYC',
        'Available on desktop and mobile',
      ],
    },
    faqs: [
      {
        question: 'What is Aviator?',
        answer: 'Aviator is a crash-style betting game where players cash out before the plane crashes.',
      },
      {
        question: 'Can I play Aviator with crypto?',
        answer: 'Yes, Aviator is popular in crypto casinos like CoinCasino.',
      },
      {
        question: 'Is Aviator fair?',
        answer: 'Yes, casinos use provably fair algorithms to ensure fairness in Aviator games.',
      },
    ],
  },
};


 
  const { conclusion, highlights, faqs } = pageContent[pathname];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Conclusion */}
      <section aria-labelledby="conclusion-title">
        <h1 id="conclusion-title" className="text-3xl font-bold mb-2 text-gray-900 leading-tight">
          {conclusion.title}
        </h1>
        {conclusion.paragraphs.map((text, idx) => (
          <p key={idx} className="text-lg text-gray-700 font-sans leading-relaxed mb-4">
            {text}
          </p>
        ))}
      </section>

      {/* Highlights */}
      <section aria-labelledby="highlights-title">
        <h2 id="highlights-title" className="text-2xl font-semibold mb-2 text-gray-900 leading-tight">
          {highlights.title}
        </h2>
        <ul className="list-disc ml-6 mb-4 text-lg text-gray-700 font-sans">
          {highlights.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* FAQs */}
      <section aria-labelledby="faqs-title">
        <h1 id="faqs-title" className="text-2xl font-semibold mb-2 text-gray-900 leading-tight">
          FAQs
        </h1>
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faqndetails;
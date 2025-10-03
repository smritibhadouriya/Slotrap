import React from 'react';
import { useLocation } from 'react-router-dom';
import casino2 from '../assets/image/casino2.jpg';
import casino3 from '../assets/image/casino3.jpg';
import casino4 from '../assets/image/casino4.jpg';
import casino5 from '../assets/image/casino5.jpg';
import casino6 from '../assets/image/casino6.jpg';
import casino8 from '../assets/image/casino8.jpg';
import casino9 from '../assets/image/casino9.jpg';

const AllCasinoDetail = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Debug log to verify pathname
  console.log('Current pathname:', pathname);

  // 🔹 Dynamic headings & intro content
  const pageContent = {
    '/': {
      heading: 'Best Crypto Casino Sites for Online Bitcoin Gambling 2025',
      intro1: 'We use a strict review process to ensure only the best online crypto casino sites make our list. From the best cryptocurrency casinos to the top 10 crypto casino platforms, our evaluations help players find real value by ranking and reviewing the best bitcoin casinos based on game selection, bonuses, security, and user experience. It is a filter that allows users to pinpoint the absolute crypto casino sites, especially those known as the best crypto casinos for payouts.',
      intro2: 'The top bitcoin casinos and top crypto casino sites are highlighted for their outstanding features, licensing, bonuses, and trustworthiness, making them industry leaders. It’s also essential to ensure that the brands we recommend stand out for a particular reason, distinguishing themselves within the bitcoin casino space through their reputation, support for cryptocurrencies, and user-centric features.',
      heading2: 'Crypto Casinos in 2025 – Fast Withdrawals, Total Anonymity & Fair Play',
      intro3: 'Crypto casinos have taken over the online gambling scene in 2025 by offering a blend of ultra-fast transactions, bulletproof privacy, and provably fair gaming. These platforms ditch traditional banking systems and skip tedious identity verifications, allowing players to jump in with just a wallet and crypto of choice—be it Bitcoin, Ethereum, or USDT. Crypto enthusiasts and crypto gamblers are the primary audience for these platforms, drawn by the focus on decentralization, anonymity, and a wide range of crypto-supported gaming options.',
      intro4: 'From instant cashouts to blockchain-verified slots and reward systems paid in crypto, the crypto casinos listed below are redefining what players should expect from an online gambling experience, setting a new standard for secure and comprehensive crypto casino online gaming.',
    },
    '/casinos-instant-withdrawal': {
      heading: 'Top-Rated Crypto Casino Sites in 2025',
      intro1: 'Players looking for the best instant withdrawal crypto casino sites can find more about them below. From the top brand to the ones breathing down its neck, here’s what the top crypto casinos with instant withdrawals bring to the table.',
      intro2: '',
      heading2: 'Best Crypto Casino Instant Withdrawal Sites for 2025',
      intro3: 'The demand for a true crypto casino instant withdrawal has never been higher. Players are no longer willing to wait hours—or worse, days—for their winnings to arrive. In 2025, the best crypto casinos are processing payouts in minutes, with blockchain speed, low fees, and wallet integration making the process seamless.',
      intro4: 'These casinos go beyond just quick cashouts—they offer privacy-friendly registration, provably fair games, and user-friendly designs optimized for both mobile and desktop. Whether you’re into slots, live dealers, or crash games, a fast withdrawal system makes all the difference in how you play.',
    },
    '/telegram-casinos': {
      heading: 'List Of The Best Telegram Casinos & Gambling Bots in 2025',
      intro1: 'Telegram casinos have carved a niche in online gambling by offering flexibility, anonymity, and a mobile-first user experience. Below are some of our top Telegram online casinos, including the newly launched Chicken Road Casino, which has quickly earned a reputation for its slick interface, fast payouts, and wild west-themed slots. Here’s why we think these are among the best in the business.',
      intro2: '',
      heading2: 'Telegram Casinos 2025 – Instant Crypto Gaming With Full Privacy & Fast Payouts',
      intro3: 'Telegram casinos are dominating the online gambling landscape in 2025, combining the speed of blockchain transactions with the privacy-first approach of decentralized platforms. These next-gen casinos ditch the bureaucracy—no ID uploads, no banking delays—just you, your crypto wallet, and instant access through Telegram or browser.',
      intro4: 'Whether you’re looking for rapid withdrawals, provably fair slots, or loyalty bonuses delivered in Bitcoin or Ethereum, Telegram-integrated casinos are raising the bar for what online players expect in terms of security, speed, and transparency.',
    },
    '/chicken-road-casino': {
      heading: 'Top Online Casinos to Play Chicken Road Casino',
      intro1: 'If you want to jump into fun chicken slot games, especially on trusted crypto casinos, picking the right spot matters a lot. Lucky Block, TG.Casino, Mega Dice, and Coin Casino are top names — and also rank among the best VPN casinos for players accessing from restricted regions. Whether you’re into Ethereum Casinos for fast, decentralized play or prefer the stability of USDT Casinos, Chicken Road Casino is available on top platforms that support both. They offer great gaming, awesome bonuses, and strong support for casino chicken game lovers. Plus, these casinos make cashing out your winnings easy and secure. In addition to these platforms, Aviator casinos have also begun featuring Chicken Road Casino, offering fans of crash-style games a familiar yet exciting alternative.',
      intro2: '',
      heading2: 'Inside Look at Leading Chicken Road Casino Platforms',
      intro3: 'Diving into the chicken road game and chicken game gambling means choosing the right platform is key. These top casinos offer not only exciting games but also a safe place for players. They support effective bankroll management, helping you control your total funds and extend your gameplay. Additionally, cashing out winnings is straightforward and secure on these top platforms.',
      intro4: '',
    },
    '/no-verification-casinos': {
      heading: 'Top No Verification Casinos at a Glance (2025)',
      intro1: 'If you’re looking to skip the lengthy sign-up process and jump straight into the action, these no-verification casinos offer a fast, secure, and anonymous way to play. Whether you’re into crypto slots, live games, or casual Plinko fun, these top no KYC casinos have something for every kind of player. Here’s a quick look at the top picks for 2025, each offering seamless access with little to no ID checks required.',
      intro2: '',
      heading2: 'A Deeper Look Into the Best No Verification Casinos of 2025',
      intro3: 'While quick lists and feature highlights are helpful, sometimes players need more than just surface-level info. That’s why we’ve taken the time to explore each of these top-rated no verification casinos in greater depth. From user experience and game variety to payment speed and platform transparency, our mini reviews below will give you a clear picture of what to expect before you commit your crypto.',
      intro4: 'Each platform has been tested for fairness, privacy, and performance to help you find the right fit—whether you’re chasing jackpots, enjoying live dealers, or simply looking for fast, anonymous gameplay.',
    },
    '/vpn-casinos': {
      heading: 'List of the Best VPN Friendly Casinos',
      intro1: 'Looking to get around geo-restrictions and play your favorite slots at an international casino? VPN-friendly casinos have you covered. These platforms are perfect for anyone who values freedom, privacy, and rapid transactions. Here’s a quick list of the best VPN casinos in 2025. ',
      intro2: '',
      heading2: 'Top 5 VPN-Friendly Online Casinos for 2025',
      intro3: 'If you’re looking for reliable vpn casinos that combine strong game selections, flexible payment methods, and generous bonuses, these five platforms stand out. Each offers unique strengths, from massive welcome offers and fast crypto payouts to long-standing reputations in the iGaming industry, making them ideal picks for players who want secure, uninterrupted access from anywhere.',
      intro4: '',
    },
    '/crash-games': {
      heading: 'List Of The Best Crash Games Gambling Sites',
      intro1: 'Discover our top picks for the best Crash games gambling sites designed to give you fast, fun, and secure betting thrills. Each platform on our list offers unique benefits to enhance your gaming journey. Our top picks include both USDT Casinos and Ethereum Casinos, giving players the flexibility to enjoy Crash games with fast, anonymous, and secure crypto transactions. Many top Crash gambling platforms now support Litecoin casinos for faster, low-fee transactions, as well as MetaMask casinos for seamless, browser-based access to decentralized crypto wallets.',
      intro2: 'These casinos specialize in crash games and provide the best user experience...',
      heading2: 'Exploring the Top Platforms Dominating Crash Games Gambling in 2025',
      intro3: 'With fast-paced crypto gameplay gaining traction, crash games gambling is quickly becoming a favorite among online players. It’s a thrilling format where timing is everything, and with the right platform, it can also be incredibly rewarding.',
      intro4: 'To help you find the best place to play, we’ve gone beyond the basics and taken a detailed look at five trusted sites offering top-tier crash experiences—from game quality and payment speed to community features and overall reliability.',
    },
    '/ethereum-casinos': {
      heading: 'Our Top Ethereum Online Casino Picks for 2025',
      intro1: 'Ethereum-based casinos are making waves in online gaming. Looking ahead to 2025, certain platforms stand out for ETH players. They offer quick payouts, top security, and a diverse range of casino gaming options, including slots, live dealer games, and provably fair choices. These factors have made them leaders in the gaming world.',
      intro2: '',
      heading2: 'Leading the Future: Top Ethereum Casinos to Play at in 2025',
      intro3: 'Ethereum is more than just a cryptocurrency—it’s now the foundation of some of the most advanced and transparent online gambling platforms in the world. As demand for faster transactions, better security, and blockchain transparency grows, Ethereum casinos are stepping into the spotlight.',
      intro4: 'Below, we explore five top-tier crypto casinos that fully support Ethereum, offering lightning-fast payouts, exciting gameplay, and smooth user experiences for ETH holders.',
    },
    '/usdt-casinos': {
      heading: 'Expert Picks: Top USDT Casino Sites for This Year',
      intro1: 'Starting your USDT gambling journey this year? You’ll find lots of top-notch sites, guided by our expert advice. We’ve checked each one for trusted practices, great offers like free spins, no wagering demands, and quick USDT payouts. Here are the top sites we found.',
      intro2: '',
      heading2: 'Best USDT Casinos for Stable, Fast Crypto Gambling in 2025',
      intro3: 'In the ever-evolving world of crypto gambling, stability has become just as important as speed and privacy. That’s where USDT casinos come in—offering the best of both worlds. By using Tether (USDT), players get all the benefits of crypto (instant withdrawals, low fees, and privacy) without the volatility of coins like Bitcoin or Ethereum. Below, we take a deep dive into five of the top-rated casinos that fully support USDT, delivering fast, secure, and seamless gameplay for stablecoin users.',
      intro4: '',
    },
    '/crypto-sports-betting': {
      heading: 'Best Crypto Sports Betting Sites 2025',
      intro1: 'Crypto bettors are moving away from traditional banking methods in favor of instant crypto deposits, faster payouts, and better odds. The best crypto sportsbooks for 2025 offer seamless onboarding, generous bonuses, and access to niche sports markets like horse racing and esports. Whether you’re here to start betting or explore new sports wagering opportunities, these sites have you covered.',
      intro2: '',
      heading2: 'Expert Reviews of the Best Crypto Sports Betting Sites',
      intro3: 'Crypto sports betting has become a go-to choice for players seeking fast transactions, enhanced privacy, and global access to their favorite sports markets. In this section, we provide expert reviews of the leading platforms that excel in odds quality, betting options, and user experience. From sportsbooks with cutting-edge crypto features to those offering generous bonuses, each site is evaluated for performance, trustworthiness, and unique advantages. Our rankings will help you find the perfect platform to match your betting style.',
      intro4: '',
    },
    '/metamask-casinos': {
      heading: 'Best MetaMask Casinos 2025',
      intro1: 'Looking ahead to 2025, many trusted MetaMask casinos are changing how we gamble online. Each metamask casino site offers unique features, bonuses, and seamless wallet integration. They’re doing this with innovative features and huge welcome bonuses.',
      intro2: '',
      heading2: 'The Best Metamask Casinos for Safe, Direct Web3 Gambling in 2025',
      intro3: 'As crypto gambling continues to evolve, one tool is making it easier than ever to play anonymously and securely: Metamask. This browser-based wallet lets players interact directly with blockchain casinos—no third-party logins, no banking delays, and no KYC.',
      intro4: 'That’s why Metamask casinos are quickly becoming the go-to choice for crypto users looking for fast, private, and fully decentralized gameplay. Below are five of the most reliable and feature-rich Metamask-compatible casinos worth trying in 2025.',
    },
    '/ethereum-sports-betting': {
      heading: 'Quick-Glance List of the Top Ethereum Sportsbooks',
      intro1: 'Ethereum sports betting has exploded in recent years, giving fans faster transactions and the freedom to engage with betting markets on their terms. These platforms also offer seamless payments for deposits and withdrawals, making the betting process efficient and user-friendly. Our quick-glance guide compares leading sportsbooks so you can make informed decisions, back your favourite teams, and avoid restrictions that make you wait, lose time, or lose money in a rapidly evolving industry and stay a winner.',
      intro2: '',
      heading2: 'Detailed Reviews of the Best Ethereum Betting Sites',
      intro3: 'If you’re ready to place bets using the Ethereum blockchain, these platforms lead the way in 2025. Each sportsbook leverages smart contract tech, fast payouts, and secure betting environments to offer the best of blockchain technology. Below, we review the top options so users can make smarter decisions and chase those winning moments confidently.',
      intro4: '',
    },
    '/litecoin-casinos': {
      heading: 'Top Litecoin Casino Sites for Fast & Low-Fee Gaming in 2025',
      intro1: 'Looking for the best Litecoin casinos in 2025? These top 9 sites offer fast, low-fee transactions and a secure gaming environment powered by Litecoin. Enjoy seamless deposits, quick withdrawals, and a wide variety of provably fair games that make your crypto gambling experience both exciting and trustworthy. Whether you’re a seasoned player or new to crypto betting, these platforms deliver the perfect blend of speed, security, and entertainment.',
      intro2: '',
      heading2: 'Litecoin Casinos 2025 – Instant Crypto Play With Full Privacy',
      intro3: 'Litecoin casinos in 2025 are redefining online gaming by merging lightning-fast crypto payouts with seamless, anonymous access. No more tedious registrations or intrusive ID checks—players can dive in instantly using just a crypto wallet and, on some platforms, a direct Telegram bot connection.',
      intro4: 'Litecoin casinos in 2025 are redefining online gaming by merging lightning-fast crypto payouts with seamless, anonymous access. No more tedious registrations or intrusive ID checks—players can dive in instantly using just a crypto wallet and, on some platforms, a direct Telegram bot connection.',
    },
    '/aviator-casinos': {
      heading: 'Best Aviator Casinos 2025',
      intro1: 'In 2025, if you’re into online gambling, you’ll find some top-notch aviator gambling sites for real cash play. These sites are getting popular because of their fun features and smooth experiences. Players who want to try their luck in the aviator game for money will find exciting chances at these places. Favorites include:',
      intro2: 'We’ve listed the top Aviator-friendly casinos offering instant payouts',
      heading2: 'Top Aviator Casinos 2025 – Reviews and Highlights',
      intro3: 'Exploring aviator casino sites is exciting. It helps to know the strengths of each platform. Here, we’ll discuss some top casino sites for 2025, highlighting their selection of games, including slot machines and classic table games alongside Aviator. You’ll learn about their unique features and bonuses linked to the aviator game.',
      intro4: '',
    },
  };

 const casinoData = [
  {
    name: 'CoinCasino',
    description: 'Setting the Standard for Fast and Anonymous Crypto Casinos',
    paragraph: 'In the growing world of crypto casinos, CoinCasino stands out as a platform designed around speed and simplicity.',
    signup_process: 'The sign-up process is as streamlined as it gets—just connect your crypto wallet, provide an email, and you’re ready to play. No intrusive KYC checks, no long forms, just instant access to real money gaming.',
    image: casino9,
    game_lobby: 'CoinCasino’s interface is clean and modern, tailored for both desktop and mobile use. Navigation is effortless, and pages load instantly. The game lobby offers an impressive selection, from video slots and roulette to blackjack and crypto-exclusive titles you won’t find on traditional sites.',
    bonuses_and_promotions: 'CoinCasino’s bonus system is straightforward and appealing. New players can claim a generous crypto welcome bonus with transparent wagering requirements. Existing users enjoy weekly reloads, surprise free spin offers, and prize drops targeted to their favorite games.',
    security_and_transactions: 'Deposits and withdrawals are supported in Bitcoin, Ethereum, and Litecoin, with most payouts processed within 30–60 minutes. Games are provably fair, backed by blockchain verification to guarantee transparency.',
    supported_coins: ['BTC', 'ETH', 'LTC'],
    pros: ['Privacy-first, no ID checks', 'Fast payouts in multiple cryptocurrencies', 'Exclusive crypto-based games'],
    security: 'High',
    cons: ['No fiat support for traditional players'],
    tags: ['main', 'instant-withdrawal', 'no-verification', 'vpn', 'ethereum', 'metamask', 'litecoin'],
  },
  {
    name: 'Lucky Block',
    description: 'A Crypto Casino Blending Variety With Simplicity',
    paragraph: 'Lucky Block has quickly risen to prominence in the crypto casinos space, thanks to its mix of simplicity, speed, and massive gaming variety.',
    signup_process: 'Lucky Block only requires your crypto wallet and a quick email confirmation. No endless forms or lengthy KYC delays.',
    image: casino2,
    game_lobby: 'With thousands of titles, from video slots and live dealer tables to niche crypto-exclusive releases, it’s built for players who value choice.',
    bonuses_and_promotions: 'Lucky Block offers a generous welcome package, weekly cashback, reload bonuses, and seasonal slot campaigns.',
    security_and_transactions: 'Deposits and withdrawals are seamless, with support for Bitcoin, Ethereum, and altcoins. Withdrawals are often processed in under an hour.',
    supported_coins: ['BTC', 'ETH', 'USDT', 'Altcoins'],
    pros: ['Huge library of slots and live games', 'Fast, crypto-based withdrawals', 'Frequent cashback and reload offers'],
    security: 'Very high',
    cons: ['No traditional fiat payment support'],
    tags: ['main', 'instant-withdrawal', 'no-verification', 'telegram', 'vpn', 'ethereum', 'usdt', 'crypto-sports', 'metamask', 'ethereum-sports', 'aviator'],
  },
  {
    name: 'Instant Casino',
    description: 'A crypto casino emphasizing speed, accessibility, and minimal bureaucracy.',
    paragraph: 'Instant Casino embodies what the best crypto casinos are all about: speed, accessibility, and zero red tape.',
    signup_process: 'Just connect your wallet—no KYC or paperwork required.',
    image: casino4,
    game_lobby: 'Uncluttered interface with classic slots, jackpots, and live dealer games. Mobile-friendly and instant navigation.',
    bonuses_and_promotions: 'Sizeable welcome bonus, weekly reloads, and tailored cashback for high-rollers.',
    security_and_transactions: 'Provably fair games with Bitcoin, Ethereum, and Litecoin support. Withdrawals usually processed in under 30 minutes.',
    supported_coins: ['BTC', 'ETH', 'LTC'],
    pros: ['Super-fast registration and withdrawals', 'Clear, fair bonus terms', 'Mobile-optimized and user-friendly'],
    cons: ['No fiat or card payment integration'],
    security: 'Moderate',
    tags: ['instant-withdrawal', 'no-verification', 'ethereum', 'litecoin', 'chicken-road'],
  },
  {
    name: 'BetNinja',
    description: 'A Crypto Casino With Sharp Style and Depth',
    paragraph: 'BetNinja strikes a balance between sleek presentation and serious functionality.',
    signup_process: 'Quick signup with just an email and wallet connection.',
    image: casino3,
    game_lobby: 'Hundreds of slots, blackjack, roulette, baccarat, and unique blockchain games. Strong live casino section.',
    bonuses_and_promotions: 'Scalable welcome package, weekly reloads, cashback, and tournaments with leaderboard competitions.',
    security_and_transactions: 'Accepts major coins, provably fair games, payouts under 60 minutes. No KYC required.',
    supported_coins: ['BTC', 'ETH', 'LTC'],
    pros: ['Engaging tournaments and leaderboards', 'Strong live casino offerings', 'Transparent, fast payouts'],
    cons: ['No fiat banking support'],
    security: 'Secure',
    tags: ['main', 'no-verification', 'vpn', 'ethereum', 'crypto-sports', 'litecoin', 'crash', 'ethereum-sports', 'telegram'],
  },
  {
    name: 'WSM Casino',
    description: 'A Fresh Player in Crypto Casinos With Community Focus',
    paragraph: 'WSM Casino puts community-driven features at the heart of its platform.',
    signup_process: 'Quick signup with email and wallet connection.',
    image: casino5,
    game_lobby: 'Slots, jackpots, live dealer tables, and interactive community challenges.',
    bonuses_and_promotions: 'Standard bonuses plus group-based challenges, airdrops, and seasonal giveaways.',
    security_and_transactions: 'Supports Bitcoin, Ethereum, and altcoins. Provably fair games, withdrawals under 1 hour.',
    supported_coins: ['BTC', 'ETH', 'USDT', 'Altcoins'],
    pros: ['Community challenges and tournaments', 'Transparent, fast crypto transactions', 'Interactive, social gameplay'],
    cons: ['Limited VIP features'],
    security: 'High',
    tags: ['main', 'ethereum', 'usdt', 'crypto-sports', 'ethereum-sports', 'chicken-road', 'aviator', 'telegram'],
  },
  {
    name: 'TG.Casino',
    description: 'Casino and Telegram Betting Combined for Aviator Fans',
    paragraph: 'TG.Casino is built directly into Telegram, allowing seamless deposits, bets, and withdrawals without leaving the app.',
    signup_process: 'Quick signup inside Telegram with wallet connection.',
    image: casino6,
    game_lobby: 'Focus on aviator games and Telegram-exclusive community challenges.',
    bonuses_and_promotions: 'Crypto welcome bonuses, reloads, and seasonal Telegram giveaways.',
    security_and_transactions: 'Blockchain-backed transparency, fast crypto withdrawals.',
    supported_coins: ['BTC', 'ETH'],
    pros: ['Telegram integration', 'Seamless betting inside app', 'Quick payouts'],
    cons: ['Limited outside Telegram features'],
    security: 'Very high',
    tags: ['telegram', 'aviator', 'instant-withdrawal', 'crash'],
  },
  {
    name: 'CryptoSpin',
    description: 'A Casino Built Around Slots and Progressive Jackpots',
    paragraph: 'CryptoSpin is designed for slot lovers, offering thousands of titles including exclusive blockchain jackpots.',
    signup_process: 'Sign up in under a minute with wallet and email.',
    image: casino5,
    game_lobby: 'Specializes in slot machines with big jackpots. Includes live slot tournaments.',
    bonuses_and_promotions: 'Massive free spin packages and progressive jackpot bonuses.',
    security_and_transactions: 'Fast payouts with Bitcoin, Ethereum, Dogecoin. Provably fair slot verification.',
    supported_coins: ['BTC', 'ETH', 'DOGE'],
    pros: ['Huge slot selection', 'Progressive jackpots', 'Frequent tournaments'],
    cons: ['Limited table games'],
    security: 'Moderate',
    tags: ['instant-withdrawal', 'vpn', 'usdt', 'litecoin', 'crash'],
  },
  {
    name: 'ChainBet',
    description: 'Blockchain-Powered Casino for Transparency Fans',
    paragraph: 'ChainBet leverages blockchain smart contracts for provably fair results in all games.',
    signup_process: 'Decentralized wallet connect, no registration required.',
    image: casino9,
    game_lobby: 'Smart contract-based blackjack, roulette, and dice games.',
    bonuses_and_promotions: 'Crypto cashback based on on-chain play activity.',
    security_and_transactions: 'Entirely decentralized—funds and games run on-chain.',
    supported_coins: ['ETH'],
    pros: ['On-chain transparency', 'No central authority', 'Instant smart contract payouts'],
    cons: ['Not beginner-friendly'],
    security: 'Secure',
    tags: ['crypto-sports', 'ethereum', 'metamask', 'ethereum-sports'],
  },
  {
    name: 'MetaPlay',
    description: 'A Crypto Casino Built for VR and Metaverse Gaming',
    paragraph: 'MetaPlay combines casino gaming with immersive VR experiences inside the metaverse.',
    signup_process: 'Wallet-based login with VR headset compatibility.',
    image: casino8,
    game_lobby: 'Slots, poker, and blackjack inside VR casino environments.',
    bonuses_and_promotions: 'Exclusive NFT rewards and VR-only promotions.',
    security_and_transactions: 'Crypto-only, with NFT staking options and fast withdrawals.',
    supported_coins: ['BTC', 'ETH', 'USDT'],
    pros: ['Immersive VR gaming', 'NFT rewards', 'Metaverse integration'],
    cons: ['Requires VR gear'],
    security: 'Very High',
    tags: ['main', 'vpn', 'usdt', 'metamask', 'chicken-road'],
  },
  {
    name: 'AeroBet',
    description: 'High-Speed Crypto Casino With Aviation-Themed Games',
    paragraph: 'AeroBet appeals to players who love fast-paced crash and aviation-style games.',
    signup_process: 'Instant wallet connect, no KYC required.',
    image: casino8,
    game_lobby: 'Crash games, aviation simulators, plus standard slots and roulette.',
    bonuses_and_promotions: 'Crypto welcome bonus plus high-risk, high-reward multipliers.',
    security_and_transactions: 'Accepts Bitcoin, Ethereum, Solana. Ultra-fast 15–30 minute payouts.',
    supported_coins: ['BTC', 'ETH', 'SOL'],
    pros: ['Specializes in crash/aviator games', 'Very fast payouts', 'High multipliers'],
    cons: ['Niche game focus'],
    security: 'Secure',
    tags: ['instant-withdrawal', 'no-verification', 'crash', 'aviator', 'chicken-road'],
  },
];


  // Map URL paths to tags
  const pathToTagMap = {
    '/': 'main',
    '/casinos-instant-withdrawal': 'instant-withdrawal',
    '/telegram-casinos': 'telegram',
    '/chicken-road-casino': 'chicken-road',
    '/no-verification-casinos': 'no-verification',
    '/vpn-casinos': 'vpn',
    '/crash-games': 'crash',
    '/ethereum-casinos': 'ethereum',
    '/usdt-casinos': 'usdt',
    '/crypto-sports-betting': 'crypto-sports',
    '/metamask-casinos': 'metamask',
    '/ethereum-sports-betting': 'ethereum-sports',
    '/litecoin-casinos': 'litecoin',
    '/aviator-casinos': 'aviator',
  };

  const defaultContent = {
    heading: 'Welcome to Crypto Casinos (Default)',
    intro1: 'Explore the best crypto casinos available. This is the default content, shown when no specific route matches.',
    intro2: '',
    heading2: 'Discover Top Platforms',
    intro3: 'Find the best platforms for your gaming needs.',
    intro4: '',
  };

  const { heading, intro1, intro2, heading2, intro3, intro4 } = pageContent[pathname] || defaultContent;
  const currentTag = pathToTagMap[pathname] || 'main';
  const filteredCasinos = casinoData.filter((casino) => casino.tags.includes(currentTag));

  // Debug log to verify filtered casinos
  console.log('Current tag:', currentTag, 'Filtered casinos:', filteredCasinos);

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 leading-tight text-gray-900">{heading}</h1>
        <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed mb-3 sm:mb-4">{intro1}</p>
        {intro2 && (
          <p className="text-base sm:text-lg text-gray-700 font-sans leading-relaxed mb-4 sm:mb-6">{intro2}</p>
        )}
        {filteredCasinos.length > 0 ? (
          <ol className="list-decimal ml-6 sm:ml-8 space-y-1 text-base sm:text-lg font-sans">
            {filteredCasinos.map((casino) => (
              <li key={casino.name} className="text-gray-700">
                <span className="font-semibold text-gray-900">{casino.name}</span> – {casino.description}
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-base sm:text-lg text-gray-700">No casinos found for this category.</p>
        )}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-6 sm:mt-10 mb-3 sm:mb-4 leading-tight text-gray-900">{heading2}</h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4 font-sans">{intro3}</p>
        {intro4 && (
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans">{intro4}</p>
        )}
      </section>
      {filteredCasinos.map((casino, index) => (
        <section key={index} className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight text-gray-900">
            {index + 1}. {casino.name} – {casino.description}
          </h2>
          <p className="font-sans text-base sm:text-lg text-gray-700 leading-relaxed mb-4">{casino.paragraph}</p>
          <img
            src={casino.image}
            alt={casino.name}
            loading="lazy"
            className="rounded-b-lg shadow-md w-full max-w-full my-4 sm:my-6 object-cover"
          />
          <p className="mb-2 text-base sm:text-lg text-gray-700 font-sans leading-relaxed">{casino.signup_process}</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900">{casino.name} Crypto Casino With Seamless Gameplay</h3>
          <p className="mb-2 text-base sm:text-lg text-gray-700 font-sans">{casino.game_lobby}</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-900 leading-tight">Bonuses and Promotions</h3>
          <p className="mb-2 text-base sm:text-lg text-gray-700 font-sans leading-relaxed">{casino.bonuses_and_promotions}</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 font-sans leading-tight text-gray-900">Security and Transactions</h3>
          <p className="mb-2 text-base sm:text-lg text-gray-700 font-sans">{casino.security_and_transactions}</p>
          <h3 className="text-base sm:text-lg font-semibold my-2 text-gray-700 font-sans">Pros:</h3>
          <ul className="list-disc ml-5 sm:ml-6 mb-3 sm:mb-4 text-base sm:text-lg text-gray-700 font-sans">
            {casino.pros.map((pro, i) => (
              <li key={i}>{pro}</li>
            ))}
          </ul>
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700 font-sans">Cons:</h3>
          <ul className="list-disc ml-5 sm:ml-6 mb-3 sm:mb-4 text-base sm:text-lg text-gray-700 font-sans">
            {casino.cons.map((con, i) => (
              <li key={i}>{con}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default AllCasinoDetail;
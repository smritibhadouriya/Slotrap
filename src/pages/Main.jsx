import React from 'react';
import Bestcasino from '../components/Bestcasino';

import AllCasinoDetail from '../components/AllCasinoDetail';
import Casinointro from '../components/Casinointro';
import CasinoComparison from '../components/CasinoComparison';
import Casinowork from '../components/Casinowork';
import Games from '../components/Games';
import Faqndetails from '../components/Faqndetails';
import Aboutauthor from '../components/Aboutauthor';
import Helmet from '../components/SeoHelmet';
const Main = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
         <Helmet
        title="Slotrap-Home Page"
        description={`Learn about , our mission, and how we review the best crypto casinos.`}
        keywords={['crypto casino', 'bitcoin gambling', 'online casino reviews', 'no-KYC casinos', 'provably fair games']}
        href={`https://slotrap.com/`}
      />
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Top Crypto Casinos in the USA 2025: Best Online Crypto Casino Sites Reviewed
        </h1>
     <Aboutauthor />
        <p className="text-gray-700 mb-4 text-lg font-sans leading-relaxed">
          If you're interested in exploring crypto gambling platforms, we've compiled the top choices for you. Our team has tested and compared dozens of Bitcoin casinos to identify the 10 most reliable and trustworthy options. These crypto casinos are known for their generous bonuses, extensive game selections, anonymous play, and fast, secure payouts.
        </p>
        <p className="text-gray-700 text-lg font-sans leading-relaxed">
          Whether you're looking for the largest welcome rewards or the sites with the best crypto payout rates, we've done all the research so you don't have to. Below, you'll find a carefully curated list of the best online casinos that accept digital currencies like Bitcoin, giving you a safe and enjoyable gaming experience.
        </p>
      </div>
      <Bestcasino />
   
<AllCasinoDetail />
   <Casinointro />
   <CasinoComparison />
<Casinowork />
<Games />
<Faqndetails />
    </>
  );
};

export default Main;
import React from 'react'
import Aboutauthor from '../components/Aboutauthor'
import Helmet from '../components/SeoHelmet'

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans">
       <Helmet
        title="Slotrap-Contact us"
        description={`Learn about , our mission, and how we review the best crypto casinos for U.S. players.`}
        keywords={['crypto casino', 'bitcoin gambling', 'online casino reviews', 'no-KYC casinos', 'provably fair games']}
        href={`https://slotrap.com/contact`}
      />
      {/* About Us Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Contact
        </h1>
       <Aboutauthor />
         <p className="text-gray-800 mb-6 text-lg font-sans font-semibold leading-relaxed">
         Have a question about a crypto casino? Need help choosing the right platform? We’re here to help—no bots, no fluff, just real advice from crypto gambling experts
        </p>
        <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">
          Whether you’re a seasoned player or brand-new to the world of Bitcoin casinos, we’re happy to hear from you. Our mission is to help U.S. players find safe, reliable, and rewarding crypto casinos—and that includes answering your questions and taking your feedback seriously.
        </p>
      </section>
      

      {/* Mission Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
How to reach us
        </h1>
        <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">
         You can contact us anytime via email:
        </p>
        <p className="text-red-700  text-lg font-sans leading-relaxed">
         hello@slotrap.com
          </p>
           <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">
(We usually respond within 24–48 hours.)
       </p>
        <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">
          Have a tip, correction, or want to request a review of a specific platform? Let us know. We’re always updating our rankings to reflect the most current data and user experiences.
        </p>
         <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">
         <span className='font-semibold'>No bots here —</span>you’ll hear back from actual reviewers and crypto gambling specialists. Our team plays, tests, and researches every site we talk about.
        </p>
      </section>  
      <hr className="my-12 border-gray-300" />

      {/* What We Do Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
         Privacy & Anonymity
        </h1>
        <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">
          We understand the importance of privacy, especially in the crypto space. You don’t have to share any personal info to ask a question—we’ll never track, sell, or share your data. You’re welcome to reach out anonymously.
        </p>
  <hr className="my-12 border-gray-300" />
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
         Frequently Asked Questions
        </h1>
        <p className="text-gray-700  text-lg font-sans leading-relaxed font-semibold">Can I request a review of a specific crypto casino?</p>
         <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">Absolutely. Just email us the platform name and why you think it should be reviewed. If it meets our criteria (e.g., accepts U.S. players, uses crypto, licensed), we’ll add it to our queue.</p>
          <p className="text-gray-700  text-lg font-sans leading-relaxed font-semibold">Do you recommend casinos based on my location?</p>
           <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">Yes! We prioritize crypto casinos that accept U.S. players, and we flag any site with geo-restrictions. If you’re unsure, ask us—we’ll help you find a casino that works in your state.</p>
            <p className="text-gray-700 text-lg font-sans leading-relaxed font-semibold">How long does it take to get a reply?</p>
             <p className="text-gray-700 mb-6 text-lg font-sans leading-relaxed">We aim to respond within 1–2 business days. Complex questions (like licensing or legal concerns) may take a bit longer while we double-check the facts.</p>
      </section>
      <hr className="mt-12 mb-5 border-gray-300" />
<p className="text-gray-700 mb-2 text-lg font-sans leading-relaxed">
      Thanks for being part of the Top Bitcoin Casinos USA 2025 community. We’re here to help you gamble smarter, safer, and more confidently with crypto.
      </p>
      </div>
  )
}

export default Contact
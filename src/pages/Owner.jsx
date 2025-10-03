import React from 'react';
import Helmet from '../components/SeoHelmet';
const Owner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-6 p-6 bg-white">
       <Helmet
        title="Slotrap-About Editor"
        description={`Learn about , our mission, and how we review the best crypto casinos for U.S. players.`}
        keywords={['crypto casino', 'bitcoin gambling', 'online casino reviews', 'no-KYC casinos', 'provably fair games']}
        href={`https://slotrap.com/editor`}
      />
      <table className="w-full">
        <tbody>
          {/* First row */}
          <tr className="border block">
            <td className="p-4 ">
              <div className="flex items-center space-x-4 p-4">
                <img
                  src="https://media.glamour.com/photos/641cc16e69a0faec6307666f/master/w_2560%2Cc_limit/1473115913"
                  alt="Author"
                  className="w-24 h-24 object-cover"
                />
              </div>
            </td>
          </tr>
          <tr className="border-l border-r border-b block mb-4 p-4">
             <h1 className="text-2xl font-bold ">Nichole Blackwell</h1>
          </tr>



          {/* Second row */}
          <tr className="border block">
            <td className="p-4">
              <h2 className="text-xl font-semibold mb-2 border-b pb-4">About Author</h2>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium w-1/4">First name</td>
                    <td className="py-2">Nichole</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium w-1/4">Last name</td>
                    <td className="py-2">Blackwell</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium w-1/4">Description</td>
                    <td className="py-2">
                      Nichole Blackwell is a seasoned cryptocurrency and iGaming journalist with over six years of experience evaluating blockchain-based gambling platforms. She holds a B.A. in Economics from New York University and an M.Sc. in Financial Technology from University College London. Samantha regularly contributes to leading crypto publications and is a frequent speaker at industry conferences on the intersection of blockchain and online gaming.
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Owner;

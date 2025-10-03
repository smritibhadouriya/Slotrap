import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutauthor = () => {
    const navigate = useNavigate();

    return (
        <div 
            className="bg-gray-200 p-4 sm:p-6 rounded-lg mb-4 sm:mb-8 hover:cursor-pointer transition-all duration-200"
            onClick={() => navigate('/editor')} 
        >
            <div className="flex items-center space-x-3 sm:space-x-4">
                <img 
                    src="https://media.glamour.com/photos/641cc16e69a0faec6307666f/master/w_2560%2Cc_limit/1473115913" 
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full object-cover" 
                    alt="Profile" 
                />
                <div>
                    <p className="text-gray-700 font-semibold text-sm sm:text-base">About Nichole Blackwell</p>
                    <p className="text-gray-500 text-xs sm:text-sm">Updated on September 24, 2025</p>
                </div>
            </div>
        </div>
    );
};

export default Aboutauthor;
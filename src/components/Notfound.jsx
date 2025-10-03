import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-160 bg-purple-100 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-yellow-600 mb-4">404</h1>
      <h2 className="text-2xl text-yellow-600 mb-6">Page Not Found</h2>
      <p className="text-yellow-500 mb-8">Sorry, the page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
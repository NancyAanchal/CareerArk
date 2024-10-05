import React from 'react';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-xl mb-8">We're working hard to bring you something amazing. Stay tuned!</p>
        <div className="relative">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

import React from 'react';
import Tabs from './Tabs';
import Gallery from './Gallery';

const MainContainer = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900">
      {/* Left Empty Space (Visible on large screens) */}
      <div className="lg:w-1/2 hidden lg:flex items-center justify-center bg-gray-800 shadow-lg">
        {/* Optional: Logo or Branding Area */}
        <h1 className="text-4xl font-bold text-white">Branding Area</h1>
      </div>

      {/* Right Side with Widgets */}
      <div className="w-full lg:w-1/2 bg-gray-800 p-6 shadow-lg">
        <div className="space-y-8">
          <Tabs />
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

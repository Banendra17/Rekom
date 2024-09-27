// src/pages/Home.jsx

import React from 'react';
import InputForm from '../components/InputForm';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex flex-col justify-center items-center px-4">
        <div className="w-full sm:w-2/3 lg:w-1/3">
          {/* Gambar */}
          <div className="h-48 sm:h-56 overflow-hidden rounded-lg mb-6">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Placeholder"
              className="w-full h-full object-cover shadow-md"
            />
          </div>
          {/* Form Input */}
          <div className="p-4 bg-white rounded-lg shadow-md">
            <InputForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

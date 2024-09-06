// src/pages/Home.jsx

import React from 'react';
import InputForm from '../components/InputForm';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col justify-center items-center p-4">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          <div className="h-48 sm:h-64 overflow-hidden mb-4"> {/* Adjust height for mobile */}
            <img
              src="https://via.placeholder.com/400x200"
              alt="Placeholder"
              className="w-full h-full object-cover"
            />
          </div>
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default Home;


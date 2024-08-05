// src/pages/Home.jsx

import React from 'react';
import InputForm from '../components/InputForm';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex justify-center items-center p-4">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          <InputForm />
        </div>
      </main>
    </div>
  );
};

export default Home;

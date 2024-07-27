// src/pages/Home.jsx

import React from 'react';
import InputForm from '../components/InputForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center p-4">
        <div className="w-full sm:w-2/3 lg:w-1/2">
          <InputForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

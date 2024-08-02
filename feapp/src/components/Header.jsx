// src/components/Header.jsx

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold">My Website</h1>
        <nav className="flex space-x-2 sm:space-x-4 items-center">
          {location.pathname !== '/' && (
            <button 
              className="hover:underline text-sm sm:text-base bg-blue-700 px-2 py-1 rounded"
              onClick={handleBackClick}
            >
              Kembali
            </button>
          )}
          <Link to="/" className="hover:underline text-sm sm:text-base">
            Home
          </Link>
          <Link to="/about" className="hover:underline text-sm sm:text-base">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

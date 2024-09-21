// src/components/Header.jsx

import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {location.pathname !== '/' && (
            <button 
              className="text-blue-500 hover:bg-blue-100 transition-all duration-200 ease-in-out p-2 rounded-full flex items-center mr-4"
              onClick={handleBackClick}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
            </button>
          )}
          {/* Wrap the h1 inside a Link component */}
          <Link to="/" className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200 ease-in-out">
            Rekom
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/allplaces" className="text-gray-600 hover:text-blue-500 text-sm sm:text-base transition-colors duration-200 ease-in-out">
                All Places
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

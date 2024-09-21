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
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {location.pathname !== '/' && (
            <button 
              className="hover:underline text-sm sm:text-base bg-blue-700 px-2 py-1 rounded flex items-center mr-4"
              onClick={handleBackClick}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          {/* Wrap the h1 inside a Link component */}
          <Link to="/" className="text-lg sm:text-xl font-bold hover:underline">
            My Website
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-2 sm:space-x-4">
            <li>
              <Link to="/allplaces" className="hover:underline text-sm sm:text-base">
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

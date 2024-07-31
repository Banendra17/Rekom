// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-2 sm:space-x-4">
            <li>
              <Link to="/" className="hover:underline text-sm sm:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-sm sm:text-base">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-sm sm:text-base">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

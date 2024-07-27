import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-2 sm:space-x-4">
            <li><a href="#home" className="hover:underline text-sm sm:text-base">Home</a></li>
            <li><a href="#about" className="hover:underline text-sm sm:text-base">About</a></li>
            <li><a href="#contact" className="hover:underline text-sm sm:text-base">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

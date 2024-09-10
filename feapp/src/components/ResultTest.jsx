// src/components/ResultItem.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultItem = ({ title, description }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate('/detail');
  };

  return (
    <div className="p-6 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md hover:bg-gray-100 transition-all duration-200">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      <button 
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-150"
        onClick={handleDetailsClick}
      >
        Selengkapnya
      </button>
    </div>
  );
};

export default ResultItem;
// src/components/ResultItem.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultItem = ({ title, description }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate('/detail');
  };

  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-lg text-gray-700">{description}</p>
      <button 
        className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        onClick={handleDetailsClick}
      >
        Selengkapnya
      </button>
    </div>
  );
};

export default ResultItem;

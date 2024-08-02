// src/pages/Result.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();
  
  const dummyResults = [
    {
      title: "Benteng Lalala",
      description: "Lorume fnaoetnuvihsirbyh uaoehfuo ajefnituhtfe e ta ae ae eatef aerfinbiahef eafaeefaef aefinbbnaefaefeaefeaeefsfa"
    },
    {
      title: "Benteng Lalala",
      description: "Lorume fnaoetnuvihsirbyh uaoehfuo ajefnituhtfe e ta ae ae eatef aerfinbiahef eafaeefaef aefinbbnaefaefeaefeaeefsfa"
    },
    {
      title: "Benteng Lalala",
      description: "Lorume fnaoetnuvihsirbyh uaoehfuo ajefnituhtfe e ta ae ae eatef aerfinbiahef eafaeefaef aefinbbnaefaefeaefeaeefsfa"
    }
  ];

  const handleDetailsClick = () => {
    navigate('/detail');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hasil Pencarian</h2>
      {dummyResults.map((result, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-semibold">{result.title}</h3>
          <p className="text-lg text-gray-700">{result.description}</p>
          <button 
            className="mt-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            onClick={handleDetailsClick}
          >
            Selengkapnya
          </button>
        </div>
      ))}
    </div>
  );
};

export default Result;

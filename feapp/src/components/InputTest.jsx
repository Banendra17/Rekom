// src/components/InputForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Kirim request ke Flask API
      const response = await axios.post('http://localhost:5000/recommend', {
        description: inputValue
      });
      setRecommendations(response.data);  // Set hasil rekomendasi
      navigate('/result'); // Pindah ke halaman hasil
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Masukkan deskripsi museum"
        className="p-3 mb-4 w-full text-lg border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>

      {/* Tampilkan hasil rekomendasi */}
      <div className="mt-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="p-3 bg-gray-100 border border-gray-200 rounded-lg mb-2">
            <h4>{rec.Place_Name}</h4>
            <p>Similarity Score: {rec.Similarity_Score.toFixed(4)}</p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default InputForm;

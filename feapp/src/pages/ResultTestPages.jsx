// src/components/Result.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultItem from '../components/ResultTest';

const Result = () => {
  // Mengambil rekomendasi yang dikirim melalui state
  const location = useLocation();
  const { recommendations } = location.state || { recommendations: [] };

  // Ambil 3 rekomendasi dengan skor kesamaan tertinggi
  const topRecommendations = recommendations.slice(0, 3);

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Hasil Rekomendasi</h2>
      {topRecommendations.length > 0 ? (
        topRecommendations.map((rec, index) => (
          <ResultItem 
            key={index} 
            title={rec.Place_Name} 
            description={`Skor Kesamaan: ${rec.Similarity_Score.toFixed(4)}`} 
          />
        ))
      ) : (
        <p>Tidak ada rekomendasi yang cocok.</p>
      )}
    </div>
  );
};

export default Result;

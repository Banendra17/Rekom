import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  // Mengambil rekomendasi yang dikirim melalui state
  const location = useLocation();
  const { recommendations } = location.state || { recommendations: [] };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold mb-4">Hasil Rekomendasi</h2>
      {recommendations.length > 0 ? (
        recommendations.map((rec, index) => (
          <div key={index} className="p-4 mb-4 bg-gray-100 rounded-lg border border-gray-300">
            <h3 className="text-lg font-semibold">{rec.Place_Name}</h3>
            <p>Skor Kesamaan: {rec.Similarity_Score.toFixed(4)}</p>
          </div>
        ))
      ) : (
        <p>Tidak ada rekomendasi yang cocok.</p>
      )}
    </div>
  );
};

export default Result;

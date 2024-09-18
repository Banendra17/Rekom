// src/pages/ResultTestPages.jsx


import React from 'react';
import { useLocation } from 'react-router-dom';
import ResultItem from '../components/ResultTest'; // Pastikan menggunakan ResultItem

const Result = () => {
    // Mengambil rekomendasi yang dikirim melalui state
    const location = useLocation();
    const { recommendations } = location.state || { recommendations: [] };
  
    // Ambil 3 rekomendasi dengan skor kesamaan tertinggi
    const topRecommendations = recommendations.slice(0, 3);
  
    return (
      <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 p-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Hasil Rekomendasi</h2>
        
        {topRecommendations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
            {topRecommendations.map((rec, index) => (
              <ResultItem 
                key={index} 
                title={rec.Place_Name} 
                description={rec.Description} 
                similarityScore={rec.Similarity_Score}
              />
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700">Tidak ada rekomendasi yang cocok.</p>
        )}
      </div>
    );
  };
  
export default Result;

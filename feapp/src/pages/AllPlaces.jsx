// src/pages/AllPlacesPage.jsx

import React, { useEffect, useState } from 'react';
import ResultItem from '../components/ResultTest'; // Gunakan komponen yang sudah ada

const AllPlacesPage = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fungsi untuk mengambil semua tempat wisata dari API
  const fetchAllPlaces = async () => {
    try {
      const response = await fetch('http://localhost:5000/places'); // Endpoint baru untuk semua tempat
      const data = await response.json();
      setPlaces(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching places:', error);
      setLoading(false);
    }
  };

  // Panggil fungsi fetchAllPlaces ketika komponen pertama kali di-render
  useEffect(() => {
    fetchAllPlaces();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Semua Tempat Wisata</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-screen-lg">
        {places.length > 0 ? (
          places.map((place, index) => (
            <ResultItem 
              key={index} 
              title={place.Place_Name} 
              description={place.Description} 
              similarityScore={place.Similarity_Score} // Nilai default atau score relevan
            />
          ))
        ) : (
          <p>Tidak ada tempat wisata tersedia.</p>
        )}
      </div>
    </div>
  );
};

export default AllPlacesPage;

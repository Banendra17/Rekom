// src/pages/NearestPlaces.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const NearestPlaces = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [nearestPlaces, setNearestPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Slugify function
  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')        // Ganti spasi dengan tanda "-"
      .replace(/[^\w-]+/g, '')     // Hapus karakter non-word
      .replace(/--+/g, '-')        // Ganti banyak tanda "-" dengan satu "-"
      .replace(/^-+/, '')          // Hapus tanda "-" di awal
      .replace(/-+$/, '');         // Hapus tanda "-" di akhir
  };

  // Fetch semua tempat wisata untuk dropdown
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('http://localhost:5000/places');
        const data = await response.json();
        setPlaces(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching places:', err);
        setError('Gagal memuat data tempat wisata');
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  // Function untuk menangani pemilihan tempat wisata dari dropdown
  const handlePlaceSelect = async (event) => {
    const placeName = event.target.value;
    setSelectedPlace(placeName);

    const selected = places.find((place) => place.Place_Name === placeName);

    if (selected) {
      try {
        const response = await fetch('http://localhost:5000/distance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lat: selected.Lat,
            lon: selected.Long,
          }),
        });
        const data = await response.json();
        const filteredPlaces = data.filter((place) => place.Distance > 0).slice(0, 3);
        setNearestPlaces(filteredPlaces);
      } catch (err) {
        console.error('Error fetching nearest places:', err);
        setError('Gagal memuat tempat wisata terdekat');
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Cari Tempat Wisata Terdekat</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <div className="w-full max-w-md mb-6">
        <label htmlFor="place-dropdown" className="block text-lg font-medium text-gray-700 mb-2">
          Pilih Tempat Wisata
        </label>
        <select
          id="place-dropdown"
          value={selectedPlace}
          onChange={handlePlaceSelect}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
        >
          <option value="">Pilih tempat wisata</option>
          {places.map((place, index) => (
            <option key={index} value={place.Place_Name}>
              {place.Place_Name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-screen-lg">
        <h3 className="text-xl font-semibold mb-4">3 Tempat Wisata Terdekat</h3>
        {nearestPlaces.length > 0 ? (
          <ul className="space-y-4">
            {nearestPlaces.map((place, index) => (
              <li key={index} className="p-4 bg-white shadow-md rounded-lg">
                <Link to={`/detail/${slugify(place.Place_Name)}`}>
                  <h4 className="text-lg font-bold">{place.Place_Name}</h4>
                  <p className="text-gray-600">Jarak: {place.Distance.toFixed(2)} km</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Pilih tempat wisata untuk melihat tempat terdekat.</p>
        )}
      </div>
    </div>
  );
};

export default NearestPlaces;

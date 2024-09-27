// src/pages/Detail.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { slug } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nearestPlaces, setNearestPlaces] = useState([]);

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const fetchPlaceDetail = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/places');
      const data = await response.json();

      const selectedPlace = data.find((place) => slugify(place.Place_Name) === slug);
      setPlace(selectedPlace);

      if (selectedPlace) {
        const distanceResponse = await fetch('http://localhost:5000/distance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lat: selectedPlace.Lat,
            lon: selectedPlace.Long,
          }),
        });

        const nearestData = await distanceResponse.json();
        const filteredNearestPlaces = nearestData.filter((p) => p.Distance > 0).slice(0, 3);
        setNearestPlaces(filteredNearestPlaces);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching place detail:', error);
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchPlaceDetail();
  }, [fetchPlaceDetail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!place) {
    return <div>Tempat wisata tidak ditemukan.</div>;
  }

  return (
    <div className="p-6 max-w-screen-lg mx-auto bg-gray-100 min-h-screen">
      {/* Bagian gambar dan deskripsi tempat wisata */}
      <div className="mb-6 relative">
        <img
          src={place.ImageURL || "https://via.placeholder.com/400x200?text=Image+Not+Available"}
          alt={place.Place_Name}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 transform translate-x-3 translate-y-3 bg-gray-200 rounded-lg z-[-1]"></div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <div className="absolute inset-0 transform translate-x-3 translate-y-3 bg-gray-200 rounded-lg z-[-1]"></div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{place.Place_Name}</h2>
        <p className="text-lg text-justify text-gray-700 leading-relaxed">{place.Description}</p>
      </div>

      {/* Bagian tempat wisata terdekat */}
      {nearestPlaces.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Tempat Wisata Terdekat</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearestPlaces.map((place, index) => (
              <li key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                <div className="absolute inset-0 transform translate-x-3 translate-y-3 bg-gray-200 rounded-lg z-[-1]"></div>
                <Link to={`/detail/${slugify(place.Place_Name)}`}>
                  <h4 className="text-lg font-bold text-gray-800 hover:text-blue-500 transition-all duration-200 ease-in-out">
                    {place.Place_Name}
                  </h4>
                  <p className="text-gray-600">Jarak: {place.Distance.toFixed(2)} km</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {nearestPlaces.length === 0 && (
        <p className="text-red-500 mt-6">Tidak ada tempat wisata terdekat yang ditemukan.</p>
      )}
    </div>
  );
};

export default Detail;

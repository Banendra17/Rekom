// src/pages/Detail.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
  const { slug } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nearestPlaces, setNearestPlaces] = useState([]);

  // Fungsi untuk membuat slug dari nama tempat
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

  // Fetch detail tempat dan tempat terdekat
  const fetchPlaceDetail = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/places');
      const data = await response.json();

      const selectedPlace = data.find((place) => slugify(place.Place_Name) === slug);
      setPlace(selectedPlace);

      if (selectedPlace) {
        // Fetch tempat terdekat menggunakan lat dan long dari tempat yang dipilih
        const distanceResponse = await fetch('http://localhost:5000/distance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lat: selectedPlace.Lat,
            lon: selectedPlace.Long,
          }),
        });

        const nearestData = await distanceResponse.json();
        console.log('Nearest places:', nearestData); // Log untuk memeriksa data yang diterima
        const filteredNearestPlaces = nearestData.filter((p) => p.Distance > 0).slice(0, 3);
        setNearestPlaces(filteredNearestPlaces);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching place detail:', error);
      setLoading(false);
    }
  }, [slug]);

  // Jalankan fetch saat komponen dimount
  useEffect(() => {
    fetchPlaceDetail();
  }, [fetchPlaceDetail]);

  // Jika masih loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Jika tempat tidak ditemukan
  if (!place) {
    return <div>Tempat wisata tidak ditemukan.</div>;
  }

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      {/* Bagian gambar dan deskripsi tempat wisata */}
      <div className="mb-4">
        <img
          src={place.ImageURL || "https://via.placeholder.com/400x200?text=Image+Not+Available"}
          alt={place.Place_Name}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4">{place.Place_Name}</h2>
        <p className="text-lg mb-4 text-justify leading-relaxed">{place.Description}</p>
      </div>

      {/* Bagian tempat wisata terdekat */}
      {nearestPlaces.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Tempat Wisata Terdekat</h3>
          <ul className="space-y-4">
            {nearestPlaces.map((place, index) => (
              <li key={index} className="p-4 bg-white shadow-md rounded-lg">
                <Link to={`/detail/${slugify(place.Place_Name)}`}>
                  <h4 className="text-lg font-bold text-gray-800 hover:text-blue-500 hover:bg-blue-100 transition-all duration-200 ease-in-out p-2 rounded-lg">
                    {place.Place_Name}
                  </h4>
                  <p className="text-gray-600">Jarak: {place.Distance.toFixed(2)} km</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tampilkan pesan jika tidak ada tempat wisata terdekat */}
      {nearestPlaces.length === 0 && (
        <p className="text-red-500">Tidak ada tempat wisata terdekat yang ditemukan.</p>
      )}
    </div>
  );
};

export default Detail;

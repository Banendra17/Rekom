// src/pages/Detail.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { slug } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="p-4 max-w-screen-lg mx-auto">
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
    </div>
  );
};

export default Detail;

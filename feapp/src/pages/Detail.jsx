// src/pages/Detail.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse'; // Import PapaParse
import csvFile from '../data/yogyakarta_budaya.csv'; // Adjust the path to your CSV file

const Detail = () => {
  const { slug } = useParams(); // Get slug from URL
  const [place, setPlace] = useState(null);
  const [placesData, setPlacesData] = useState([]); // State to store the parsed CSV data

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

  useEffect(() => {
    // Parse CSV file using PapaParse
    Papa.parse(csvFile, {
      download: true,
      header: true,
      complete: function (result) {
        const parsedData = result.data; // CSV data in array format
        setPlacesData(parsedData);
      },
      error: function (error) {
        console.error('Error parsing CSV:', error);
      },
    });
  }, []);

  useEffect(() => {
    if (placesData.length > 0) {
      // Find the place by slug after CSV is loaded
      const selectedPlace = placesData.find(place => slugify(place.Place_Name) === slug);
      setPlace(selectedPlace);
    }
  }, [slug, placesData]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/400x200?text=Image+Not+Available" // Placeholder image
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

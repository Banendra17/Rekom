import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse'; // Import PapaParse
import csvFile from '../data/yogyakarta_budaya.csv'; // Adjust the path to your CSV file

const Detail = () => {
  const { id } = useParams(); // Get ID from URL if using React Router
  const [place, setPlace] = useState(null);
  const [placesData, setPlacesData] = useState([]); // State to store the parsed CSV data

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
      // Find the place by ID after CSV is loaded
      const selectedPlace = placesData.find(place => place.Place_Id === id);
      setPlace(selectedPlace);
    }
  }, [id, placesData]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/400x200?text=Image+Not+Available" // Keeping image placeholder
          alt={place.Place_Name}
          className="w-full h-auto"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{place.Place_Name}</h2>
        <p className="text-lg mb-4 text-justify">{place.Description}</p>
      </div>
    </div>
  );
};

export default Detail;

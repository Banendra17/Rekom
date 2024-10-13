import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const NearestMap = () => {
  const [, setPlaces] = useState([]);
  const [nearestPlaces, setNearestPlaces] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  // Fetch tempat wisata
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

  // Mendapatkan lokasi saat ini dengan API Geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          console.error('Error getting location:', err);
          setError('Gagal mendapatkan lokasi');
        }
      );
    } else {
      setError('Geolocation tidak didukung oleh browser ini');
    }
  }, []);

  // Fetch tempat wisata terdekat berdasarkan lokasi saat ini
  useEffect(() => {
    const fetchNearestPlaces = async () => {
      if (currentLocation) {
        try {
          const response = await fetch('http://localhost:5000/distance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              lat: currentLocation.lat,
              lon: currentLocation.lon,
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

    fetchNearestPlaces();
  }, [currentLocation]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gray-50 p-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Tempat Wisata Terdekat dari Lokasi Anda</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {currentLocation ? (
        <MapContainer center={[currentLocation.lat, currentLocation.lon]} zoom={13} className="w-full h-96 max-w-screen-lg mb-6 z-10">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Titik lokasi saat ini */}
          <CircleMarker
            center={[currentLocation.lat, currentLocation.lon]}
            radius={10} // Ukuran titik lokasi pengguna
            fillColor="red"
            color="white"
            fillOpacity={0.8}
          >
            <Popup>Lokasi Anda Saat Ini</Popup>
          </CircleMarker>

          {/* Titik untuk tempat wisata terdekat */}
          {nearestPlaces.map((place, index) => (
            <CircleMarker
              key={index}
              center={[place.Lat, place.Long]}
              radius={8} // Ukuran titik tempat wisata
              fillColor="blue" // Warna titik tempat wisata
              color="white"
              fillOpacity={0.8}
            >
              <Popup>
                <Link to={`/detail/${slugify(place.Place_Name)}`}>
                  {place.Place_Name}
                </Link>
                <br />
                Jarak: {place.Distance.toFixed(2)} km
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      ) : (
        <p>Menunggu lokasi Anda...</p>
      )}

      {nearestPlaces.length > 0 && (
        <div className="w-full max-w-screen-lg">
          <h3 className="text-xl font-semibold mb-4">3 Tempat Wisata Terdekat</h3>
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
    </div>
  );
};

export default NearestMap;
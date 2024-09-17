import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Untuk menangkap parameter ID jika menggunakan routing

const Detail = () => {
  const { id } = useParams(); // Mengambil ID dari URL jika menggunakan React Router
  const [place, setPlace] = useState(null);

  // Data dummy tempat wisata
  const placesData = [
    {
      id: '1',
      title: "Pantai Parangtritis",
      imageUrl: "https://via.placeholder.com/400x200?text=Pantai+Parangtritis",
      description: `Pantai Parangtritis adalah pantai yang paling terkenal di Yogyakarta. 
        Pantai ini terkenal dengan ombak besar dan pesona alamnya yang memikat. 
        Selain bermain di pantai, pengunjung juga bisa menikmati pemandangan sunset yang indah.`,
    },
    {
      id: '2',
      title: "Candi Prambanan",
      imageUrl: "https://via.placeholder.com/400x200?text=Candi+Prambanan",
      description: `Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia. 
        Dibangun pada abad ke-9, candi ini didedikasikan untuk Trimurti: Brahma, Wisnu, dan Siwa. 
        Prambanan juga menjadi situs warisan dunia UNESCO.`,
    },
    {
      id: '3',
      title: "Gunung Merapi",
      imageUrl: "https://via.placeholder.com/400x200?text=Gunung+Merapi",
      description: `Gunung Merapi adalah salah satu gunung berapi paling aktif di Indonesia. 
        Terletak di perbatasan Jawa Tengah dan Yogyakarta, gunung ini menawarkan wisata pendakian 
        serta pemandangan alam yang indah dari kawah aktifnya.`,
    },
  ];

  useEffect(() => {
    // Mencari tempat wisata yang sesuai dengan ID dari URL
    const selectedPlace = placesData.find(place => place.id === id);
    setTimeout(() => {
      setPlace(selectedPlace);
    }, 500); // Simulasi delay 0.5 detik
  }, [id]);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <img
          src={place.imageUrl}
          alt={place.title}
          className="w-full h-auto"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">{place.title}</h2>
        <p className="text-lg mb-4 text-justify">{place.description}</p>
      </div>
    </div>
  );
};

export default Detail;

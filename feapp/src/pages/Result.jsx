// src/pages/Result.jsx

import React from 'react';
import ResultItem from '../components/ResultItem';

const Result = () => {
  const dummyResults = [
    {
      title: "Taman Sari",
      description: "Taman Sari merupakan situs bekas taman atau kebun istana Keraton Yogyakarta yang juga dikenal sebagai Water Castle. Tempat ini terkenal dengan kolam pemandian, terowongan bawah tanah, dan masjid yang unik."
    },
    {
      title: "Candi Prambanan",
      description: "Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia yang dipersembahkan untuk Trimurti, tiga dewa utama Hindu. Candi ini terkenal dengan arsitektur yang megah dan relief yang menggambarkan kisah Ramayana."
    },
    {
      title: "Pantai Parangtritis",
      description: "Pantai Parangtritis adalah salah satu pantai yang paling terkenal di Yogyakarta. Pantai ini terkenal dengan ombaknya yang besar dan pemandangan matahari terbenam yang indah. Terdapat juga gumuk pasir yang menyerupai gurun kecil."
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Hasil Pencarian</h2>
      {dummyResults.map((result, index) => (
        <ResultItem 
          key={index} 
          title={result.title} 
          description={result.description} 
        />
      ))}
    </div>
  );
};

export default Result;

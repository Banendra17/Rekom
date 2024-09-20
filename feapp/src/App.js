// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import ResultTest from './components/ResultTest.jsx'
import Home from './pages/Home';
import AllPlaces from './pages/AllPlaces.jsx'
import About from './pages/About';
import Result from './pages/Result';
import ResulTestPages from './pages/ResultTestPages.jsx'
import Detail from './pages/Detail'; // Halaman Detail


const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allplaces" element={<AllPlaces />} />
            <Route path="/about" element={<About />} />
            <Route path="/result" element={<Result />} />
            <Route path="/resulttest" element={<ResultTest />} />
            <Route path="/resultpages" element={<ResulTestPages />} />
            <Route path="/detail/:slug" element={<Detail />} /> {/* Perbarui route menjadi slug */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

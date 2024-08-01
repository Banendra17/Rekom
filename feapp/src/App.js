// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Result from './pages/Result';
import Detail from './pages/Detail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/result" element={<Result />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

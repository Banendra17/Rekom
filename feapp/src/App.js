// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
//import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content p-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

// src/App.js
import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import TourGrid from './components/TourGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <TourGrid />
      <Footer />
    </div>
  );
}

export default App;

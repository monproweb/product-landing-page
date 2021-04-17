/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div id="page-wrapper">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;

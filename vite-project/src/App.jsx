import './App.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import ProductPage from './components/ProductPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
        <Navbar />
        <ProductPage />
        <Footer/>
    </>
  )
}

export default App

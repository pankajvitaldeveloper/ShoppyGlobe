import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
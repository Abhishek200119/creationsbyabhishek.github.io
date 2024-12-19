import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing';
import AboutPage from './components/About';
import CaseStudy from './components/CaseStudy';
import ContactPage from './components/Contact';
import ProductDesign from './components/ProductDesign';
import WebDesign from './components/WebDesign';
import MobileAppDesign from './components/MobileAppDesign';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar appears on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage key="home" />} />
        <Route path="/About" element={<AboutPage key="about" />} />
        <Route path="/CaseStudy" element={<CaseStudy key="caseStudy" />} />
        <Route path="/Contact" element={<ContactPage key="contact" />} />
        
        {/* New Case Study Pages */}
        <Route path="/product-design" element={<ProductDesign key="productDesign" />} />
        <Route path="/web-design" element={<WebDesign key="webDesign" />} />
        <Route path="/mobile-app-design" element={<MobileAppDesign key="mobileAppDesign" />} />
      </Routes>
    </Router>
  );
}

export default App;
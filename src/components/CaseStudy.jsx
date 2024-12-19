import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop, FaMobileAlt, FaPaintBrush, FaExternalLinkAlt } from 'react-icons/fa';
import './ServicesPage.css';

function CaseStudy() {
  return (
    <div className="services-page-container">
      <h1>Case Study</h1>
      <div className="services-container">
        <Link to="/product-design" className="service-card">
          <FaPaintBrush className="service-icon" />
          <h2>Product Design</h2>
          <p>Crafting user-centered product designs that stand out and inspire.</p>
        </Link>

        <Link to="/web-design" className="service-card">
          <FaLaptop className="service-icon" />
          <h2>Web Design</h2>
          <p>Creating immersive web experiences that captivate users.</p>
        </Link>

        <Link to="/mobile-app-design" className="service-card">
          <FaMobileAlt className="service-icon" />
          <h2>Mobile App Design</h2>
          <p>Designing innovative mobile interfaces for seamless user experiences.</p>
        </Link>
      </div>

      {/* Add mockups link section */}
      <div className="mockups-container">
        <h2>View Mockups</h2>
        <p>Check out the mockups I've created for various projects.</p>
        <br/>
        <a
          href="https://drive.google.com/drive/folders/1bv5df7JIk-jKSBHp7cjh2MWIHS-rieaY?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mockups-link"
        >
          View Mockups <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default CaseStudy;
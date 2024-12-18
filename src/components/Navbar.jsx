import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.location.reload(); // Force a reload to trigger Three.js
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#" onClick={handleHomeClick}>Home</a></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/CaseStudy">Case Studies</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
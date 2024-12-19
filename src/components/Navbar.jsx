import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate('/'); // Navigate to the home route
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/" onClick={handleHomeClick}>Home</a>
        </li>
        <li>
          <NavLink to="/About" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/CaseStudy" activeClassName="active">Case Studies</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
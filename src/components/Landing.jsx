import React, { useEffect } from 'react';
import ThreeBackground from './ThreeBackground';
import './Landing.css';

function LandingPage() {
  useEffect(() => {
    ThreeBackground(); // Initialize the background

    return () => {
      // Cleanup when component unmounts
      const canvas = document.querySelector('.content--canvas canvas');
      if (canvas) canvas.remove();
    };
  }, []);

  return (
    <div className="landing-page">
      <div className="content--canvas"></div> {/* Background Animation */}
      <div className="hero">
        <div className="hero-content">
          <h2>UI/UX Designer</h2>
          <h1>PORTFOLIO</h1>
          <h3>Abhishek Rajput</h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
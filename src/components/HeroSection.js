import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="./videos/video-1.mp4" autoPlay loop muted />
      <h1>CUSTOMS CLEARANCE</h1>
      <p>Export from or import to China agent</p>
      <p>Get a <span>FREE</span> quote!</p>
    </div>
  );
}

export default HeroSection;

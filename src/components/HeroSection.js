import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="videos/video-1.mp4" autoPlay loop muted />
      <h1>CUSTOM CLEARANCE</h1>
      <p>export from / import to China</p>
      <p>Get A <span>Free</span> Quote!</p>
    </div>
  );
}

export default HeroSection;

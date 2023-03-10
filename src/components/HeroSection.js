import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="./videos/video-1.mp4" autoPlay loop muted />
      <h1>CUSTOMS CLEARANCE</h1>
      <p>Export from or import to China</p>
      <p>Get a <span>FREE</span> quote!</p>
      <p>中国邮政进出口一级代理</p>
    </div>
  );
}

export default HeroSection;

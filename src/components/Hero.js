import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={require('../assets/hero.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Effortless Style,<br />Thoughtfully Made</h1>
          <p>
            Modern essentials in soft tones and timeless cuts —
            designed to feel good and look even better.
          </p>
          <div className="hero-buttons">
            <a href="/" className="btn btn-dark">Shop Women →</a>
            <a href="/" className="btn btn-outline-dark">Shop Men →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

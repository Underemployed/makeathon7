import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/doctors');
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Welcome to SheSafe,<br/>Empowering Women for a Safer Tomorrow!</h1>
        <p>At SheSafe, we are dedicated to enhancing women's safety through innovative solutions that provide real-time alerts, anonymous reporting, and valuable resources.</p>
        <button className="btn" onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import './Testimonials.css'; // Updated CSS file for Testimonials

const Testimonials = () => {
  return (
    <div className="testimonials-container"><br/><br/>
      <h1>Our Testimonials</h1>
      <div className="testimonial-box">
        <p>"Avasthi helped me navigate through difficult times. The platform is user-friendly, and the services are exceptional."</p>
        <span className="author">— Sarah W.</span>
      </div>
      <div className="testimonial-box">
        <p>"The teletherapy sessions provided by Avasthi were a game-changer for me. I highly recommend it to anyone seeking mental health support."</p>
        <span className="author">— John D.</span>
      </div>
      <div className="testimonial-box">
        <p>"Avasthi's AI-driven tools made it easy to monitor my mental wellness on a daily basis. I'm grateful for the support!"</p>
        <span className="author">— Emily R.</span>
      </div>
    </div>
  );
};

export default Testimonials;

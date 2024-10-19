import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About SheSafe</h1>
      <p>
        At SheSafe, we are dedicated to enhancing women's safety through anonymous reporting and providing vital tech resources. Our mission is to empower women by delivering real-time safety alerts, SOS features, and personalized safety advice that can help them navigate their daily lives with confidence.
      </p>
      <p>
        - <strong>Real-Time Safety Alerts:</strong> Immediate notifications about potential threats in the vicinity, ensuring you stay informed and alert.
      </p>
      <p>
        - <strong>SOS Feature:</strong> Quick access to emergency assistance with just a tap, providing peace of mind in critical situations.
      </p>
      <p>
        - <strong>Safety Advice:</strong> Tailored tips and resources based on user location and needs, ensuring relevant guidance whenever it’s required.
      </p>
    </div>
  );
};

export default About;

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1><br/>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us. We are always here to help!</p>
      
      <div className="contact-details">
        <p><pre>Email: support@avasthi.com                                                   Phone: +1 (123) 456-7890</pre></p>
      </div>

      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

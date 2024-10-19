import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Testimonials from './Components/Testimonials/Testimonials';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/doctors" element={<DoctorDetails />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="logo" />
      <ul>
        <li><button className='nav-btn no-decoration' onClick={() => handleNavigation('/')}>Home</button></li>
        <li><button className='nav-btn no-decoration' onClick={() => handleNavigation('/about-us')}>About us</button></li>
        <li><button className='nav-btn no-decoration' onClick={() => handleNavigation('/testimonials')}>Testimonials</button></li>
        <li><button className='nav-btn no-decoration' onClick={() => handleNavigation('/contact-us')}>Contact us</button></li>
        <li><button className='btn' onClick={() => handleNavigation('/login')}>Login</button></li> {/* Login button */}
        <li><button className='btn' onClick={() => handleNavigation('/sign-up')}>Sign up</button></li> {/* Sign up button */}
      </ul>
    </nav>
  );
};

export default Navbar;

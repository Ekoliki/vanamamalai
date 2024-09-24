import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // Import icon for login
import logoImage from '../assets/logo-image.png';  // Make sure path is correct

const HeaderNavbar = () => {
  return (
    <div className="container">
      <div className="logo-container">
        <header className="header-flex">
          <div className="Header-text">VANAMAMALAI MUTT</div>
          <img src={logoImage} alt="Vanamamalai Mutt Logo" className="logo" />
          <div className="logologo">
            <Link to="/login" className="login-icon">
              <FaUserCircle size={25} />
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeaderNavbar;

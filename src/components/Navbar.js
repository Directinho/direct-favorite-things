import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Direct-Favorite-Things</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#start">Start</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="navbar-settings">
        <img src="https://iili.io/KfMpD6x.png" alt="Settings" className="settings-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
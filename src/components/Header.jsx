import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-timezone">About TimeZone</Link></li>
        <li><Link to="/about-us">About Me</Link></li>
      </ul>
    </nav>
  );
};

export default Header;

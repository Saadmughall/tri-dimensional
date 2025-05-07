import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import AnimatedText from '../AnimatedText/AnimatedText';

const NavbarLinks = [
  { name: 'Home', link: '#hero-section-main' },
  { name: 'About', link: '#project-section' },
  { name: 'Contact', link: '#footer-section' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div id="navbar-main">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          {NavbarLinks.map((item, index) => (
            <li key={index} className="navbar-link">
              <a href={item.link} onClick={() => setIsOpen(false)}>
                <AnimatedText text={item.name} />
              </a>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </div>
      </nav>
    </div>
  );
}

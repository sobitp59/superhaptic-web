'use client';

import { useEffect, useState } from 'react';
import { useSuperhaptic } from '../hooks/useSuperhaptic';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { trigger } = useSuperhaptic();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    trigger('light');
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">superhaptic</div>
        <div className="navbar-links">
          <a href="#features" onClick={handleLinkClick}>Features</a>
          <a href="#how-it-works" onClick={handleLinkClick}>How It Works</a>
          <a href="#installation" onClick={handleLinkClick}>Installation</a>
          <a
            href="https://github.com/sobitp59/superhaptic"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}

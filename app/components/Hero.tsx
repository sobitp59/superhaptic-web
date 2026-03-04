'use client';

import { useEffect, useState } from 'react';
import DeviceMockup from './DeviceMockup';
import { useSuperhaptic } from '../hooks/useSuperhaptic';

export default function Hero() {
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>('desktop');
  const { trigger } = useSuperhaptic();

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      ('ontouchstart' in window && window.innerWidth < 768);

    setDeviceType(isMobile ? 'mobile' : 'desktop');

    // Welcome haptic feedback
    const timer = setTimeout(() => trigger('light'), 1000);
    return () => clearTimeout(timer);
  }, [trigger]);

  const handleButtonClick = () => {
    trigger('success');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Feel the Web Come to Life</h1>
        <p className="hero-subtitle">
          Bring mobile-like tactile experiences to your web applications with seamless haptic feedback
        </p>

        <div className="cta-buttons">
          <a href="#installation" className="btn btn-primary" onClick={handleButtonClick}>
            Get Started →
          </a>
          <a
            href="https://github.com/sobitp59/superhaptic/"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleButtonClick}
          >
            View on GitHub
          </a>
        </div>

        <DeviceMockup type={deviceType} />
      </div>
    </section>
  );
}

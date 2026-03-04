'use client';

import { useSuperhaptic } from '../hooks/useSuperhaptic';

export default function CTA() {
  const { trigger } = useSuperhaptic();

  const handleClick = () => {
    trigger('success');
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Feel the Difference?</h2>
        <p>Start adding delightful haptic feedback to your web applications today</p>
        <a href="#installation" className="btn" onClick={handleClick}>
          Get Started for Free
        </a>
      </div>
    </section>
  );
}

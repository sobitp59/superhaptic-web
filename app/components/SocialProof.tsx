'use client';

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="stats-grid">
        <div className="stat-item fade-in">
          <div className="stat-number">~6KB</div>
          <div className="stat-label">Tiny Bundle Size</div>
        </div>
        <div className="stat-item fade-in">
          <div className="stat-number">0</div>
          <div className="stat-label">Dependencies</div>
        </div>
        <div className="stat-item fade-in">
          <div className="stat-number">100%</div>
          <div className="stat-label">TypeScript</div>
        </div>
      </div>
    </section>
  );
}

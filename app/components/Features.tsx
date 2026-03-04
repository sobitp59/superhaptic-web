'use client';

export default function Features() {
  const features = [
    {
      icon: 'ph-device-mobile',
      title: 'Mobile-First',
      description: 'Vibration patterns optimized for mobile devices, mimicking iOS and Android haptics perfectly',
    },
    {
      icon: 'ph-speaker-high',
      title: 'Audio Fallback',
      description: 'Automatic audio feedback on desktop browsers where vibration isn\'t available',
    },
    {
      icon: 'ph-lightning',
      title: 'Instant Setup',
      description: 'Simple API with preset patterns - get started in seconds, not hours',
    },
    {
      icon: 'ph-feather',
      title: 'Ultra Lightweight',
      description: 'Zero dependencies, ~6KB bundle size - no bloat, just pure performance',
    },
    {
      icon: 'ph-code',
      title: 'TypeScript Ready',
      description: 'Full type definitions included for the best developer experience',
    },
    {
      icon: 'ph-globe',
      title: 'Universal Support',
      description: 'Works with npm, pnpm, yarn, bun - all major browsers supported',
    },
  ];

  return (
    <section id="features" className="section features">
      <h2 className="section-title fade-in">Why Developers Love Superhaptic</h2>
      <p className="section-description fade-in">Everything you need to add delightful haptic feedback to your web apps</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card fade-in">
            <div className="feature-icon">
              <i className={`ph ${feature.icon}`} data-weight="duotone"></i>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

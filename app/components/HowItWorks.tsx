'use client';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Install',
      description: 'Add superhaptic to your project using your favorite package manager',
    },
    {
      number: '2',
      title: 'Import',
      description: 'Import the library into your JavaScript or TypeScript file',
    },
    {
      number: '3',
      title: 'Use',
      description: 'Call superhaptic methods to add feedback to user interactions',
    },
  ];

  return (
    <section id="how-it-works" className="section how-it-works">
      <h2 className="section-title fade-in">How It Works</h2>
      <p className="section-description fade-in">Three simple steps to add haptic feedback to your app</p>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card fade-in">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

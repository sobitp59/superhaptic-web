'use client';

import { useState } from 'react';
import CodeBlock from './CodeBlock';
import { useSuperhaptic } from '../hooks/useSuperhaptic';

export default function Installation() {
  const [activeTab, setActiveTab] = useState('npm');
  const { trigger } = useSuperhaptic();

  const packageManagers = [
    { id: 'npm', label: 'npm', command: 'npm install superhaptic' },
    { id: 'pnpm', label: 'pnpm', command: 'pnpm add superhaptic' },
    { id: 'yarn', label: 'yarn', command: 'yarn add superhaptic' },
    { id: 'bun', label: 'bun', command: 'bun add superhaptic' },
  ];

  const usageCode = `import superhaptic from 'superhaptic';

// Use preset patterns
superhaptic.preset('success');  // ✓ Vibrates or plays sound

// Custom pattern
superhaptic.vibrate(50);        // Single 50ms vibration

// Control
superhaptic.disable();          // Turn off
superhaptic.enable();           // Turn on`;

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    trigger('light');
  };

  return (
    <section id="installation" className="section installation">
      <h2 className="section-title fade-in">Installation</h2>

      <div className="tabs">
        {packageManagers.map((pm) => (
          <button
            key={pm.id}
            className={`tab ${activeTab === pm.id ? 'active' : ''}`}
            onClick={() => handleTabChange(pm.id)}
          >
            {pm.label}
          </button>
        ))}
      </div>

      {packageManagers.map((pm) => (
        <div
          key={pm.id}
          className={`tab-content ${activeTab === pm.id ? 'active' : ''}`}
        >
          <CodeBlock code={pm.command} language="bash" />
        </div>
      ))}

      <div className="fade-in" style={{ marginTop: '30px' }}>
        <CodeBlock code={usageCode} language="javascript" />
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { useSuperhaptic } from '../hooks/useSuperhaptic';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Examples() {
  const { trigger, vibrate } = useSuperhaptic();
  const [toggleState, setToggleState] = useState(false);

  const examples = [
    {
      title: 'Button Feedback',
      code: `button.addEventListener('click', () => {
  superhaptic.preset('light');
  // Handle click...
});`,
      demo: () => (
        <button className="example-btn" onClick={() => trigger('light')}>
          Click Me!
        </button>
      ),
    },
    {
      title: 'Form Validation',
      code: `if (isValid) {
  superhaptic.preset('success');
  submitForm();
} else {
  superhaptic.preset('error');
  showErrors();
}`,
      demo: () => (
        <>
          <button className="example-btn" onClick={() => trigger('success')}>
            Submit Valid Form
          </button>
          <button className="example-btn" onClick={() => trigger('error')}>
            Submit Invalid Form
          </button>
        </>
      ),
    },
    {
      title: 'Toggle Switch',
      code: `toggle.addEventListener('change', (e) => {
  const intensity = e.target.checked ? 20 : 10;
  superhaptic.vibrate(intensity);
});`,
      demo: () => (
        <button
          className="example-btn"
          onClick={() => {
            const newState = !toggleState;
            setToggleState(newState);
            vibrate(newState ? 20 : 10);
          }}
        >
          Toggle: {toggleState ? 'ON' : 'OFF'}
        </button>
      ),
    },
    {
      title: 'Notifications',
      code: `function showNotification() {
  superhaptic.preset('notification');
  toast.show('New message!');
}`,
      demo: () => (
        <button className="example-btn" onClick={() => trigger('notification')}>
          Show Notification
        </button>
      ),
    },
    {
      title: 'Custom Patterns',
      code: `// [vibrate, pause, vibrate, pause, ...]
superhaptic.vibrate([50, 100, 50, 100, 50]);

// Complex rhythm
superhaptic.vibrate([10, 50, 20, 50, 30]);`,
      demo: () => (
        <button className="example-btn" onClick={() => vibrate([50, 100, 50, 100, 50])}>
          Custom Pattern
        </button>
      ),
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title fade-in">Try It Live</h2>
      <p className="section-description fade-in">Click the buttons below to experience superhaptic in action</p>

      <div className="examples-grid">
        {examples.map((example, index) => (
          <div key={index} className="example-card fade-in">
            <div className="example-header">{example.title}</div>
            <div className="example-content">
              <div className="example-demo">{example.demo()}</div>
              <div className="example-code">
                <SyntaxHighlighter
                  language="javascript"
                  style={tomorrow}
                  customStyle={{
                    background: 'transparent',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {example.code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useSuperhaptic } from '../hooks/useSuperhaptic';

interface DeviceMockupProps {
  type: 'desktop' | 'mobile';
}

export default function DeviceMockup({ type }: DeviceMockupProps) {
  const { trigger, vibrate } = useSuperhaptic();

  const handleDemo = (preset: string) => {
    trigger(preset);
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const intensity = e.target.checked ? 20 : 10;
    vibrate(intensity);
  };

  if (type === 'desktop') {
    return (
      <div className="device-mockup desktop-mockup hero-mockup">
        <div className="mockup-header">
          <div className="traffic-lights">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="url-bar">superhaptic-demo.com</div>
        </div>
        <div className="mockup-screen">
          <div className="demo-app">
            <h3 className="demo-app-title">Try It Live!</h3>
            <div className="demo-buttons">
              <button className="ui-btn" onClick={() => handleDemo('light')}>
                <span className="btn-icon">💡</span>
                <span className="btn-text">Light Tap</span>
              </button>
              <button className="ui-btn" onClick={() => handleDemo('success')}>
                <span className="btn-icon">✓</span>
                <span className="btn-text">Save</span>
              </button>
              <button className="ui-btn error-btn" onClick={() => handleDemo('error')}>
                <span className="btn-icon">✕</span>
                <span className="btn-text">Delete</span>
              </button>
            </div>
            <div className="demo-toggle-container">
              <label className="toggle-switch">
                <input type="checkbox" onChange={handleToggle} />
                <span className="toggle-slider"></span>
              </label>
              <span className="toggle-label">Enable Notifications</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile mockup
  return (
    <div className="device-mockup mobile-mockup hero-mockup">
      <div className="mobile-notch"></div>
      <div className="mockup-screen mobile-screen">
        <div className="mobile-statusbar">
          <span>9:41</span>
          <span>📶 📡 🔋</span>
        </div>
        <div className="demo-app mobile-app">
          <h3 className="demo-app-title">Try It Live!</h3>
          <div className="mobile-list">
            <div className="list-item" onClick={() => handleDemo('selection')}>
              <span className="item-icon">📧</span>
              <div className="item-content">
                <div className="item-title">New Message</div>
                <div className="item-subtitle">Tap to read</div>
              </div>
              <span className="item-arrow">›</span>
            </div>
            <div className="list-item" onClick={() => handleDemo('notification')}>
              <span className="item-icon">🔔</span>
              <div className="item-content">
                <div className="item-title">Notification</div>
                <div className="item-subtitle">Important alert</div>
              </div>
              <span className="item-arrow">›</span>
            </div>
            <div className="list-item" onClick={() => handleDemo('warning')}>
              <span className="item-icon">⚠️</span>
              <div className="item-content">
                <div className="item-title">Warning</div>
                <div className="item-subtitle">Requires attention</div>
              </div>
              <span className="item-arrow">›</span>
            </div>
          </div>
          <div className="mobile-action-bar">
            <button className="mobile-action-btn" onClick={() => handleDemo('light')}>
              <span>🏠</span>
            </button>
            <button className="mobile-action-btn" onClick={() => handleDemo('medium')}>
              <span>🔍</span>
            </button>
            <button className="mobile-action-btn" onClick={() => handleDemo('heavy')}>
              <span>⚙️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

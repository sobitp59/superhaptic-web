'use client';

import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after page is loaded
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 245, 248, 0.98) 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        transition: 'opacity 0.5s ease-out',
        opacity: loading ? 1 : 0,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(236, 64, 122, 0.2)',
            borderTop: '4px solid #EC407A',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px',
          }}
        />
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        <div
          style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            background: 'linear-gradient(135deg, #F4729E 0%, #EC407A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          superhaptic
        </div>
      </div>
    </div>
  );
}

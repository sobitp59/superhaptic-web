'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/sobitp59/superhaptic" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.npmjs.com/package/superhaptic" target="_blank" rel="noopener noreferrer">
          NPM
        </a>
        <a href="https://github.com/sobitp59/superhaptic/blob/main/README.md" target="_blank" rel="noopener noreferrer">
          Documentation
        </a>
        <a href="https://github.com/sobitp59/superhaptic/issues" target="_blank" rel="noopener noreferrer">
          Report Issue
        </a>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Superhaptic. MIT License.</p>
        <p style={{ marginTop: '10px', opacity: 0.7 }}>Made with care for better web experiences</p>
      </div>
    </footer>
  );
}

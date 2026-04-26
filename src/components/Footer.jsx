// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer style={{
      padding: '2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--accent)',
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-muted)',
      fontFamily: 'monospace',
      marginTop: 'auto'
    }}>
      <p>SYS.LOG // END_OF_FILE</p>
      <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
        © {new Date().getFullYear()} // PORTFOLIO_BUILD_V1.0
      </p>
    </footer>
  );
};

export default Footer;
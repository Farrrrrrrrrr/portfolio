const theme = {
  colors: {
    primary: '#8B4513',    // Saddle Brown (main wood color)
    accent: '#A0522D',     // Sienna (darker wood accent)
    secondary: '#D2B48C',  // Tan (lighter wood color)
    dark: '#211510',       // Very Dark Brown
    text: '#333333',       // Dark Gray (primary text)
    textLight: '#FFFFFF',  // White (text on dark backgrounds)
    light: '#F5F5F5',      // Off White
    lighter: '#FFFFFF',    // White
    background: '#FAFAFA'  // Very Light Gray (main background)
  },
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Playfair Display', serif"
  },
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px'
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.15)',
    large: '0 8px 24px rgba(0, 0, 0, 0.2)'
  },
  transitions: {
    fast: '0.2s ease',
    medium: '0.3s ease',
    slow: '0.5s ease'
  }
};

export default theme;

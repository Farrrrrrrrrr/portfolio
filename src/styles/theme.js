/**
 * Theme configuration for styled-components
 * Defines colors, fonts, breakpoints, and other shared style variables
 */

const theme = {
  colors: {
    primary: '#5E6A7D',     // Main brand color (dark blue-gray)
    secondary: '#D9A566',   // Secondary brand color (gold)
    accent: '#7D8BA1',      // Accent color (lighter blue-gray)
    dark: '#202630',        // Dark background color
    light: '#E9EDF2',       // Light background color
    lighter: '#FFFFFF',     // White background color
    background: '#F5F7FA',  // Default background color
    text: '#333333',        // Default text color
    textLight: '#FFFFFF',   // Light text color (for dark backgrounds)
    textDark: '#202630',    // Dark text color
    success: '#4caf50',     // Success color
    error: '#f44336',       // Error color
    warning: '#ff9800',     // Warning color
    info: '#2196f3'         // Info color
  },
  
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'Playfair Display', serif",
    code: "monospace"
  },
  
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    xlarge: '1.25rem',
    xxlarge: '1.5rem',
    xxxlarge: '2rem',
    huge: '3rem'
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  lineHeights: {
    normal: 1.5,
    small: 1.2,
    large: 1.8
  },
  
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    round: '50%'
  },
  
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 16px rgba(0, 0, 0, 0.1)',
    large: '0 8px 30px rgba(0, 0, 0, 0.15)'
  },
  
  transitions: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s'
  },
  
  zIndices: {
    base: 0,
    raised: 1,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600
  }
};

export default theme;

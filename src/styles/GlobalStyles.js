import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${props => props.theme.fonts.primary};
    line-height: ${props => props.theme.lineHeights.normal};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.accent};
      text-decoration: none;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.secondary};
    font-weight: 600;
    line-height: ${props => props.theme.lineHeights.small};
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 2.8rem;
  }
  
  h2 {
    font-size: 2.3rem;
  }
  
  h3 {
    font-size: 1.8rem;
  }
  
  h4 {
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
  
  button {
    cursor: pointer;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    
    @media (min-width: 576px) {
      max-width: 540px;
    }
    
    @media (min-width: 768px) {
      max-width: 720px;
    }
    
    @media (min-width: 992px) {
      max-width: 960px;
    }
    
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }
  
  .section {
    padding: 6rem 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background-color: ${props => props.theme.colors.primary};
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  /* For when content is below fixed header */
  .page-top-padding {
    padding-top: 80px;
  }
  
  /* Utility classes */
  .text-center {
    text-align: center;
  }
  
  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: 0.5rem; }
  .mt-2 { margin-top: 1rem; }
  .mt-3 { margin-top: 1.5rem; }
  .mt-4 { margin-top: 2rem; }
  .mt-5 { margin-top: 3rem; }
  
  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: 0.5rem; }
  .mb-2 { margin-bottom: 1rem; }
  .mb-3 { margin-bottom: 1.5rem; }
  .mb-4 { margin-bottom: 2rem; }
  .mb-5 { margin-bottom: 3rem; }

  /* Form Styles */
  input, textarea, select {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.primary};
    }
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  button, .button {
    display: inline-block;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${props => props.theme.colors.accent};
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;

export default GlobalStyles;

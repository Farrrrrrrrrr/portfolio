import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.section`
  position: relative;
  min-height: ${props => props.height || '400px'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  transform: translateY(${props => props.offset}px);
  z-index: 0;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.overlay || 'rgba(0, 0, 0, 0.3)'};
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

/**
 * ParallaxSection Component
 * 
 * @param {string} image - Background image URL
 * @param {string} height - Section height (CSS value)
 * @param {string} backgroundColor - Background color
 * @param {string} overlay - Overlay color with opacity (rgba)
 * @param {number} speed - Parallax speed (0-1)
 * @param {ReactNode} children - Content to display on top of parallax background
 */
const ParallaxSection = ({ 
  image, 
  height = '400px',
  backgroundColor = 'transparent', 
  overlay = 'rgba(0, 0, 0, 0.3)', 
  speed = 0.5,
  children 
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is from the center of the viewport
      // This creates a parallax effect that moves as the section enters and leaves the viewport
      const centerPosition = top - windowHeight / 2 + height / 2;
      
      // Apply the parallax effect with the speed multiplier
      setOffsetY(centerPosition * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <ParallaxContainer 
      ref={sectionRef} 
      height={height}
      backgroundColor={backgroundColor}
    >
      <ParallaxBackground 
        image={image} 
        offset={offsetY}
        overlay={overlay}
      />
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </ParallaxContainer>
  );
};

export default ParallaxSection;

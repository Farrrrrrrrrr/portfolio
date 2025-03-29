import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Pulse animation
const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.7; }
`;

// Bounce animation
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullScreen ? '100vh' : props.height || '200px'};
  width: 100%;
`;

const SpinnerWrapper = styled.div`
  position: relative;
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
`;

// Circular loader (spinning)
const Spinner = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: ${props => props.thickness || '3px'} solid transparent;
  border-top-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    border: ${props => props.thickness || '3px'} solid transparent;
    border-top-color: ${props => props.theme.colors.secondary};
    border-radius: 50%;
    animation: ${spin} 0.6s linear reverse infinite;
  }
`;

// Dots loader (bouncing)
const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Dot = styled.div`
  width: ${props => props.size || '12px'};
  height: ${props => props.size || '12px'};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  animation: ${bounce} 0.8s ease infinite;
  animation-delay: ${props => props.delay || '0s'};
`;

// Pulse loader
const PulseCircle = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  animation: ${pulse} 1.5s ease infinite;
`;

// Progress bar loader
const ProgressContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 4px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 2px;
  overflow: hidden;
  margin: 1rem 0;
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${props => props.value}%;
  background-color: ${props => props.theme.colors.primary};
  transition: width 0.3s ease;
`;

const LoaderText = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
`;

/**
 * Loader Component with multiple variants
 * 
 * @param {string} type - Loader type ('spinner', 'dots', 'pulse', 'progress')
 * @param {boolean} fullScreen - Whether to make the loader full screen
 * @param {string} size - Size of the loader
 * @param {string} thickness - Thickness of the spinner border
 * @param {string} text - Optional text to display below the loader
 * @param {number} progress - Progress percentage (for 'progress' type)
 * @param {string} height - Container height (when not fullScreen)
 */
const Loader = ({ 
  type = 'spinner',
  fullScreen = false, 
  size,
  thickness = '3px', 
  text,
  progress = 0,
  height
}) => {
  // Determine the loader to display based on type
  const renderLoader = () => {
    switch (type) {
      case 'dots':
        const dotSize = size ? `${parseInt(size) / 4}px` : undefined;
        return (
          <DotsContainer>
            <Dot size={dotSize} delay="0s" />
            <Dot size={dotSize} delay="0.15s" />
            <Dot size={dotSize} delay="0.3s" />
          </DotsContainer>
        );
        
      case 'pulse':
        return <PulseCircle size={size} />;
        
      case 'progress':
        return (
          <ProgressContainer>
            <ProgressBar value={progress} />
          </ProgressContainer>
        );
        
      case 'spinner':
      default:
        return (
          <SpinnerWrapper size={size}>
            <Spinner thickness={thickness} />
          </SpinnerWrapper>
        );
    }
  };
  
  return (
    <LoaderContainer fullScreen={fullScreen} height={height}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {renderLoader()}
        {text && <LoaderText>{text}</LoaderText>}
      </motion.div>
    </LoaderContainer>
  );
};

export default Loader;

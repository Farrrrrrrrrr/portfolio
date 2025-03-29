import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TitleContainer = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`;

const SubTitle = styled(motion.span)`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.8rem;
`;

const MainTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Separator = styled(motion.div)`
  height: 3px;
  width: 80px;
  background-color: ${props => props.theme.colors.primary};
  margin: 0 auto;
`;

const Description = styled(motion.p)`
  max-width: 700px;
  margin: 1.5rem auto 0;
  color: ${props => props.theme.colors.text};
  font-size: 1.1rem;
`;

/**
 * SectionTitle Component
 * 
 * @param {string} subtitle - Optional subtitle displayed above the main title
 * @param {string} title - The main title
 * @param {string} description - Optional description displayed below the title
 * @param {boolean} light - Whether to use light colors (for dark backgrounds)
 * @param {string} align - Text alignment (center, left, right)
 */
const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  light = false,
  align = 'center'
}) => {
  const textColor = light ? 'white' : undefined;
  const containerStyle = {
    textAlign: align
  };
  
  return (
    <TitleContainer 
      style={containerStyle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {subtitle && (
        <SubTitle
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{ color: light ? 'rgba(255, 255, 255, 0.8)' : undefined }}
        >
          {subtitle}
        </SubTitle>
      )}
      
      <MainTitle
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ color: textColor }}
      >
        {title}
      </MainTitle>
      
      <Separator
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        style={{ margin: align === 'center' ? '0 auto' : align === 'right' ? '0 0 0 auto' : '0 auto 0 0' }}
      />
      
      {description && (
        <Description
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          style={{ 
            color: light ? 'rgba(255, 255, 255, 0.8)' : undefined,
            textAlign: align
          }}
        >
          {description}
        </Description>
      )}
    </TitleContainer>
  );
};

export default SectionTitle;

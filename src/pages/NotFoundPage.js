import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundContainer = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const NotFoundCode = styled(motion.h1)`
  font-size: 8rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const NotFoundTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const NotFoundDescription = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundCode
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </NotFoundCode>
      
      <NotFoundTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Page Not Found
      </NotFoundTitle>
      
      <NotFoundDescription
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Oops! The page you're looking for doesn't exist or has been moved.
        Please check the URL or go back to the homepage.
      </NotFoundDescription>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <HomeButton to="/">Back to Home</HomeButton>
      </motion.div>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

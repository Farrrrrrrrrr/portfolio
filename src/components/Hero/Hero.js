import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to right, rgba(32, 38, 48, 0.8), rgba(32, 38, 48, 0.5)), 
    url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.textLight};
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  line-height: 1.7;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    box-shadow: 0 5px 15px rgba(94, 106, 125, 0.3);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.colors.textLight};
  border: 2px solid ${props => props.theme.colors.textLight};
  
  &:hover {
    background-color: ${props => props.theme.colors.textLight};
    color: ${props => props.theme.colors.dark};
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${props => props.theme.colors.textLight};
  
  svg {
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }
`;

const ScrollText = styled.span`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
`;

const ScrollIconWrapper = styled(motion.div)``;

const WoodAccent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  background-color: ${props => props.theme.colors.accent};
  background-image: none;
`;

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  const bounceAnimation = {
    y: ["0%", "20%", "0%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop"
    }
  };
  
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContent>
          <HeroTagline
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Web Engineer
          </HeroTagline>
          
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transforming Ideas Into Digital Reality
          </HeroTitle>
          
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Specializing in creating elegant, high-performance web applications
            that solve real business problems. Let's build something remarkable together.
          </HeroDescription>
          
          <ButtonGroup
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PrimaryButton to="/portfolio">View My Work</PrimaryButton>
            <SecondaryButton to="/contact">Get In Touch</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </div>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={handleScrollDown}
      >
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIconWrapper animate={bounceAnimation}>
          <FaChevronDown />
        </ScrollIconWrapper>
      </ScrollIndicator>
      
      <WoodAccent />
    </HeroSection>
  );
};

export default Hero;

import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.textLight};
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const FooterNav = styled.div`
  margin-bottom: 2rem;
`;

const FooterNavLink = styled.a`
  color: ${props => props.theme.colors.textLight};
  margin: 0 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const WoodAccent = styled.div`
  height: 10px;
  width: 100%;
  background-image: url('/images/wood-texture-dark.png');
  background-size: cover;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <WoodAccent />
      <FooterContainer>
        <div className="container">
          <FooterContent>
            <SocialLinks>
              <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="mailto:contact@example.com" aria-label="Email">
                <FaEnvelope />
              </SocialLink>
            </SocialLinks>
            
            <FooterNav>
              <FooterNavLink href="/">Home</FooterNavLink>
              <FooterNavLink href="/portfolio">Portfolio</FooterNavLink>
              <FooterNavLink href="/contact">Contact</FooterNavLink>
            </FooterNav>
            
            <Copyright>
              &copy; {currentYear} Professional Web Engineer. All rights reserved.
            </Copyright>
          </FooterContent>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;

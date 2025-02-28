import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
`;

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.secondary};
`;

const LogoText = styled.span`
  font-family: ${props => props.theme.fonts.secondary};
`;

const Logo = ({ text = "WebEngineer" }) => {
  // Get first letter of text for the icon
  const firstLetter = text.charAt(0);
  
  return (
    <LogoWrapper to="/">
      <LogoIcon>{firstLetter}</LogoIcon>
      <LogoText>{text}</LogoText>
    </LogoWrapper>
  );
};

export default Logo;

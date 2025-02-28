import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.isScrolled ? props.theme.colors.dark : 'transparent'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: ${props => props.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  padding: 1rem 0;
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 0.5rem;
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    height: 100vh;
    background-color: ${props => props.theme.colors.dark};
    padding: 5rem 2rem;
    transition: right 0.3s ease;
    box-shadow: ${props => props.isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.1)' : 'none'};
    z-index: 1001;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
    bottom: -4px;
    left: 0;
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
    
    &:after {
      width: 100%;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.textLight};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.textLight};
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <div className="container">
        <HeaderContainer>
          <Logo to="/">
            <LogoImage src="/images/logo.png" alt="Logo" />
            WebEngineer
          </Logo>
          
          <MenuToggle onClick={() => setIsMenuOpen(true)}>
            <FaBars />
          </MenuToggle>
          
          <Nav isOpen={isMenuOpen}>
            <CloseButton onClick={() => setIsMenuOpen(false)}>
              <FaTimes />
            </CloseButton>
            
            <NavList>
              <NavItem>
                <NavLinkStyled to="/" end>Home</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/portfolio">Portfolio</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/contact">Contact</NavLinkStyled>
              </NavItem>
            </NavList>
          </Nav>
          
          <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
        </HeaderContainer>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

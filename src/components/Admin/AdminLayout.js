import React from 'react';
import styled from 'styled-components';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { useContent } from '../../context/ContentContext';

const AdminContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarTitle = styled.h1`
  font-size: 1.5rem;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    background-color: ${props => props.theme.colors.accent};
  }
  
  svg {
    margin-right: 0.8rem;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.8rem 1.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.textLight};
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  
  &:hover {
    background-color: #d32f2f;
  }
  
  svg {
    margin-right: 0.8rem;
  }
`;

const Content = styled.main`
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const MobileHeader = styled.header`
  display: none;
  background-color: ${props => props.theme.colors.dark};
  padding: 1rem;
  color: white;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MobileTitle = styled.h1`
  font-size: 1.2rem;
  margin: 0;
`;

const MobileMenu = styled.div`
  display: flex;
  gap: 1rem;
  
  a, button {
    color: white;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

const AdminLayout = () => {
  const { logout } = useContent();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <AdminContainer>
      <Sidebar>
        <SidebarTitle>CMS Dashboard</SidebarTitle>
        <NavMenu>
          <NavItem>
            <NavLink to="/admin">
              <FaHome />
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/projects">
              <FaProjectDiagram />
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/contact">
              <FaEnvelope />
              Contact Info
            </NavLink>
          </NavItem>
          <NavItem>
            <LogoutButton onClick={handleLogout}>
              <FaSignOutAlt />
              Logout
            </LogoutButton>
          </NavItem>
        </NavMenu>
      </Sidebar>
      
      <div>
        <MobileHeader>
          <MobileTitle>CMS Dashboard</MobileTitle>
          <MobileMenu>
            <Link to="/admin"><FaHome /></Link>
            <Link to="/admin/projects"><FaProjectDiagram /></Link>
            <Link to="/admin/contact"><FaEnvelope /></Link>
            <button onClick={handleLogout}><FaSignOutAlt /></button>
          </MobileMenu>
        </MobileHeader>
        <Content>
          <Outlet />
        </Content>
      </div>
    </AdminContainer>
  );
};

export default AdminLayout;

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';

const DashboardContainer = styled.div`
  padding: 1rem 0;
`;

const WelcomeCard = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const WelcomeTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const WelcomeDescription = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: ${props => props.theme.colors.lighter};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadows.small};
`;

const StatTitle = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
  margin-bottom: 0.3rem;
`;

const StatValue = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0;
`;

const AdminActions = styled.div`
  margin-top: 3rem;
`;

const AdminTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ActionCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${props => props.theme.colors.lighter};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ActionIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ActionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const ActionDescription = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`;

const AdminPage = () => {
  const { projects } = useContent();
  
  return (
    <DashboardContainer>
      <WelcomeCard>
        <WelcomeTitle>Welcome to Admin Dashboard</WelcomeTitle>
        <WelcomeDescription>
          Here you can manage your portfolio content, update projects, and modify contact information.
        </WelcomeDescription>
      </WelcomeCard>
      
      <StatsRow>
        <StatCard>
          <StatTitle>Total Projects</StatTitle>
          <StatValue>{projects.length}</StatValue>
        </StatCard>
        
        <StatCard>
          <StatTitle>Last Updated</StatTitle>
          <StatValue>{new Date().toLocaleDateString()}</StatValue>
        </StatCard>
        
        <StatCard>
          <StatTitle>Portfolio Status</StatTitle>
          <StatValue>Live</StatValue>
        </StatCard>
      </StatsRow>
      
      <AdminActions>
        <AdminTitle>Quick Actions</AdminTitle>
        <ActionsGrid>
          <ActionCard to="/admin/projects">
            <ActionIcon>
              <FaProjectDiagram />
            </ActionIcon>
            <ActionTitle>Manage Projects</ActionTitle>
            <ActionDescription>
              Add, edit, or remove projects from your portfolio
            </ActionDescription>
          </ActionCard>
          
          <ActionCard to="/admin/contact">
            <ActionIcon>
              <FaEnvelope />
            </ActionIcon>
            <ActionTitle>Update Contact Info</ActionTitle>
            <ActionDescription>
              Change your contact information and details
            </ActionDescription>
          </ActionCard>
        </ActionsGrid>
      </AdminActions>
    </DashboardContainer>
  );
};

export default AdminPage;

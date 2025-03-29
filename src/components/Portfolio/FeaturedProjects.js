import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  margin: 3rem auto 0;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-align: center;
  border-radius: 4px;
  transition: all 0.3s ease;
  max-width: 200px;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

const FeaturedProjects = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
          />
        ))}
      </ProjectsGrid>
      <ViewAllButton to="/portfolio">View All Projects</ViewAllButton>
    </motion.div>
  );
};

export default FeaturedProjects;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Card = styled(motion.div)`
  background-color: ${props => props.theme.colors.lighter};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.dark};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ProjectCard = ({ project, delay }) => {
  const { title, description, image, technologies, liveUrl, githubUrl } = project;
  
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <ProjectImage image={image} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        
        <TechStack>
          {technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        
        <ProjectLinks>
          {liveUrl && (
            <ProjectLink href={liveUrl} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Live Demo
            </ProjectLink>
          )}
          {githubUrl && (
            <ProjectLink href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Source Code
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectContent>
    </Card>
  );
};

export default ProjectCard;
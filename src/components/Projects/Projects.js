import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
// Uncomment this import if using Option 1
// import { placeholderProjects } from '../../utils/imagePlaceholders';

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.light};
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.dark};
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    margin: 1rem auto 0;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const ViewMoreButton = styled(Link)`
  display: inline-block;
  margin-top: 3rem;
  padding: 0.8rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  font-weight: 500;
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Projects = ({ limit, showButton }) => {
  // This would typically come from a database or API
  const projects = [
    {
      id: "e-commerce-platform",
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with user authentication, product catalog, and payment processing integration.",
      image: "/images/projects/project1.jpg",  // Path to local image
      technologies: ["React", "Node.js", "MongoDB", "Redux"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/example/ecommerce"
    },
    {
      id: "data-visualization-dashboard",
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time filtering and customizable charts.",
      image: "/images/projects/project2.jpg",  // Path to local image
      technologies: ["D3.js", "React", "Express", "MySQL"],
      liveUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/example/dashboard"
    },
    {
      id: "task-management-app",
      title: "Task Management App",
      description: "A comprehensive task management application with team collaboration features and progress tracking.",
      image: "/images/projects/project3.jpg",  // Path to local image
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example.com/taskapp",
      githubUrl: "https://github.com/example/taskapp"
    },
    {
      id: "real-estate-platform",
      title: "Real Estate Platform",
      description: "Property listing and search platform with map integration, virtual tours, and mortgage calculator.",
      image: "/images/projects/project4.jpg",  // Path to local image
      technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      liveUrl: "https://example.com/realestate",
      githubUrl: "https://github.com/example/realestate"
    },
    {
      id: "fitness-tracking-app",
      title: "Fitness Tracking App",
      description: "Mobile-first application for tracking workouts, nutrition, and personal fitness goals with progress visualization.",
      image: "/images/projects/project5.jpg",  // Path to local image
      technologies: ["React Native", "GraphQL", "MongoDB"],
      liveUrl: "https://example.com/fitness",
      githubUrl: "https://github.com/example/fitness"
    },
    {
      id: "content-management-system",
      title: "Content Management System",
      description: "Custom CMS with dynamic page building, user roles, and multi-language support for content creators.",
      image: "/images/projects/project6.jpg",  // Path to local image
      technologies: ["PHP", "Laravel", "MySQL", "Alpine.js"],
      liveUrl: "https://example.com/cms",
      githubUrl: "https://github.com/example/cms"
    }
  ];

  // Uncomment this if you want to use the placeholder images instead
  // const projects = placeholderProjects;

  // Limit number of projects if limit prop is provided
  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <ProjectsHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A selection of my recent work across various domains and technologies,
            showcasing problem-solving skills and technical expertise.
          </SectionDescription>
        </ProjectsHeader>
        
        <ProjectsGrid>
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              delay={0.1 + index * 0.1}
            />
          ))}
        </ProjectsGrid>
        
        {showButton && (
          <ButtonContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ViewMoreButton to="/portfolio">
              View All Projects
            </ViewMoreButton>
          </ButtonContainer>
        )}
      </div>
    </ProjectsSection>
  );
};

export default Projects;

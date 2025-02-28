import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectContainer = styled.div`
  padding: 2rem 0;
`;

const ProjectHeader = styled.div`
  margin-bottom: 2rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.dark};
`;

const ProjectMeta = styled.div`
  margin-bottom: 2rem;
`;

const ProjectDate = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
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
  margin-bottom: 2rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectImage = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ProjectDescription = styled(motion.div)`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
  
  h3 {
    margin: 2rem 0 1rem;
    color: ${props => props.theme.colors.primary};
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ProjectGallery = styled.div`
  margin-top: 3rem;
`;

const GalleryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.dark};
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const GalleryImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ProjectDetail = ({ project }) => {
  // This would come from a prop or data fetch in a real application
  const projectData = {
    id: 1,
    title: "E-Commerce Platform",
    date: "August 2023",
    description: "A fully responsive e-commerce platform with user authentication, product catalog, and payment processing integration.",
    longDescription: `
      <p>This comprehensive e-commerce solution was built from the ground up to provide businesses with a customizable, user-friendly online store. The platform combines modern design principles with robust functionality to deliver an exceptional shopping experience.</p>
      
      <p>The front-end was developed using React and Styled Components, creating a responsive interface that adapts seamlessly to all device sizes. State management was handled with Redux, ensuring a consistent user experience throughout the application.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>User authentication and profile management</li>
        <li>Advanced product filtering and search capabilities</li>
        <li>Secure checkout process with multiple payment options</li>
        <li>Order tracking and history for customers</li>
        <li>Comprehensive admin dashboard for inventory management</li>
        <li>Detailed analytics and reporting tools</li>
      </ul>
      
      <p>The back-end infrastructure was built with Node.js and Express, connected to a MongoDB database. RESTful APIs were implemented to handle data exchange between the client and server, with JWT authentication ensuring secure access to protected routes.</p>
      
      <p>Integration with Stripe API allows for secure processing of various payment methods, while AWS S3 was utilized for storing product images and other media assets.</p>
    `,
    image: "/images/projects/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Express", "Stripe API", "AWS S3"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    gallery: [
      "/images/projects/project1-detail1.jpg",
      "/images/projects/project1-detail2.jpg",
      "/images/projects/project1-detail3.jpg",
    ]
  };
  
  return (
    <ProjectContainer>
      <div className="container">
        <ProjectHeader>
          <BackLink to="/portfolio">
            <FaArrowLeft /> Back to Projects
          </BackLink>
          
          <ProjectTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projectData.title}
          </ProjectTitle>
          
          <ProjectMeta>
            <ProjectDate>{projectData.date}</ProjectDate>
            
            <TechStack>
              {projectData.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechStack>
            
            <ProjectLinks>
              {projectData.liveUrl && (
                <ProjectLink href={projectData.liveUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </ProjectLink>
              )}
              {projectData.githubUrl && (
                <ProjectLink href={projectData.githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Source Code
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectMeta>
        </ProjectHeader>
        
        <ProjectContent>
          <ProjectImage
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src={projectData.image} alt={projectData.title} />
          </ProjectImage>
          
          <ProjectDescription
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            dangerouslySetInnerHTML={{ __html: projectData.longDescription }}
          />
        </ProjectContent>
        
        {projectData.gallery && projectData.gallery.length > 0 && (
          <ProjectGallery>
            <GalleryTitle>Project Gallery</GalleryTitle>
            <GalleryGrid>
              {projectData.gallery.map((image, index) => (
                <GalleryImage key={index}>
                  <img src={image} alt={`${projectData.title} screenshot ${index + 1}`} />
                </GalleryImage>
              ))}
            </GalleryGrid>
          </ProjectGallery>
        )}
      </div>
    </ProjectContainer>
  );
};

export default ProjectDetail;

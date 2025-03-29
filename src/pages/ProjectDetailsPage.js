import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';

const ProjectHeader = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
  padding: 8rem 0 5rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, rgba(32, 38, 48, 0.9), rgba(32, 38, 48, 0.7)), 
      url(${props => props.image});
    background-size: cover;
    background-position: center;
    z-index: 0;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const MetaItem = styled.div`
  h4 {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    opacity: 0.8;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 0;
  }
`;

const ProjectContent = styled.section`
  padding: 5rem 0;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Description = styled.div`
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const ProjectSidebar = styled.div`
  background-color: ${props => props.theme.colors.light};
  padding: 2rem;
  border-radius: 8px;
  align-self: start;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 4px;
  background-color: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const GallerySection = styled.section`
  padding: 3rem 0 5rem;
  background-color: ${props => props.theme.colors.light};
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const GalleryImage = styled(motion.div)`
  height: 250px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 0;
  border-top: 1px solid ${props => props.theme.colors.light};
  margin-top: 3rem;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;
  
  span {
    font-weight: 500;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  &.prev {
    margin-right: auto;
  }
  
  &.next {
    margin-left: auto;
    flex-direction: row-reverse;
  }
`;

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { projects } = useContent();
  const [project, setProject] = useState(null);
  const [prevProject, setPrevProject] = useState(null);
  const [nextProject, setNextProject] = useState(null);
  
  useEffect(() => {
    const found = projects.find(p => p.slug === projectId);
    
    if (!found) {
      navigate('/404');
      return;
    }
    
    setProject(found);
    
    // Find prev and next projects
    const currentIndex = projects.findIndex(p => p.slug === projectId);
    setPrevProject(currentIndex > 0 ? projects[currentIndex - 1] : null);
    setNextProject(currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null);
    
  }, [projectId, projects, navigate]);
  
  if (!project) {
    return null; // Or a loading state
  }
  
  return (
    <>
      <ProjectHeader image={project.featuredImage}>
        <div className="container">
          <HeaderContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              
              <ProjectMeta>
                <MetaItem>
                  <h4>Client</h4>
                  <p>{project.clientName}</p>
                </MetaItem>
                
                <MetaItem>
                  <h4>Completion Date</h4>
                  <p>{project.completionDate}</p>
                </MetaItem>
                
                <MetaItem>
                  <h4>Category</h4>
                  <p>{project.category}</p>
                </MetaItem>
              </ProjectMeta>
            </motion.div>
          </HeaderContent>
        </div>
      </ProjectHeader>
      
      <ProjectContent>
        <div className="container">
          <ContentGrid>
            <Description>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2>About This Project</h2>
                <div dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />
              </motion.div>
            </Description>
            
            <ProjectSidebar>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3>Technologies</h3>
                <TagList>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
                
                <ProjectLinks>
                  {project.projectUrl && (
                    <ProjectLink 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      primary
                    >
                      <FaExternalLinkAlt /> Visit Live Site
                    </ProjectLink>
                  )}
                  
                  {project.githubUrl && (
                    <ProjectLink 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> View Source Code
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </motion.div>
            </ProjectSidebar>
          </ContentGrid>
        </div>
      </ProjectContent>
      
      {project.screenshots && project.screenshots.length > 0 && (
        <GallerySection>
          <div className="container">
            <h2 className="section-title">Project Gallery</h2>
            <Gallery>
              {project.screenshots.map((image, index) => (
                image && (
                  <GalleryImage 
                    key={index} 
                    image={image}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                )
              ))}
            </Gallery>
          </div>
        </GallerySection>
      )}
      
      <div className="container">
        <Navigation>
          {prevProject && (
            <NavLink to={`/portfolio/${prevProject.slug}`} className="prev">
              <FaArrowLeft />
              <span>Previous Project</span>
            </NavLink>
          )}
          
          {nextProject && (
            <NavLink to={`/portfolio/${nextProject.slug}`} className="next">
              <span>Next Project</span>
              <FaArrowRight />
            </NavLink>
          )}
        </Navigation>
      </div>
    </>
  );
};

export default ProjectDetailsPage;

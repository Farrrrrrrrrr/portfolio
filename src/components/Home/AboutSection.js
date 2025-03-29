import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import SkillBars from '../utils/SkillBars';
import SectionTitle from '../utils/SectionTitle';

const AboutContainer = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.light};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: 8px;
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid ${props => props.theme.colors.primary};
    top: 20px;
    left: 20px;
    z-index: -1;
    border-radius: 8px;
    
    @media (max-width: 768px) {
      top: 10px;
      left: 10px;
    }
  }
`;

const AboutInfo = styled.div`
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const AboutMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;
`;

const MetaItem = styled.div`
  margin-bottom: 1rem;
  
  strong {
    display: block;
    font-weight: 600;
    margin-bottom: 0.3rem;
  }
`;

const ResumeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const TabsContainer = styled.div`
  margin-top: 3rem;
`;

const TabButtons = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.light};
`;

const TabButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const TabContent = styled(motion.div)`
  padding: 1rem 0;
`;

// Sample skills data
const skills = [
  { name: 'HTML & CSS', percentage: 95 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 85 },
  { name: 'Node.js', percentage: 80 },
  { name: 'UI/UX Design', percentage: 75 }
];

const AboutSection = () => {
  const [activeTab, setActiveTab] = React.useState('skills');
  
  return (
    <AboutContainer id="about">
      <div className="container">
        <SectionTitle
          subtitle="About Me"
          title="Let me introduce myself"
          description="Learn about my background, skills, and what drives me as a web developer."
        />
        
        <AboutContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutImage>
              <img src="/images/profile.jpg" alt="Profile" />
            </AboutImage>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <AboutInfo>
              <h3>Web Developer & UI/UX Designer</h3>
              <p>
                I'm a passionate web developer with over 7 years of experience creating innovative
                digital solutions for businesses across various industries. My expertise lies in
                front-end development, responsive design, performance optimization, and creating
                intuitive user experiences.
              </p>
              <p>
                With a strong foundation in modern JavaScript frameworks, I transform complex
                business requirements into elegant, maintainable code. I'm constantly exploring
                new technologies and approaches to deliver the best possible solutions.
              </p>
              
              <AboutMeta>
                <MetaItem>
                  <strong>Name:</strong>
                  <span>Farrell Siwy</span>
                </MetaItem>
                <MetaItem>
                  <strong>Email:</strong>
                  <span>farrellsiwy@gmail.com</span>
                </MetaItem>
                <MetaItem>
                  <strong>Location:</strong>
                  <span>Tangerang Selatan, Indonesia</span>
                </MetaItem>
                <MetaItem>
                  <strong>Availability:</strong>
                  <span>Freelance & Full-time</span>
                </MetaItem>
              </AboutMeta>
              
              <ResumeButton to="/files/resume.pdf" target="_blank">
                <FaDownload /> Download Resume
              </ResumeButton>
              
              <TabsContainer>
                <TabButtons>
                  <TabButton 
                    active={activeTab === 'skills'} 
                    onClick={() => setActiveTab('skills')}
                  >
                    Skills
                  </TabButton>
                  <TabButton 
                    active={activeTab === 'experience'} 
                    onClick={() => setActiveTab('experience')}
                  >
                    Experience
                  </TabButton>
                  <TabButton 
                    active={activeTab === 'education'} 
                    onClick={() => setActiveTab('education')}
                  >
                    Education
                  </TabButton>
                </TabButtons>
                
                <AnimatePresence mode="wait">
                  {activeTab === 'skills' && (
                    <TabContent
                      key="skills"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SkillBars skills={skills} />
                    </TabContent>
                  )}
                  
                  {activeTab === 'experience' && (
                    <TabContent
                      key="experience"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h4>Senior Web Developer</h4>
                        <p>TechSolutions Inc. | 2020 - Present</p>
                        <p>Leading the frontend development team, building scalable web applications.</p>
                        
                        <h4 style={{ marginTop: '1rem' }}>Frontend Developer</h4>
                        <p>Digital Innovations Lab | 2018 - 2020</p>
                        <p>Developed interactive web interfaces using JavaScript, React, and Vue.js.</p>
                      </div>
                    </TabContent>
                  )}
                  
                  {activeTab === 'education' && (
                    <TabContent
                      key="education"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h4>Bachelor of Science in Computer Science</h4>
                        <p>University of Technology | 2012 - 2015</p>
                        <p>Graduated with honors. Specialized in web technologies.</p>
                        
                        <h4 style={{ marginTop: '1rem' }}>Associate Degree in Web Development</h4>
                        <p>Community Technical College | 2010 - 2012</p>
                        <p>Focused on fundamentals of web development including HTML, CSS, JavaScript.</p>
                      </div>
                    </TabContent>
                  )}
                </AnimatePresence>
              </TabsContainer>
            </AboutInfo>
          </motion.div>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default AboutSection;

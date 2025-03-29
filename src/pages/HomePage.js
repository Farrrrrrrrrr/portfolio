import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaServer, FaDesktop } from 'react-icons/fa';
import Hero from '../components/Hero/Hero';
import FeaturedProjects from '../components/Portfolio/FeaturedProjects';
import { useContent } from '../context/ContentContext';

const Section = styled.section`
  padding: 6rem 0;
`;

const AboutSection = styled(Section)`
  background-color: ${props => props.theme.colors.light};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
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
  }
`;

const StatsSection = styled(Section)`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled(motion.div)`
  padding: 1.5rem;
`;

const StatCount = styled.h3`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.secondary};
`;

const StatTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0;
`;

const ServicesSection = styled(Section)`
  background-color: ${props => props.theme.colors.background};
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.lighter};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CallToAction = styled(Section)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  text-align: center;
  padding: 4rem 0;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.textLight};
  color: ${props => props.theme.colors.primary};
  padding: 1rem 2.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.light};
    transform: translateY(-3px);
  }
`;

const HomePage = () => {
  const { projects } = useContent();
  
  return (
    <>
      <Hero />
      
      <AboutSection id="about">
        <div className="container">
          <AboutContent>
            <AboutImage>
              <img src="/images/profile.jpg" alt="Profile" />
            </AboutImage>
            <AboutInfo>
              <h2>About Me</h2>
              <p>
                I'm a passionate web engineer with over 7 years of experience creating innovative
                digital solutions for businesses across various industries. My expertise lies in
                front-end development, responsive design, performance optimization, and creating
                intuitive user experiences.
              </p>
              <p>
                With a strong foundation in modern JavaScript frameworks, I transform complex
                business requirements into elegant, maintainable code. I'm constantly exploring
                new technologies and approaches to deliver the best possible solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new hiking trails, experimenting
                with photography, and contributing to open-source projects.
              </p>
            </AboutInfo>
          </AboutContent>
        </div>
      </AboutSection>
      
      <ServicesSection id="services">
        <div className="container">
          <h2 className="section-title">What I Do</h2>
          <ServicesList>
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <FaCode />
              </ServiceIcon>
              <ServiceTitle>Web Development</ServiceTitle>
              <p>
                Creating clean, semantic code that powers beautiful interfaces. I specialize in
                React, Vue.js, and other modern JavaScript frameworks to build responsive and
                interactive web applications.
              </p>
            </ServiceCard>
            
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <FaMobile />
              </ServiceIcon>
              <ServiceTitle>Responsive Design</ServiceTitle>
              <p>
                Developing websites that provide optimal viewing experiences across a wide range
                of devices. My designs adapt seamlessly from desktop to mobile, ensuring
                accessibility for all users.
              </p>
            </ServiceCard>
            
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <FaServer />
              </ServiceIcon>
              <ServiceTitle>Backend Integration</ServiceTitle>
              <p>
                Connecting frontend interfaces with powerful backend systems. I work with
                RESTful APIs, GraphQL, and various backend technologies to create full-stack
                applications that deliver real business value.
              </p>
            </ServiceCard>
            
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <FaDesktop />
              </ServiceIcon>
              <ServiceTitle>Performance Optimization</ServiceTitle>
              <p>
                Enhancing application speed and efficiency. I optimize code, assets, and database
                queries to ensure your website loads quickly and runs smoothly, providing the best
                possible user experience.
              </p>
            </ServiceCard>
          </ServicesList>
        </div>
      </ServicesSection>
      
      <StatsSection>
        <div className="container">
          <StatsContainer>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <StatCount>7+</StatCount>
              <StatTitle>Years Experience</StatTitle>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <StatCount>50+</StatCount>
              <StatTitle>Projects Completed</StatTitle>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <StatCount>30+</StatCount>
              <StatTitle>Happy Clients</StatTitle>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <StatCount>15+</StatCount>
              <StatTitle>Technologies</StatTitle>
            </StatItem>
          </StatsContainer>
        </div>
      </StatsSection>
      
      <Section id="work">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <FeaturedProjects projects={projects.slice(0, 3)} />
        </div>
      </Section>
      
      <CallToAction>
        <div className="container">
          <CTATitle>Let's Work Together</CTATitle>
          <CTADescription>
            Ready to start your next digital project? I'm available for freelance work and consultations.
          </CTADescription>
          <CTAButton to="/contact">Get In Touch</CTAButton>
        </div>
      </CallToAction>
    </>
  );
};

export default HomePage;

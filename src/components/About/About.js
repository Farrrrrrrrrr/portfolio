import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';

const AboutSection = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.background};
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const AboutImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 8px solid ${props => props.theme.colors.lighter};
`;

const AboutContent = styled.div``;

const AboutHeading = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme.colors.accent};
    margin-top: 0.5rem;
  }
`;

const AboutSubHeading = styled(motion.h3)`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const AboutText = styled(motion.p)`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const Highlight = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;

const DecorativeFrame = styled.div`
  position: absolute;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  top: -20px;
  left: 20px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 8px;
  z-index: -1;
`;

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContainer ref={ref}>
          <AboutImageWrapper>
            <AboutImage 
              src="/images/profile.jpg" 
              alt="Professional Web Engineer"
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            />
            <DecorativeFrame />
          </AboutImageWrapper>
          
          <AboutContent>
            <AboutHeading
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </AboutHeading>
            
            <AboutSubHeading
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Professional Web Engineer with a passion for creating exceptional digital experiences
            </AboutSubHeading>
            
            <AboutText
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hello! I'm a dedicated web engineer with expertise in building modern, responsive, and user-friendly web applications. With a strong foundation in <Highlight>front-end development</Highlight>, <Highlight>back-end systems</Highlight>, and <Highlight>database management</Highlight>, I create seamless digital experiences that solve real-world problems.
            </AboutText>
            
            <AboutText
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              My approach combines technical expertise with creative problem-solving and attention to detail. I'm passionate about staying at the forefront of web technologies and implementing best practices to deliver high-performance, scalable solutions.
            </AboutText>
            
            <AboutText
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, and continuously expanding my knowledge in the ever-evolving web development landscape.
            </AboutText>
          </AboutContent>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About;

import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaMobileAlt, FaCode, FaServer } from 'react-icons/fa';

const SkillsSection = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.lighter};
  background-image: url('/images/wood-texture-light.png');
  background-size: cover;
`;

const SkillsContainer = styled.div`
  text-align: center;
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
  margin: 0 auto 4rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.lighter};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 1px solid ${props => props.theme.colors.light};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.dark};
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
`;

const SkillsList = styled.ul`
  text-align: left;
  margin-top: 1rem;
  list-style-position: inside;
  
  li {
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
`;

const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const skills = [
    {
      icon: <FaReact />,
      title: "Front-end Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      technologies: ["React", "Vue.js", "JavaScript (ES6+)", "HTML5/CSS3", "Redux"]
    },
    {
      icon: <FaNodeJs />,
      title: "Back-end Development",
      description: "Creating robust server-side applications with efficient APIs and data handling.",
      technologies: ["Node.js", "Express", "PHP", "Laravel", "RESTful APIs"]
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Designing and optimizing database structures for performance and scalability.",
      technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with native-like performance.",
      technologies: ["React Native", "Ionic", "Progressive Web Apps", "Mobile-first design"]
    },
    {
      icon: <FaCode />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user experiences with a focus on usability.",
      technologies: ["Figma", "Adobe XD", "Styled Components", "Tailwind CSS", "Material UI"]
    },
    {
      icon: <FaServer />,
      title: "DevOps & Deployment",
      description: "Implementing CI/CD pipelines and managing application infrastructure.",
      technologies: ["AWS", "Docker", "Git/GitHub", "CI/CD", "Netlify/Vercel"]
    }
  ];
  
  return (
    <SkillsSection id="skills" ref={ref}>
      <div className="container">
        <SkillsContainer>
          <SectionTitle
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </SectionTitle>
          
          <SectionDescription
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My expertise spans across various domains of web development,
            from crafting beautiful user interfaces to building efficient server-side applications.
          </SectionDescription>
          
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
                <SkillsList>
                  {skill.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </SkillsList>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </div>
    </SkillsSection>
  );
};

export default Skills;

import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../utils/SectionTitle';
import Timeline from '../utils/Timeline';

const ExperienceContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.background};
`;

// Sample experience data
const experienceData = [
  {
    date: '2020 - Present',
    title: 'Senior Web Developer',
    subtitle: 'TechSolutions Inc.',
    description: 'Leading the frontend development team on enterprise client projects. Building scalable web applications using React, managing state with Redux, and implementing responsive designs with modern CSS frameworks. Mentoring junior developers.'
  },
  {
    date: '2018 - 2020',
    title: 'Frontend Developer',
    subtitle: 'Digital Innovations Lab',
    description: 'Developed interactive web interfaces using JavaScript, HTML5, and CSS3. Collaborated with UI/UX designers to translate wireframes into responsive layouts. Worked with React and Vue.js for component-based architecture.'
  },
  {
    date: '2016 - 2018',
    title: 'Web Designer & Developer',
    subtitle: 'CreativeWorks Agency',
    description: 'Created responsive websites for clients across various industries. Designed user interfaces and implemented them with HTML, CSS, and JavaScript. Maintained and updated existing client websites.'
  },
  {
    date: '2015 - 2016',
    title: 'Junior Web Developer',
    subtitle: 'StartUp Ventures',
    description: 'Built and maintained websites using WordPress and custom PHP solutions. Implemented responsive designs and ensured cross-browser compatibility. Participated in code reviews and team development processes.'
  }
];

// Sample education data
const educationData = [
  {
    date: '2012 - 2015',
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'University of Technology',
    description: 'Graduated with honors. Specialized in web technologies and software development. Completed a senior project developing a full-stack web application for local businesses.'
  },
  {
    date: '2010 - 2012',
    title: 'Associate Degree in Web Development',
    subtitle: 'Community Technical College',
    description: 'Focused on fundamentals of web development including HTML, CSS, JavaScript, and basic backend technologies. Created multiple web projects as part of the curriculum.'
  }
];

const ExperienceSection = () => {
  return (
    <ExperienceContainer>
      <div className="container">
        <SectionTitle
          subtitle="My Journey"
          title="Work Experience & Education"
          description="My professional journey in the field of web development, highlighting my work experience and educational background."
        />
        
        <h3 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Professional Experience</h3>
        <Timeline items={experienceData} />
        
        <h3 style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>Education</h3>
        <Timeline items={educationData} />
      </div>
    </ExperienceContainer>
  );
};

export default ExperienceSection;

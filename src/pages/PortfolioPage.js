import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Projects from '../components/Projects/Projects';

const PageHeader = styled.section`
  padding: 10rem 0 4rem;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
`;

const HeaderContainer = styled.div`
  text-align: center;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const PageDescription = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
`;

const PortfolioPage = () => {
  return (
    <>
      <PageHeader>
        <HeaderContainer className="container">
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Portfolio
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore my complete collection of projects showcasing my skills, 
            creative problem-solving abilities, and technical expertise.
          </PageDescription>
        </HeaderContainer>
      </PageHeader>
      
      <Projects showButton={false} />
    </>
  );
};

export default PortfolioPage;

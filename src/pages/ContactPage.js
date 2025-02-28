import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Contact from '../components/Contact/Contact';

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

const ContactPage = () => {
  return (
    <>
      <PageHeader>
        <HeaderContainer className="container">
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </PageTitle>
          <PageDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind or want to discuss potential collaboration? 
            I'm always open to new opportunities and challenges.
          </PageDescription>
        </HeaderContainer>
      </PageHeader>
      
      <Contact />
    </>
  );
};

export default ContactPage;

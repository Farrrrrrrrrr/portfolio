import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineContainer = styled.div`
  position: relative;
  padding: 2rem 0;
  margin: 2rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    width: 3px;
    background-color: ${props => props.theme.colors.light};
    
    @media (min-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  padding-left: 3rem;
  
  @media (min-width: 768px) {
    width: 50%;
    margin-left: ${props => props.position === 'left' ? '0' : '50%'};
    padding-left: ${props => props.position === 'left' ? '0' : '3rem'};
    padding-right: ${props => props.position === 'left' ? '3rem' : '0'};
    text-align: ${props => props.position === 'left' ? 'right' : 'left'};
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  
  @media (min-width: 768px) {
    left: auto;
    right: ${props => props.position === 'left' ? '-0.75rem' : 'auto'};
    left: ${props => props.position === 'right' ? '-0.75rem' : 'auto'};
  }
`;

const TimelineContent = styled.div`
  background-color: ${props => props.theme.colors.lighter};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  
  @media (max-width: 767px) {
    &:before {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      background-color: ${props => props.theme.colors.lighter};
      transform: rotate(45deg);
      top: 1.25rem;
      left: 2.5rem;
    }
  }
  
  @media (min-width: 768px) {
    &:before {
      content: '';
      position: absolute;
      width: 1rem;
      height: 1rem;
      background-color: ${props => props.theme.colors.lighter};
      transform: rotate(45deg);
      top: 1.25rem;
      right: ${props => props.position === 'left' ? '-0.5rem' : 'auto'};
      left: ${props => props.position === 'right' ? '-0.5rem' : 'auto'};
    }
  }
`;

const TimelineDate = styled.div`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.3rem;
  font-size: 1.3rem;
`;

const TimelineSubtitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  margin-bottom: 0;
  color: ${props => props.theme.colors.text};
`;

// Sample data structure:
// const items = [
//   {
//     date: '2020 - Present',
//     title: 'Senior Web Developer',
//     subtitle: 'ABC Company',
//     description: 'Led development of...'
//   },
//   ...
// ]

const Timeline = ({ items }) => {
  return (
    <TimelineContainer>
      {items.map((item, index) => (
        <TimelineItem 
          key={index}
          position={index % 2 === 0 ? 'left' : 'right'}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <TimelineDot position={index % 2 === 0 ? 'left' : 'right'} />
          <TimelineContent position={index % 2 === 0 ? 'left' : 'right'}>
            <TimelineDate>{item.date}</TimelineDate>
            <TimelineTitle>{item.title}</TimelineTitle>
            <TimelineSubtitle>{item.subtitle}</TimelineSubtitle>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};

export default Timeline;

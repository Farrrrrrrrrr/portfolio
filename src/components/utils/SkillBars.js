import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  margin: 2rem 0;
`;

const SkillBar = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillPercentage = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;

const ProgressContainer = styled.div`
  height: 8px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 4px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 4px;
`;

// Skill data structure
// [
//   { name: 'HTML & CSS', percentage: 95 },
//   { name: 'JavaScript', percentage: 90 },
//   ...
// ]

const SkillBars = ({ skills }) => {
  return (
    <SkillsContainer>
      {skills.map((skill, index) => (
        <SkillBar key={index}>
          <SkillInfo>
            <SkillName>{skill.name}</SkillName>
            <SkillPercentage>{skill.percentage}%</SkillPercentage>
          </SkillInfo>
          <ProgressContainer>
            <Progress
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.percentage}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          </ProgressContainer>
        </SkillBar>
      ))}
    </SkillsContainer>
  );
};

export default SkillBars;

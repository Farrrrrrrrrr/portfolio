import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const TextWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
`;

const Container = styled(motion.span)`
  display: inline-block;
  white-space: nowrap;
`;

const WordWrapper = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const CharWrapper = styled(motion.span)`
  display: inline-block;
  position: relative;
`;

/**
 * AnimatedText Component
 * 
 * Animates text with various effects like character typing, word reveal, etc.
 * 
 * @param {string} text - The text to animate
 * @param {string} type - Animation type: 'chars', 'words', 'lines'
 * @param {string} element - Element type (e.g., 'h1', 'p') or a component
 * @param {number} delay - Initial animation delay in seconds
 * @param {object} className - CSS class to apply to the text wrapper
 */
const AnimatedText = ({ 
  text = '',
  type = 'chars',
  element = 'span',
  delay = 0,
  className = ''
}) => {
  // Character by character animation
  const charVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + (i * 0.03),
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };
  
  // Word by word animation
  const wordVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + (i * 0.1),
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };
  
  // Line animation (each line is treated as a word here)
  const lineVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + (i * 0.25),
        duration: 0.6,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    })
  };
  
  // Render animation based on type
  if (type === 'chars') {
    // Split text into words and characters
    const words = text.split(' ');
    
    return (
      <TextWrapper as={element} className={className}>
        {words.map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            <WordWrapper>
              {word.split('').map((char, charIndex) => (
                <CharWrapper
                  key={charIndex}
                  custom={wordIndex * 5 + charIndex} // Custom value for staggered delays
                  variants={charVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </CharWrapper>
              ))}
            </WordWrapper>
            {wordIndex !== words.length - 1 && " "}
          </React.Fragment>
        ))}
      </TextWrapper>
    );
  }
  
  if (type === 'words') {
    // Just split into words
    const words = text.split(' ');
    
    return (
      <TextWrapper as={element} className={className}>
        {words.map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            <WordWrapper
              custom={wordIndex}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
            >
              {word}
            </WordWrapper>
            {wordIndex !== words.length - 1 && " "}
          </React.Fragment>
        ))}
      </TextWrapper>
    );
  }
  
  if (type === 'lines') {
    // This treats each line as a separate entity
    const lines = text.split('\n');
    
    return (
      <TextWrapper as={element} className={className} style={{ whiteSpace: 'pre-line' }}>
        {lines.map((line, lineIndex) => (
          <Container
            key={lineIndex}
            custom={lineIndex}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'block' }}
          >
            {line}
          </Container>
        ))}
      </TextWrapper>
    );
  }
  
  // Default: just show the text with a simple animation
  return (
    <TextWrapper as={element} className={className}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
      >
        {text}
      </motion.span>
    </TextWrapper>
  );
};

export default AnimatedText;

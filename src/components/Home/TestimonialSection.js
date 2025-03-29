import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../utils/SectionTitle';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TestimonialContainer = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.light};
`;

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  min-height: 300px;
`;

const TestimonialItem = styled(motion.div)`
  padding: 2rem;
  text-align: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

const QuoteIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  opacity: 0.2;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ClientAvatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientName = styled.h4`
  margin-bottom: 0.3rem;
  font-size: 1.2rem;
`;

const ClientPosition = styled.p`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0;
  font-size: 0.9rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.lighter};
  color: ${props => props.theme.colors.text};
  border: none;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textLight};
    transform: translateY(-2px);
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lighter};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.secondary};
  }
`;

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    text: "Working with this talented developer was an absolute pleasure. They delivered a stunning website that perfectly captured my brand's essence. Their attention to detail and problem-solving skills are exceptional.",
    name: "Sarah Johnson",
    position: "CEO, Design Studio",
    avatar: "/images/testimonials/client1.jpg"
  },
  {
    id: 2,
    text: "I'm extremely impressed with the web application they built for our company. The user interface is intuitive, and the performance is outstanding. Their technical expertise and project management skills made the development process smooth and stress-free.",
    name: "Michael Chen",
    position: "CTO, Tech Innovations",
    avatar: "/images/testimonials/client2.jpg"
  },
  {
    id: 3,
    text: "Our e-commerce site has seen a 40% increase in conversions since the redesign. They not only created a visually appealing website but also ensured it was optimized for performance and SEO. I highly recommend their services!",
    name: "Emma Rodriguez",
    position: "Marketing Director, RetailPlus",
    avatar: "/images/testimonials/client3.jpg"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto-scroll testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(current => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(current => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };
  
  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };
  
  const currentTestimonial = testimonials[currentIndex];
  
  return (
    <TestimonialContainer>
      <div className="container">
        <SectionTitle
          subtitle="Testimonials"
          title="What Clients Say"
          description="Here's what some of my clients have to say about my work and the results they've achieved."
        />
        
        <TestimonialSlider>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <TestimonialItem
              key={currentTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <TestimonialText>
                {currentTestimonial.text}
              </TestimonialText>
              <ClientInfo>
                <ClientAvatar>
                  <img src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                </ClientAvatar>
                <ClientName>{currentTestimonial.name}</ClientName>
                <ClientPosition>{currentTestimonial.position}</ClientPosition>
              </ClientInfo>
            </TestimonialItem>
          </AnimatePresence>
          
          <NavigationButtons>
            <NavButton onClick={handlePrev}>
              <FaArrowLeft />
            </NavButton>
            <NavButton onClick={handleNext}>
              <FaArrowRight />
            </NavButton>
          </NavigationButtons>
          
          <SliderDots>
            {testimonials.map((_, index) => (
              <Dot 
                key={index}
                active={currentIndex === index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </SliderDots>
        </TestimonialSlider>
      </div>
    </TestimonialContainer>
  );
};

export default TestimonialSection;

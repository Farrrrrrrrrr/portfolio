import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaMobile, 
  FaServer, 
  FaDesktop,
  FaShoppingCart,
  FaSearch
} from 'react-icons/fa';
import SectionTitle from '../utils/SectionTitle';

const ServicesContainer = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.background};
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.lighter};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    z-index: 2;
  }
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border: 1px dashed ${props => props.theme.colors.primary};
    border-radius: 50%;
    animation: spin 15s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.7;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  
  li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      top: 0;
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const services = [
  {
    id: 1,
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Creating custom websites and web applications tailored to your specific needs.',
    features: [
      'Responsive Design',
      'Interactive UI/UX',
      'Fast Loading Times',
      'SEO Optimization'
    ]
  },
  {
    id: 2,
    icon: <FaMobile />,
    title: 'Mobile-First Design',
    description: 'Building websites that provide optimal viewing across all devices, especially mobile.',
    features: [
      'Responsive Layouts',
      'Touch-Friendly Interfaces',
      'Progressive Web Apps',
      'Cross-Device Testing'
    ]
  },
  {
    id: 3,
    icon: <FaServer />,
    title: 'Backend Integration',
    description: 'Connecting your frontend with powerful backend systems for seamless functionality.',
    features: [
      'API Development',
      'Database Design',
      'Authentication Systems',
      'Server Configuration'
    ]
  },
  {
    id: 4,
    icon: <FaDesktop />,
    title: 'UI/UX Design',
    description: 'Creating intuitive, engaging user interfaces and experiences that delight users.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing'
    ]
  },
  {
    id: 5,
    icon: <FaShoppingCart />,
    title: 'E-Commerce Solutions',
    description: 'Building online stores with secure payment systems and inventory management.',
    features: [
      'Product Catalogs',
      'Secure Payments',
      'Inventory Management',
      'Order Processing'
    ]
  },
  {
    id: 6,
    icon: <FaSearch />,
    title: 'Performance Optimization',
    description: 'Enhancing website speed and efficiency to provide the best user experience.',
    features: [
      'Speed Optimization',
      'Code Refactoring',
      'Image Optimization',
      'Caching Strategies'
    ]
  }
];

const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
      <div className="container">
        <SectionTitle
          subtitle="My Services"
          title="What I Do"
          description="I offer a range of services to help businesses establish a strong online presence and deliver exceptional user experiences."
        />
        
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </div>
    </ServicesContainer>
  );
};

export default ServicesSection;

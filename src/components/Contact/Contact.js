import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.background};
  background-image: url('/images/wood-texture-light.png');
  background-size: cover;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactHeading = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.dark};
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: ${props => props.theme.colors.primary};
    margin-top: 0.5rem;
  }
`;

const ContactText = styled(motion.p)`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const ContactDetailsContainer = styled(motion.div)`
  margin-bottom: 2rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactIcon = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const ContactForm = styled(motion.form)`
  background-color: ${props => props.theme.colors.lighter};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.accent};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.dark};
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.primary};
  background-color: ${props => props.theme.colors.background};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(139, 69, 19, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 4px;
  font-family: ${props => props.theme.fonts.primary};
  background-color: ${props => props.theme.colors.background};
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(139, 69, 19, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #dff0d8;
  color: #3c763d;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true });
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, isSubmitted: false }));
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <div className="container">
        <ContactContainer>
          <ContactInfo>
            <ContactHeading
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </ContactHeading>
            
            <ContactText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. 
              Feel free to reach out to me using the form or directly through email or phone.
            </ContactText>
            
            <ContactDetailsContainer
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactDetail>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <div>
                  <strong>Email:</strong> farrellsiwy@gmail.com
                </div>
              </ContactDetail>
              
              <ContactDetail>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <div>
                  <strong>Phone:</strong> +6282113906301
                </div>
              </ContactDetail>
              
              <ContactDetail>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <div>
                  <strong>Location:</strong> Tangerang Selatan, Indonesia
                </div>
              </ContactDetail>
            </ContactDetailsContainer>
          </ContactInfo>
          
          <ContactForm
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            {formStatus.isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </SuccessMessage>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default Contact;

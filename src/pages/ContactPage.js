import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useContent } from '../context/ContentContext';

const PageHeader = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
  padding: 6rem 0 4rem;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
`;

const ContactSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.background};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactForm = styled.form`
  background-color: ${props => props.theme.colors.lighter};
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 4px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 4px;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ContactInfo = styled.div``;

const InfoTitle = styled.h2`
  margin-bottom: 1.5rem;
`;

const InfoDescription = styled.p`
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.8;
`;

const InfoList = styled.div`
  margin-top: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    color: ${props => props.theme.colors.text};
    margin-bottom: 0;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #4caf50;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled(motion.div)`
  background-color: #f44336;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const MapSection = styled.section`
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const ContactPage = () => {
  const { contactInfo } = useContent();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };
  
  return (
    <>
      <PageHeader>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeaderTitle>Get In Touch</HeaderTitle>
            <HeaderSubtitle>
              Have a project in mind or want to discuss a potential collaboration?
              I'd love to hear from you. Feel free to reach out using the form below.
            </HeaderSubtitle>
          </motion.div>
        </div>
      </PageHeader>
      
      <ContactSection>
        <div className="container">
          <ContactGrid>
            <ContactInfo>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <InfoTitle>Contact Information</InfoTitle>
                <InfoDescription>
                  {contactInfo.description}
                </InfoDescription>
                
                <InfoList>
                  <InfoItem>
                    <InfoIcon>
                      <FaEnvelope />
                    </InfoIcon>
                    <InfoContent>
                      <h4>Email</h4>
                      <p>{contactInfo.email}</p>
                    </InfoContent>
                  </InfoItem>
                  
                  <InfoItem>
                    <InfoIcon>
                      <FaPhone />
                    </InfoIcon>
                    <InfoContent>
                      <h4>Phone</h4>
                      <p>{contactInfo.phone}</p>
                    </InfoContent>
                  </InfoItem>
                  
                  <InfoItem>
                    <InfoIcon>
                      <FaMapMarkerAlt />
                    </InfoIcon>
                    <InfoContent>
                      <h4>Location</h4>
                      <p>{contactInfo.location}</p>
                    </InfoContent>
                  </InfoItem>
                </InfoList>
              </motion.div>
            </ContactInfo>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm onSubmit={handleSubmit}>
                <FormTitle>Send Me a Message</FormTitle>
                
                {submitStatus === 'success' && (
                  <SuccessMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Your message has been sent successfully. I'll get back to you soon!
                  </SuccessMessage>
                )}
                
                {submitStatus === 'error' && (
                  <ErrorMessage
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    There was an error sending your message. Please try again later.
                  </ErrorMessage>
                )}
                
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </SubmitButton>
              </ContactForm>
            </motion.div>
          </ContactGrid>
        </div>
      </ContactSection>
      
      <MapSection>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253813.77649298873!2d106.82259075!3d-6.22935945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2s!4v1659347937296!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </MapSection>
    </>
  );
};

export default ContactPage;

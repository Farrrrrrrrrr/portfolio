import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Form = styled.form`
  background-color: ${props => props.theme.colors.lighter};
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  width: 100%;
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
  color: ${props => props.theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.error ? '#f44336' : props.theme.colors.light};
  border-radius: 4px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#f44336' : props.theme.colors.primary};
    box-shadow: ${props => props.error ? '0 0 0 3px rgba(244, 67, 54, 0.1)' : '0 0 0 3px rgba(94, 106, 125, 0.1)'};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid ${props => props.error ? '#f44336' : props.theme.colors.light};
  border-radius: 4px;
  font-family: inherit;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? '#f44336' : props.theme.colors.primary};
    box-shadow: ${props => props.error ? '0 0 0 3px rgba(244, 67, 54, 0.1)' : '0 0 0 3px rgba(94, 106, 125, 0.1)'};
  }
`;

const SubmitButton = styled(motion.button)`
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FieldError = styled.div`
  color: #f44336;
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

/**
 * Reusable Contact Form Component
 * 
 * @param {string} title - Form title
 * @param {function} onSubmit - Function to handle form submission
 * @param {boolean} showNameField - Whether to show the name field (default: true)
 * @param {boolean} showSubjectField - Whether to show the subject field (default: true)
 * @param {string} submitButtonText - Text for the submit button (default: "Send Message")
 */
const ContactForm = ({ 
  title = "Send Me a Message",
  onSubmit = null,
  showNameField = true,
  showSubjectField = true,
  submitButtonText = "Send Message"
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Clear error for this field when typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (showNameField && !formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (showSubjectField && !formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // If a custom onSubmit handler is provided, use it
      if (onSubmit) {
        await onSubmit(formState);
        setSubmitStatus('success');
      } else {
        // Default submission behavior - simulated API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus('success');
      }
      
      // Reset form after successful submission
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
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      {title && <FormTitle>{title}</FormTitle>}
      
      <AnimatePresence>
        {submitStatus === 'success' && (
          <SuccessMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            Your message has been sent successfully. I'll get back to you soon!
          </SuccessMessage>
        )}
        
        {submitStatus === 'error' && (
          <ErrorMessage
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            There was an error sending your message. Please try again later.
          </ErrorMessage>
        )}
      </AnimatePresence>
      
      <FormRow>
        {showNameField && (
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required={showNameField}
              error={errors.name}
            />
            {errors.name && <FieldError>{errors.name}</FieldError>}
          </FormGroup>
        )}
        
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            error={errors.email}
          />
          {errors.email && <FieldError>{errors.email}</FieldError>}
        </FormGroup>
      </FormRow>
      
      {showSubjectField && (
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formState.subject}
            onChange={handleChange}
            required={showSubjectField}
            error={errors.subject}
          />
          {errors.subject && <FieldError>{errors.subject}</FieldError>}
        </FormGroup>
      )}
      
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          error={errors.message}
        />
        {errors.message && <FieldError>{errors.message}</FieldError>}
      </FormGroup>
      
      <SubmitButton 
        type="submit" 
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSubmitting ? 'Sending...' : submitButtonText}
      </SubmitButton>
    </Form>
  );
};

export default ContactForm;

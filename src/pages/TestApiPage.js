import React from 'react';
import styled from 'styled-components';
import SupabaseConnectionTest from '../components/utils/SupabaseConnectionTest';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Description = styled.p`
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const InfoCard = styled.div`
  background-color: #e8f5e9;
  border-left: 4px solid #66bb6a;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  
  p {
    margin: 0;
  }
`;

/**
 * Test page to verify API connections and functionality
 */
const TestApiPage = () => {
  return (
    <Container>
      <Title>API Connection Tests</Title>
      
      <Description>
        This page allows you to test the connection to your Supabase backend and verify that
        API calls are working correctly. Use the buttons below to test different aspects of 
        the connection.
      </Description>
      
      <InfoCard>
        <p>
          <strong>Note:</strong> Make sure your Supabase URL and anon key are correctly set in 
          your environment variables (.env file). These tests use the public API permissions
          defined in your Supabase project.
        </p>
      </InfoCard>
      
      <SupabaseConnectionTest />
      
      <h2>Next Steps</h2>
      <p>
        If all tests pass, you can return to building your portfolio. If you encounter errors,
        check the following:
      </p>
      <ul>
        <li>Verify your Supabase URL and anon key in the .env file</li>
        <li>Check that your database tables (projects, contact) exist in Supabase</li>
        <li>Ensure your row-level security (RLS) policies allow read access</li>
        <li>Check your network connection and Supabase service status</li>
      </ul>
    </Container>
  );
};

export default TestApiPage;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import supabase from '../../config/supabaseClient';

const TestContainer = styled.div`
  background-color: ${props => props.theme.colors.lighter};
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  box-shadow: ${props => props.theme.shadows.small};
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const StatusBox = styled.div`
  background-color: ${props => 
    props.status === 'success' ? '#e8f5e9' : 
    props.status === 'error' ? '#ffebee' : 
    props.status === 'loading' ? '#e3f2fd' : 
    '#f5f5f5'
  };
  border: 1px solid ${props => 
    props.status === 'success' ? '#66bb6a' : 
    props.status === 'error' ? '#ef5350' : 
    props.status === 'loading' ? '#42a5f5' : 
    '#e0e0e0'
  };
  color: ${props => 
    props.status === 'success' ? '#2e7d32' : 
    props.status === 'error' ? '#c62828' : 
    props.status === 'loading' ? '#1565c0' : 
    '#424242'
  };
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ResponseSection = styled.div`
  margin-top: 1.5rem;
`;

const ResponseTitle = styled.h4`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ResponseData = styled.pre`
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.9rem;
  max-height: 300px;
  color: #333;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  margin-right: 0.5rem;
`;

/**
 * Component to test Supabase connection and perform basic operations
 */
const SupabaseConnectionTest = () => {
  const [connectionStatus, setConnectionStatus] = useState('idle');
  const [connectionMessage, setConnectionMessage] = useState('Connection not tested yet');
  const [response, setResponse] = useState(null);
  const [queryType, setQueryType] = useState('');
  
  // Test basic connection
  const testConnection = async () => {
    setConnectionStatus('loading');
    setConnectionMessage('Testing connection...');
    setResponse(null);
    setQueryType('connection');
    
    try {
      // Simple query to check if connection works
      const { data, error } = await supabase.from('projects').select('count').limit(1);
      
      if (error) {
        setConnectionStatus('error');
        setConnectionMessage(`Connection failed: ${error.message}`);
        setResponse(error);
      } else {
        setConnectionStatus('success');
        setConnectionMessage('Successfully connected to Supabase!');
        setResponse({ success: true, data });
      }
    } catch (err) {
      setConnectionStatus('error');
      setConnectionMessage(`Connection error: ${err.message}`);
      setResponse(err);
    }
  };
  
  // Test retrieving projects
  const testGetProjects = async () => {
    setConnectionStatus('loading');
    setConnectionMessage('Fetching projects...');
    setResponse(null);
    setQueryType('projects');
    
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .limit(5);
      
      if (error) {
        setConnectionStatus('error');
        setConnectionMessage(`Failed to fetch projects: ${error.message}`);
        setResponse(error);
      } else {
        setConnectionStatus('success');
        setConnectionMessage(`Successfully fetched ${data.length} projects`);
        setResponse(data);
      }
    } catch (err) {
      setConnectionStatus('error');
      setConnectionMessage(`Error fetching projects: ${err.message}`);
      setResponse(err);
    }
  };
  
  // Test authentication (anon key permissions)
  const testAuth = async () => {
    setConnectionStatus('loading');
    setConnectionMessage('Testing authentication...');
    setResponse(null);
    setQueryType('auth');
    
    try {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        setConnectionStatus('error');
        setConnectionMessage(`Authentication error: ${error.message}`);
        setResponse(error);
      } else {
        setConnectionStatus('success');
        setConnectionMessage('Authentication system is working');
        setResponse(data);
      }
    } catch (err) {
      setConnectionStatus('error');
      setConnectionMessage(`Authentication error: ${err.message}`);
      setResponse(err);
    }
  };
  
  // Check Supabase configuration on component mount
  useEffect(() => {
    if (!supabase) {
      setConnectionStatus('error');
      setConnectionMessage('Supabase client is not properly initialized');
    }
  }, []);
  
  return (
    <TestContainer>
      <Title>Supabase Connection Test</Title>
      
      <StatusBox status={connectionStatus}>
        {connectionMessage}
      </StatusBox>
      
      <div>
        <Button onClick={testConnection} disabled={connectionStatus === 'loading'}>
          Test Connection
        </Button>
        <Button onClick={testGetProjects} disabled={connectionStatus === 'loading'}>
          Get Projects
        </Button>
        <Button onClick={testAuth} disabled={connectionStatus === 'loading'}>
          Test Auth
        </Button>
      </div>
      
      {response && (
        <ResponseSection>
          <ResponseTitle>
            {queryType === 'connection' ? 'Connection Response:' : 
             queryType === 'projects' ? 'Projects Data:' : 
             queryType === 'auth' ? 'Auth Response:' : 
             'Response:'}
          </ResponseTitle>
          <ResponseData>
            {JSON.stringify(response, null, 2)}
          </ResponseData>
        </ResponseSection>
      )}
    </TestContainer>
  );
};

export default SupabaseConnectionTest;

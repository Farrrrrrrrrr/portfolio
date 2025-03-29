import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
  background-color: #fff3f3;
  border: 1px solid #ffcaca;
  border-radius: 8px;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: #d32f2f;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  margin-bottom: 1.5rem;
`;

const ErrorDetails = styled.details`
  margin-top: 1rem;
  text-align: left;
  
  summary {
    cursor: pointer;
    color: #666;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  pre {
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.9rem;
  }
`;

const ResetButton = styled.button`
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: #b71c1c;
  }
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // You can also log error messages to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }
  
  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorContainer>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            An error occurred in this part of the application. 
            Try refreshing the page or returning to the home page.
          </ErrorMessage>
          
          <ResetButton onClick={this.handleReset}>
            Try Again
          </ResetButton>
          
          {this.state.error && (
            <ErrorDetails>
              <summary>View technical details</summary>
              <p><strong>Error:</strong> {this.state.error.toString()}</p>
              <pre>
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    // If there's no error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;

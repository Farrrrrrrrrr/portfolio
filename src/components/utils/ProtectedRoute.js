import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContent } from '../../context/ContentContext';
import AdminLogin from '../Admin/LoginForm';

/**
 * ProtectedRoute Component
 * 
 * A wrapper component that checks if the user is authenticated
 * and either renders the children components or redirects to login
 */
const ProtectedRoute = ({ children, redirectPath = '/' }) => {
  const { isAuthenticated, isLoading } = useContent();
  
  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Loading...
      </div>
    );
  }
  
  // If authenticated, render the passed children
  if (isAuthenticated) {
    return children;
  }
  
  // If not authenticated, show login form instead of redirecting
  return <AdminLogin />;
};

export default ProtectedRoute;

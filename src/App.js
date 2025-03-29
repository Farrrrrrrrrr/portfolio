import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from './components/utils/ScrollToTop';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminPage from './pages/AdminPage';
import ProjectEditPage from './pages/Admin/ProjectEditPage';
import ContactEditPage from './pages/Admin/ContactEditPage';
import AdminLayout from './components/Admin/AdminLayout';
import { ContentProvider } from './context/ContentContext';
import ProtectedRoute from './components/utils/ProtectedRoute';
import TestApiPage from './pages/TestApiPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContentProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminPage />} />
              <Route path="projects" element={<ProjectEditPage />} />
              <Route path="projects/:projectId" element={<ProjectEditPage />} />
              <Route path="contact" element={<ContactEditPage />} />
            </Route>
            
            {/* Test API Route */}
            <Route path="/test-api" element={
              <>
                <Header />
                <main>
                  <TestApiPage />
                </main>
                <Footer />
              </>
            } />
            
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <Header />
                <main>
                  <HomePage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/portfolio" element={
              <>
                <Header />
                <main>
                  <PortfolioPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/portfolio/:projectId" element={
              <>
                <Header />
                <main>
                  <ProjectDetailsPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Header />
                <main>
                  <ContactPage />
                </main>
                <Footer />
              </>
            } />
            <Route path="*" element={
              <>
                <Header />
                <main>
                  <NotFoundPage />
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </Router>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;

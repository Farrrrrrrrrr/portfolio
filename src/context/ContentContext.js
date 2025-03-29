import React, { createContext, useState, useEffect, useContext } from 'react';
import { 
  fetchProjects, 
  fetchContactInfo, 
  addProject as addProjectToSupabase, 
  updateProject as updateProjectInSupabase,
  deleteProject as deleteProjectFromSupabase,
  updateContactInfo as updateContactInfoInSupabase,
  signIn,
  signOut,
  getCurrentUser
} from '../utils/supabaseHelpers';
import { placeholderProjects } from '../utils/imagePlaceholders';

// Create context
const ContentContext = createContext();

// Initial contact information
const initialContactInfo = {
  email: "farrellsiwy@gmail.com",
  phone: "+6282113906301",
  location: "Tangerang Selatan, Indonesia",
  description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out to me using the form or directly through email or phone."
};

export const ContentProvider = ({ children }) => {
  // State for content and loading status
  const [projects, setProjects] = useState([]);
  const [contactInfo, setContactInfo] = useState(initialContactInfo);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch data from Supabase on mount
  useEffect(() => {
    const loadInitialData = async () => {
      setIsLoading(true);
      
      // Check if user is already authenticated
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setIsAuthenticated(true);
        setUser(currentUser);
      }
      
      // Fetch projects
      const projectsData = await fetchProjects();
      if (projectsData.length > 0) {
        setProjects(projectsData);
      } else {
        // Use placeholder data if no projects exist
        setProjects(placeholderProjects);
      }
      
      // Fetch contact info
      const contactData = await fetchContactInfo();
      if (contactData) {
        setContactInfo(contactData);
      }
      
      setIsLoading(false);
    };
    
    loadInitialData();
  }, []);

  // Project operations
  const addProject = async (project) => {
    const newProject = await addProjectToSupabase(project);
    if (newProject) {
      setProjects(prev => [newProject, ...prev]);
      return newProject;
    }
    return null;
  };

  const updateProject = async (updatedProject) => {
    const updated = await updateProjectInSupabase(updatedProject);
    if (updated) {
      setProjects(prev => 
        prev.map(project => project.id === updated.id ? updated : project)
      );
      return updated;
    }
    return null;
  };

  const deleteProject = async (projectId) => {
    const success = await deleteProjectFromSupabase(projectId);
    if (success) {
      setProjects(prev => prev.filter(project => project.id !== projectId));
    }
    return success;
  };

  // Contact info operations
  const updateContactInfo = async (newContactInfo) => {
    const updated = await updateContactInfoInSupabase({
      ...contactInfo,
      ...newContactInfo
    });
    
    if (updated) {
      setContactInfo(updated);
      return true;
    }
    return false;
  };

  // Auth operations
  const login = async (email, password) => {
    const { success, user: authUser, error } = await signIn(email, password);
    
    if (success && authUser) {
      setIsAuthenticated(true);
      setUser(authUser);
      return { success: true };
    }
    
    return { success: false, error };
  };

  const logout = async () => {
    const success = await signOut();
    if (success) {
      setIsAuthenticated(false);
      setUser(null);
    }
    return success;
  };

  return (
    <ContentContext.Provider value={{
      projects,
      contactInfo,
      isAuthenticated,
      user,
      isLoading,
      addProject,
      updateProject,
      deleteProject,
      updateContactInfo,
      login,
      logout
    }}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the content context
export const useContent = () => useContext(ContentContext);

export default ContentContext;

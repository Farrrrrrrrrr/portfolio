import supabase from '../config/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

/**
 * Fetch all projects from Supabase
 */
export const fetchProjects = async () => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Exception when fetching projects:', error);
    return [];
  }
};

/**
 * Fetch a single project by slug
 * @param {string} slug - Project slug
 */
export const fetchProjectBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('slug', slug)
      .single();
      
    if (error) {
      console.error('Error fetching project:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Exception when fetching project:', error);
    return null;
  }
};

/**
 * Add a new project to Supabase
 * @param {Object} project - Project data
 */
export const addProject = async (project) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .insert([project])
      .select();
      
    if (error) {
      console.error('Error adding project:', error);
      return null;
    }
    
    return data[0];
  } catch (error) {
    console.error('Exception when adding project:', error);
    return null;
  }
};

/**
 * Update an existing project in Supabase
 * @param {Object} project - Project data with id
 */
export const updateProject = async (project) => {
  try {
    const { data, error } = await supabase
      .from('projects')
      .update(project)
      .eq('id', project.id)
      .select();
      
    if (error) {
      console.error('Error updating project:', error);
      return null;
    }
    
    return data[0];
  } catch (error) {
    console.error('Exception when updating project:', error);
    return null;
  }
};

/**
 * Delete a project from Supabase
 * @param {string} id - Project ID
 */
export const deleteProject = async (id) => {
  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);
      
    if (error) {
      console.error('Error deleting project:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Exception when deleting project:', error);
    return false;
  }
};

/**
 * Fetch contact information from Supabase
 */
export const fetchContactInfo = async () => {
  try {
    const { data, error } = await supabase
      .from('contact')
      .select('*')
      .single();
      
    if (error) {
      console.error('Error fetching contact info:', error);
      return null;
    }
    
    return data;
  } catch (error) {
    console.error('Exception when fetching contact info:', error);
    return null;
  }
};

/**
 * Update contact information in Supabase
 * @param {Object} contactInfo - Contact information
 */
export const updateContactInfo = async (contactInfo) => {
  try {
    const { data, error } = await supabase
      .from('contact')
      .update(contactInfo)
      .eq('id', contactInfo.id)
      .select();
      
    if (error) {
      console.error('Error updating contact info:', error);
      return null;
    }
    
    return data[0];
  } catch (error) {
    console.error('Exception when updating contact info:', error);
    return null;
  }
};

/**
 * Upload a file to Supabase Storage
 * @param {File} file - File to upload
 * @param {string} bucket - Storage bucket name
 * @param {string} folder - Folder name inside bucket
 * @returns {string|null} - Public URL of uploaded file or null if failed
 */
export const uploadFile = async (file, bucket = 'projects', folder = 'images') => {
  try {
    // Create a unique filename to prevent overwriting
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading file:', error);
      return null;
    }

    // Get public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Exception when uploading file:', error);
    return null;
  }
};

/**
 * Delete a file from Supabase Storage
 * @param {string} url - File URL to delete
 * @param {string} bucket - Storage bucket name
 * @returns {boolean} - Whether deletion was successful
 */
export const deleteFile = async (url, bucket = 'projects') => {
  try {
    // Extract the file path from the URL
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    const filePath = pathParts.slice(pathParts.indexOf(bucket) + 1).join('/');

    // Delete file from Supabase Storage
    const { error } = await supabase.storage
      .from(bucket)
      .remove([filePath]);

    if (error) {
      console.error('Error deleting file:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Exception when deleting file:', error);
    return false;
  }
};

/**
 * Sign in with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 */
export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) {
      console.error('Error signing in:', error);
      return { success: false, error: error.message };
    }
    
    return { success: true, user: data.user };
  } catch (error) {
    console.error('Exception when signing in:', error);
    return { success: false, error: 'An unexpected error occurred' };
  }
};

/**
 * Sign out the current user
 */
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      console.error('Error signing out:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Exception when signing out:', error);
    return false;
  }
};

/**
 * Get the current authenticated user
 */
export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error('Error getting user:', error);
      return null;
    }
    
    return data?.user || null;
  } catch (error) {
    console.error('Exception when getting user:', error);
    return null;
  }
};

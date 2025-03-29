import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaPlus, FaTrash, FaArrowLeft } from 'react-icons/fa';
import { useContent } from '../../context/ContentContext';
import { v4 as uuidv4 } from 'uuid';
import ImageUploader from '../../components/Admin/ImageUploader';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 0;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const ProjectList = styled.div`
  margin-bottom: 2rem;
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${props => props.theme.colors.lighter};
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProjectImage = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  flex-shrink: 0;
`;

const ProjectDetails = styled.div``;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
`;

const ProjectCategory = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.color || props.theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease;
  border-radius: 4px;
  
  &:hover {
    background-color: ${props => props.theme.colors.light};
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const Form = styled.form`
  background-color: ${props => props.theme.colors.lighter};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.medium};
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
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

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.text};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
  }
`;

const TagInput = styled.div`
  display: flex;
  gap: 0.5rem;
  
  input {
    flex: 1;
  }
  
  button {
    background-color: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.8rem;
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  padding: 0.8rem 1.5rem;
  border: 1px solid ${props => props.theme.colors.light};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.light};
  }
`;

const emptyProject = {
  title: '',
  slug: '',
  category: '',
  tags: [],
  featured_image: '',
  screenshots: [],
  description: '',
  long_description: '',
  client_name: '',
  completion_date: '',
  project_url: '',
  github_url: ''
};

const ProjectEditPage = () => {
  const { projects, addProject, updateProject, deleteProject, isLoading } = useContent();
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(!!projectId);
  const [currentProject, setCurrentProject] = useState(emptyProject);
  const [newTag, setNewTag] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setCurrentProject({
          ...project,
          featured_image: project.featured_image || project.featuredImage,
          long_description: project.long_description || project.longDescription,
          client_name: project.client_name || project.clientName,
          completion_date: project.completion_date || project.completionDate,
          project_url: project.project_url || project.projectUrl,
          github_url: project.github_url || project.githubUrl,
        });
      } else {
        navigate('/admin/projects');
      }
    }
  }, [projectId, projects, navigate]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleScreenshotsChange = (index, url) => {
    const updatedScreenshots = [...(currentProject.screenshots || [])];
    
    while (updatedScreenshots.length <= index) {
      updatedScreenshots.push('');
    }
    
    updatedScreenshots[index] = url;
    
    setCurrentProject(prev => ({
      ...prev,
      screenshots: updatedScreenshots
    }));
  };
  
  const handleFeaturedImageUpload = (url) => {
    setCurrentProject(prev => ({
      ...prev,
      featured_image: url
    }));
  };
  
  const handleAddTag = () => {
    if (newTag.trim() !== '' && !currentProject.tags.includes(newTag.trim())) {
      setCurrentProject(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };
  
  const handleRemoveTag = (tagToRemove) => {
    setCurrentProject(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (isEditing) {
        await updateProject(currentProject);
      } else {
        let projectSlug = currentProject.slug;
        if (!projectSlug) {
          projectSlug = currentProject.title
            .toLowerCase()
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, '-');
        }
        
        const newProject = {
          ...currentProject,
          id: uuidv4(),
          slug: projectSlug,
          created_at: new Date().toISOString()
        };
        
        await addProject(newProject);
      }
      
      setCurrentProject(emptyProject);
      setIsEditing(false);
      navigate('/admin/projects');
    } catch (error) {
      console.error('Error saving project:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCancel = () => {
    setCurrentProject(emptyProject);
    setIsEditing(false);
    navigate('/admin/projects');
  };
  
  const handleAddNew = () => {
    setCurrentProject(emptyProject);
    setIsEditing(true);
  };
  
  const handleEdit = (project) => {
    navigate(`/admin/projects/${project.id}`);
  };
  
  const handleDelete = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      await deleteProject(projectId);
    }
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <Container>
      <PageHeader>
        <Title>{isEditing ? 'Edit Project' : 'Manage Projects'}</Title>
        {isEditing ? (
          <BackButton onClick={() => navigate('/admin/projects')}>
            <FaArrowLeft /> Back to Projects
          </BackButton>
        ) : (
          <AddButton onClick={handleAddNew}>
            <FaPlus /> Add New Project
          </AddButton>
        )}
      </PageHeader>
      
      {isEditing ? (
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="title">Project Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={currentProject.title}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="slug">URL Slug</Label>
              <Input
                type="text"
                id="slug"
                name="slug"
                value={currentProject.slug}
                onChange={handleChange}
                placeholder="Leave blank to generate automatically"
              />
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="category">Category</Label>
              <Input
                type="text"
                id="category"
                name="category"
                value={currentProject.category}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="client_name">Client Name</Label>
              <Input
                type="text"
                id="client_name"
                name="client_name"
                value={currentProject.client_name || ''}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <Label>Featured Image</Label>
            <ImageUploader
              currentImage={currentProject.featured_image}
              onImageUpload={handleFeaturedImageUpload}
              folder="featured"
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Tags</Label>
            <TagInput>
              <Input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Enter a tag and press Add"
              />
              <button type="button" onClick={handleAddTag}>Add</button>
            </TagInput>
            
            <TagContainer>
              {currentProject.tags && currentProject.tags.map((tag, index) => (
                <Tag key={index}>
                  {tag}
                  <button type="button" onClick={() => handleRemoveTag(tag)}>×</button>
                </Tag>
              ))}
            </TagContainer>
          </FormGroup>
          
          <FormGroup>
            <Label>Screenshots (up to 3)</Label>
            {[0, 1, 2].map((index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <p>Screenshot {index + 1}</p>
                <ImageUploader
                  currentImage={currentProject.screenshots?.[index] || ''}
                  onImageUpload={(url) => handleScreenshotsChange(index, url)}
                  folder="screenshots"
                />
              </div>
            ))}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="description">Short Description</Label>
            <Textarea
              id="description"
              name="description"
              value={currentProject.description}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="long_description">Full Description</Label>
            <Textarea
              id="long_description"
              name="long_description"
              value={currentProject.long_description || ''}
              onChange={handleChange}
              rows={8}
              required
            />
          </FormGroup>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="completion_date">Completion Date</Label>
              <Input
                type="date"
                id="completion_date"
                name="completion_date"
                value={currentProject.completion_date || ''}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <Label htmlFor="project_url">Project URL</Label>
              <Input
                type="text"
                id="project_url"
                name="project_url"
                value={currentProject.project_url || ''}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="github_url">GitHub URL</Label>
              <Input
                type="text"
                id="github_url"
                name="github_url"
                value={currentProject.github_url || ''}
                onChange={handleChange}
              />
            </FormGroup>
          </FormRow>
          
          <ButtonGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting 
                ? (projectId ? 'Updating...' : 'Adding...') 
                : (projectId ? 'Update Project' : 'Add Project')}
            </SubmitButton>
            <CancelButton type="button" onClick={handleCancel}>
              Cancel
            </CancelButton>
          </ButtonGroup>
        </Form>
      ) : (
        <ProjectList>
          {projects.length > 0 ? (
            projects.map(project => (
              <ProjectCard key={project.id}>
                <ProjectInfo>
                  <ProjectImage image={project.featured_image || project.featuredImage} />
                  <ProjectDetails>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectCategory>{project.category}</ProjectCategory>
                  </ProjectDetails>
                </ProjectInfo>
                <ProjectActions>
                  <ActionButton onClick={() => handleEdit(project)}>
                    Edit
                  </ActionButton>
                  <ActionButton 
                    onClick={() => handleDelete(project.id)}
                    color="#d32f2f"
                  >
                    <FaTrash />
                  </ActionButton>
                </ProjectActions>
              </ProjectCard>
            ))
          ) : (
            <p>No projects yet. Click "Add New Project" to create one.</p>
          )}
        </ProjectList>
      )}
    </Container>
  );
};

export default ProjectEditPage;

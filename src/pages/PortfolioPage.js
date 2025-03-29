import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/Portfolio/ProjectCard';
import { useContent } from '../context/ContentContext';
import Loader from '../components/utils/Loader';
import AnimatedText from '../components/utils/AnimatedText';

const PageHeader = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.textLight};
  padding: 6rem 0 4rem;
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.8;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.textLight : props.theme.colors.text};
  border: 2px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.light};
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.accent : props.theme.colors.light};
  }
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

const TagButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.light};
  color: ${props => props.active ? props.theme.colors.textLight : props.theme.colors.text};
  border: none;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.primary};
    color: ${props => props.theme.colors.textLight};
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.colors.background};
  min-height: 500px;
`;

const ProjectsContainer = styled.div`
  position: relative;
  min-height: 400px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
  
  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    max-width: 500px;
    margin: 0 auto;
    color: ${props => props.theme.colors.text};
  }
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid ${props => props.theme.colors.light};
  border-radius: 50px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(94, 106, 125, 0.2);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.primary};
`;

const FiltersToggle = styled.button`
  display: block;
  margin: 0 auto 1rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const ExpandableFilters = styled(motion.div)`
  overflow: hidden;
  margin-bottom: 2rem;
`;

const PortfolioPage = () => {
  const { projects, isLoading } = useContent();
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [tags, setTags] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTags, setActiveTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const searchTimeout = useRef(null);
  
  // Extract unique categories and tags from projects
  useEffect(() => {
    if (projects.length > 0) {
      // Get unique categories
      const uniqueCategories = ['all', ...new Set(projects.map(project => project.category))];
      setCategories(uniqueCategories);
      
      // Get unique tags
      const allTags = projects.flatMap(project => project.tags);
      const uniqueTags = [...new Set(allTags)].sort();
      setTags(uniqueTags);
    }
  }, [projects]);
  
  // Filter projects based on active category, tags and search query
  useEffect(() => {
    if (isLoading) return;
    
    let result = [...projects];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(project => project.category === activeCategory);
    }
    
    // Filter by tags (if any are selected)
    if (activeTags.length > 0) {
      result = result.filter(project => 
        activeTags.every(tag => project.tags.includes(tag))
      );
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredProjects(result);
  }, [projects, activeCategory, activeTags, searchQuery, isLoading]);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  
  const handleTagToggle = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };
  
  const handleSearch = (e) => {
    const query = e.target.value;
    
    // Clear existing timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    
    // Set a new timeout to debounce the search
    searchTimeout.current = setTimeout(() => {
      setSearchQuery(query);
    }, 300);
  };
  
  const clearFilters = () => {
    setActiveCategory('all');
    setActiveTags([]);
    setSearchQuery('');
    // Also clear the input field
    const searchInput = document.getElementById('projectSearch');
    if (searchInput) {
      searchInput.value = '';
    }
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
            <AnimatedText 
              text="My Portfolio Projects" 
              element={HeaderTitle} 
            />
            <HeaderSubtitle>
              Explore my recent web development projects showcasing a range of skills and technologies.
              From responsive websites to complex web applications.
            </HeaderSubtitle>
          </motion.div>
        </div>
      </PageHeader>
      
      <ProjectsSection>
        <div className="container">
          <SearchContainer>
            <SearchInput 
              id="projectSearch"
              type="text" 
              placeholder="Search projects by name, description, or tag..." 
              onChange={handleSearch}
            />
            <SearchIcon>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </SearchIcon>
          </SearchContainer>
          
          <FiltersToggle 
            onClick={() => setShowFilters(!showFilters)}
            isOpen={showFilters}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </FiltersToggle>
          
          <ExpandableFilters
            initial={false}
            animate={{ height: showFilters ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <FilterContainer>
                {categories.map((category, index) => (
                  <FilterButton
                    key={index}
                    active={activeCategory === category}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </FilterButton>
                ))}
              </FilterContainer>
              
              {tags.length > 0 && (
                <TagContainer>
                  {tags.map((tag, index) => (
                    <TagButton
                      key={index}
                      active={activeTags.includes(tag)}
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </TagButton>
                  ))}
                </TagContainer>
              )}
              
              {(activeCategory !== 'all' || activeTags.length > 0 || searchQuery) && (
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <button 
                    onClick={clearFilters}
                    style={{ 
                      background: 'transparent',
                      border: 'none',
                      color: '#d32f2f',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </ExpandableFilters>
          
          <ProjectsContainer>
            {isLoading ? (
              <Loader text="Loading projects..." />
            ) : filteredProjects.length > 0 ? (
              <AnimatePresence mode="wait">
                <ProjectsGrid
                  key={activeCategory + activeTags.join(',') + searchQuery}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredProjects.map((project, index) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project} 
                      index={index} 
                    />
                  ))}
                </ProjectsGrid>
              </AnimatePresence>
            ) : (
              <EmptyState>
                <h3>No projects found</h3>
                <p>
                  No projects match your current filters. Try adjusting your search criteria or
                  <button 
                    onClick={clearFilters}
                    style={{ 
                      background: 'transparent',
                      border: 'none',
                      color: '#5E6A7D',
                      cursor: 'pointer',
                      fontWeight: '500',
                      padding: '0 5px'
                    }}
                  >
                    clear all filters
                  </button>.
                </p>
              </EmptyState>
            )}
          </ProjectsContainer>
        </div>
      </ProjectsSection>
    </>
  );
};

export default PortfolioPage;

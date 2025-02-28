import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectDetail from '../components/Projects/ProjectDetail';

// This would typically come from an API or data file
const getProjectData = () => {
  return [
    {
      id: "e-commerce-platform",
      title: "E-Commerce Platform",
      date: "August 2023",
      description: "A fully responsive e-commerce platform with user authentication, product catalog, and payment processing integration.",
      longDescription: `
        <p>This comprehensive e-commerce solution was built from the ground up to provide businesses with a customizable, user-friendly online store. The platform combines modern design principles with robust functionality to deliver an exceptional shopping experience.</p>
        
        <p>The front-end was developed using React and Styled Components, creating a responsive interface that adapts seamlessly to all device sizes. State management was handled with Redux, ensuring a consistent user experience throughout the application.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>User authentication and profile management</li>
          <li>Advanced product filtering and search capabilities</li>
          <li>Secure checkout process with multiple payment options</li>
          <li>Order tracking and history for customers</li>
          <li>Comprehensive admin dashboard for inventory management</li>
          <li>Detailed analytics and reporting tools</li>
        </ul>
        
        <p>The back-end infrastructure was built with Node.js and Express, connected to a MongoDB database. RESTful APIs were implemented to handle data exchange between the client and server, with JWT authentication ensuring secure access to protected routes.</p>
        
        <p>Integration with Stripe API allows for secure processing of various payment methods, while AWS S3 was utilized for storing product images and other media assets.</p>
      `,
      image: "/images/projects/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Redux", "Express", "Stripe API", "AWS S3"],
      liveUrl: "https://example.com/ecommerce",
      githubUrl: "https://github.com/example/ecommerce",
      gallery: [
        "/images/projects/project1-detail1.jpg",
        "/images/projects/project1-detail2.jpg",
        "/images/projects/project1-detail3.jpg",
      ]
    },
    {
      id: "data-visualization-dashboard",
      title: "Data Visualization Dashboard",
      date: "June 2023",
      description: "Interactive dashboard for visualizing complex datasets with real-time filtering and customizable charts.",
      longDescription: `
        <p>This powerful data visualization platform transforms complex data into intuitive, interactive visual representations. It allows users to gain meaningful insights from large datasets without requiring advanced technical skills.</p>
        
        <p>Built with D3.js and React, the dashboard features a modular architecture that supports various chart types and visualization techniques. The interface was designed for maximum usability, with careful attention to information hierarchy and user interaction patterns.</p>
        
        <h3>Key Features</h3>
        <ul>
          <li>Interactive data filtering and sorting capabilities</li>
          <li>Multiple visualization types (bar charts, line graphs, heat maps, etc.)</li>
          <li>Custom dashboard creation and configuration</li>
          <li>Real-time data updating and streaming</li>
          <li>CSV/JSON data import and export functionality</li>
          <li>Responsive design for desktop and tablet use</li>
        </ul>
        
        <p>The back-end utilizes Express and MySQL for efficient data storage and retrieval, with optimized queries to handle large datasets. API endpoints were designed following RESTful principles for seamless integration with the front-end.</p>
        
        <p>The system includes robust authentication and authorization mechanisms to ensure data security while providing flexible access control for different user roles.</p>
      `,
      image: "/images/projects/project2.jpg",
      technologies: ["D3.js", "React", "Express", "MySQL", "Recharts", "Bootstrap"],
      liveUrl: "https://example.com/dashboard",
      githubUrl: "https://github.com/example/dashboard",
      gallery: [
        "/images/projects/project2-detail1.jpg",
        "/images/projects/project2-detail2.jpg",
        "/images/projects/project2-detail3.jpg",
      ]
    },
    // Additional projects would be defined here
  ];
};

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch project details
    const fetchProjectDetails = () => {
      const allProjects = getProjectData();
      const foundProject = allProjects.find(p => p.id === projectId);
      
      setTimeout(() => {
        setProject(foundProject);
        setLoading(false);
      }, 500);
    };
    
    fetchProjectDetails();
  }, [projectId]);
  
  if (loading) {
    return (
      <div className="container" style={{ padding: '10rem 0', textAlign: 'center' }}>
        <h2>Loading project details...</h2>
      </div>
    );
  }
  
  if (!project) {
    return <Navigate to="/not-found" replace />;
  }
  
  return <ProjectDetail project={project} />;
};

export default ProjectDetailsPage;

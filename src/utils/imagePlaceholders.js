/**
 * Helper utility to generate placeholder image URLs
 * Use this temporarily until you have your own project images
 */

// Project thumbnails (600x400px)
export const getProjectThumbnail = (index) => {
  // Using Lorem Picsum with a seed to ensure consistent images
  return `https://picsum.photos/seed/project${index}/600/400`;
};

// Project detail images (800x600px)
export const getProjectDetailImage = (projectId, imageIndex) => {
  return `https://picsum.photos/seed/${projectId}-detail${imageIndex}/800/600`;
};

// Profile image (500x600px)
export const getProfileImage = () => {
  return `https://picsum.photos/seed/profile/500/600`;
};

// Replace project image paths in Projects.js
export const placeholderProjects = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform with user authentication, product catalog, and payment processing integration.",
    image: getProjectThumbnail(1),
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: "data-visualization-dashboard",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time filtering and customizable charts.",
    image: getProjectThumbnail(2),
    technologies: ["D3.js", "React", "Express", "MySQL"],
    liveUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/example/dashboard"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A comprehensive task management application with team collaboration features and progress tracking.",
    image: getProjectThumbnail(3),
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com/taskapp",
    githubUrl: "https://github.com/example/taskapp"
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    description: "Property listing and search platform with map integration, virtual tours, and mortgage calculator.",
    image: getProjectThumbnail(4),
    technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
    liveUrl: "https://example.com/realestate",
    githubUrl: "https://github.com/example/realestate"
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking App",
    description: "Mobile-first application for tracking workouts, nutrition, and personal fitness goals with progress visualization.",
    image: getProjectThumbnail(5),
    technologies: ["React Native", "GraphQL", "MongoDB"],
    liveUrl: "https://example.com/fitness",
    githubUrl: "https://github.com/example/fitness"
  },
  {
    id: "content-management-system",
    title: "Content Management System",
    description: "Custom CMS with dynamic page building, user roles, and multi-language support for content creators.",
    image: getProjectThumbnail(6),
    technologies: ["PHP", "Laravel", "MySQL", "Alpine.js"],
    liveUrl: "https://example.com/cms",
    githubUrl: "https://github.com/example/cms"
  }
];

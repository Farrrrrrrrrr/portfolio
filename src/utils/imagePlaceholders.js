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

/**
 * Placeholder project data to use when no projects are loaded from the backend
 */
export const placeholderProjects = [
  {
    id: '1',
    title: 'E-Commerce Website',
    slug: 'ecommerce-website',
    category: 'Web Development',
    description: 'A fully functional e-commerce platform with shopping cart, payment integration, and admin dashboard.',
    longDescription: 'This project involved building a complete e-commerce solution from the ground up. The website features product browsing, user accounts, shopping cart functionality, checkout process with Stripe integration, and a comprehensive admin dashboard for managing products, orders, and customers.\n\nThe front-end was built with React and Redux for state management, while the back-end uses Node.js with Express and MongoDB. The site is fully responsive and optimized for all devices.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    featuredImage: 'https://via.placeholder.com/800x600?text=E-Commerce+Website',
    screenshots: [
      'https://via.placeholder.com/1200x800?text=Screenshot+1',
      'https://via.placeholder.com/1200x800?text=Screenshot+2',
      'https://via.placeholder.com/1200x800?text=Screenshot+3'
    ],
    clientName: 'RetailPlus Inc.',
    completionDate: '2023-02-15',
    projectUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    featured: true,
    createdAt: '2023-01-05T00:00:00.000Z'
  },
  {
    id: '2',
    title: 'Finance Dashboard App',
    slug: 'finance-dashboard',
    category: 'Web Application',
    description: 'Interactive financial dashboard with data visualization, real-time updates, and personalized insights.',
    longDescription: 'The Finance Dashboard App is a comprehensive financial analytics tool that provides users with visualizations of their financial data, real-time updates of market conditions, and personalized insights based on spending habits and investment performance.\n\nThe application uses React for the front-end interface, with Chart.js and D3.js for data visualization. The back-end is built on Node.js and connects to various financial APIs to gather real-time data. User authentication is handled securely, and all sensitive data is encrypted.',
    tags: ['React', 'Chart.js', 'D3.js', 'Node.js', 'Financial APIs'],
    featuredImage: 'https://via.placeholder.com/800x600?text=Finance+Dashboard',
    screenshots: [
      'https://via.placeholder.com/1200x800?text=Dashboard+Overview',
      'https://via.placeholder.com/1200x800?text=Analytics+View',
      'https://via.placeholder.com/1200x800?text=Mobile+Interface'
    ],
    clientName: 'FinanceTrack LLC',
    completionDate: '2022-11-20',
    projectUrl: 'https://example.com/finance',
    githubUrl: 'https://github.com/example/finance-dashboard',
    featured: true,
    createdAt: '2022-09-15T00:00:00.000Z'
  },
  {
    id: '3',
    title: 'Health & Fitness App',
    slug: 'health-fitness-app',
    category: 'Mobile App',
    description: 'A comprehensive health and fitness mobile application with workout tracking, meal planning, and progress analytics.',
    longDescription: 'The Health & Fitness App is designed to be an all-in-one solution for health and fitness enthusiasts. It includes features for tracking workouts, planning meals, setting goals, and monitoring progress through various analytics and visualizations.',
    tags: ['React Native', 'Firebase', 'Mobile Development', 'Health Tech'],
    featuredImage: 'https://via.placeholder.com/800x600?text=Fitness+App',
    screenshots: [
      'https://via.placeholder.com/1200x800?text=App+Home+Screen',
      'https://via.placeholder.com/1200x800?text=Workout+Tracking',
      'https://via.placeholder.com/1200x800?text=Progress+Analytics'
    ],
    clientName: 'FitLife Health',
    completionDate: '2023-04-10',
    projectUrl: 'https://example.com/fitness-app',
    githubUrl: 'https://github.com/example/fitness-app',
    featured: false,
    createdAt: '2023-01-20T00:00:00.000Z'
  }
];

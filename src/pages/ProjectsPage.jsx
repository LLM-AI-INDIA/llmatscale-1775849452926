import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://via.placeholder.com/400x250/A0A0A0/FFFFFF?text=E-commerce',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management tool allowing users to create, update, and delete tasks with drag-and-drop functionality.',
    image: 'https://via.placeholder.com/400x250/B0B0B0/FFFFFF?text=Task+App',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Personal Blog',
    description: 'A modern blog platform built with a headless CMS, featuring dynamic content rendering and SEO optimization.',
    image: 'https://via.placeholder.com/400x250/C0C0C0/FFFFFF?text=Blog',
    tags: ['Next.js', 'Strapi', 'GraphQL'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard displaying current weather and forecasts for various cities using a third-party API.',
    image: 'https://via.placeholder.com/400x250/D0D0D0/FFFFFF?text=Weather',
    tags: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'Search and discover recipes based on ingredients or cuisine type, with detailed instructions and nutritional information.',
    image: 'https://via.placeholder.com/400x250/E0E0E0/FFFFFF?text=Recipes',
    tags: ['React', 'Redux', 'Spoonacular API'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Social Media Clone',
    description: 'A simplified clone of a social media platform with post creation, liking, commenting, and user profiles.',
    image: 'https://via.placeholder.com/400x250/F0F0F0/FFFFFF?text=Social+Clone',
    tags: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    liveLink: '#',
    githubLink: '#',
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-8 py-16">
      <h2 className="text-5xl font-bold text-center mb-12" style={{ fontFamily: 'Poppins, sans-serif' }}>
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
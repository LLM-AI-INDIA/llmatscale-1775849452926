import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <figure>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {project.title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, index) => (
            <div key={index} className="badge badge-outline badge-sm">
              {tag}
            </div>
          ))}
        </div>
        <div className="card-actions justify-end mt-4">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <Github className="w-4 h-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
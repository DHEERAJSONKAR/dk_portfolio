import React, { useState } from 'react';
import { projects } from '../data';
import { Github, Code, Star, Play, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section 
      id="projects" 
      className="py-16 sm:py-24 bg-gray-50 dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-600 dark:bg-emerald-500 shadow-lg mb-8">
            <Code className="text-white" size={36} />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
            <div className="w-2 h-2 bg-emerald-600 rounded-full" />
            <div className="w-12 h-1 bg-emerald-600 rounded-full" />
          </div>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Showcasing innovative solutions and creative implementations across various technologies
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="p-1 bg-white dark:bg-dark-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600">
            <div className="flex space-x-1">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  filter === 'all'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
                }`}
              >
                <Code size={16} className="inline mr-2" />
                All Projects
              </button>
              
              <button
                onClick={() => setFilter('featured')}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  filter === 'featured'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
                }`}
              >
                <Star size={16} className="inline mr-2" />
                Featured
              </button>
            </div>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveDemo: string;
    github: string;
    featured: boolean;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
      {/* Image Section */}
      <div className="relative overflow-hidden h-56 bg-gray-100 dark:bg-dark-700">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <a 
                href={project.liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <Play size={20} />
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
            <Star size={12} className="inline mr-1" />
            Featured
          </div>
        )}

        {/* Project Number */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm">
          {String(project.id).padStart(2, '0')}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700"
            >
              <Code size={10} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
          >
            <Eye size={16} className="mr-2" />
            Live Demo
          </a>
          
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Projects);
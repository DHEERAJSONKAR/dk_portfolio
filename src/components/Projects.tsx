import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section 
      id="projects" 
      className="py-20 bg-white dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            Check out some of my recent work
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md p-1 bg-gray-100 dark:bg-dark-700">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'featured'
                  ? 'bg-white dark:bg-dark-600 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="bg-gray-50 dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-semibold text-lg">{project.title}</h3>
              <div className="flex space-x-2">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <Github size={18} />
                </a>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-400 transition-colors"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
            >
              <Code size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={project.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium flex items-center text-sm"
          >
            Live Demo <ExternalLink size={14} className="ml-1" />
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium flex items-center text-sm"
          >
            Source Code <Github size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
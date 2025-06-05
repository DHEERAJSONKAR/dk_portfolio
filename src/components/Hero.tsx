import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center py-16 bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-900"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-70"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-8 right-1/4 w-56 h-56 rounded-full bg-accent-100 dark:bg-accent-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="w-full md:w-3/5 mb-12 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-primary-600 dark:text-primary-400 font-semibold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-accent-500 dark:text-accent-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors cursor-pointer text-sm sm:text-base"
              >
                View Projects
              </Link>
              
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-transparent hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-900 dark:text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg border border-gray-300 dark:border-dark-600 transition-colors cursor-pointer text-sm sm:text-base"
              >
                Contact Me
              </Link>
              
              <div className="flex items-center space-x-4 ml-1 mt-3 sm:mt-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={22} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary-400 dark:border-primary-600 shadow-2xl">
              <img 
                src="/director_photo.jpg" 
                alt="Dheeraj Sonkar" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1,
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <ArrowDown className="text-primary-600 dark:text-primary-400" size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
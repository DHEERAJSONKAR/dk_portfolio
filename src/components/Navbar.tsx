import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { navLinks, personalInfo } from '../data';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background when scrolled
      setScrolled(window.scrollY > 50);
      
      // Find the current active section
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentActive = 'home';
      
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop - 200 && 
              window.scrollY < sectionTop + sectionHeight - 200) {
            currentActive = section.id;
          }
        }
      });
      
      setActive(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 ${
        scrolled 
          ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-xl md:text-2xl font-bold cursor-pointer text-primary-600 dark:text-primary-400"
        >
          {personalInfo.name.split(' ')[0]}
          <span className="text-accent-500">.</span>
        </Link>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                spy={true}
                duration={500}
                offset={-70}
                className={`cursor-pointer text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                  active === link.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-500 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`cursor-pointer py-2 text-sm font-medium ${
                    active === link.id
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              
              <div className="flex items-center space-x-4 pt-2">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
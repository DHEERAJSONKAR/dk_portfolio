import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Github, Linkedin, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { navLinks, personalInfo } from '../data';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { darkMode, toggleTheme } = useTheme();
  const navRef = useRef<HTMLElement>(null);

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
    <>
      <nav 
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full z-[100] ${
          scrolled 
            ? 'bg-white dark:bg-dark-900 shadow-xl border-b border-gray-200 dark:border-slate-700 py-3' 
            : 'bg-white dark:bg-dark-900 py-4'
        } transition-all duration-300`}
        style={{ position: 'fixed' }}
      >

        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
          {/* Enhanced Logo */}
          <div>
            <Link
              to="home"
              smooth={true}
              duration={0}
              className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer relative group"
            >
              <div className="flex items-center">
                {/* Simplified logo icon */}
                <div className="w-8 h-8 mr-2 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white" size={16} />
                </div>
                
                <div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                  <span className="text-purple-500">.</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-1 border border-emerald-200/30 dark:border-slate-700/30">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    spy={true}
                    duration={0}
                    offset={-70}
                    className={`cursor-pointer px-4 py-2 text-sm font-semibold rounded-xl transition-colors duration-200 relative select-none ${
                      active === link.id
                        ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600'
                        : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                    }`}
                    style={{ cursor: 'pointer' }}
                  >
                    <span>{link.title}</span>
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Social Links */}
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-emerald-200/30 dark:border-slate-700/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Github size={18} />
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-emerald-200/30 dark:border-slate-700/30 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>

              {/* Enhanced Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
          
          {/* Enhanced Mobile Menu */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Mobile Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-emerald-200/30 dark:border-slate-700/30 text-gray-700 dark:text-gray-300 hover:scale-110 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Enhanced Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg hover:scale-110 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-2xl shadow-2xl border-t border-emerald-200/20 dark:border-slate-700/20">
            <div className="flex flex-col px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  spy={true}
                  duration={0}
                  offset={-70}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`cursor-pointer py-3 px-4 text-sm font-semibold block rounded-xl transition-all duration-150 ${
                    active === link.id
                      ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {link.title}
                </Link>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-emerald-200/30 dark:border-slate-700/30">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg hover:scale-105 transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg hover:scale-105 transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Github, Linkedin,} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { navLinks, personalInfo } from '../data';

const Navbar: React.FC = () => {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            ? 'py-5' 
            : ' py-6'
        } transition-all duration-300`}
        style={{ position: 'fixed' }}
      >

        <div className="container mx-auto md:pt-8 md:px-6 flex justify-center items-center relative">
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-2 border border-emerald-200/30 dark:border-slate-700/30">
              {navLinks.map((link) => (
                <div key={link.id}>
                  <Link
                    to={link.id}
                    smooth={true}
                    spy={true}
                    duration={0}
                    offset={-70}
                    className={`cursor-pointer px-6 py-3 text-lg font-semibold rounded-xl transition-colors duration-200 relative select-none ${
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

              {/* Enhanced Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
            </div>
          </div>
          
          {/* Capsule Mobile Menu */}
          <div className="flex md:hidden justify-center w-full">
            <div className="flex items-center bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-full px-10 py-2 border border-emerald-200/30 dark:border-slate-700/30 shadow-lg">
              {/* Mobile Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-all"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              {/* Divider */}
              <div className="w-px h-6 bg-emerald-200/50 dark:bg-slate-700/50 mx-5"></div>

              {/* Enhanced Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-all"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  className={`cursor-pointer py-3 px-4 text-xl font-semibold block rounded-xl transition-all duration-150 ${
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
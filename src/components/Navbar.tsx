import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Github, Linkedin, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
      <motion.nav 
        ref={navRef}
        className={`fixed w-full z-40 ${
          scrolled 
            ? 'bg-white/90 dark:bg-dark-800/90 backdrop-blur-2xl shadow-xl border-b border-emerald-200/20 dark:border-slate-700/20 py-2' 
            : 'bg-transparent py-4'
        } transition-all duration-500`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        {/* Morphing background effect */}
        {scrolled && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-purple-500/5"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.05))",
                "linear-gradient(180deg, rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.05), rgba(16, 185, 129, 0.05))",
                "linear-gradient(270deg, rgba(168, 85, 247, 0.05), rgba(16, 185, 129, 0.05), rgba(6, 182, 212, 0.05))",
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        )}

        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredLink('logo')}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="text-xl md:text-2xl font-bold cursor-pointer relative group"
            >
              <motion.div className="flex items-center">
                {/* Animated logo icon */}
                <motion.div
                  className="w-8 h-8 mr-2 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center shadow-lg"
                  animate={{
                    rotate: hoveredLink === 'logo' ? 360 : 0,
                    scale: hoveredLink === 'logo' ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: hoveredLink === 'logo' ? [0, 180, 360] : 0 
                    }}
                    transition={{ duration: 1 }}
                  >
                    <Sparkles className="text-white" size={16} />
                  </motion.div>
                </motion.div>
                
                <div>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                  <motion.span 
                    className="text-purple-500"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1] 
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    .
                  </motion.span>
                </div>
              </motion.div>
              
              {/* Enhanced underline effect */}
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: hoveredLink === 'logo' ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-1 border border-emerald-200/30 dark:border-slate-700/30">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.1 * index,
                    type: "spring",
                    stiffness: 150
                  }}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <Link
                    to={link.id}
                    smooth={true}
                    spy={true}
                    duration={100}
                    offset={-70}
                    className={`cursor-pointer px-4 py-2 text-sm font-semibold rounded-xl transition-colors duration-100 relative overflow-hidden select-none ${
                      active === link.id
                        ? 'text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                    }`}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Active background */}
                    {active === link.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl"
                        layoutId="activeBackground"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl opacity-0"
                      animate={{
                        opacity: hoveredLink === link.id && active !== link.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    
                    <span className="relative z-10">{link.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Social Links */}
              <motion.a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-emerald-200/30 dark:border-slate-700/30 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>

              <motion.a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-emerald-200/30 dark:border-slate-700/30 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                onMouseEnter={() => setHoveredLink('linkedin')}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    scale: hoveredLink === 'linkedin' ? 1.1 : 1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin size={18} />
                </motion.div>
              </motion.a>

              {/* Enhanced Theme Toggle */}
              <motion.button 
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden cursor-pointer"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? "dark" : "light"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-10"
                  >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
          
          {/* Enhanced Mobile Menu */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Mobile Theme Toggle */}
            <motion.button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-emerald-200/30 dark:border-slate-700/30 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={darkMode ? "dark" : "light"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Enhanced Mobile Menu Button */}
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg relative overflow-hidden"
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
        
        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 dark:bg-dark-800/95 backdrop-blur-2xl shadow-2xl border-t border-emerald-200/20 dark:border-slate-700/20"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex flex-col px-4 pt-4 pb-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ 
                      delay: 0.05 * index,
                      type: "spring",
                      stiffness: 150
                    }}
                  >
                    <Link
                      to={link.id}
                      smooth={true}
                      spy={true}
                      duration={250}
                      offset={-70}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`cursor-pointer py-3 px-4 text-sm font-semibold block relative rounded-xl transition-all duration-150 ${
                        active === link.id
                          ? 'text-white bg-gradient-to-r from-emerald-500 to-cyan-600 shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center">
                        <motion.div
                          animate={{
                            scale: active === link.id ? 1.2 : 1,
                            backgroundColor: active === link.id ? '#ffffff' : '#10b981'
                          }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-2 h-2 rounded-full mr-3"
                        />
                        {link.title}
                        
                        {active === link.id && (
                          <motion.div
                            className="ml-auto"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <Zap size={14} className="text-white" />
                          </motion.div>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Social Links */}
                <motion.div 
                  className="flex items-center justify-center space-x-4 pt-4 mt-4 border-t border-emerald-200/30 dark:border-slate-700/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href={personalInfo.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
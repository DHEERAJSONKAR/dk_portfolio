import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Code, Sparkles, Zap, Rocket, Star, Download } from 'lucide-react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Reduced parallax effect for better performance
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  // Keep content visible longer during scroll
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  // Simplified typing animation effect
  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center py-16 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/30 dark:from-dark-900 dark:via-slate-800 dark:to-emerald-900/20 overflow-hidden"
    >
      {/* Enhanced Background with Better Colors */}
      <div className="absolute inset-0">
        {/* Improved animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 25% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 25%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), radial-gradient(circle at 50% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 75% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Reduced floating particles for performance */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/20 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Parallax background shapes with new colors */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-200/30 to-cyan-300/30 blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-1/2 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-200/30 to-purple-300/30 blur-3xl"
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        style={{ opacity }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Enhanced Content Section */}
          <motion.div 
            className="lg:w-3/5 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced greeting badge with new colors */}
            <motion.div
              className="inline-flex items-center bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl px-6 py-3 rounded-full border border-emerald-200/60 dark:border-slate-700/60 shadow-lg mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onMouseEnter={() => setHoveredElement('greeting')}
              onMouseLeave={() => setHoveredElement(null)}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
              }}
            >
              <motion.div
                animate={{ 
                  rotate: hoveredElement === 'greeting' ? [0, 20, -20, 0] : [0, 10, 0],
                  scale: hoveredElement === 'greeting' ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="text-emerald-600 dark:text-emerald-400 mr-2" size={20} />
              </motion.div>
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold">
                Hello, I'm
              </span>
            </motion.div>
            
            {/* Enhanced Name with new gradient */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onMouseEnter={() => setHoveredElement('name')}
              onMouseLeave={() => setHoveredElement(null)}
            >
              <motion.span
                className="bg-gradient-to-r from-slate-800 via-emerald-600 to-cyan-700 bg-clip-text text-transparent dark:from-white dark:via-emerald-400 dark:to-cyan-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  scale: hoveredElement === 'name' ? 1.02 : 1,
                }}
                transition={{
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" },
                  scale: { duration: 0.3 }
                }}
                style={{
                  backgroundSize: "200% 100%",
                }}
              >
                {personalInfo.name}
              </motion.span>
              {isTyping && (
                <motion.span
                  className="text-emerald-600 dark:text-emerald-400"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.h1>
            
            {/* Enhanced role section with new gradient */}
            <motion.div
              className="h-20 mb-8 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.h2
                  key={personalInfo.title}
                  className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent dark:from-emerald-400 dark:via-cyan-400 dark:to-purple-400"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredElement('title')}
                  onMouseLeave={() => setHoveredElement(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  {personalInfo.title}
                </motion.h2>
              </AnimatePresence>
            </motion.div>
            
            {/* Enhanced bio with reveal animation */}
            <motion.p 
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            {/* Enhanced action buttons with new colors */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                onMouseEnter={() => setHoveredElement('projects-btn')}
                onMouseLeave={() => setHoveredElement(null)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 via-cyan-600 to-emerald-600 text-white font-bold rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600"
                    animate={{
                      x: hoveredElement === 'projects-btn' ? ["-100%", "100%"] : ["-150%", "150%"],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    animate={{ rotate: hoveredElement === 'projects-btn' ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Rocket className="mr-2 relative z-10" size={20} />
                  </motion.div>
                  <span className="relative z-10">View Projects</span>
                </Link>
              </motion.div>
              
              <motion.div
                onMouseEnter={() => setHoveredElement('contact-btn')}
                onMouseLeave={() => setHoveredElement(null)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative inline-flex items-center px-8 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-slate-800 dark:text-white font-bold rounded-2xl border border-emerald-200/60 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    animate={{ 
                      x: hoveredElement === 'contact-btn' ? [0, 3, 0] : 0,
                      rotate: hoveredElement === 'contact-btn' ? [0, 15, 0] : 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Zap className="mr-2 relative z-10" size={20} />
                  </motion.div>
                  <span className="relative z-10">Contact Me</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced social links with new colors */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { href: personalInfo.github, icon: Github, name: 'github', color: 'from-slate-700 to-slate-900' },
                { href: personalInfo.linkedin, icon: Linkedin, name: 'linkedin', color: 'from-cyan-600 to-cyan-800' },
                { href: "/resume(dheeraj)1.pdf", icon: Download, name: 'resume', color: 'from-emerald-500 to-emerald-700', download: true }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={social.download}
                  className="relative p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl border border-emerald-200/50 dark:border-slate-700/50 shadow-lg text-slate-700 dark:text-slate-300 transition-all duration-300 group overflow-hidden"
                  onMouseEnter={() => setHoveredElement(social.name)}
                  onMouseLeave={() => setHoveredElement(null)}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100`}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    animate={{
                      rotate: hoveredElement === social.name ? 360 : 0,
                      scale: hoveredElement === social.name ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <social.icon className="relative z-10 group-hover:text-white transition-colors duration-300" size={24} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Enhanced Image Section with new colors */}
          <motion.div 
            className="lg:w-2/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Enhanced background layers with new colors */}
              <motion.div 
                className="absolute -inset-8 bg-gradient-to-br from-emerald-400/25 via-cyan-500/25 to-purple-600/25 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-br from-emerald-300/35 to-cyan-500/35 rounded-full blur-xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main image container with enhanced effects */}
              <motion.div 
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                onMouseEnter={() => setHoveredElement('profile-image')}
                onMouseLeave={() => setHoveredElement(null)}
                whileHover={{ scale: 1.05, rotateY: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/60 dark:border-slate-700/60 shadow-2xl backdrop-blur-xl">
                  <img 
                    src="/director_photo.jpg" 
                    alt="Dheeraj Sonkar" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Enhanced image overlay with new colors */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-emerald-600/30 via-transparent to-transparent"
                    animate={{
                      opacity: hoveredElement === 'profile-image' ? [0.3, 0.5, 0.3] : [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Simplified floating skill icons - reduced for performance */}
                {[
                  { Icon: Code, color: 'from-emerald-500 to-emerald-700' },
                  { Icon: Star, color: 'from-cyan-500 to-cyan-700' }
                ].map(({ Icon, color }, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-12 h-12 bg-gradient-to-br ${color} rounded-full flex items-center justify-center shadow-lg border-2 border-white/80 dark:border-slate-700/80 backdrop-blur-sm`}
                    animate={{
                      rotate: [0, 360],
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                    }}
                    style={{
                      top: `${20 + i * 40}%`,
                      left: i % 2 === 0 ? '-8%' : '108%',
                    }}
                  >
                    <Icon className="text-white" size={20} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator with new colors */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <motion.div
              className="flex flex-col items-center cursor-pointer group"
              onMouseEnter={() => setHoveredElement('scroll')}
              onMouseLeave={() => setHoveredElement(null)}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm text-slate-600 dark:text-slate-400 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Scroll Down
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-emerald-600/60 rounded-full flex justify-center p-1"
                whileHover={{ scale: 1.1 }}
                animate={{
                  borderColor: hoveredElement === 'scroll' ? '#059669' : '#10b98180'
                }}
              >
                <motion.div
                  className="w-1 h-3 bg-emerald-600 rounded-full"
                  animate={{ 
                    y: [0, 12, 0],
                    backgroundColor: hoveredElement === 'scroll' ? '#047857' : '#059669'
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
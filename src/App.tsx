import React, { useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load heavy components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  // Update title when component mounts
  useEffect(() => {
    document.title = "Dheeraj Sonkar | Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white relative">
        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-50 origin-left"
          style={{ scaleX }}
        />
        
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div></div>}>
              <About />
              <Skills />
              <Projects />
              <Certifications />
              <Contact />
            </Suspense>
          </main>
          <Suspense fallback={<div className="h-20" />}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.01
  });
  // Update title when component mounts
  useEffect(() => {
    document.title = "Dheeraj Sonkar | Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white">
        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-primary-500 z-50 origin-left"
          style={{ scaleX }}
        />
        
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
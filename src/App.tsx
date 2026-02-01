import React, { useEffect, lazy, Suspense } from 'react';
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
  // Update title when component mounts
  useEffect(() => {
    document.title = "Dheeraj Sonkar | Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="App min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white relative">
        {/* Fixed Navbar */}
        <Navbar />
        
        {/* Main content with proper padding for fixed navbar */}
        <main className="relative">
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
    </ThemeProvider>
  );
}

export default App;
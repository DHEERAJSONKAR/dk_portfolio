// Performance utilities
export const ANIMATION_CONFIG = {
  // Reduce animation complexity on lower-end devices
  reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  
  // Optimized viewport settings
  viewport: {
    once: true,
    margin: "-50px",
    amount: 0.2
  },
  
  // Simplified transition settings
  transition: {
    duration: 0.4,
    ease: "easeOut"
  },
  
  // Spring settings for better performance
  spring: {
    stiffness: 100,
    damping: 20,
    mass: 1
  }
};

// Utility function to get optimized animation props
export const getOptimizedAnimationProps = (custom = {}) => ({
  viewport: ANIMATION_CONFIG.viewport,
  transition: { ...ANIMATION_CONFIG.transition, ...custom },
});

// Global animation configuration for better performance
export const SCROLL_CONFIG = {
  // Reduced animations for better performance
  defaultViewport: {
    once: true,
    margin: "-100px",
    amount: 0.1
  },
  
  // Lighter transitions
  lightTransition: {
    duration: 0.3,
    ease: "easeOut"
  },
  
  // Minimal parallax for performance
  minimalParallax: {
    range: [-50, 50],
    type: "tween"
  }
};

// Debounce function for scroll events
export const debounce = (func: Function, wait: number) => {
  let timeout: number;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = window.setTimeout(later, wait);
  };
};
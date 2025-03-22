
import { useState, useEffect } from 'react';

// Create a custom hook for fade-in animation when element enters viewport
export const useFadeIn = (threshold = 0.1, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(ref);
    
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold, rootMargin]);
  
  return [setRef, isVisible] as const;
};

// A simple debounce function for animation performance
export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  wait = 200
) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    clearTimeout(timeout);
    let result: any;
    
    timeout = setTimeout(() => {
      result = callback(...args);
    }, wait);
    
    return result;
  };
};

// Page transition variants
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Staggered children animation helper
export const staggerChildren = (
  delay = 0.05,
  staggerTime = 0.1
) => (index: number) => ({
  transition: {
    delay: delay + index * staggerTime,
  },
});

// Custom easing functions
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
};

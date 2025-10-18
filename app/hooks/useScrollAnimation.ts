'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '-50px',
    once = true,
    delay = 0
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }

          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  return { ref, isVisible };
}

// Hook pour détecter les préférences utilisateur
export function useDeviceOptimizations() {
  const [optimizations, setOptimizations] = useState({
    isMobile: false,
    reducedMotion: false,
    isLowPower: false
  });

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setOptimizations({
        isMobile,
        reducedMotion,
        isLowPower: isMobile || reducedMotion
      });
    };

    checkDevice();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => checkDevice();

    window.addEventListener('resize', handleChange);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      window.removeEventListener('resize', handleChange);
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return optimizations;
}

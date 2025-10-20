'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.05,  // Plus bas pour déclencher plus tôt
    rootMargin = '0px',  // Fixe, ne dépend plus de isMobile
    once = true,
    delay = 0
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      // Fallback : si pas d'élément, afficher quand même
      setIsVisible(true);
      return;
    }

    // Si prefers-reduced-motion, afficher directement
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    // Timeout de sécurité : afficher après 2s si pas encore visible
    const safetyTimeout = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 2000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearTimeout(safetyTimeout);

          if (delay > 0) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
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
      clearTimeout(safetyTimeout);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Fixe au mount - les options sont stables

  return { ref, isVisible };
}

// Hook pour détecter les préférences utilisateur
export function useDeviceOptimizations() {
  const [optimizations, setOptimizations] = useState({
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
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

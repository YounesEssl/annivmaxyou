'use client';

import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';
  delay?: number;
  duration?: 'fast' | 'normal' | 'slow';
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 'normal'
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px',
    delay
  });

  const animationClass = {
    'fade-up': 'animate-fade-in-up',
    'fade-down': 'animate-fade-in-down',
    'fade-left': 'animate-fade-in-left',
    'fade-right': 'animate-fade-in-right',
    'scale': 'animate-scale-in',
    'fade': 'animate-fade-in'
  }[animation];

  const durationClass = {
    'fast': 'duration-400',
    'normal': 'duration-600',
    'slow': 'duration-800'
  }[duration];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'} ${durationClass}`}
    >
      {children}
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function FloatingCTA() {
  const { isMobile } = useDeviceOptimizations();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Délai initial avant d'apparaître - réduit sur mobile
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, isMobile ? 800 : 1500);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <a
      href="https://tally.so/r/mZqRao"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed z-50 group transition-all duration-600 ${
        isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'
      } ${!isMobile ? 'animate-float' : ''}`}
      style={{
        bottom: '2rem',
        right: '2rem',
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out'
      }}
    >
      {/* Effet de glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

      {/* Bouton */}
      <div
        className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
        style={{ padding: '0.875rem 1.5rem' }}
      >
        <span className="text-sm sm:text-base" style={{ letterSpacing: '0.01em' }}>
          S&apos;inscrire
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${!isMobile ? 'group-hover:translate-x-1' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
    </a>
  );
}

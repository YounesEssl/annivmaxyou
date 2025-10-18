'use client';

import { useState, useEffect } from 'react';
import { useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function ActivitiesSection() {
  const activities = [
    'Piscine',
    'Foot',
    'Volley',
    'Basket',
    'Pétanque',
    'Ping-pong',
    'Bornes d\'arcade',
    'Jeux de société',
    'Babyfoot',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const { isMobile } = useDeviceOptimizations();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.2, rootMargin: isMobile ? '-50px' : '-100px' }
    );

    const element = document.getElementById('activities-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isMobile, isInView]);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // Délai initial avant de commencer l'animation - réduit sur mobile
    if (currentIndex === 0) {
      const initialDelay = setTimeout(() => {
        setCurrentIndex(1);
      }, isMobile ? 600 : 1200);
      return () => clearTimeout(initialDelay);
    }

    if (!showAll && currentIndex < activities.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, isMobile ? 200 : 400);
      return () => clearTimeout(timer);
    } else if (currentIndex === activities.length && !showAll) {
      const timer = setTimeout(() => {
        setShowAll(true);
        setHasAnimated(true);
      }, isMobile ? 400 : 800);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, showAll, hasAnimated, activities.length, isInView, isMobile]);

  return (
    <section
      id="activities-section"
      className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-x-hidden"
      style={{ paddingTop: '10rem', paddingBottom: '10rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
    >
      {/* Orbes lumineux - animés uniquement sur desktop */}
      <div
        className={`orb orb-pulse absolute top-1/4 -left-32 sm:left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/8 rounded-full pointer-events-none ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'} ${isMobile ? 'duration-600' : 'duration-1000'}`}>
          {/* Titre qui se transforme */}
          <div className="relative flex items-center justify-center overflow-visible" style={{ minHeight: '600px', paddingTop: '2rem', paddingBottom: '2rem' }}>
            {!isInView || currentIndex === 0 ? (
              <div
                className={`absolute overflow-visible transition-all duration-400 ${currentIndex > 0 ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                style={{ marginBottom: currentIndex === 0 ? '0' : '5rem' }}
              >
                <h2
                  className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center overflow-visible transition-transform duration-300 hover:scale-105"
                  style={{ lineHeight: '1.3' }}
                >
                  Ce qu&apos;il y a à faire…
                </h2>
              </div>
            ) : !showAll && currentIndex > 0 && currentIndex <= activities.length ? (
              <div
                key={`activity-${currentIndex}`}
                className="absolute overflow-visible animate-scale-in"
                style={{ animationDuration: isMobile ? '0.25s' : '0.35s' }}
              >
                <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center overflow-visible" style={{ lineHeight: '1.3' }}>
                  {activities[currentIndex - 1]}
                </p>
              </div>
            ) : (
              <div className="space-y-12 w-full animate-scale-in" style={{ animationDuration: isMobile ? '0.5s' : '0.8s' }}>
                {/* Titre de retour */}
                <div className="overflow-visible animate-fade-in-down" style={{ marginBottom: '3rem', paddingBottom: '1rem', animationDuration: isMobile ? '0.4s' : '0.6s' }}>
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center overflow-visible" style={{ lineHeight: '1.3' }}>
                    Ce qu&apos;il y a à faire…
                  </h2>
                </div>

                {/* Récap en grille */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6" style={{ marginBottom: '4rem' }}>
                  {activities.map((activity, index) => (
                    <span
                      key={activity}
                      className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light animate-fade-in-up"
                      style={{
                        animationDuration: isMobile ? '0.3s' : '0.4s',
                        animationDelay: `${index * (isMobile ? 0.05 : 0.1)}s`,
                        animationFillMode: 'both'
                      }}
                    >
                      {activity}
                      {index < activities.length - 1 && <span className="text-purple-400/50 ml-4">•</span>}
                    </span>
                  ))}
                </div>

                {/* Message final */}
                <div className="text-center animate-fade-in-up delay-500">
                  <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 leading-relaxed">
                    et encore plein de surprises pour que personne ne s&apos;ennuie !
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

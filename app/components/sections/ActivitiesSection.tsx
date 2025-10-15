'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    // Délai initial avant de commencer l'animation
    if (currentIndex === 0) {
      const initialDelay = setTimeout(() => {
        setCurrentIndex(1);
      }, 1200);
      return () => clearTimeout(initialDelay);
    }

    if (!showAll && currentIndex < activities.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else if (currentIndex === activities.length && !showAll) {
      const timer = setTimeout(() => {
        setShowAll(true);
        setHasAnimated(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, showAll, hasAnimated, activities.length, isInView]);

  return (
    <section
      id="activities-section"
      className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-x-hidden"
      style={{ paddingTop: '10rem', paddingBottom: '10rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
    >
      {/* Orbes lumineux */}
      <motion.div
        className="absolute top-1/4 -left-32 sm:left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          onViewportEnter={() => setIsInView(true)}
        >
          {/* Titre qui se transforme */}
          <div className="relative flex items-center justify-center overflow-visible" style={{ minHeight: '600px', paddingTop: '2rem', paddingBottom: '2rem' }}>
            <AnimatePresence mode="wait">
              {!isInView || currentIndex === 0 ? (
                <motion.div
                  key="title"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute overflow-visible"
                  style={{ marginBottom: currentIndex === 0 ? '0' : '5rem' }}
                >
                  <motion.h2
                    className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center overflow-visible"
                    style={{ lineHeight: '1.3' }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    Ce qu&apos;il y a à faire…
                  </motion.h2>
                </motion.div>
              ) : !showAll && currentIndex > 0 && currentIndex <= activities.length ? (
                <motion.div
                  key={`activity-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute overflow-visible"
                >
                  <p className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center overflow-visible" style={{ lineHeight: '1.3' }}>
                    {activities[currentIndex - 1]}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="recap"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-12 w-full"
                >
                  {/* Titre de retour */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="overflow-visible"
                    style={{ marginBottom: '3rem', paddingBottom: '1rem' }}
                  >
                    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center overflow-visible" style={{ lineHeight: '1.3' }}>
                      Ce qu&apos;il y a à faire…
                    </h2>
                  </motion.div>

                  {/* Récap en grille */}
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6" style={{ marginBottom: '4rem' }}>
                    {activities.map((activity, index) => (
                      <motion.span
                        key={activity}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-xl sm:text-2xl md:text-3xl text-white/80 font-light"
                      >
                        {activity}
                        {index < activities.length - 1 && <span className="text-purple-400/50 ml-4">•</span>}
                      </motion.span>
                    ))}
                  </div>

                  {/* Message final */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-center"
                  >
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 leading-relaxed">
                      et encore plein de surprises pour que personne ne s&apos;ennuie !
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/app/hooks/useIsMobile';

const BASE_TEXT = "Vous êtes invités à célébrer un moment ";
const WORDS = ["unique...", "inoubliable...", "immanquable..."];

export default function HeroSection() {
  const [showCursor, setShowCursor] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();

  const typingSpeed = isMobile ? 50 : 70;
  const erasingSpeed = isMobile ? 40 : 60;

  // Générer les particules une seule fois - réduit sur mobile
  const particles = useMemo(() => {
    const count = isMobile ? 8 : 30;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 73) % 100,
      y: (i * 47) % 100,
      duration: isMobile ? 10 + (i % 5) : 15 + (i % 10),
      delay: isMobile ? i * 0.1 : i * 0.2,
    }));
  }, [isMobile]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation du curseur clignotant
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Animation typewriter simple
  useEffect(() => {
    if (!isMounted) return;

    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isErasing = false;

    // Fonction pour trouver le préfixe commun entre deux mots
    const getCommonPrefix = (word1: string, word2: string) => {
      let i = 0;
      while (i < word1.length && i < word2.length && word1[i] === word2[i]) {
        i++;
      }
      return i;
    };

    const type = () => {
      const currentWord = WORDS[currentWordIndex];
      const targetText = BASE_TEXT + currentWord;

      if (!isErasing) {
        // Écriture
        if (currentCharIndex <= targetText.length) {
          setDisplayText(targetText.slice(0, currentCharIndex));
          currentCharIndex++;
          setTimeout(type, typingSpeed);
        } else {
          // Mot complet
          if (currentWordIndex < WORDS.length - 1) {
            // Attendre puis effacer (pause très courte)
            isErasing = true;
            setTimeout(type, isMobile ? 200 : 400);
          } else {
            // Dernier mot - afficher le bouton
            setTimeout(() => setShowButton(true), isMobile ? 400 : 800);
          }
        }
      } else {
        // Effacement
        const nextWord = WORDS[currentWordIndex + 1];
        const commonPrefixLength = getCommonPrefix(currentWord, nextWord);
        const stopAt = BASE_TEXT.length + commonPrefixLength;

        if (currentCharIndex > stopAt) {
          currentCharIndex--;
          setDisplayText(targetText.slice(0, currentCharIndex));
          setTimeout(type, erasingSpeed);
        } else {
          // Effacement terminé - mot suivant
          isErasing = false;
          currentWordIndex++;
          setTimeout(type, isMobile ? 100 : 200);
        }
      }
    };

    type();
  }, [isMounted, isMobile, typingSpeed, erasingSpeed]);

  return (
    <main className="h-screen w-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-x-hidden overflow-y-hidden">
      {/* Particules flottantes en arrière-plan */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/30 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Orbes lumineux animés - réduits sur mobile */}
      <motion.div
        className={`absolute -top-20 -right-20 sm:top-10 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/20 rounded-full pointer-events-none ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
        animate={{
          scale: isMobile ? [1, 1.1, 1] : [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: isMobile ? 6 : 8,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -bottom-20 -left-20 sm:bottom-10 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/20 rounded-full pointer-events-none ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
        animate={{
          scale: isMobile ? [1.1, 1, 1.1] : [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: isMobile ? 7 : 10,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Contenu principal */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-10 text-center relative z-10">
        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="inline-block">
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.35em] text-purple-300/80 font-light">
              27 - 29 Mars 2025
            </p>
          </div>
        </motion.div>

        {/* Texte avec animation typewriter */}
        <div className="min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[280px] flex items-center justify-center px-2 sm:px-4">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight max-w-4xl drop-shadow-2xl">
            {displayText}
            <span
              className={`inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-14 lg:h-16 xl:h-20 ml-1 sm:ml-2 bg-gradient-to-b from-purple-400 to-blue-400 align-middle shadow-lg shadow-purple-400/50 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transition: 'opacity 0.1s' }}
            />
          </h1>
        </div>
      </div>

      {/* Flèche scroll - Position absolue en bas */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.6 }}
            className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-20"
            onClick={() => {
              const nextSection = document.getElementById('intro-section');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ y: 5 }}
          >
            <motion.p
              className="text-xs sm:text-sm text-white/60 tracking-wider font-light"
            >
              Découvrir la suite
            </motion.p>

            <motion.svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-white/60"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: isMobile ? 1 : Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dégradé de transition vers la section suivante */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </main>
  );
}

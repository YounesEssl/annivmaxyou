'use client';

import { motion } from 'framer-motion';

export default function FloatingCTA() {
  return (
    <motion.a
      href="https://tally.so/r/mZqRao"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 group"
      style={{ bottom: '2rem', right: '2rem' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: 1.5 },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Effet de glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />

      {/* Bouton */}
      <div
        className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-xl transition-all duration-300 flex items-center gap-2"
        style={{ padding: '0.875rem 1.5rem' }}
      >
        <span className="text-sm sm:text-base" style={{ letterSpacing: '0.01em' }}>
          S&apos;inscrire
        </span>
        <motion.svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          animate={{ x: [0, 3, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </motion.svg>
      </div>
    </motion.a>
  );
}

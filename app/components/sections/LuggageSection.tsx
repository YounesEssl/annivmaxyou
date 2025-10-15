'use client';

import { motion } from 'framer-motion';

export default function LuggageSection() {
  return (
    <section
      id="luggage-section"
      className="bg-slate-900 flex items-center justify-center relative overflow-x-hidden"
      style={{ paddingTop: '12rem', paddingBottom: '10rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
    >
      {/* Dégradé de transition ultra doux du haut */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '12rem',
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.9) 15%, rgba(15, 23, 42, 0.7) 30%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.3) 70%, rgba(15, 23, 42, 0.1) 85%, rgba(15, 23, 42, 0) 100%)'
        }}
      />

      {/* Orbes lumineux */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -25, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
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
        >
          {/* Titre principal */}
          <div style={{ marginBottom: '8rem' }}>
            <motion.h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              Dans ma valise j&apos;ai…
            </motion.h2>
          </div>

          {/* Layout horizontal: Icône + Contenu */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">
            {/* Grosse icône valise à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Corps de la valise */}
                  <rect x="40" y="70" width="120" height="100" rx="8" fill="url(#luggage-gradient)" />
                  <rect x="40" y="70" width="120" height="100" rx="8" stroke="#60a5fa" strokeWidth="3" />

                  {/* Poignée */}
                  <path d="M 70 70 Q 70 50 100 50 Q 130 50 130 70" stroke="#a78bfa" strokeWidth="4" fill="none" strokeLinecap="round" />

                  {/* Bandes horizontales */}
                  <line x1="40" y1="100" x2="160" y2="100" stroke="#8b5cf6" strokeWidth="2" />
                  <line x1="40" y1="130" x2="160" y2="130" stroke="#8b5cf6" strokeWidth="2" />

                  {/* Serrure */}
                  <circle cx="100" cy="115" r="8" fill="#60a5fa" />
                  <rect x="97" y="115" width="6" height="15" rx="2" fill="#60a5fa" />

                  {/* Coins renforcés */}
                  <circle cx="50" cy="80" r="4" fill="#a78bfa" />
                  <circle cx="150" cy="80" r="4" fill="#a78bfa" />
                  <circle cx="50" cy="160" r="4" fill="#a78bfa" />
                  <circle cx="150" cy="160" r="4" fill="#a78bfa" />

                  {/* Roulettes */}
                  <circle cx="60" cy="175" r="6" fill="#60a5fa" />
                  <circle cx="140" cy="175" r="6" fill="#60a5fa" />

                  <defs>
                    <linearGradient id="luggage-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>

            {/* Contenu texte à droite */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-10"
            >
              {/* Soirée du samedi */}
              <div className="space-y-6">
                <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-relaxed">
                  Pour la soirée du samedi, c&apos;est <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">tenue correcte exigée</span>.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  Néanmoins, l&apos;important est que vous vous sentiez à l&apos;aise, et la seule obligation est de vous habiller de manière élégante. Si le cœur vous en dit, une robe ou une chemise serait un excellent choix pour l&apos;occasion.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" style={{ margin: '2.5rem 0' }} />

              {/* Tenue de sport */}
              <div>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  Pensez à prendre une <span className="font-semibold text-white">tenue de sport</span> si vous comptez en faire <span className="text-white/60">(on pense notamment à ceux qui veulent faire du foot)</span>.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" style={{ margin: '2.5rem 0' }} />

              {/* Maillot de bain */}
              <div>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  Enfin, si le temps le permet, la piscine chauffée sera accessible. Pensez donc à glisser un <span className="font-semibold text-white">maillot de bain</span> dans votre valise, au cas où.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

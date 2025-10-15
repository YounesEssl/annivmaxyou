'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIsMobile } from '@/app/hooks/useIsMobile';

export default function VenueSection() {
  const isMobile = useIsMobile();

  return (
    <section
      id="venue-section"
      className="bg-slate-900 flex items-center justify-center relative overflow-x-hidden"
      style={{ paddingTop: '8rem', paddingBottom: '20rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
    >
      {/* Orbe lumineux - réduit sur mobile */}
      <motion.div
        className={`absolute top-1/3 -left-32 sm:left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/10 rounded-full pointer-events-none ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
        animate={{
          scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
          x: isMobile ? [0, 20, 0] : [0, 40, 0],
          y: isMobile ? [0, -15, 0] : [0, -30, 0],
        }}
        transition={{
          duration: isMobile ? 10 : 15,
          repeat: isMobile ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          transition={{ duration: isMobile ? 0.6 : 1, ease: "easeOut" }}
        >
          {/* Titre */}
          <div style={{ marginBottom: '5rem' }}>
            <motion.h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              Le domaine
            </motion.h2>
          </div>

          {/* Contenu texte + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.1 : 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                À seulement{' '}
                <span className="font-semibold relative inline-block">
                  1h30 de Paris
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400/60 to-purple-400/0"></span>
                </span>
                , on vous invite dans un lieu de rêve, privatisé rien que pour nous :
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                un grand domaine façon{' '}
                <span className="font-semibold">village de vacances</span>, avec tout ce qu&apos;il faut pour faire la fête, faire du sport, manger, danser, boire et quelques surprises…
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                on a tout prévu pour que ce week-end soit
              </p>

              <div style={{ paddingTop: '2rem' }}>
                <motion.span
                  className="inline-block font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  whileHover={{ scale: 1.05, rotate: [-0.5, 0.5, -0.5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  INCROYABLE
                </motion.span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.2 : 0.4 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10">
                <Image
                  src="/domaine.png"
                  alt="Le domaine"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Effet de glow autour de l'image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Dégradé de transition ultra doux */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '20rem',
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.1) 20%, rgba(15, 23, 42, 0.3) 40%, rgba(15, 23, 42, 0.5) 60%, rgba(15, 23, 42, 0.7) 75%, rgba(15, 23, 42, 0.9) 90%, rgba(15, 23, 42, 1) 100%)'
        }}
      />
    </section>
  );
}

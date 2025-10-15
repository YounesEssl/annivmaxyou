'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DrinkSection() {
  const alcoholItems = [
    { name: '60L de bière', delay: 0.2 },
    { name: 'Vin rouge & blanc', delay: 0.3 },
    { name: 'Vodka, rhum, gin, JET 27, Jäger…', delay: 0.4 },
    { name: 'Champagne', delay: 0.5 },
  ];

  const softs = ['Crazy', 'Coca', 'Oasis', 'Orangina', 'Ice Tea', 'Fanta'];

  return (
    <section
      id="drink-section"
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
        className="absolute top-1/4 -right-32 sm:right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, 40, 0],
          y: [0, -20, 0],
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
              À boire !
            </motion.h2>
          </div>

          {/* Annonce principale avec image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" style={{ marginBottom: '10rem' }}>
            {/* Texte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-blue-300 to-purple-400 text-4xl sm:text-5xl md:text-6xl leading-tight">
                  L&apos;ALCOOL SERA
                  <br />
                  EN ILLIMITÉ
                  <br />
                  <span className="text-3xl sm:text-4xl md:text-5xl">TOUT LE WEEK-END !</span>
                </h3>
              </motion.div>
            </motion.div>

            {/* Image à droite */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10">
                <Image
                  src="/alcool.png"
                  alt="Boissons"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10" />
            </motion.div>
          </div>

          {/* Liste des alcools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
            style={{ marginBottom: '8rem' }}
          >
            {alcoholItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex-shrink-0" />
                <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ marginBottom: '8rem' }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-blue-400/50" />
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
              </div>
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-purple-400/50" />
            </div>
          </motion.div>

          {/* Softs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
            style={{ marginBottom: '8rem' }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-relaxed" style={{ marginBottom: '3rem' }}>
              Softs
            </p>

            <div className="flex flex-wrap justify-center gap-6 items-center">
              {softs.map((soft, index) => (
                <motion.span
                  key={soft}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.08 }}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300"
                  style={{
                    textShadow: '0 0 30px rgba(147, 197, 253, 0.3)',
                  }}
                >
                  {soft}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-light text-white/50"
              >
                etc…
              </motion.span>
            </div>
          </motion.div>

          {/* Note sur l'eau */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light italic">
              Pour ce qui est de l&apos;eau, on n&apos;en a pas prévu
              <br />
              <span className="text-white/50">(après il y a le robinet)</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

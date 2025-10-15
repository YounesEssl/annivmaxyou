'use client';

import { motion } from 'framer-motion';

export default function FoodSection() {
  return (
    <section
      id="food-section"
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
        className="absolute top-1/3 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, -35, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
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
              Bouffe
            </motion.h2>
          </div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
            style={{ marginBottom: '6rem' }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light text-center">
              Comme vous pouvez l&apos;imaginer, <span className="font-semibold">nourrir 60 personnes</span> de façon simple, bonne et pas trop chère, c&apos;est très galère.
            </p>

            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light text-center">
              Pour éviter de passer notre week-end dans la cuisine et passer un max de temps à <span className="font-semibold">profiter ensemble</span>, on a opté pour une solution efficace :
            </p>
          </motion.div>

          {/* Solution - Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
            style={{ marginBottom: '8rem' }}
          >
            <motion.h3
              className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-blue-300 to-purple-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              MAXI salades
              <br />
              de pâtes maison !
            </motion.h3>
          </motion.div>

          {/* Divider créatif 1 */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ marginBottom: '8rem' }}
          >
            <div className="flex items-center justify-center gap-3">
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-purple-400/50" />
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
              </div>
              <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-blue-400/50" />
            </div>
          </motion.div>

          {/* Annonce officielle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
            style={{ marginBottom: '6rem' }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-relaxed">
              Ce sera donc le repas officiel proposé, offert par nos soins.
            </p>
          </motion.div>

          {/* Détails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-10"
            style={{ marginBottom: '10rem' }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light text-center">
              L&apos;idée, c&apos;est de faire <span className="font-semibold">simple</span>, convivial, et de pouvoir manger dans la grande salle tous ensemble.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light text-center">
              Bien sûr, si vous préférez autre chose, <span className="font-semibold text-white/90">vous êtes libres de ramener votre propre repas</span> ou d&apos;aller en chercher dans les environs.
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light text-center">
              <span className="font-semibold">Mais bon, ça serait quand même plus cool qu&apos;on mange tous ensemble en plus c&apos;est gratuit</span> 😄
            </p>
          </motion.div>

          {/* Divider créatif 2 */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ marginBottom: '10rem' }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <div className="relative px-6 bg-slate-900">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vendredi soir */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="space-y-10"
            style={{ marginBottom: '10rem' }}
          >
            <div className="text-center space-y-6">
              <p className="text-sm sm:text-base text-purple-300/70 uppercase tracking-widest font-semibold">
                À noter
              </p>

              <p className="text-2xl sm:text-3xl md:text-4xl text-white leading-relaxed font-light">
                Pour notre premier repas ensemble, le vendredi soir, on vous propose un <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">repas / apéro dînatoire</span>.
              </p>
            </div>

            <div className="space-y-8" style={{ marginTop: '4rem' }}>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light text-center">
                L&apos;idée, c&apos;est que chacun apporte quelque chose à partager. Faites au plus simple, que ce soit fait maison ou acheté.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light text-center">
                Des idées comme ça : quiches, cakes, tartes, saucisson, salade, guacamole, pâté, tomates cerises, chips, fruits, gâteaux…
              </p>

              <p className="text-sm sm:text-base text-white/50 leading-relaxed font-light italic text-center">
                (on compte sur vous pour éviter l&apos;armée de chips ✌️)
              </p>
            </div>
          </motion.div>

          {/* Divider créatif 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ marginBottom: '8rem' }}
          >
            <div className="flex items-center justify-center gap-4">
              <motion.div
                className="h-[2px] w-12 bg-gradient-to-r from-transparent to-purple-400/40"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400/40 to-blue-400/40" />
              <motion.div
                className="h-[2px] w-12 bg-gradient-to-l from-transparent to-blue-400/40"
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </div>
          </motion.div>

          {/* Allergies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="relative"
          >
            <div className="border-l-4 border-purple-400/50 bg-purple-900/10 backdrop-blur-sm rounded-r-2xl" style={{ padding: '3rem 2.5rem' }}>
              <div className="space-y-6">
                <p className="text-xs sm:text-sm text-purple-300/70 uppercase tracking-widest font-semibold">
                  Important
                </p>

                <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed font-light">
                  Si vous avez une <span className="font-semibold">allergie alimentaire</span> ou si vous savez à l&apos;avance que vous ne mangerez pas de salade de pâtes, merci de le dire <span className="font-semibold">au plus vite à Maxence ou Younes</span>, pour qu&apos;on puisse s&apos;organiser au mieux côté logistique.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

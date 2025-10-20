'use client';

import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function PriceSection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="price-section"
      className="min-h-dvh bg-slate-900 flex items-center justify-center py-20 sm:py-24 px-6 sm:px-10 relative overflow-x-hidden mb-0"
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
      <div className={`orb orb-pulse absolute top-1/3 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/8 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />
      <div className={`orb orb-pulse absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-600`}>
          {/* Titre principal */}
          <div style={{ marginBottom: '4rem', paddingBottom: '0.5rem' }}>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center overflow-visible"
              style={{ lineHeight: '1.3' }}
            >
              Le prix
            </h2>
          </div>

          {/* Introduction */}
          <div className="animate-fade-in-up delay-100 text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Pour que cet événement ait lieu dans ce lieu de rêve, avec tout ce qu&apos;il faut pour manger, boire et faire la fête, on a besoin que chacun mette un petit coup de pouce.
            </p>
          </div>

          {/* Prix principal - Hero */}
          <div className="animate-scale-in delay-200 text-center" style={{ marginBottom: '4rem' }}>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light" style={{ marginBottom: '1.5rem' }}>
              Le tarif est de
            </p>
            <div>
              <h3 className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 via-blue-300 to-purple-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
                70€
              </h3>
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-relaxed" style={{ marginTop: '1rem' }}>
                PAR PERSONNE
              </p>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light" style={{ marginTop: '1rem' }}>
              pour tout le week-end
            </p>
          </div>

          {/* Ce que ça comprend */}
          <div className="animate-fade-in-up delay-300" style={{ marginBottom: '4rem' }}>
            <h3
              className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200"
              style={{ marginBottom: '4rem', paddingBottom: '0.5rem', lineHeight: '1.3' }}
            >
              Ce que ça comprend
            </h3>

            {/* Grid layout avec design asymétrique */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {/* Carte 1 - 2 nuits */}
              <div
                className="animate-fade-in-up delay-400 relative overflow-hidden rounded-3xl p-1 min-h-[240px] backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.15) 100%)',
                }}
              >
                {/* Contenu centré */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="text-7xl mb-6">🌙</div>
                  <h3 className="text-4xl font-bold text-white mb-2">2 nuits</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-3" />
                  <p className="text-lg text-white/70">Sur place</p>
                </div>
              </div>

              {/* Carte 2 - Repas */}
              <div
                className="animate-fade-in-up delay-500 relative overflow-hidden rounded-3xl p-1 min-h-[240px] backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)',
                }}
              >
                {/* Contenu centré */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="text-7xl mb-6">🍽️</div>
                  <h3 className="text-4xl font-bold text-white mb-2">Tous les repas</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-3" />
                  <p className="text-lg text-white/70">Matin, midi & soir</p>
                </div>
              </div>

              {/* Carte 3 - Cadre privatisé */}
              <div
                className="animate-fade-in-up delay-600 relative overflow-hidden rounded-3xl p-1 min-h-[240px] backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.15) 100%)',
                }}
              >
                {/* Contenu centré */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="text-7xl mb-6">🏰</div>
                  <h3 className="text-4xl font-bold text-white mb-2">Cadre unique</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400/50 to-transparent mb-3" />
                  <p className="text-lg text-white/70">100% privatisé</p>
                </div>
              </div>

              {/* Carte 4 - ALCOOL (HERO - full width) */}
              <div
                className="animate-scale-in delay-700 lg:col-span-2 relative overflow-hidden rounded-3xl p-1 min-h-[300px] backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.15) 0%, rgba(234, 88, 12, 0.25) 50%, rgba(249, 115, 22, 0.15) 100%)',
                }}
              >
                {/* Effets de lumière */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-orange-400/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-radial from-amber-400/25 to-transparent rounded-full blur-3xl" />

                {/* Pattern de bouteilles en background */}
                <div className="absolute top-8 left-8 text-6xl opacity-10">🍺</div>
                <div className="absolute top-8 right-8 text-6xl opacity-10">🥂</div>
                <div className="absolute bottom-8 left-12 text-5xl opacity-10">🍾</div>
                <div className="absolute bottom-8 right-12 text-5xl opacity-10">🍻</div>

                {/* Contenu centré */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-10 z-10">
                  <div className={`text-8xl mb-6 ${!isMobile ? 'animate-rotate' : ''}`}>
                    🍺
                  </div>
                  <h3 className="text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-100 to-orange-200 leading-tight mb-4 uppercase tracking-tight">
                    Alcool illimité
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-4" />
                  <p className="text-xl sm:text-2xl text-orange-100/90 font-light tracking-wide">
                    Tout le week-end
                  </p>
                </div>
              </div>

              {/* Carte 5 - Week-end inoubliable */}
              <div
                className="animate-fade-in-up delay-800 relative overflow-hidden rounded-3xl p-1 min-h-[300px] backdrop-blur-sm transition-transform duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.15) 100%)',
                }}
              >
                {/* Etoiles décoratives */}
                <div className="absolute top-6 right-6 text-3xl opacity-20">✨</div>
                <div className="absolute bottom-6 left-6 text-2xl opacity-20">⭐</div>
                <div className="absolute top-1/2 left-8 text-xl opacity-15">💫</div>

                {/* Contenu centré */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="text-7xl mb-6">🎉</div>
                  <h3 className="text-4xl font-bold text-white mb-2 leading-tight">Week-end<br/>inoubliable</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-3" />
                  <p className="text-lg text-white/70">On l&apos;espère !</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="animate-scale-in delay-900" style={{ marginBottom: '4rem' }}>
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Message final */}
          <div className="animate-fade-in-up delay-1000 text-center">
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              Franchement, on ne fait pas ça tous les ans, c&apos;est peut-être même une fois dans une vie, alors on espère que vous serez au rendez-vous 🔥
            </p>
          </div>
        </div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

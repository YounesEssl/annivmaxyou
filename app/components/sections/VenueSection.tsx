'use client';

import Image from 'next/image';
import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function VenueSection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="venue-section"
      className="min-h-dvh bg-slate-900 flex items-center justify-center py-20 sm:py-24 px-6 sm:px-10 relative overflow-x-hidden mb-0"
      style={{ paddingBottom: '20rem' }}
    >
      {/* Orbe lumineux - animé uniquement sur desktop */}
      <div
        className={`orb orb-pulse absolute top-1/3 -left-32 sm:left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/10 rounded-full pointer-events-none ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-600`}>
          {/* Titre */}
          <div style={{ marginBottom: '5rem' }}>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center transition-transform duration-300 hover:scale-105">
              Le domaine
            </h2>
          </div>

          {/* Contenu texte + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Texte */}
            <div className="space-y-8 animate-fade-in-left delay-100">
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
                <span className="inline-block font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110">
                  INCROYABLE
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-fade-in-right delay-200">
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
            </div>
          </div>
        </div>
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

'use client';

import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';
import Image from 'next/image';

export default function TransportSection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: '-100px' });
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="transport-section"
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
      <div className={`orb orb-pulse absolute top-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-blue-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />
      <div className={`orb orb-pulse absolute bottom-1/3 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/8 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div ref={mainRef as React.RefObject<HTMLDivElement>} className={`${mainVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-1000`}>
          {/* Titre principal */}
          <div style={{ marginBottom: '8rem' }}>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center transition-transform duration-300 hover:scale-103"
            >
              Transport
            </h2>
          </div>

          {/* Layout horizontal inversé: Texte + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" style={{ marginBottom: '8rem' }}>
            {/* Contenu texte à gauche */}
            <div
              ref={textRef as React.RefObject<HTMLDivElement>}
              className={`${textVisible ? 'animate-fade-in-left' : 'opacity-0'} duration-800 delay-200 space-y-10 order-2 lg:order-1`}
            >
              {/* Localisation */}
              <div className="space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                  Le village se trouve à environ <span className="font-semibold">1h30 de route au sud de Paris</span>. Le plus simple, c&apos;est donc de venir en voiture.
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" style={{ margin: '2.5rem 0' }} />

              {/* Organisation covoiturage */}
              <div>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
                  On vous laisse vous organiser entre vous pour les groupes de voiture : pensez à en parler assez vite pour savoir qui part avec qui !
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" style={{ margin: '2.5rem 0' }} />

              {/* Parking */}
              <div className="space-y-4">
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                  Une fois sur place, pas de galère on a un grand <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">parking privé</span>, juste à côté des chalets.
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light">
                  Il y a donc pas de stationnement à payer, et vos voitures seront en sécurité tout le week-end.
                </p>
              </div>
            </div>

            {/* Image à droite */}
            <div
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className={`${imageVisible ? 'animate-fade-in-right' : 'opacity-0'} duration-800 delay-400 relative order-1 lg:order-2`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10">
                <Image
                  src="/parking.png"
                  alt="Parking"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

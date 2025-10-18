'use client';

import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function DownloadSection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: '-100px' });
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="download-section"
      className="bg-slate-900 flex items-center justify-center relative overflow-hidden"
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
      <div className={`orb orb-pulse absolute top-1/3 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/8 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />
      <div className={`orb orb-pulse absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div ref={mainRef as React.RefObject<HTMLDivElement>} className={`${mainVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-1000`}>
          {/* Titre principal */}
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200"
              style={{ lineHeight: '1.3', paddingBottom: '0.5rem' }}
            >
              Besoin d&apos;un récap ?
            </h2>
          </div>

          {/* Description */}
          <div
            ref={descriptionRef as React.RefObject<HTMLDivElement>}
            className={`${descriptionVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-800 delay-200 text-center`}
            style={{ marginBottom: '3.5rem' }}
          >
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light">
              Télécharge toutes les infos pratiques dans un PDF : dates, lieu, prix, programme... tout ce qu&apos;il te faut pour ne rien oublier !
            </p>
          </div>

          {/* Bouton de téléchargement */}
          <div
            ref={buttonRef as React.RefObject<HTMLDivElement>}
            className={`${buttonVisible ? 'animate-scale-in' : 'opacity-0'} duration-800 delay-300 text-center`}
          >
            <a
              href="/recap-anniv.pdf"
              download
              className="inline-flex items-center rounded-2xl text-white relative transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
                border: '2px solid rgba(139, 92, 246, 0.3)',
                padding: '1.25rem 2rem',
                gap: '1rem',
              }}
            >
              {/* Icône */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/20">
                <svg
                  className="w-6 h-6 text-purple-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  />
                </svg>
              </div>

              <div className="text-left">
                <div className="text-lg font-semibold mb-0.5">Télécharger le récap</div>
                <div className="text-sm text-white/60 font-light">PDF - Toutes les infos</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

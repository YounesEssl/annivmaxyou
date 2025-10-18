'use client';

import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function CTASection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: '-100px' });
  const { ref: messageRef, isVisible: messageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="cta-section"
      className="bg-slate-900 flex items-center justify-center relative overflow-hidden"
      style={{ paddingTop: '8rem', paddingBottom: '8rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
    >
      {/* Dégradé de transition ultra doux du haut */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none z-10"
        style={{
          height: '8rem',
          background: 'linear-gradient(to bottom, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.9) 15%, rgba(15, 23, 42, 0.7) 30%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.3) 70%, rgba(15, 23, 42, 0.1) 85%, rgba(15, 23, 42, 0) 100%)'
        }}
      />

      {/* Orbes lumineux */}
      <div className={`orb orb-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] bg-purple-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div ref={mainRef as React.RefObject<HTMLDivElement>} className={`${mainVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-1000 text-center`}>
          {/* Message */}
          <p
            ref={messageRef as React.RefObject<HTMLParagraphElement>}
            className={`${messageVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-800 delay-200 text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light`}
            style={{ marginBottom: '3rem' }}
          >
            Si tu es prêt à t&apos;inscrire définitivement et à régler, tu peux tout de suite cliquer sur le bouton <span className="font-semibold text-white">S&apos;inscrire</span> et remplir le formulaire
          </p>

          {/* Bouton */}
          <div
            ref={buttonRef as React.RefObject<HTMLDivElement>}
            className={`${buttonVisible ? 'animate-scale-in' : 'opacity-0'} duration-800 delay-400`}
          >
            <a
              href="https://tally.so/r/mZqRao"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center relative transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              {/* Effet de glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />

              {/* Bouton */}
              <div
                className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-xl transition-all duration-300 flex items-center gap-3"
                style={{ padding: '1rem 2rem' }}
              >
                <span className="text-lg sm:text-xl">S&apos;inscrire maintenant</span>
                <svg
                  className={`w-5 h-5 ${!isMobile ? 'animate-bounce' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

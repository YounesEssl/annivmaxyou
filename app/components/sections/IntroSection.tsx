'use client';

import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function IntroSection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: isMobile ? '-50px' : '-100px' });
  const { ref: secondBlockRef, isVisible: secondBlockVisible } = useScrollAnimation({ threshold: 0.2, delay: isMobile ? 150 : 300 });

  return (
    <section
      id="intro-section"
      className="min-h-screen bg-slate-900 flex items-center justify-center py-20 sm:py-24 relative overflow-x-hidden"
      style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
    >
      {/* Orbes lumineux - animés uniquement sur desktop */}
      <div
        className={`orb orb-pulse absolute top-1/4 -right-20 sm:right-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/15 rounded-full pointer-events-none ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
      />
      <div
        className={`orb orb-pulse absolute bottom-1/4 -left-20 sm:left-1/4 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/15 rounded-full pointer-events-none ${isMobile ? 'blur-xl' : 'blur-3xl'}`}
        style={{ animationDelay: '1.5s' }}
      />

      <div className="w-full max-w-2xl sm:max-w-3xl mx-auto text-center relative z-10">
        <div ref={contentRef as React.RefObject<HTMLDivElement>} className={`${contentVisible ? 'animate-fade-in-up' : 'opacity-0'} ${isMobile ? 'duration-600' : 'duration-1000'}`}>
          {/* Premier bloc de texte */}
          <div className="space-y-8" style={{ marginBottom: '6rem' }}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light">
              On est <span className="font-semibold">très heureux</span> de vous inviter à célébrer notre <span className="font-semibold">anniversaire commun</span>
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light">
              le week-end du{' '}
              <span className="inline-block font-serif font-bold bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 bg-clip-text text-transparent transition-transform duration-200 hover:scale-105">
                28 mars
              </span>
            </p>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light">
              dans un{' '}
              <span className="relative inline-block font-semibold">
                lieu privatisé
                <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></span>
              </span>{' '}
              à l&apos;occasion !
            </p>
          </div>

          {/* Deuxième bloc de texte */}
          <div ref={secondBlockRef as React.RefObject<HTMLDivElement>} className={`space-y-6 ${secondBlockVisible ? 'animate-fade-in-up' : 'opacity-0'} ${isMobile ? 'duration-600' : 'duration-1000'}`}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              On a vu les choses{' '}
              <span className="font-semibold relative inline-block">
                très grand
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400/70 to-purple-400/0"></span>
              </span>{' '}
              pour que ce week-end soit
            </p>

            {/* Mot inoubliable en gros */}
            <div className="py-6 sm:py-8">
              <span className="inline-block font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-transform duration-300 hover:scale-110">
                inoubliable
              </span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              et que tout le monde se régale !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';
import Image from 'next/image';

export default function AccommodationSection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: '-100px' });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: repartitionRef, isVisible: repartitionVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: bigChaletsRef, isVisible: bigChaletsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: duoChaletsRef, isVisible: duoChaletsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: notesRef, isVisible: notesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: conclusionRef, isVisible: conclusionVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="accommodation-section"
      className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-x-hidden"
      style={{ paddingTop: '10rem', paddingBottom: '10rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
    >
      {/* Orbes lumineux */}
      <div className={`orb orb-pulse absolute top-1/3 -left-32 sm:left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/12 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />
      <div className={`orb orb-pulse absolute bottom-1/3 -right-32 sm:right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-purple-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div ref={mainRef as React.RefObject<HTMLDivElement>} className={`${mainVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-1000`}>
          {/* Titre */}
          <div style={{ marginBottom: '5rem' }}>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center transition-transform duration-300 hover:scale-103"
            >
              Pour bien dormir
            </h2>
          </div>

          {/* Grid: Image + Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center" style={{ marginBottom: '7rem' }}>
            {/* Image à gauche */}
            <div
              ref={imageRef as React.RefObject<HTMLDivElement>}
              className={`${imageVisible ? 'animate-fade-in-left' : 'opacity-0'} duration-800 delay-200 relative order-first`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10">
                <Image
                  src="/chalets.png"
                  alt="Les chalets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10" />
            </div>

            {/* Texte intro à droite */}
            <div
              ref={introRef as React.RefObject<HTMLDivElement>}
              className={`${introVisible ? 'animate-fade-in-right' : 'opacity-0'} duration-800 delay-400 space-y-8`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light">
                On aura la chance de profiter de{' '}
                <span className="font-semibold">15 chalets tout confort</span>, pouvant accueillir jusqu&apos;à{' '}
                <span className="font-semibold">62 personnes</span>, avec un lit individuel réservé pour chaque invité.
              </p>

              <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                (donc pas de matelas gonflable ni de bataille pour le canapé)
              </p>
            </div>
          </div>

          {/* Répartition */}
          <div
            ref={repartitionRef as React.RefObject<HTMLDivElement>}
            className={`${repartitionVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-800 delay-500`}
            style={{ marginBottom: '6rem' }}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center" style={{ marginBottom: '4rem' }}>
              Voici la répartition :
            </h3>

            <div className="space-y-10">
              {/* Grands chalets */}
              <div
                ref={bigChaletsRef as React.RefObject<HTMLDivElement>}
                className={`${bigChaletsVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-600 delay-600`}
              >
                <div className="flex items-start gap-6 sm:gap-8">
                  <div className="flex-shrink-0" style={{ width: '100px', overflow: 'visible' }}>
                    <div
                      className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-blue-300 transition-transform duration-200 hover:scale-105"
                      style={{ fontSize: '5rem', lineHeight: '1.2', display: 'block' }}
                    >
                      3
                    </div>
                  </div>

                  <div className="flex-1 space-y-4" style={{ paddingTop: '1rem' }}>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                      Grands chalets partagés
                    </h4>

                    <p className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                      pour 15, 15 et 8 personnes
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light">
                      avec plusieurs chambres, dortoirs, séjours, salles de bain, terrasses… de quoi loger confortablement en mode coloc&apos; de week-end.
                    </p>
                  </div>
                </div>
              </div>

              {/* Séparateur */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ margin: '3rem 0' }} />

              {/* Chalets duo */}
              <div
                ref={duoChaletsRef as React.RefObject<HTMLDivElement>}
                className={`${duoChaletsVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-600 delay-700`}
              >
                <div className="flex items-start gap-6 sm:gap-8">
                  <div className="flex-shrink-0" style={{ width: '100px', overflow: 'visible' }}>
                    <div
                      className="font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-300 transition-transform duration-200 hover:scale-105"
                      style={{ fontSize: '5rem', lineHeight: '1.2', display: 'block' }}
                    >
                      12
                    </div>
                  </div>

                  <div className="flex-1 space-y-4" style={{ paddingTop: '1rem' }}>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                      Chalets duo
                    </h4>

                    <p className="text-xl sm:text-2xl md:text-3xl text-white/80 leading-relaxed font-light">
                      pour 2 personnes chacun
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed font-light">
                      avec lit individuel, salle de bain et terrasse pour un peu plus d&apos;intimité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes importantes */}
          <div
            ref={notesRef as React.RefObject<HTMLDivElement>}
            className={`${notesVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-800 delay-600 space-y-6`}
            style={{ marginBottom: '6rem' }}
          >
            {/* Info couples */}
            <div className="flex items-start gap-4 sm:gap-6">
              <span className="text-3xl sm:text-4xl flex-shrink-0">🧡</span>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                <span className="font-semibold text-white">Priorité aux couples</span> pour les chalets duo : si vous venez en couple et souhaitez dormir ensemble, on fera le maximum pour vous réserver un de ces chalets.
              </p>
            </div>

            {/* Avertissement */}
            <div className="flex items-start gap-4 sm:gap-6" style={{ marginTop: '2rem' }}>
              <span className="text-3xl sm:text-4xl flex-shrink-0">⚠️</span>
              <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                En revanche, s&apos;il y a plus de 12 couples, certains devront partager un grand chalet – mais toujours avec un lit à soi.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div
            ref={conclusionRef as React.RefObject<HTMLDivElement>}
            className={`${conclusionVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-800 delay-700 text-center`}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-light">
              Bref, <span className="font-semibold">personne ne dormira par terre</span>, et on a tout organisé pour que tout le monde soit à l&apos;aise tout le week-end !
            </p>
          </div>
        </div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

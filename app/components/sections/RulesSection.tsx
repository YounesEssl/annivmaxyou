'use client';

import { useScrollAnimation, useDeviceOptimizations } from '@/app/hooks/useScrollAnimation';

export default function RulesSection() {
  const { isMobile } = useDeviceOptimizations();
  const { ref: mainRef, isVisible: mainVisible } = useScrollAnimation({ threshold: 0.2, rootMargin: '-100px' });
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation({ threshold: 0.2 });

  const rules = [
    {
      title: 'Tu casses → tu payes',
      description: 'Ce serait con que vous ayez à repayer une porte ou un baby-foot, alors on fait gaffe. Et en cas de casse, prévenez tout de suite Maxence ou Younes.',
      delay: 0.2,
    },
    {
      title: 'On est là pour faire la fête, pas pour repeindre les murs.',
      description: 'On évite de vomir partout, c\'est mieux pour tout le monde',
      delay: 0.3,
    },
    {
      title: 'Mélangez-vous !',
      description: 'Tout le monde ne se connaît pas → soyez ouverts et mélangez-vous. On veut que de la bonne humeur et de la bonne ambiance.',
      delay: 0.4,
    },
    {
      title: 'Amusez-vous (obligatoire)',
      description: 'Pas de place pour les endormis ou les blasés → ce week-end est fait pour kiffer à fond.',
      delay: 0.5,
    },
  ];

  return (
    <section
      id="rules-section"
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
      <div className={`orb orb-pulse absolute top-1/3 left-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] bg-purple-500/8 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />
      <div className={`orb orb-pulse absolute bottom-1/4 right-1/4 w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/10 rounded-full ${isMobile ? 'blur-xl' : 'blur-3xl'} pointer-events-none`} />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div ref={mainRef as React.RefObject<HTMLDivElement>} className={`${mainVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-1000`}>
          {/* Titre principal */}
          <div style={{ marginBottom: '8rem' }}>
            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-blue-200 to-purple-200 text-center transition-transform duration-300 hover:scale-103"
            >
              Les rappels logiques
              <br />
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">(mais importants)</span>
            </h2>
          </div>

          {/* Introduction */}
          <div
            ref={introRef as React.RefObject<HTMLDivElement>}
            className={`${introVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-800 delay-100 text-center`}
            style={{ marginBottom: '6rem' }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
              On part du principe que tout le monde est grand et responsable de soi.
              <br />
              Donc, quelques règles simples :
            </p>
          </div>

          {/* Liste des règles */}
          <div style={{ marginTop: '3rem' }}>
            {rules.map((rule, index) => (
              <div
                key={index}
                className={`${mainVisible ? 'animate-fade-in-up' : 'opacity-0'} duration-600`}
                style={{ marginBottom: '4rem', animationDelay: `${rule.delay * 1000}ms` }}
              >
                <div className="flex items-start gap-6 sm:gap-8">
                  <div className="flex-shrink-0">
                    <div
                      className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 backdrop-blur-sm flex items-center justify-center"
                      style={{ width: '5rem', height: '5rem' }}
                    >
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-blue-300">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <div style={{ marginBottom: '1rem' }}>
                      <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold leading-relaxed">
                        {rule.title}
                      </p>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed font-light">
                      {rule.description}
                    </p>
                  </div>
                </div>

                {/* Ligne décorative en bas (sauf pour le dernier) */}
                {index < rules.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ marginTop: '2.5rem' }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dégradé de transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none z-10" />
    </section>
  );
}

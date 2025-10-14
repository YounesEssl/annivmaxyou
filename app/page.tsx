'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './components/AnimatedSection';
import GlassCard from './components/GlassCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-party-purple rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-party-pink rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute -bottom-20 left-1/2 w-72 h-72 bg-party-orange rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="text-center max-w-5xl">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Bonjour à tous
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <GlassCard className="text-xl md:text-2xl leading-relaxed">
              <span className="text-5xl mb-4 block">🎉</span>
              <p className="font-semibold">
                On est très heureux de vous inviter à célébrer notre anniversaire commun
                le week-end du <span className="gradient-text font-bold">28 mars</span>, dans un lieu privatisé à l&apos;occasion ! On a vu les
                choses très grand pour que ce week-end soit inoubliable et que tout le
                monde se régale !!!
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Le Domaine */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            🏞️ Le domaine
          </h2>
          <GlassCard className="text-lg md:text-xl leading-relaxed">
            <p>
              À seulement 1h30 de Paris, on vous invite dans un lieu de rêve, privatisé rien que pour nous :
              un grand domaine façon village de vacances, avec tout ce qu&apos;il faut pour faire la fête, faire du sport,
              manger, danser, boire et quelques surprises… on a tout prévu pour que ce week-end soit{' '}
              <span className="gradient-text font-bold text-2xl">INCROYABLE</span>
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Hébergement */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            🏡 Pour bien dormir
          </h2>

          <GlassCard className="text-lg md:text-xl leading-relaxed mb-8">
            <span className="text-5xl mb-4 block">🏰</span>
            <p className="font-semibold">
              On aura la chance de profiter de <span className="gradient-text">15 chalets tout confort</span>,
              pouvant accueillir jusqu&apos;à 62 personnes, avec un lit individuel réservé pour chaque invité
              (donc pas de matelas gonflable ni de bataille pour le canapé).
            </p>
          </GlassCard>

          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Voici la répartition :</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="text-xl font-bold mb-4 text-party-orange">Grands chalets partagés</h4>
                <p className="text-lg">
                  <span className="font-bold">3 grands chalets</span> pour 15, 15 et 8 personnes,
                  avec plusieurs chambres, dortoirs, séjours, salles de bain, terrasses…
                  de quoi loger confortablement en mode coloc&apos; de week-end.
                </p>
              </GlassCard>

              <GlassCard>
                <h4 className="text-xl font-bold mb-4 text-party-pink">Chalets duo</h4>
                <p className="text-lg">
                  <span className="font-bold">12 chalets duo</span> pour 2 personnes chacun,
                  avec lit individuel, salle de bain et terrasse pour un peu plus d&apos;intimité
                </p>
              </GlassCard>
            </div>
          </div>

          <div className="space-y-4">
            <GlassCard className="border-l-4 border-party-orange">
              <p className="text-lg">
                🧡 <span className="font-bold">Priorité aux couples pour les chalets duo</span> :
                si vous venez en couple et souhaitez dormir ensemble, on fera le maximum pour vous réserver un de ces chalets.
              </p>
            </GlassCard>

            <GlassCard className="border-l-4 border-party-pink">
              <p className="text-lg">
                ⚠️ En revanche, s&apos;il y a plus de 12 couples, certains devront partager un grand chalet –
                mais toujours avec un lit à soi. Bref, <span className="font-bold">personne ne dormira par terre</span>,
                et on a tout organisé pour que tout le monde soit à l&apos;aise tout le week-end !
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Plan du domaine */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="text-center">
            <span className="text-5xl mb-4 block">🪧</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Plan du domaine de 4,5 hectares
            </h2>
            <p className="text-gray-400 text-sm">(Plan à venir)</p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Activités */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 gradient-text text-center">
            🎮 Ce qu&apos;il y a à faire…
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { icon: '💦', label: 'Piscine' },
              { icon: '⛹️', label: 'Foot' },
              { icon: '🏐', label: 'Volley' },
              { icon: '🏀', label: 'Basket' },
              { icon: '⛳', label: 'Pétanque' },
              { icon: '🏓', label: 'Ping-pong' },
              { icon: '🎮', label: 'Bornes d\'arcade' },
              { icon: '🎲', label: 'Jeux de société' },
              { icon: '⚽', label: 'Babyfoot' },
              { icon: '🎁', label: 'Surprises…' },
            ].map((activity, index) => (
              <motion.div
                key={activity.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <GlassCard className="text-center h-full flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl mb-2">{activity.icon}</span>
                  <p className="text-sm md:text-base font-semibold">{activity.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Food */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            🍽 Bouffe
          </h2>

          <GlassCard className="text-lg leading-relaxed mb-6">
            <p className="mb-6">
              Comme vous pouvez l&apos;imaginer, <span className="font-bold">nourrir 60 personnes</span> de façon simple,
              bonne et pas trop chère, c&apos;est très galère. Pour éviter de passer notre week-end dans la cuisine
              et passer un max de temps à <span className="font-bold">profiter ensemble</span>, on a opté pour une solution efficace :
            </p>
            <h3 className="text-3xl md:text-4xl font-bold gradient-text text-center mb-4">
              MAXI salades de pâtes maison !
            </h3>
          </GlassCard>

          <GlassCard className="border-l-4 border-party-pink mb-6">
            <p className="text-xl font-bold mb-2">🚨 Ce sera donc le repas officiel proposé, offert par nos soins.</p>
            <p className="text-lg">
              L&apos;idée, c&apos;est de faire <span className="font-bold">simple</span>, convivial, et de pouvoir manger dans la grande salle tous ensemble.
              Bien sûr, si vous préférez autre chose, <span className="font-bold">vous êtes libres de ramener votre propre repas</span> ou
              d&apos;aller en chercher dans les environs. Mais bon, ça serait quand même plus cool qu&apos;on mange tous ensemble en plus c&apos;est gratuit 😄
            </p>
          </GlassCard>

          <GlassCard className="border-l-4 border-party-blue mb-6">
            <p className="text-lg mb-2">
              <span className="font-bold">🪧 A noter</span> : Pour notre premier repas ensemble, le vendredi soir,
              on vous propose un <span className="font-bold">repas / apéro dînatoire</span>.
            </p>
            <p className="text-lg mb-4">
              L&apos;idée, c&apos;est que chacun apporte quelque chose à partager. Faites au plus simple, que ce soit fait maison ou acheté.
            </p>
            <p className="text-base text-gray-300">
              Des idées comme ça : quiches, cakes, tartes, saucisson, salade, guacamole, pâté, tomates cerises, chips, fruits, gâteaux…
              (on compte sur vous pour éviter l&apos;armée de chips ✌️).
            </p>
          </GlassCard>

          <GlassCard className="border-l-4 border-party-orange bg-party-orange/10">
            <p className="text-lg">
              ⚠️ Si vous avez une allergie alimentaire ou si vous savez à l&apos;avance que vous ne mangerez pas de salade de pâtes,
              merci de le dire au plus vite à Maxence ou Younes, pour qu&apos;on puisse s&apos;organiser au mieux côté logistique.
            </p>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Drinks */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            🍻 A boire !
          </h2>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="bg-gradient-to-r from-party-purple/20 to-party-pink/20 border-2 border-party-pink mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-center mb-4">
                L&apos;ALCOOL SERA EN ILLIMITÉ TOUT LE WEEK-END ! 🍾
              </h3>
            </GlassCard>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <GlassCard>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Alcools</h4>
              <ul className="space-y-2 text-lg">
                <li>🍺 60L de bière</li>
                <li>🍷 Vin rouge & blanc</li>
                <li>🥃 Vodka, rhum, gin, JET 27, Jäger…</li>
                <li>🥂 Champagne</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <h4 className="text-2xl font-bold mb-4 gradient-text">Softs</h4>
              <p className="text-lg mb-4">
                🥤 Crazy, Coca, Oasis, Orangina, Ice Tea, Fanta etc…
              </p>
              <p className="text-base text-gray-400">
                💦 Pour ce qui est de l&apos;eau, on n&apos;en a pas prévu (après il y a le robinet)
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Dress Code */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            👗 Dans ma valise j&apos;ai…
          </h2>

          <div className="space-y-6">
            <GlassCard className="border-l-4 border-party-purple">
              <h3 className="text-2xl font-bold mb-4">Soirée du samedi</h3>
              <p className="text-lg">
                Pour la soirée du samedi, c&apos;est <span className="font-bold">tenue correct exigé</span>.
                Néanmoins, l&apos;important est que vous vous sentiez à l&apos;aise, et la seule obligation est de vous habiller de manière élégante.
                Si le cœur vous en dit, une robe ou une chemise serait un excellent choix pour l&apos;occasion.
              </p>
            </GlassCard>

            <GlassCard>
              <p className="text-lg">
                Pensez à prendre une <span className="font-bold">tenue de sport</span> si vous comptez en faire
                (on pense notamment a ceux qui veulent faire du foot).
              </p>
            </GlassCard>

            <GlassCard>
              <p className="text-lg">
                Enfin, si le temps le permet, la piscine chauffée sera accessible. Pensez donc à glisser un{' '}
                <span className="font-bold">maillot de bain</span> dans votre valise, au cas où.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Transport */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            🚗 Transport
          </h2>

          <div className="space-y-6">
            <GlassCard className="text-lg">
              <p>
                Le village se trouve à environ <span className="font-bold">1h30 de route au sud de Paris</span>.
                Le plus simple, c&apos;est donc de venir en voiture.
              </p>
            </GlassCard>

            <GlassCard className="border-l-4 border-party-blue">
              <p className="text-lg">
                🧩 On vous laisse vous organiser entre vous pour les groupes de voiture :
                pensez à en parler assez vite pour savoir qui part avec qui !
              </p>
            </GlassCard>

            <GlassCard className="bg-party-purple/10 border-2 border-party-purple">
              <span className="text-5xl mb-4 block">🅿️</span>
              <p className="text-lg mb-2">
                Une fois sur place, pas de galère on a un grand <span className="font-bold">parking privé</span>,
                juste à côté des chalets.
              </p>
              <p className="text-lg">
                👉 Il y a donc pas de stationnement à payer, et vos voitures seront en sécurité tout le week-end.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Les Règles */}
      <AnimatedSection className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            ⚖️ Les rappels logiques (mais importants)
          </h2>

          <p className="text-xl text-center mb-8">
            On part du principe que tout le monde est grand et responsable de soi.
            Donc, quelques règles simples :
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="border-l-4 border-party-orange">
              <h3 className="text-2xl font-bold mb-2">⚠ Tu casses → tu payes</h3>
              <p className="text-lg">
                Ce serait con que vous ayez à repayer une porte ou un baby-foot, alors
                👉 on fait gaffe. Et en cas de casse, prévenez tout de suite Younes ou Maxence.
              </p>
            </GlassCard>

            <GlassCard className="border-l-4 border-party-pink">
              <h3 className="text-2xl font-bold mb-2">🤢 On est là pour faire la fête, pas pour repeindre les murs.</h3>
              <p className="text-lg">
                On évite de vomir partout, c&apos;est mieux pour tout le monde
              </p>
            </GlassCard>

            <GlassCard className="border-l-4 border-party-blue">
              <h3 className="text-2xl font-bold mb-2">🤝 Mélangez-vous !</h3>
              <p className="text-lg">
                Tout le monde ne se connaît pas → soyez ouverts et mélangez-vous.
                On veut que de la bonne humeur et de la bonne ambiance.
              </p>
            </GlassCard>

            <GlassCard className="border-l-4 border-party-purple">
              <h3 className="text-2xl font-bold mb-2">🕺 Amusez-vous (obligatoire)</h3>
              <p className="text-lg">
                Pas de place pour les endormis ou les blasés → ce week-end est fait pour kiffer à fond.
              </p>
            </GlassCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection className="py-20 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 gradient-text text-center">
            📜 Le prix
          </h2>

          <GlassCard className="text-lg leading-relaxed mb-8">
            <span className="text-5xl mb-4 block">💰</span>
            <p className="text-xl mb-6">
              Pour que cet événement ait lieu dans ce lieu de rêve, avec tout ce qu&apos;il faut pour manger,
              boire et faire la fête, on a besoin que chacun mette un petit coup de pouce.
            </p>
          </GlassCard>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="bg-gradient-to-br from-party-orange/20 via-party-pink/20 to-party-purple/20 border-2 border-party-pink text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Le tarif est de <span className="text-5xl md:text-6xl gradient-text block my-4">70€</span> PAR PERSONNE
              </h3>
              <p className="text-xl">pour tout le week-end.</p>
            </GlassCard>
          </motion.div>

          <GlassCard className="mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ça comprend :</h3>
            <ul className="space-y-3 text-lg">
              <li>✅ 2 nuits sur place</li>
              <li>✅ Tous les repas principaux</li>
              <li className="text-xl font-bold text-party-pink">✅ L&apos;ALCOOL EN ILLIMITÉ TOUT LE WEEK-END</li>
              <li>✅ Un cadre unique et entièrement privatisé</li>
              <li>✅ Et surtout : un week-end, on l&apos;espère inoubliable</li>
            </ul>
          </GlassCard>

          <motion.div
            className="text-center text-2xl md:text-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p>
              Franchement, on ne fait pas ça tous les ans, c&apos;est peut-être même une fois dans une vie, alors on
              espère que vous serez au rendez-vous{' '}
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                🔥
              </motion.span>
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </main>
  );
}

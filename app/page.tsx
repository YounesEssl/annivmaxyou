'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Animated gradient orb */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-from/20 via-accent-via/10 to-accent-to/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-widest text-accent-via font-semibold mb-6"
          >
            28 Mars 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-8 gradient-text"
          >
            Bonjour à tous
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg mx-auto"
          >
            <p className="text-xl leading-relaxed text-gray-700">
              On est très heureux de vous inviter à célébrer notre anniversaire commun
              le week-end du <strong>28 mars</strong>, dans un lieu privatisé à l&apos;occasion ! On a vu les
              choses très grand pour que ce week-end soit inoubliable et que tout le
              monde se régale !!!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Le domaine */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 relative overflow-hidden">
        {/* Purple gradient orb */}
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-purple/15 via-accent-via/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Le domaine
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                À seulement 1h30 de Paris, on vous invite dans un lieu de rêve, privatisé rien que pour nous :
                un grand domaine façon village de vacances, avec tout ce qu&apos;il faut pour faire la fête, faire du sport,
                manger, danser, boire et quelques surprises… on a tout prévu pour que ce week-end soit <strong>INCROYABLE</strong>
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/domaine.png"
                alt="Le domaine"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Hébergement */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pour bien dormir
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-gray-700">
                On aura la chance de profiter de <strong>15 chalets tout confort</strong>, pouvant accueillir jusqu&apos;à 62 personnes,
                avec un lit individuel réservé pour chaque invité.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-accent-from pl-4">
                  <h4 className="font-semibold text-sm mb-1 text-accent-from">Grands chalets partagés</h4>
                  <p className="text-sm text-gray-700">
                    <strong>3 grands chalets</strong> pour 15, 15 et 8 personnes
                  </p>
                </div>

                <div className="border-l-4 border-accent-via pl-4">
                  <h4 className="font-semibold text-sm mb-1 text-accent-via">Chalets duo</h4>
                  <p className="text-sm text-gray-700">
                    <strong>12 chalets duo</strong> pour 2 personnes chacun
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <p className="text-gray-700">
                  🧡 <strong>Priorité aux couples pour les chalets duo</strong>
                </p>
                <p className="text-gray-700">
                  ⚠️ <strong>Personne ne dormira par terre</strong> !
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/chalets.png"
                alt="Les chalets"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Plan */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 relative overflow-hidden">
        {/* Orange gradient orb */}
        <motion.div
          className="absolute top-1/2 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-accent-from/20 via-accent-to/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Plan du domaine
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            4,5 hectares privatisés
          </motion.p>

          <motion.div
            className="bg-gray-50 rounded-2xl p-8 relative h-[600px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/plan-domaine.png"
              alt="Plan du domaine"
              fill
              className="object-contain p-4"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Activités */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 bg-gray-50 relative overflow-hidden">
        {/* Amber gradient orb */}
        <motion.div
          className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-gradient-to-br from-accent-via/15 via-accent-to/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 30, 0]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ce qu&apos;il y a à faire…
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/activites.png"
                alt="Activités"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <div className="grid grid-cols-2 gap-3">
              {[
                'Piscine',
                'Foot',
                'Volley',
                'Basket',
                'Pétanque',
                'Ping-pong',
                'Bornes d\'arcade',
                'Jeux de société',
                'Babyfoot',
                'Surprises…',
              ].map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-medium text-gray-700">{activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Bouffe */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 relative overflow-hidden">
        {/* Orange gradient orb */}
        <motion.div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent-from/18 via-accent-via/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.18, 0.25, 0.18]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Bouffe
          </motion.h2>

          <div className="space-y-6">
            <motion.p
              className="text-base text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Comme vous pouvez l&apos;imaginer, nourrir 60 personnes c&apos;est très galère. Pour profiter ensemble :
            </motion.p>

            <motion.div
              className="gradient-accent rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-serif text-2xl md:text-3xl font-bold text-white">
                MAXI salades de pâtes maison !
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl p-6 space-y-3 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-semibold text-gray-900">
                🚨 Repas officiel offert par nos soins
              </p>
              <p className="text-gray-700">
                Mais vous êtes libres de ramener votre propre repas. <strong>Ce serait plus cool qu&apos;on mange tous ensemble 😄</strong>
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-50 rounded-xl p-6 space-y-2 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-700">
                <strong>🪧 Vendredi soir</strong> : repas / apéro dînatoire. Chacun apporte quelque chose à partager.
              </p>
              <p className="text-xs text-gray-600">
                Quiches, cakes, tartes, saucisson, guacamole, fruits, gâteaux...
              </p>
            </motion.div>

            <motion.div
              className="border-l-4 border-accent-from pl-4 py-2 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-gray-700">
                ⚠️ Allergie alimentaire ? Prévenez Maxence ou Younes au plus vite.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* A boire */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 bg-gray-50 relative overflow-hidden">
        {/* Purple-amber gradient orb */}
        <motion.div
          className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-gradient-to-tr from-accent-purple/12 via-accent-from/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A boire !
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="gradient-accent rounded-2xl p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="font-serif text-2xl md:text-3xl font-bold text-white">
                L&apos;ALCOOL SERA EN ILLIMITÉ<br />TOUT LE WEEK-END ! 🍾
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white rounded-xl p-6 shadow-sm space-y-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-semibold text-base mb-3">Alcools</h3>
                <p className="text-sm text-gray-700">🍺 60L de bière</p>
                <p className="text-sm text-gray-700">🍷 Vin</p>
                <p className="text-sm text-gray-700">🥃 Vodka, rhum, gin...</p>
                <p className="text-sm text-gray-700">🥂 Champagne</p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-sm space-y-2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-semibold text-base mb-3">Softs</h3>
                <p className="text-sm text-gray-700">🥤 Crazy, Coca, Oasis, Orangina...</p>
                <p className="text-xs text-gray-600 mt-2">💦 Eau du robinet disponible</p>
              </motion.div>

              <motion.div
                className="col-span-2 relative h-[200px] rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/bar.png"
                  alt="Bar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Valise */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 relative overflow-hidden">
        {/* Amber gradient orb */}
        <motion.div
          className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-gradient-to-bl from-accent-via/16 via-accent-to/9 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Dans ma valise j&apos;ai…
          </motion.h2>

          <div className="space-y-6">
            {[
              { emoji: '👔', title: 'Samedi soir : tenue correcte exigée', desc: 'Robe ou chemise conseillée, mais soyez à l\'aise avant tout.' },
              { emoji: '⚽', title: 'Tenue de sport', desc: 'Si vous comptez faire du foot ou d\'autres activités sportives.' },
              { emoji: '🏊', title: 'Maillot de bain', desc: 'La piscine chauffée sera accessible si le temps le permet.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <p className="text-gray-700">
                  <span className="text-2xl mr-3">{item.emoji}</span>
                  <strong>{item.title}</strong> : {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Transport */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 bg-gray-50 relative overflow-hidden">
        {/* Orange-purple gradient orb */}
        <motion.div
          className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-accent-from/14 via-accent-purple/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 40, 0]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Transport
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base text-gray-700">
                Le village se trouve à environ <strong>1h30 de route au sud de Paris</strong>. Le plus simple : venir en voiture.
              </p>

              <p className="text-sm text-gray-700">
                🧩 Organisez-vous entre vous pour les groupes de voiture !
              </p>

              <motion.div
                className="bg-gradient-to-br from-accent-from/10 to-accent-via/10 rounded-xl p-6 space-y-2 border border-accent-from/20"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-gray-700">
                  🅿️ Grand <strong>parking privé</strong> juste à côté des chalets
                </p>
                <p className="text-sm text-gray-700">
                  👉 Pas de stationnement à payer, voitures en sécurité
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/parking.png"
                alt="Parking"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Règles */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 relative overflow-hidden">
        {/* Purple gradient orb */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-accent-purple/14 via-accent-via/8 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Les rappels logiques<br />(mais importants)
          </motion.h2>

          <motion.p
            className="text-base text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Quelques règles simples :
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '⚠', title: 'Tu casses → tu payes', desc: 'Faites gaffe. En cas de casse, prévenez Younes ou Maxence.' },
              { icon: '🤢', title: 'Pas de déco murale', desc: 'On évite de vomir partout, merci.' },
              { icon: '🤝', title: 'Mélangez-vous !', desc: 'Soyez ouverts. On veut de la bonne humeur.' },
              { icon: '🕺', title: 'Amusez-vous (obligatoire)', desc: 'Pas de place pour les blasés. Kiffez à fond !' }
            ].map((rule, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="font-semibold text-base mb-2">
                  {rule.icon} {rule.title}
                </h3>
                <p className="text-sm text-gray-700">{rule.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Prix */}
      <AnimatedSection className="min-h-screen max-h-screen flex items-center px-6 pb-20 bg-gray-50 relative overflow-hidden">
        {/* Large orange-amber gradient orb */}
        <motion.div
          className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-from/20 via-accent-via/12 to-accent-to/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="max-w-4xl mx-auto relative z-10 w-full">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Le prix
          </motion.h2>

          <motion.p
            className="text-base text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Pour que cet événement ait lieu, on a besoin que chacun mette un petit coup de pouce.
          </motion.p>

          <motion.div
            className="bg-white rounded-2xl p-10 shadow-lg text-center mb-8 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-from/5 via-accent-via/5 to-accent-to/5" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest text-accent-via mb-3">Le tarif est de</p>
              <p className="font-serif text-6xl font-bold gradient-text mb-3">70€</p>
              <p className="text-lg font-semibold text-gray-900">PAR PERSONNE</p>
              <p className="text-sm text-gray-600 mt-1">pour tout le week-end.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Ça comprend :</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✅ 2 nuits sur place</li>
              <li>✅ Tous les repas principaux</li>
              <li className="font-bold">✅ L&apos;ALCOOL EN ILLIMITÉ</li>
              <li>✅ Un cadre unique et privatisé</li>
              <li>✅ Un week-end inoubliable</li>
            </ul>
          </motion.div>

          <motion.p
            className="text-base text-center text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            On ne fait pas ça tous les ans, c&apos;est peut-être une fois dans une vie, alors on espère que vous serez au rendez-vous 🔥
          </motion.p>
        </div>
      </AnimatedSection>
    </main>
  );
}

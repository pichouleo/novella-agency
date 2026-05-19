'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const steps = [
  {
    number: '01',
    title: 'Échange',
    description:
      'Un appel découverte pour comprendre votre activité, vos objectifs et votre clientèle cible. On définit ensemble la direction du projet.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12h8M8 8h5M4 4h16v12H4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 16l-2 4 4-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Conception',
    description:
      'Design sur-mesure présenté avant le développement. Vous validez chaque choix visuel : couleurs, typographies, structure des pages.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="16" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 7h20M7 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M9 11h6M9 14h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Développement',
    description:
      'Intégration soignée, optimisations performances et SEO. Vous suivez l\'avancement en temps réel sur un lien de prévisualisation.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Livraison',
    description:
      'Mise en ligne, formation à la gestion du contenu et suivi post-lancement. Votre site est entre de bonnes mains — pour longtemps.',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.3L12 17l-6.2 4.2 2.4-7.3L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="processus" className="section bg-surface relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* header */}
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="label mb-4">Comment je travaille</p>
          <h2 className="display font-serif text-[clamp(2.25rem,5vw,4rem)] font-light text-cream max-w-[520px] leading-tight">
            Un processus{' '}
            <em className="italic text-gold">clair</em> du premier contact à la mise en ligne.
          </h2>
        </motion.div>

        {/* steps */}
        <div className="relative">
          {/* connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%-1px)] w-3/4 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,164,98,0.2) 15%, rgba(201,164,98,0.2) 85%, transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-start lg:items-center text-left lg:text-center gap-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              >
                {/* icon circle */}
                <div className="relative flex items-center justify-center w-[3.5rem] h-[3.5rem] rounded-full border border-gold/25 bg-card text-gold/70 flex-shrink-0 z-10 group-hover:border-gold/60 transition-colors">
                  {step.icon}
                  {/* step number overlay */}
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold flex items-center justify-center text-[0.55rem] font-bold text-bg">
                    {i + 1}
                  </span>
                </div>

                {/* text */}
                <div>
                  <h3 className="font-serif text-xl text-cream mb-2">{step.title}</h3>
                  <p className="text-body text-[0.875rem] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-body mb-6">Prêt à démarrer votre projet ?</p>
          <a href="#contact" className="btn-gold">
            <span>Démarrer l&apos;aventure</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const services = [
  {
    number: '01',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 10h28" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="6" cy="7.5" r="1" fill="currentColor"/>
        <circle cx="10" cy="7.5" r="1" fill="currentColor"/>
        <path d="M8 17l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Site Vitrine',
    description:
      'Un site web élégant et performant qui reflète votre identité. Conçu sur-mesure, optimisé pour convertir vos visiteurs en clients.',
    tags: ['Design sur-mesure', 'Responsive', 'Rapide'],
  },
  {
    number: '02',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M20 20l7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M9 13h8M13 9v8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Référencement SEO',
    description:
      'Gagner en visibilité sur Google pour les recherches de vos clients locaux. Stratégie de mots-clés, optimisation technique et contenu pensé pour le long terme.',
    tags: ['Google #1', 'SEO local', 'Audit offert'],
  },
  {
    number: '03',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3l2.5 5 5.5.8-4 3.9.95 5.5L16 15.5l-4.95 2.7.95-5.5-4-3.9 5.5-.8L16 3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M5 22h22M8 26h16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Maintenance',
    description:
      'Votre site reste sécurisé, à jour et opérationnel. Mises à jour régulières, sauvegardes automatiques et support réactif inclus.',
    tags: ['Mises à jour', 'Sécurité', 'Support réactif'],
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay: i * 0.15 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="section bg-bg relative">
      {/* subtle separator line */}
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
          <p className="label mb-4">Ce que je fais</p>
          <h2 className="display font-serif text-[clamp(2.25rem,5vw,4rem)] font-light text-cream max-w-[520px] leading-tight">
            Des services pensés pour votre{' '}
            <em className="italic text-gold">réussite</em> en ligne.
          </h2>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease } }}
              className="group relative flex flex-col p-8 lg:p-10 bg-card border border-white/[0.05] hover:border-gold/25 transition-colors duration-500"
              data-hover
            >
              {/* number */}
              <span className="font-serif text-[4rem] font-light text-white/[0.04] absolute top-4 right-6 leading-none select-none">
                {s.number}
              </span>

              {/* icon */}
              <div className="text-gold/60 group-hover:text-gold mb-8 transition-colors duration-300">
                {s.icon}
              </div>

              {/* title */}
              <h3 className="font-serif text-2xl font-light text-cream mb-4">
                {s.title}
              </h3>

              {/* description */}
              <p className="text-body text-[0.9rem] leading-relaxed flex-1 mb-8">
                {s.description}
              </p>

              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-gold/70 border border-gold/15 group-hover:border-gold/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* hover accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="#contact" className="btn-gold">
            <span>Demander un devis gratuit</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

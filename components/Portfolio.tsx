'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const projects = [
  {
    id: 'secure-tech',
    label: 'Sécurité & Technologie',
    name: 'SecureTech Normandie',
    url: 'https://securetechnormandie.fr',
    description:
      'Site vitrine professionnel pour une entreprise spécialisée en solutions de sécurité en Normandie. Design sobre et rassurant, optimisé pour la génération de leads locaux.',
    tags: ['Site vitrine', 'SEO local', 'Sécurité'],
    accent: '#1A2E4A',
    accentLight: '#2E5F8A',
    year: '2024',
    mockLines: ['Alarmes', 'Vidéosurveillance', 'Contrôle d\'accès', 'Télésurveillance'],
  },
  {
    id: 'yannick-decors',
    label: 'Décoration & Artisanat',
    name: 'Yannick Décors',
    url: 'https://yannickdecors.pro',
    description:
      'Vitrine en ligne pour un artisan décorateur. Galerie de réalisations, formulaire de contact et présence locale renforcée. Design chaleureux et élégant.',
    tags: ['Site vitrine', 'Galerie', 'Artisan'],
    accent: '#2E2018',
    accentLight: '#6B4226',
    year: '2024',
    mockLines: ['Peinture décorative', 'Enduits', 'Papier peint', 'Rénovation'],
  },
]

/* Browser-style project preview mockup */
function ProjectMock({ p }: { p: (typeof projects)[0] }) {
  return (
    <div
      className="relative w-full rounded-sm overflow-hidden select-none"
      style={{ aspectRatio: '16/10', background: p.accent }}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-black/40">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 bg-white/10 rounded-sm px-3 py-0.5 text-[0.55rem] text-white/30 font-mono">
          {p.url.replace('https://', '')}
        </div>
      </div>

      {/* fake navbar */}
      <div className="px-4 py-2 flex items-center gap-6 border-b border-white/5">
        <div className="w-16 h-2 rounded-full" style={{ background: p.accentLight }} />
        {['', '', '', ''].map((_, i) => (
          <div key={i} className="w-10 h-1.5 rounded-full bg-white/10" />
        ))}
      </div>

      {/* hero area */}
      <div className="px-4 py-5 flex flex-col gap-3">
        <div className="w-2/3 h-4 rounded" style={{ background: `${p.accentLight}80` }} />
        <div className="w-1/2 h-2.5 rounded bg-white/10" />
        <div className="w-1/3 h-2.5 rounded bg-white/10" />
        <div className="flex gap-2 mt-2">
          <div className="px-4 py-1.5 rounded-sm text-[0.5rem] font-bold" style={{ background: p.accentLight, color: '#FFF' }}>
            Devis gratuit
          </div>
        </div>
      </div>

      {/* service pills */}
      <div className="absolute bottom-6 left-4 right-4 flex flex-wrap gap-2">
        {p.mockLines.map((line) => (
          <span key={line} className="px-2 py-1 rounded-sm text-[0.45rem] bg-white/8 text-white/40">
            {line}
          </span>
        ))}
      </div>

      {/* gold shimmer overlay on hover */}
      <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
    </div>
  )
}

export default function Portfolio() {
  return (
    <section id="realisations" className="section bg-surface relative">
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
          <p className="label mb-4">Réalisations</p>
          <h2 className="display font-serif text-[clamp(2.25rem,5vw,4rem)] font-light text-cream max-w-[560px] leading-tight">
            Des sites qui <em className="italic text-gold">travaillent</em>{' '}
            pour vous, 24h/24.
          </h2>
        </motion.div>

        {/* project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="group flex flex-col gap-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease, delay: i * 0.15 }}
            >
              {/* preview */}
              <div className="relative overflow-hidden border border-white/5 group-hover:border-gold/20 transition-colors duration-500">
                <ProjectMock p={p} />

                {/* visit overlay */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: 'rgba(7,7,13,0.7)', backdropFilter: 'blur(4px)' }}
                  data-hover
                >
                  <span className="btn-gold text-sm">
                    <span>Voir le site</span>
                    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>

              {/* meta */}
              <div className="flex flex-col gap-3 px-1">
                <div className="flex items-center justify-between">
                  <p className="label text-gold/70">{p.label}</p>
                  <span className="text-[0.75rem] text-muted">{p.year}</span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl font-light text-cream group-hover:text-gold transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="text-body text-sm leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-gold/60 border border-gold/15">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

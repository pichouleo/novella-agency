'use client'
import { motion } from 'framer-motion'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/léo-pichou-aa6759207',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/leo_pch',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pichouleo',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
      </svg>
    ),
  },
]

const navLinks = [
  ['Services',     '#services'    ],
  ['Réalisations', '#realisations'],
  ['À propos',    '#apropos'     ],
  ['Processus',   '#processus'   ],
  ['Contact',     '#contact'     ],
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-bg border-t border-white/[0.05]">
      {/* gold line top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex flex-col leading-none">
              <span className="font-serif text-[2rem] font-light text-cream tracking-[0.06em]">Novella</span>
              <span className="label text-gold/50 tracking-[0.4em] text-[0.55rem]">AGENCY</span>
            </a>
            <p className="text-body text-sm leading-relaxed max-w-[240px] mt-2">
              L&apos;excellence digitale, façonnée pour vous.<br/>
              Normandie · France entière.
            </p>
            {/* socials */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-white/[0.08] text-muted hover:text-gold hover:border-gold/30 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  data-hover
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <h3 className="label text-[0.65rem]">Navigation</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-body text-sm hover:text-gold transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="label text-[0.65rem]">Contact direct</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+33617133263" className="text-body text-sm hover:text-gold transition-colors duration-300">
                06 17 13 32 63
              </a>
              <a href="mailto:leoinfluenceagency@gmail.com" className="text-body text-sm hover:text-gold transition-colors duration-300 break-all">
                leoinfluenceagency@gmail.com
              </a>
              <a href="#contact" className="btn-gold mt-4 self-start text-xs">
                <span>Demander un devis</span>
              </a>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {year} Novella Agency — Tous droits réservés
          </p>
          <p className="text-muted text-xs">
            Conçu & développé avec soin en Normandie
          </p>
        </div>
      </div>
    </footer>
  )
}

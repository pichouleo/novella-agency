'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/* Animated orb background */
function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* large orb top-right */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700,
          top: -200, right: -200,
          background: 'radial-gradient(circle, rgba(201,164,98,0.07) 0%, transparent 65%)',
        }}
      />
      {/* small orb bottom-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          bottom: -100, left: -100,
          background: 'radial-gradient(circle, rgba(201,164,98,0.05) 0%, transparent 65%)',
        }}
      />
      {/* grid lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A462" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)"/>
      </svg>
    </div>
  )
}

/* Spinning circle decoration */
function SpinDeco() {
  return (
    <div
      className="absolute right-8 bottom-24 lg:right-16 lg:bottom-16 w-[120px] h-[120px] opacity-20 pointer-events-none"
      style={{ animation: 'spin 20s linear infinite' }}
      aria-hidden
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="56" stroke="#C9A462" strokeWidth="0.5" strokeDasharray="4 6"/>
        <text
          fill="#C9A462"
          fontSize="9"
          fontFamily="var(--font-jakarta)"
          letterSpacing="3"
        >
          <textPath href="#circle-path">
            NORMANDIE · FRANCE ENTIÈRE · WEB DESIGN ·
          </textPath>
        </text>
        <path id="circle-path" d="M 60,4 A 56,56 0 1 1 59.99,4" fill="none"/>
      </svg>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)

  /* Subtle parallax on scroll */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handler = () => {
      const y = window.scrollY
      const inner = el.querySelector<HTMLElement>('.hero-inner')
      if (inner) inner.style.transform = `translateY(${y * 0.25}px)`
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg noise"
      style={{ paddingTop: '6rem' }}
    >
      <Orbs />
      <SpinDeco />

      <div className="hero-inner relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 w-full py-24">
        {/* label */}
        <motion.p
          className="label mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
        >
          Agence Web · Normandie
        </motion.p>

        {/* headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="display font-serif text-[clamp(3rem,8vw,7.5rem)] font-light text-cream"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.45 }}
          >
            L&apos;excellence
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="display font-serif text-[clamp(3rem,8vw,7.5rem)] font-light italic"
            style={{ color: 'var(--gold)' }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.58 }}
          >
            digitale,
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            className="display font-serif text-[clamp(3rem,8vw,7.5rem)] font-light text-cream"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease, delay: 0.7 }}
          >
            façonnée pour vous.
          </motion.h1>
        </div>

        {/* description */}
        <motion.p
          className="max-w-[520px] text-body text-[1rem] lg:text-[1.0625rem] leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.9 }}
        >
          Sites vitrine sur-mesure, référencement naturel et maintenance pour artisans,
          entrepreneurs et commerces locaux — partout en France.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 1.05 }}
        >
          <a href="#contact" className="btn-gold">
            <span>Demander un devis</span>
          </a>
          <a href="#realisations" className="btn-outline">
            <span>Voir les réalisations</span>
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.6 }}
          aria-hidden
        >
          <span className="label text-[0.55rem] tracking-[0.3em]">Défiler</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

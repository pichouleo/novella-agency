'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services',    href: '#services'     },
  { label: 'Réalisations',href: '#realisations'  },
  { label: 'À propos',   href: '#apropos'       },
  { label: 'Contact',    href: '#contact'       },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(7,7,13,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,164,98,0.1)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-[1.4rem] font-light text-cream tracking-[0.06em]">
              Novella
            </span>
            <span className="label text-gold/60 tracking-[0.3em] text-[0.55rem]">
              AGENCY
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-[0.8125rem] font-medium tracking-[0.08em] text-body hover:text-gold transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="#contact" className="btn-gold hidden lg:inline-flex">
            <span>Demander un devis</span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Menu"
          >
            <span
              className="block w-6 h-px bg-gold transition-all duration-300 origin-center"
              style={{ transform: open ? 'translateY(6px) rotate(45deg)' : '' }}
            />
            <span
              className="block w-6 h-px bg-body transition-all duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block w-4 h-px bg-gold transition-all duration-300 origin-center"
              style={{ transform: open ? 'translateY(-6px) rotate(-45deg)' : '', width: open ? '1.5rem' : '' }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-10"
            initial={{ clipPath: 'circle(0% at calc(100% - 3rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 3rem) 2.5rem)' }}
            exit={{   clipPath: 'circle(0% at calc(100% - 3rem) 2.5rem)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl font-light text-cream hover:text-gold transition-colors"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{ delay: i * 0.07 + 0.15 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Demander un devis</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

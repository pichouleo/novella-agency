'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

/* Placeholder skeleton for future testimonials */
function SkeletonCard({ delay }: { delay: number }) {
  return (
    <motion.div
      className="p-8 bg-card border border-white/[0.04] flex flex-col gap-5 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease, delay }}
    >
      {/* quote mark */}
      <span className="font-serif text-5xl text-white/[0.04] leading-none select-none">&ldquo;</span>

      {/* text lines */}
      <div className="flex flex-col gap-2">
        {[100, 90, 75].map((w, i) => (
          <div key={i} className="h-3 rounded-full bg-white/[0.04]" style={{ width: `${w}%` }} />
        ))}
      </div>

      {/* author row */}
      <div className="flex items-center gap-3 mt-2 pt-5 border-t border-white/[0.04]">
        <div className="w-10 h-10 rounded-full bg-white/[0.04]" />
        <div className="flex flex-col gap-1.5">
          <div className="h-2.5 w-24 rounded-full bg-white/[0.04]" />
          <div className="h-2 w-16 rounded-full bg-white/[0.04]" />
        </div>
        <div className="ml-auto flex gap-0.5">
          {[1,2,3,4,5].map((s) => (
            <div key={s} className="w-3 h-3 bg-white/[0.04]" style={{ clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
          ))}
        </div>
      </div>

      {/* blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-bg/40 flex items-center justify-center">
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="section bg-bg relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* header */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="label mb-4">Ils me font confiance</p>
          <h2 className="display font-serif text-[clamp(2.25rem,5vw,4rem)] font-light text-cream max-w-[520px] leading-tight">
            Ce que disent<br />
            <em className="italic text-gold">mes clients.</em>
          </h2>
        </motion.div>

        {/* skeleton cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <SkeletonCard delay={0} />
          <SkeletonCard delay={0.1} />
          <SkeletonCard delay={0.2} />

          {/* centered "soon" badge */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
          >
            <div className="flex flex-col items-center gap-3 text-center px-8 py-6 border border-gold/20 bg-bg/80 backdrop-blur-sm">
              <svg className="w-8 h-8 text-gold/40" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <p className="font-serif text-xl text-cream">Bientôt disponible</p>
              <p className="text-body text-sm">Les premiers témoignages arrivent bientôt.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

const stats = [
  { value: '100%', label: 'Sites livrés dans les délais' },
  { value: '⭐⭐⭐⭐⭐', label: 'Satisfaction client' },
  { value: 'France', label: 'Intervention nationale' },
]

export default function About() {
  return (
    <section id="apropos" className="section bg-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/30 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #C9A462 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — visual */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            {/* portrait card */}
            <div className="relative aspect-[4/5] max-w-sm mx-auto bg-card border border-white/5">
              {/* abstract gradient representing a portrait */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(160deg, #111120 0%, #1A1A30 40%, #0D0D18 100%)',
                }}
              />
              {/* decorative initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-[10rem] font-light text-gold/[0.06] select-none leading-none">
                  L
                </span>
              </div>
              {/* name plate */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-serif text-xl text-cream">Léo</p>
                <p className="label text-gold/60 text-[0.6rem] tracking-[0.25em]">Fondateur · Développeur Web</p>
              </div>
              {/* corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/30" />
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -right-4 lg:-right-10 bg-gold p-5 flex flex-col items-center justify-center shadow-xl">
              <span className="font-serif text-3xl font-light text-bg leading-none">3+</span>
              <span className="text-[0.6rem] font-bold tracking-wider text-bg/70 uppercase mt-1">ans d&apos;expérience</span>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <p className="label mb-6">À propos</p>

            <h2 className="display font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-light text-cream leading-tight mb-8">
              Un développeur passionné,<br />
              <em className="italic text-gold">au service de votre ambition.</em>
            </h2>

            <div className="space-y-5 text-body text-[0.9375rem] leading-[1.85]">
              <p>
                Basé en Normandie, je crée des sites web qui allient esthétique premium
                et efficacité commerciale. Mon credo : chaque artisan, chaque entrepreneur
                mérite une présence en ligne à la hauteur de son savoir-faire.
              </p>
              <p>
                En travaillant seul, je m&apos;implique personnellement dans chaque projet —
                pas d&apos;intermédiaire, pas de perte d&apos;information. Vous avez un interlocuteur
                unique, réactif, qui connaît votre dossier dans ses moindres détails.
              </p>
              <p>
                De la Normandie à l&apos;ensemble du territoire français, j&apos;accompagne
                mes clients de la conception à la livraison, et bien au-delà.
              </p>
            </div>

            {/* stats */}
            <div className="mt-10 pt-10 border-t border-white/[0.06] grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-serif text-xl lg:text-2xl text-cream">{s.value}</span>
                  <span className="text-[0.7rem] text-muted leading-snug">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

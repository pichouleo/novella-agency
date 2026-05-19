'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const ease = [0.22, 1, 0.36, 1]

const schema = z.object({
  name:    z.string().min(2, 'Veuillez saisir votre nom.'),
  email:   z.string().email('Adresse email invalide.'),
  phone:   z.string().optional(),
  message: z.string().min(10, 'Le message doit faire au moins 10 caractères.'),
})
type FormData = z.infer<typeof schema>

const contactInfo = [
  {
    label: 'Téléphone',
    value: '06 17 13 32 63',
    href: 'tel:+33617133263',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M3 4a1 1 0 011-1h2.5a1 1 0 011 .76l.5 2a1 1 0 01-.29.98L6.5 7.5c.87 1.8 2.2 3.13 4 4l.72-1.21a1 1 0 01.98-.29l2 .5a1 1 0 01.76 1V14a1 1 0 01-1 1C6 15 3 10 3 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'leoinfluenceagency@gmail.com',
    href: 'mailto:leoinfluenceagency@gmail.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M2 6l8 6 8-6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: 'Localisation',
    value: 'Normandie — France entière',
    href: '#',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section bg-surface relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/30 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <p className="label mb-6">Contact</p>
            <h2 className="display font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-light text-cream leading-tight mb-8">
              Un projet en tête ?<br />
              <em className="italic text-gold">Parlons-en.</em>
            </h2>
            <p className="text-body leading-relaxed mb-12 text-[0.9375rem]">
              Chaque projet est unique. Décrivez votre activité, vos besoins et vos
              objectifs — je reviens vers vous dans les 24 heures avec une réponse
              personnalisée et un devis gratuit, sans engagement.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                  data-hover
                >
                  <div className="flex items-center justify-center w-11 h-11 border border-gold/20 text-gold/50 group-hover:text-gold group-hover:border-gold/50 transition-colors duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-muted">{item.label}</p>
                    <p className="text-cream text-sm group-hover:text-gold transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  className="h-full flex flex-col items-start justify-center gap-6 py-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-14 h-14 border border-gold/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-cream">Message envoyé !</h3>
                  <p className="text-body">
                    Merci pour votre message. Je vous réponds dans les 24 heures.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline text-sm"
                  >
                    <span>Envoyer un autre message</span>
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-8"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                >
                  {/* name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="label text-[0.6rem]">Nom complet *</label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Jean Dupont"
                      className="field"
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-red-400/80 text-xs">{errors.name.message}</p>}
                  </div>

                  {/* email + phone row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-1.5">
                      <label className="label text-[0.6rem]">Email *</label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="jean@exemple.fr"
                        className="field"
                        autoComplete="email"
                      />
                      {errors.email && <p className="text-red-400/80 text-xs">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="label text-[0.6rem]">Téléphone</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        placeholder="06 00 00 00 00"
                        className="field"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="label text-[0.6rem]">Votre projet *</label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Décrivez votre activité, votre projet et vos besoins..."
                      className="field resize-none"
                    />
                    {errors.message && <p className="text-red-400/80 text-xs">{errors.message.message}</p>}
                  </div>

                  {/* error message */}
                  {status === 'error' && (
                    <p className="text-red-400/80 text-sm">
                      Une erreur est survenue. Réessayez ou contactez-moi par téléphone.
                    </p>
                  )}

                  {/* submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gold self-start"
                    data-hover
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="32" strokeDashoffset="24"/>
                        </svg>
                        <span>Envoi en cours…</span>
                      </span>
                    ) : (
                      <span>Envoyer ma demande</span>
                    )}
                  </button>

                  <p className="text-muted text-[0.75rem]">
                    Réponse garantie sous 24h · Devis gratuit et sans engagement
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

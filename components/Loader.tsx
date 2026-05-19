'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const LETTERS = 'NOVELLA'.split('')

export default function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2800)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          id="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* letters */}
          <div className="flex items-end gap-[0.06em] overflow-hidden">
            {LETTERS.map((l, i) => (
              <motion.span
                key={i}
                className="font-serif text-[clamp(3rem,10vw,7rem)] font-light text-cream leading-none tracking-[0.1em]"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: i * 0.07 + 0.1,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {l}
              </motion.span>
            ))}
          </div>

          {/* sub-word */}
          <motion.p
            className="label text-gold/70 tracking-[0.4em]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            AGENCY
          </motion.p>

          {/* progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gold"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

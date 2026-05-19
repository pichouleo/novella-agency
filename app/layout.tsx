import type { Metadata } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Novella Agency — L\'excellence digitale, façonnée pour vous',
  description:
    'Agence web freelance basée en Normandie. Sites vitrine sur-mesure, SEO et maintenance pour artisans, entrepreneurs et commerces locaux partout en France.',
  keywords: [
    'agence web Normandie',
    'création site vitrine',
    'SEO freelance',
    'site internet artisan',
    'développeur web freelance',
  ].join(', '),
  openGraph: {
    title: 'Novella Agency',
    description: 'L\'excellence digitale, façonnée pour vous.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  )
}

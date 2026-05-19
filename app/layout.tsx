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
  title: {
    default: 'Novella Agency | Création de sites web en Normandie',
    template: '%s | Novella Agency'
  },
  description: 'Agence web en Normandie spécialisée dans la création, maintenance de sites internet et référencement SEO. Devis gratuit.',
  keywords: ['agence web Normandie', 'création site internet Rouen', 'référencement SEO Normandie', 'agence web Seine-Maritime'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://novellagency.fr'
  },
  openGraph: {
    title: 'Novella Agency | Agence Web Normandie',
    description: 'Création de sites web et SEO en Normandie',
    url: 'https://novellagency.fr',
    siteName: 'Novella Agency',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>
  {children}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Novella Agency",
        "description": "Agence web en Normandie spécialisée dans la création de sites internet et le référencement SEO",
        "url": "https://novellagency.fr",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Normandie",
          "addressCountry": "FR"
        },
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 49.4431,
            "longitude": 1.0993
          }
        }
      })
    }}
  />
</body>
    </html>
  )
}

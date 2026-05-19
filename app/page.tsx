import Cursor       from '@/components/Cursor'
import Loader        from '@/components/Loader'
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import Services      from '@/components/Services'
import Portfolio     from '@/components/Portfolio'
import About         from '@/components/About'
import Process       from '@/components/Process'
import Testimonials  from '@/components/Testimonials'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novella Agency | Création de sites web en Normandie',
  description: 'Agence web en Normandie spécialisée dans la création et maintenance de sites internet et le référencement SEO.',
}

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Navbar />
      <main>
        <Hero         />
        <Services     />
        <Portfolio    />
        <About        />
        <Process      />
        <Testimonials />
        <Contact      />
      </main>
      <Footer />
    </>
  )
}

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import ProofStrip from '@/components/sections/ProofStrip'
import Pain from '@/components/sections/Pain'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import Results from '@/components/sections/Results'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <Pain />
        <Solution />
        <Services />
        <Industries />
        <Process />
        <Results />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

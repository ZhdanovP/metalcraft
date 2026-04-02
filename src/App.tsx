import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { FAQ } from './components/sections/FAQ'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { Steps } from './components/sections/Steps'
import { Testimonials } from './components/sections/Testimonials'
import { WhyUs } from './components/sections/WhyUs'
import { Works } from './components/sections/Works'
import { Navigation } from './components/Navigation'
import { navItems } from './constants/content'
import { scrollToId } from './utils/scrollToId'

export default function App() {
  return (
    <div className="min-h-screen bg-surface-base text-fg-primary">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:border focus:border-frame/50 focus:bg-surface-raised focus:px-4 focus:py-2 focus:text-fg-primary"
      >
        Перейти до основного контенту
      </a>

      <Navigation items={navItems} />

      <main>
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(650px_circle_at_20%_-10%,rgba(108,140,255,0.12),transparent_58%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_0%,rgba(108,140,255,0.05),transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,125,145,0.14)_1px,transparent_1px)] bg-[length:64px_64px]" />
        </div>

        <Hero
          onConsult={() => scrollToId('contact')}
          onWorks={() => scrollToId('works')}
        />
        <About />
        <Services />
        <WhyUs />
        <Steps />
        <Works />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}


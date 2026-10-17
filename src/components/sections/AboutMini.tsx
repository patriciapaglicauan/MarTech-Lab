import Link from 'next/link'
import AnimateSection from '../AnimateSection'

export default function AboutMini() {
  return (
    <section id="about" className="bg-[#161619] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-center">
          {/* Photo placeholder */}
          <AnimateSection delay={0.05}>
            <div
              className="w-full aspect-[4/5] max-w-[320px] mx-auto md:mx-0 rounded-2xl overflow-hidden relative"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Placeholder state */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-20 h-20 rounded-full"
                  style={{ background: 'rgba(192,48,40,0.15)', border: '1px solid rgba(192,48,40,0.2)' }}
                  aria-hidden="true"
                />
                <p className="font-display text-xs font-700 tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  Photo coming soon
                </p>
              </div>

              {/* Decorative corner accent */}
              <div
                className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-2xl"
                style={{ background: 'rgba(192,48,40,0.1)' }}
                aria-hidden="true"
              />
            </div>
          </AnimateSection>

          {/* Text */}
          <AnimateSection delay={0.15}>
            <p className="eyebrow mb-4">About</p>
            <h2 className="font-display font-900 text-[clamp(2rem,3.5vw,2.8rem)] text-white mb-5">
              One person.
              <br />
              Actually doing the work.
            </h2>

            <p className="font-body text-base text-white/55 leading-relaxed mb-4">
              I&apos;m Patty — Industrial Engineering grad, currently working across Revenue Operations and Marketing Operations simultaneously at multiple companies spanning hospitality, SaaS, and managed services.
            </p>
            <p className="font-body text-base text-white/55 leading-relaxed mb-6">
              I built MarTech Lab to give independent operators the same marketing infrastructure that enterprise brands take for granted. No account managers. No outsourced delivery. Just systems that actually work — and a founder who&apos;s accountable to make sure they do.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['PHG — Hospitality', 'Hosted Network — MSP', 'SolarWinds — B2B SaaS'].map((cred) => (
                <span
                  key={cred}
                  className="font-display text-xs font-700 px-3 py-1.5 rounded"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  {cred}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-ghost-white inline-block px-6 py-3 text-sm"
            >
              Read the full story →
            </Link>
          </AnimateSection>
        </div>
      </div>
    </section>
  )
}

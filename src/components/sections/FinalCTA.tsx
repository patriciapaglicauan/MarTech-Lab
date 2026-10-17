import AnimateSection from '../AnimateSection'
import RingButton from '../RingButton'

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
      style={{ background: '#C03028' }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none animated-grid"
        aria-hidden="true"
      />

      {/* Large decorative text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-900 text-[20vw] leading-none pointer-events-none select-none"
        style={{ color: 'rgba(0,0,0,0.07)', whiteSpace: 'nowrap' }}
        aria-hidden="true"
      >
        REVENUE.
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimateSection>
          <p
            className="font-display text-[0.7rem] font-700 tracking-[0.18em] uppercase mb-6"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Ready when you are
          </p>

          <h2 className="font-display font-900 text-white text-[clamp(2.6rem,5.5vw,4.4rem)] leading-[1.08] mb-6">
            Stop leaving revenue
            <br />
            on the table.
          </h2>

          <p className="font-body text-base text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
            In 30 minutes, we&apos;ll show you exactly where your biggest automation opportunity is and what it would take to build it. No pitch deck. No obligation. Just a straight answer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <RingButton
              href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-display font-800 text-sm px-7 py-4 rounded-lg bg-white text-crimson hover:bg-stone transition-colors"
              ringColor="crimson"
            >
              Book a free 30-min audit
            </RingButton>
            <a
              href="mailto:martechlab.admin@gmail.com"
              className="inline-flex items-center justify-center gap-2 font-display font-700 text-sm px-7 py-4 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Or send us an email
            </a>
          </div>

          <p className="font-body text-xs text-white/40 mt-8">
            Response within 24 hours · No lock-in contracts · We&apos;ll tell you if we&apos;re not the right fit
          </p>
        </AnimateSection>
      </div>

      <style>{`
        .animated-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.10) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: grid-drift 4s linear infinite;
        }
        @keyframes grid-drift {
          0%   { background-position: 0 0; }
          100% { background-position: 48px 48px; }
        }
      `}</style>
    </section>
  )
}

'use client'

import AnimateSection from '../AnimateSection'

const pains = [
  {
    title: 'Guest data spread across 3 tools that never sync',
    body: 'Your POS, email platform, and CRM are all saying different things. Campaigns go to the wrong people. Re-engagement never happens.',
  },
  {
    title: 'You\'re paying for ads with no retention system',
    body: 'You keep buying new guests while the ones you already won go cold. Every acquisition dollar works twice as hard as it should.',
  },
  {
    title: 'Campaigns rebuilt from scratch. Every. Single. Time.',
    body: 'No templates. No sequences. No automation. Just someone manually pulling lists and hoping they remembered everyone.',
  },
  {
    title: 'Manual follow-up falls through the cracks',
    body: 'A new lead comes in on a Friday. Nobody follows up until Tuesday. By then, they\'ve already booked somewhere else.',
  },
  {
    title: 'You have no idea what\'s actually working',
    body: 'Pipeline visibility is zero. You can\'t see which campaigns drove revenue, which guests are churning, or where to put next month\'s budget.',
  },
  {
    title: '"We know we should be doing more with our data — we just don\'t have the bandwidth."',
    body: 'This is the line we hear most. The system is the fix. Not more staff.',
    quote: true,
  },
]

export default function Pain() {
  return (
    <section id="pain" className="relative bg-[#EFEDE8] py-24 overflow-hidden">
      {/* Paper cutout decorative strips */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="paper-strip" style={{ width: 72, height: 9, left: '4%', top: '18%', transform: 'rotate(-13deg)', animationDelay: '0s' }} />
        <div className="paper-strip" style={{ width: 48, height: 8, left: '7%', top: '55%', transform: 'rotate(9deg)', animationDelay: '0.6s' }} />
        <div className="paper-strip" style={{ width: 56, height: 9, right: '5%', top: '30%', transform: 'rotate(14deg)', animationDelay: '0.3s' }} />
        <div className="paper-strip" style={{ width: 38, height: 8, right: '3%', top: '68%', transform: 'rotate(-7deg)', animationDelay: '0.9s' }} />
        <div className="paper-strip" style={{ width: 62, height: 7, left: '2%', top: '80%', transform: 'rotate(5deg)', animationDelay: '1.2s' }} />
        <div className="paper-strip" style={{ width: 44, height: 8, right: '6%', top: '80%', transform: 'rotate(-11deg)', animationDelay: '0.4s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
          {/* Left: heading */}
          <AnimateSection>
            <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-charcoal glitch-heading">
              Sound familiar?
            </h2>
            <p className="font-body text-base text-charcoal/55 mt-4 leading-relaxed max-w-xs">
              Here&apos;s what broken marketing is actually costing you, every single week.
            </p>
          </AnimateSection>

          {/* Right: pain cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pains.map((p, i) => (
              <AnimateSection key={p.title} delay={i * 0.07}>
                <div
                  className={`pain-card glass-card p-5 h-full${p.quote ? ' sm:col-span-2' : ''}`}
                  style={p.quote ? { background: 'rgba(26,26,30,0.82)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.08)' } : undefined}
                >
                  <h3 className={`pain-card-title font-display font-800 text-[0.95rem] leading-snug mb-2 ${p.quote ? 'text-white' : 'text-charcoal'}`}>
                    {p.title}
                  </h3>
                  <p className={`pain-card-body font-body text-sm leading-relaxed ${p.quote ? 'text-white/55' : 'text-charcoal/55'}`}>
                    {p.body}
                  </p>
                </div>
              </AnimateSection>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .glitch-heading {
          animation: glitch-sound 1.2s ease-in-out infinite;
          display: inline-block;
        }
        @keyframes glitch-sound {
          0%, 88%, 100% { text-shadow: none; transform: none; }
          89% { text-shadow: -3px 0 #C03028; transform: translateX(3px); }
          90% { text-shadow: 3px 0 #6B3FA0; transform: translateX(-3px); }
          91% { text-shadow: -2px 0 #C03028; transform: translateX(2px); }
          92% { text-shadow: none; transform: none; }
          93% { text-shadow: 2px 0 #6B3FA0; transform: translateX(-2px); }
          94% { text-shadow: -1px 0 #C03028; transform: translateX(1px); }
          95% { text-shadow: none; transform: none; }
        }

        .pain-card {
          transition: background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
          cursor: default;
        }
        .pain-card:hover {
          background: #C03028 !important;
          border-color: rgba(192,48,40,0.4) !important;
          box-shadow: 0 8px 32px rgba(192,48,40,0.25) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }
        .pain-card:hover .pain-card-title {
          color: rgba(255,255,255,0.95) !important;
        }
        .pain-card:hover .pain-card-body {
          color: rgba(255,255,255,0.7) !important;
        }

        .paper-strip {
          position: absolute;
          background: rgba(26,26,30,0.055);
          border-radius: 3px;
          animation: paper-float 3.5s ease-in-out infinite;
        }
        @keyframes paper-float {
          0%, 100% { transform-origin: center; translate: 0 0; }
          50% { translate: 0 -5px; }
        }
      `}</style>
    </section>
  )
}

'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/sections/FinalCTA'
import AnimateSection from '@/components/AnimateSection'
import RingButton from '@/components/RingButton'
import FlowField from '@/components/FlowField'

/* ── Data ──────────────────────────────────────────────────────────── */

const services = [
  {
    id: 'automation',
    num: '01',
    eyebrow: 'Systems Architecture',
    title: 'AI Automation',
    tagline: 'Your entire operation — connected, automated, and running without you.',
    description:
      'We map every manual, repetitive task in your business and replace it with an intelligent automation pipeline. From follow-up emails that fire within minutes of a new lead, to data syncing across your POS, CRM, and reporting tools.',
    bestFor: 'Operations leads, founders, or marketing teams spending more than 5 hours/week on manual processes.',
    deliverables: [
      'Full workflow audit and bottleneck mapping',
      'Custom automation across your tool stack',
      'Lead routing, task triggers, and data sync pipelines',
      'Review request automations at the right moment',
      'Re-engagement sequences for lapsed customers',
      'Post-launch documentation and support handoff',
    ],
    pricing: {
      flow: '$2,500 – $5,000',
      architect: '$5,000 – $9,000',
    },
    highlighted: false,
  },
  {
    id: 'leadgen',
    num: '02',
    eyebrow: 'Revenue Pipeline',
    title: 'Lead Generation Systems',
    tagline: 'A sales engine that follows up, qualifies, and converts — automatically.',
    description:
      'We build the infrastructure that turns enquiries into booked clients without manual chasing. CRM configuration, automated follow-up sequences triggered by behaviour, lead capture-to-contact pipelines — all designed around how your actual sales process works.',
    bestFor: 'Sales-led or product-led companies where speed-to-lead is a competitive advantage.',
    deliverables: [
      'CRM audit, cleanup, and full configuration',
      'Lead capture-to-contact automation pipeline',
      'Automated follow-up triggered by behaviour and timing',
      'Lead scoring and routing to the right rep',
      'Trial or enquiry nurture sequence (3–5 touchpoints)',
      'Revenue reporting dashboard and attribution setup',
    ],
    pricing: {
      flow: '$3,000 – $6,000',
      architect: '$6,000 – $10,000',
    },
    highlighted: true,
  },
  {
    id: 'crmops',
    num: '03',
    eyebrow: 'Marketing Operations',
    title: 'CRM Ops & MarOps Management',
    tagline: 'Your marketing machine — maintained, optimised, and working every month.',
    description:
      'We set up and manage the backend of your marketing stack — HubSpot, ActiveCampaign, Klaviyo, or whatever you\'re running. Clean data, functioning automations, campaigns that send correctly, and a reporting layer you can trust.',
    bestFor: 'Marketing teams on HubSpot, ActiveCampaign, Klaviyo, or similar who need a specialist to run operations without hiring full-time.',
    deliverables: [
      'Monthly automation and data quality audit',
      'Campaign setup, scheduling, and deployment',
      'List hygiene, segmentation, and suppression maintenance',
      'Deliverability monitoring and domain health checks',
      'Real-time reporting and monthly strategy review',
      'Stack integration management and troubleshooting',
    ],
    pricing: {
      flow: '$2,000 – $4,500',
      architect: '$4,500 – $8,000',
    },
    highlighted: false,
  },
]

const tiers = [
  {
    name: 'FLOW',
    subtitle: 'The Core Build',
    desc: 'One service line, fully built, documented, and handed off. A complete, functional system end-to-end. This is the standard engagement and where most clients start.',
    delivery: '3–4 weeks',
    highlight: false,
  },
  {
    name: 'ARCHITECT',
    subtitle: 'The Full Infrastructure',
    desc: 'Multi-system builds across two or more service lines, or a single line at significantly higher complexity. Requires a discovery call before scoping.',
    delivery: '6–8 weeks',
    highlight: true,
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'Custom Growth OS',
    desc: 'Fully bespoke engagement. Multi-team rollout, white-glove delivery, embedded strategic partnership. Scope, timeline, and pricing defined per client.',
    delivery: '8–16 weeks',
    highlight: false,
  },
]

const addOns = [
  { name: 'Rush Delivery (50% faster)', price: '+25–50% of fee' },
  { name: 'Extra Revision Round', price: '$150 – $400' },
  { name: 'Team Training Session', price: '$250 – $999' },
  { name: 'Additional Workflow Build', price: '$400 – $999' },
  { name: 'Additional Custom Dashboard', price: '$500 – $750' },
  { name: 'White-Label License', price: '$750 – $1,500' },
]

const CHECK = (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.5" stroke="rgba(45,138,78,0.4)" />
    <path d="M5 8l2 2 4-4" stroke="#2D8A4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Service card ───────────────────────────────────────────────────── */

function ServiceCard({ svc, i }: { svc: typeof services[0]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState({ x: 50, y: 50, show: false })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setCursor({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100, show: true })
  }

  return (
    <div id={svc.id}>
    <AnimateSection delay={i * 0.08}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursor(c => ({ ...c, show: false }))}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: svc.highlighted ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
          border: svc.highlighted ? '1px solid rgba(192,48,40,0.4)' : '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Cursor spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: cursor.show
              ? `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(192,48,40,0.20) 0%, transparent 55%)`
              : 'none',
            transition: 'opacity 0.2s',
            opacity: cursor.show ? 1 : 0,
          }}
          aria-hidden="true"
        />

        {svc.highlighted && (
          <div
            className="absolute pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(192,48,40,0.45) 0%, transparent 70%)',
              filter: 'blur(36px)',
              width: '14rem', height: '14rem',
              top: '-4rem', left: '50%', transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />
        )}

        <div className="relative p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow mb-2">{svc.eyebrow}</p>
              <h2 className="font-display font-900 text-white text-[clamp(1.8rem,3vw,2.4rem)] leading-tight">{svc.title}</h2>
            </div>
            <span className="flex-shrink-0 font-display font-700 text-[0.62rem] tracking-[0.18em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
              {svc.num}
            </span>
          </div>

          <p className="font-body text-base text-white/55 leading-relaxed mb-3">{svc.description}</p>
          <p className="font-body text-sm mb-8" style={{ color: 'rgba(192,48,40,0.8)' }}>
            <span className="font-display font-700 text-[0.65rem] tracking-[0.1em] uppercase text-white/30 mr-2">Best for</span>
            {svc.bestFor}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Deliverables */}
            <div>
              <p className="font-display text-[0.65rem] font-700 tracking-[0.12em] uppercase text-white/30 mb-4">What&apos;s included</p>
              <ul className="flex flex-col gap-3">
                {svc.deliverables.map(d => (
                  <li key={d} className="flex items-start gap-3">
                    {CHECK}
                    <span className="font-body text-sm text-white/60 leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="flex flex-col gap-4">
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="font-display text-[0.65rem] font-700 tracking-[0.12em] uppercase text-white/30 mb-4">Pricing (USD)</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'FLOW', sublabel: '3–4 weeks', val: svc.pricing.flow },
                    { label: 'ARCHITECT', sublabel: '6–8 weeks', val: svc.pricing.architect },
                    { label: 'ENTERPRISE', sublabel: 'Custom scope', val: 'Book a call' },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between gap-4">
                      <div>
                        <span className="font-display font-800 text-xs text-white/70">{row.label}</span>
                        <span className="font-body text-[0.65rem] text-white/25 ml-2">{row.sublabel}</span>
                      </div>
                      <span className={`font-display font-900 text-sm ${row.label === 'ENTERPRISE' ? 'text-crimson' : 'text-white'}`}>
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-[0.65rem] text-white/20 mt-4 leading-snug">
                  AUD and PHP pricing available on request. Exclusive of third-party tool subscriptions.
                </p>
              </div>

              <RingButton
                href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center py-3.5 px-5 rounded-lg font-display font-700 text-sm transition-all ${
                  svc.highlighted ? 'btn-crimson' : 'border border-white/15 text-white hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {svc.highlighted ? 'Get Started' : 'Book a Free Audit'}
              </RingButton>
            </div>
          </div>
        </div>
      </div>
    </AnimateSection>
    </div>
  )
}

/* ── Page ───────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Page hero */}
        <section className="relative bg-[#0F0F12] pt-48 pb-20 overflow-hidden">
          <FlowField dark={true} style={{ opacity: 0.4 }} />
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: '50%', height: '60%',
              top: '0%', right: '-15%',
              background: 'radial-gradient(circle, rgba(192,48,40,0.1) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
            animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0], scale: [1, 1.1, 0.95, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-6">
            <AnimateSection>
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-display text-xs font-700 tracking-widest uppercase text-white/30 hover:text-white/60 transition-colors mb-10"
              >
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M10 12L6 8l4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to home
              </Link>
              <p className="eyebrow mb-5">Services</p>
              <h1
                className="font-display font-900 text-white leading-[1.04] mb-6"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', letterSpacing: '-0.02em' }}
              >
                Three ways we drive
                <br />
                <span style={{ color: '#C03028' }}>predictable growth.</span>
              </h1>
              <p className="font-body text-base text-white/45 max-w-xl leading-relaxed">
                Every engagement is scoped to your actual stack, team size, and growth targets. No bloated retainers, no vague deliverables.
              </p>
            </AnimateSection>

            <AnimateSection delay={0.15} className="flex flex-wrap gap-3 mt-10">
              {services.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="font-display text-xs font-700 tracking-wide uppercase px-4 py-2 rounded-full transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(192,48,40,0.15)'
                    ;(e.currentTarget as HTMLElement).style.color = '#C03028'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(192,48,40,0.35)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  {s.title}
                </a>
              ))}
            </AnimateSection>
          </div>
        </section>

        {/* Service cards */}
        <section className="bg-[#0F0F12] pb-28">
          <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
            {services.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} i={i} />
            ))}
          </div>
        </section>

        {/* Engagement tiers */}
        <section className="bg-[#1A1A1E] py-28">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateSection className="mb-14">
              <p className="eyebrow mb-4">Engagement tiers</p>
              <h2 className="font-display font-900 text-white text-[clamp(2.2rem,4vw,3.2rem)] max-w-lg leading-tight">
                Every service line. Three depths.
              </h2>
              <p className="font-body text-base text-white/45 mt-4 max-w-lg leading-relaxed">
                The tier sets the scope and investment. The service line sets what gets built. Most clients start with FLOW and expand from there.
              </p>
            </AnimateSection>

            <div className="grid md:grid-cols-3 gap-5">
              {tiers.map((tier, i) => (
                <AnimateSection key={tier.name} delay={i * 0.1}>
                  <div
                    className="rounded-2xl p-7 h-full flex flex-col"
                    style={{
                      background: tier.highlight ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
                      border: tier.highlight ? '1px solid rgba(192,48,40,0.35)' : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {tier.highlight && (
                      <div
                        className="absolute pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle, rgba(192,48,40,0.3) 0%, transparent 70%)',
                          filter: 'blur(30px)',
                          width: '10rem', height: '10rem',
                          top: '-2rem', left: '50%', transform: 'translateX(-50%)',
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="mb-5">
                      <p className="font-display font-900 text-white text-xl mb-1">{tier.name}</p>
                      <p className="font-body text-xs text-white/35">{tier.subtitle}</p>
                    </div>
                    <p className="font-body text-sm text-white/55 leading-relaxed flex-1 mb-6">{tier.desc}</p>
                    <div
                      className="flex items-center gap-3 rounded-lg px-4 py-3"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <svg viewBox="0 0 16 16" className="w-4 h-4 flex-shrink-0" fill="none" stroke="rgba(192,48,40,0.8)" strokeWidth="1.5">
                        <circle cx="8" cy="8" r="6.5" />
                        <path d="M8 5v3.5l2 2" strokeLinecap="round" />
                      </svg>
                      <span className="font-body text-xs text-white/45">Delivery: <span className="text-white/70 font-display font-700">{tier.delivery}</span></span>
                    </div>
                  </div>
                </AnimateSection>
              ))}
            </div>
          </div>
        </section>

        {/* Retainers */}
        <section className="bg-[#161619] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateSection className="mb-12">
              <p className="eyebrow mb-4">Ongoing support</p>
              <h2 className="font-display font-900 text-white text-[clamp(2rem,3.5vw,2.8rem)] max-w-lg leading-tight">
                Keep it running after we build it.
              </h2>
              <p className="font-body text-base text-white/45 mt-4 max-w-lg leading-relaxed">
                Optional monthly retainers after project delivery. Two types depending on what you need.
              </p>
            </AnimateSection>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  name: 'Care Retainer',
                  desc: 'Monitoring, minor tweaks, and a monthly check-in. For clients who want to protect their ROI without managing it themselves.',
                  rows: [
                    { tier: 'FLOW Care', price: '$800 – $1,200 / mo' },
                    { tier: 'ARCHITECT Care', price: '$1,200 – $1,800 / mo' },
                    { tier: 'ENTERPRISE Care', price: 'From $2,000 / mo' },
                  ],
                },
                {
                  name: 'Managed Ops Retainer',
                  desc: 'Full active management of your marketing stack. Campaigns go out, lists stay clean, integrations stay connected, reporting stays current.',
                  rows: [
                    { tier: 'FLOW-level', price: '$800 – $1,200 / mo' },
                    { tier: 'ARCHITECT-level', price: '$1,200 – $1,800 / mo' },
                    { tier: 'ENTERPRISE-level', price: 'From $2,000 / mo' },
                  ],
                },
              ].map(r => (
                <AnimateSection key={r.name}>
                  <div
                    className="rounded-2xl p-7 h-full flex flex-col"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <p className="font-display font-900 text-white text-lg mb-2">{r.name}</p>
                    <p className="font-body text-sm text-white/45 leading-relaxed mb-6 flex-1">{r.desc}</p>
                    <div className="flex flex-col gap-2.5">
                      {r.rows.map(row => (
                        <div key={row.tier} className="flex items-center justify-between gap-4">
                          <span className="font-body text-xs text-white/35">{row.tier}</span>
                          <span className="font-display font-800 text-sm text-white">{row.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateSection>
              ))}
            </div>

            {/* Add-ons */}
            <AnimateSection>
              <div
                className="rounded-2xl p-7"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="font-display font-900 text-white text-lg mb-6">Add-ons</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {addOns.map(a => (
                    <div key={a.name} className="flex items-start justify-between gap-4">
                      <span className="font-body text-sm text-white/45 leading-snug">{a.name}</span>
                      <span className="font-display font-800 text-sm text-white flex-shrink-0">{a.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateSection>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-[#F2F0EB] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateSection className="mb-10">
              <p className="eyebrow mb-4">Not sure where to start?</p>
              <h2 className="font-display font-900 text-charcoal text-[clamp(2.2rem,4vw,3.2rem)] max-w-xl leading-tight">
                Book a free 30-min audit.
              </h2>
              <p className="font-body text-base text-charcoal/55 mt-4 max-w-lg leading-relaxed">
                We&apos;ll map your current stack, identify the biggest bottleneck, and tell you exactly which service and tier fits — with a written scope before any money changes hands.
              </p>
            </AnimateSection>
            <AnimateSection delay={0.1} className="flex flex-col sm:flex-row gap-4">
              <RingButton
                href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson px-7 py-4 text-sm"
                ringColor="crimson"
              >
                Book a free 30-min audit
              </RingButton>
              <Link href="/contact" className="btn-ghost px-6 py-4 text-sm">
                Send us a message
              </Link>
            </AnimateSection>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

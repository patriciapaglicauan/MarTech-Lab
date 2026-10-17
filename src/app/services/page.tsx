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
      'We map every manual, repetitive task in your business and replace it with an intelligent automation pipeline. From follow-up emails that fire within minutes of a new lead, to data syncing across your POS, CRM, and reporting tools — we build it right the first time.',
    deliverables: [
      'Full workflow audit and bottleneck mapping',
      'Custom automation across your tool stack',
      'Lead routing, task triggers, and data sync pipelines',
      'Review request automations at the right moment',
      'Re-engagement sequences for lapsed customers',
      'Post-launch documentation and support handoff',
    ],
    outcome:
      'Time saved per week, errors eliminated, and headcount deferred. Your team stops doing the same thing twice.',
    pricing: {
      quickWin: '$800 – $1,500',
      fullBuildout: '$2,500 – $6,000',
      retainer: '$600 – $1,200 / mo',
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
    deliverables: [
      'CRM audit, cleanup, and full configuration',
      'Lead capture-to-contact automation pipeline',
      'Automated follow-up triggered by behaviour and timing',
      'Lead scoring and routing to the right rep',
      'Trial or enquiry nurture sequence (3–5 touchpoints)',
      'Revenue reporting dashboard and attribution setup',
    ],
    outcome:
      'Predictable pipeline, not hope-based prospecting. Leads get followed up within minutes, not days.',
    pricing: {
      quickWin: '$1,000 – $2,000',
      fullBuildout: '$3,000 – $7,500',
      retainer: '$800 – $1,800 / mo',
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
      'We set up and manage the backend of your marketing stack — HubSpot, ActiveCampaign, Klaviyo, or whatever you\'re running. Clean data, functioning automations, campaigns that actually send correctly, and a reporting layer you can trust.',
    deliverables: [
      'Monthly automation and data quality audit',
      'Campaign setup, scheduling, and deployment',
      'List hygiene, segmentation, and suppression maintenance',
      'Deliverability monitoring and domain health checks',
      'Real-time reporting and monthly strategy review',
      'Stack integration management and troubleshooting',
    ],
    outcome:
      'Clean data, functioning automations, and campaigns that send correctly every time — without you managing it.',
    pricing: {
      quickWin: '$600 – $1,200',
      fullBuildout: '$2,000 – $5,000',
      retainer: '$700 – $1,500 / mo',
    },
    highlighted: false,
  },
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
    <AnimateSection id={svc.id} delay={i * 0.08}>
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

        {/* Top glow for highlighted */}
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
            <span
              className="flex-shrink-0 font-display font-700 text-[0.62rem] tracking-[0.18em] uppercase mt-1"
              style={{ color: 'rgba(255,255,255,0.2)' }}
            >
              {svc.num}
            </span>
          </div>

          <p className="font-body text-base text-white/55 leading-relaxed mb-8">{svc.description}</p>

          {/* Two-column layout: deliverables + outcome + pricing */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Deliverables */}
            <div>
              <p className="font-display text-[0.65rem] font-700 tracking-[0.12em] uppercase text-white/30 mb-4">
                What you get
              </p>
              <ul className="flex flex-col gap-3">
                {svc.deliverables.map(d => (
                  <li key={d} className="flex items-start gap-3">
                    {CHECK}
                    <span className="font-body text-sm text-white/60 leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome + Pricing */}
            <div className="flex flex-col gap-6">
              {/* Outcome */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(45,138,78,0.08)', border: '1px solid rgba(45,138,78,0.18)' }}
              >
                <p className="font-display text-[0.65rem] font-700 tracking-[0.12em] uppercase mb-3" style={{ color: '#2D8A4E' }}>
                  The outcome
                </p>
                <p className="font-body text-sm text-white/70 leading-relaxed">{svc.outcome}</p>
              </div>

              {/* Pricing */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="font-display text-[0.65rem] font-700 tracking-[0.12em] uppercase text-white/30 mb-4">
                  Investment
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: 'Quick win', val: svc.pricing.quickWin },
                    { label: 'Full buildout', val: svc.pricing.fullBuildout },
                    { label: 'Monthly retainer', val: svc.pricing.retainer },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between gap-4">
                      <span className="font-body text-xs text-white/35">{row.label}</span>
                      <span className="font-display font-800 text-sm text-white">{row.val}</span>
                    </div>
                  ))}
                </div>
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
          {/* Ambient blob */}
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

            {/* Jump links */}
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

        {/* How we scope section */}
        <section className="bg-[#F2F0EB] py-24">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateSection className="mb-14">
              <p className="eyebrow mb-4">How it works</p>
              <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-charcoal max-w-xl">
                Not sure which engagement fits?
              </h2>
              <p className="font-body text-base text-charcoal/55 mt-4 max-w-lg leading-relaxed">
                Book a free 30-minute audit call. We&apos;ll map your current stack, identify the biggest bottleneck, and tell you exactly which service fits — with a written scope before any money changes hands.
              </p>
            </AnimateSection>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  label: 'Quick win',
                  desc: 'A single automation or CRM configuration. Done in under a week. Best for teams who know what they need.',
                  range: '$600 – $2,000',
                },
                {
                  label: 'Full buildout',
                  desc: 'End-to-end system design, build, and handoff. 2–4 weeks. Best for operators starting from scratch.',
                  range: '$2,000 – $7,500',
                },
                {
                  label: 'Monthly retainer',
                  desc: 'Ongoing management, optimisation, and new sequences. Best for businesses that want to keep growing the system.',
                  range: '$600 – $1,800 / mo',
                },
              ].map((tier, i) => (
                <AnimateSection key={tier.label} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-7 border border-charcoal/[0.06] h-full flex flex-col">
                    <p className="font-display font-800 text-base text-charcoal mb-2">{tier.label}</p>
                    <p className="font-body text-sm text-charcoal/55 leading-relaxed flex-1 mb-5">{tier.desc}</p>
                    <span
                      className="font-display font-900 text-lg"
                      style={{ color: '#C03028' }}
                    >
                      {tier.range}
                    </span>
                  </div>
                </AnimateSection>
              ))}
            </div>

            <AnimateSection delay={0.2} className="mt-10 flex flex-col sm:flex-row gap-4">
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

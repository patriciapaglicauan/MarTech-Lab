'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import AnimateSection from '../AnimateSection'

const services = [
  {
    num: '01',
    anchor: 'automation',
    title: 'Systems Architecture & Automation',
    tagline: 'Your entire operation — connected, automated, and running without you.',
    features: [
      'Full workflow audit and bottleneck mapping',
      'Custom automation across your tool stack',
      'Lead routing, data syncing, task triggers',
      'Post-launch documentation and support',
    ],
    highlighted: false,
  },
  {
    num: '02',
    anchor: 'leadgen',
    title: 'Revenue Pipeline Engineering',
    tagline: 'A sales and marketing engine that follows up, qualifies, and closes — automatically.',
    features: [
      'CRM audit, cleanup, and configuration',
      'Lead capture-to-contact automation',
      'Automated follow-up triggered by behaviour',
      'Revenue reporting dashboards',
    ],
    highlighted: true,
  },
  {
    num: '03',
    anchor: 'crmops',
    title: 'Marketing Operations Management',
    tagline: 'Your marketing machine — maintained, optimised, and working every month.',
    features: [
      'Monthly automation and data quality audit',
      'Campaign setup, scheduling, and deployment',
      'List hygiene and segmentation maintenance',
      'Real-time reporting and strategy reviews',
    ],
    highlighted: false,
  },
]

const CHECK = (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="7.5" stroke="rgba(192,48,40,0.4)" />
    <path d="M5 8l2 2 4-4" stroke="#C03028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function ServiceCard({ service, delay }: { service: typeof services[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [cursor, setCursor] = useState({ x: 50, y: 50, show: false })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    setCursor({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      show: true,
    })
  }

  return (
    <AnimateSection delay={delay} className="h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCursor((c) => ({ ...c, show: false }))}
        className="relative rounded-2xl h-full flex flex-col overflow-hidden cursor-default"
        style={{
          background: service.highlighted ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
          border: service.highlighted ? '1px solid rgba(192,48,40,0.4)' : '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Cursor-following gradient blob */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: cursor.show
              ? `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(192,48,40,0.22) 0%, transparent 55%)`
              : 'none',
            transition: 'opacity 0.2s',
            opacity: cursor.show ? 1 : 0,
          }}
          aria-hidden="true"
        />

        {/* Fixed top glow for highlighted card */}
        {service.highlighted && (
          <div
            className="absolute pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(192,48,40,0.5) 0%, transparent 70%)',
              filter: 'blur(36px)',
              width: '14rem',
              height: '14rem',
              top: '-4rem',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />
        )}

        <div className="relative flex flex-col flex-1 p-7">
          {/* Badge */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: '#C03028' }} aria-hidden="true" />
            <span className="font-display font-700 text-[0.62rem] tracking-[0.18em] uppercase text-white/35">
              {service.num}
            </span>
          </div>

          {/* Title + tagline */}
          <h3 className="font-display font-900 text-white text-xl leading-snug mb-2">{service.title}</h3>
          <p className="font-body text-sm text-white/45 leading-relaxed mb-8">{service.tagline}</p>

          {/* CTA */}
          <Link
            href={`/services#${service.anchor}`}
            className={`w-full flex items-center justify-center py-3 px-5 rounded-lg font-display font-700 text-sm transition-all mb-8 ${
              service.highlighted
                ? 'bg-crimson text-white hover:bg-[#a82620]'
                : 'border border-white/15 text-white hover:border-white/30 hover:bg-white/5'
            }`}
          >
            {service.highlighted ? 'Get Started →' : 'Learn More →'}
          </Link>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.06] mb-6" />

          {/* Features */}
          <ul className="flex flex-col gap-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                {CHECK}
                <span className="font-body text-xs text-white/55 leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimateSection>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-[#0F0F12] py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateSection className="mb-16 text-center">
          <h2
            className="font-display font-900 text-white leading-[1.06] mb-4"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', letterSpacing: '-0.02em' }}
          >
            Three ways we drive growth.
          </h2>
          <p className="font-body text-sm text-white/45 max-w-lg mx-auto leading-relaxed">
            Each engagement is scoped to your actual stack, team size, and growth targets.
          </p>
        </AnimateSection>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {services.map((s, i) => (
            <ServiceCard key={s.anchor} service={s} delay={i * 0.1} />
          ))}
        </div>

        <AnimateSection className="mt-10 text-center">
          <Link href="/services" className="font-display text-sm font-700 text-crimson hover:underline underline-offset-4">
            View full scope and pricing details →
          </Link>
        </AnimateSection>
      </div>
    </section>
  )
}

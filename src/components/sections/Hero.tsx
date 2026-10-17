'use client'

import { motion } from 'framer-motion'
import FlowField from '../FlowField'
import RingButton from '../RingButton'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: d },
  }),
}

const trustSignals = [
  'HubSpot Certified',
  'Active across 3 industries',
  'PHG · SolarWinds · Hosted Network',
  'No lock-in contracts',
]

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center bg-[#F2F0EB] overflow-hidden pt-16">
      {/* Flow field background */}
      <FlowField dark={false} style={{ opacity: 0.85 }} />

      {/* ── Center content ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="eyebrow mb-6 inline-block">
          AI Automation · CRM Ops · Lead Gen Systems
        </motion.p>

        <motion.h1
          custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display font-900 text-charcoal leading-[1.03] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', letterSpacing: '-0.02em' }}
        >
          <span style={{ color: '#C03028' }}>AI Automation Services</span>
          <br />for Restaurants, Fitness
          <br />Studios &amp; Gyms, Clinics
        </motion.h1>

        <motion.p
          custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
          className="font-body leading-relaxed text-charcoal/55 max-w-[520px] mx-auto mb-8"
          style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' }}
        >
          We build the CRM and automation systems that turn your existing customers into
          recurring revenue, without adding headcount or learning new software.
        </motion.p>

        <motion.div custom={0.3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap gap-3 justify-center mb-8">
          <RingButton
            href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
            target="_blank" rel="noopener noreferrer"
            className="btn-crimson px-7 py-4 text-sm"
          >
            Book a Free Audit
          </RingButton>
          <a href="#services" className="btn-ghost px-6 py-4 text-sm">
            See How It Works ↓
          </a>
        </motion.div>

        <motion.div custom={0.4} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
          {trustSignals.map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: '#2D8A4E' }} aria-hidden="true"/>
              <span className="font-body text-xs text-charcoal/40">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Bottom 3 preview cards ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-12 pb-14 grid md:grid-cols-3 gap-4">

        {/* Card 1: Metrics */}
        <motion.div custom={0.5} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-2xl bg-white border border-charcoal/[0.07] p-5 shadow-sm">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#EF4444]"/>
            <div className="w-2 h-2 rounded-full bg-[#F59E0B]"/>
            <div className="w-2 h-2 rounded-full bg-[#2D8A4E]"/>
          </div>
          <div className="space-y-2.5">
            {[
              { label: 'Re-engaged Guests', val: '1,204' },
              { label: 'Avg. Follow-up Time', val: '< 4 min' },
              { label: 'Revenue Recovered',   val: '$18,400' },
              { label: 'Manual Hours Saved',  val: '22 h/wk' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-4">
                <span className="font-body text-xs text-charcoal/45 leading-tight">{row.label}</span>
                <span className="font-display font-800 text-sm text-charcoal whitespace-nowrap">{row.val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Card 2: Automation hub */}
        <motion.div custom={0.6} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-2xl bg-[#1A1A1E] p-5 shadow-sm flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2.5">
            {/* Left logos */}
            <div className="flex flex-col gap-2">
              {[
                { name: 'HubSpot',       img: 'hubspot.png' },
                { name: 'Google Sheets', img: 'google sheets.png' },
                { name: 'Airtable',      img: 'airtable.webp' },
              ].map(({ name, img }) => (
                <div key={name} className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <img src={`/logos/${img}`} alt={name} style={{ width: 22, height: 22, objectFit: 'contain' }} />
                </div>
              ))}
            </div>
            {/* Dashed connectors */}
            <div className="flex flex-col gap-2.5">
              {[0,1,2].map(i => <div key={i} className="w-5 border-t border-dashed border-white/20"/>)}
            </div>
            {/* Center hub — MarTech Lab logo */}
            <div
              className="rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{
                background: 'rgba(26,26,30,0.85)',
                border: '1px solid rgba(255,255,255,0.18)',
                width: '6rem',
                height: '3.5rem',
                padding: '8px',
              }}
              role="img"
              aria-label="MarTech Lab"
            >
              <img
                src="/logos/logo-dark.svg"
                alt="MarTech Lab"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            {/* Dashed connectors */}
            <div className="flex flex-col gap-2.5">
              {[0,1,2].map(i => <div key={i} className="w-5 border-t border-dashed border-white/20"/>)}
            </div>
            {/* Right logos */}
            <div className="flex flex-col gap-2">
              {[
                { name: 'Zapier',     img: 'dyn-6df7bea9c230212ac46723706e4f8f2b.png' },
                { name: 'Slack',      img: 'slack.png' },
                { name: 'Notion',     img: 'file-11c0be29e59f3d2fb3f3c557b6cf5365.png' },
              ].map(({ name, img }) => (
                <div key={name} className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <img src={`/logos/${img}`} alt={name} style={{ width: 22, height: 22, objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
          <p className="font-body text-[0.7rem] text-white/35 text-center leading-snug">
            One system. All your tools, finally in sync.
          </p>
        </motion.div>

        {/* Card 3: CRM pipeline */}
        <motion.div custom={0.7} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-2xl bg-white border border-charcoal/[0.07] p-5 shadow-sm">
          <p className="font-display font-800 text-[0.62rem] text-charcoal/35 uppercase tracking-widest mb-4">
            Guest Pipeline
          </p>
          <div className="space-y-3">
            {[
              { name: 'Alex N.',  role: 'Owner · Bangkok',      tag: 'Re-engaged', tagColor: '#2D8A4E' },
              { name: 'Kim W.',   role: 'GM · Los Angeles',     tag: 'Booked',     tagColor: '#C03028' },
              { name: 'Sam P.',   role: 'Director · Sydney',    tag: 'New Lead',   tagColor: '#E37400' },
              { name: 'Bea C.',   role: 'Owner · Melbourne',    tag: 'VIP',        tagColor: '#6B3FA0' },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(26,26,30,0.06)' }}>
                    <span className="font-display font-900 text-[9px] text-charcoal/50">{c.name[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-body text-xs font-600 text-charcoal truncate">{c.name}</p>
                    <p className="font-body text-[0.6rem] text-charcoal/35 truncate">{c.role}</p>
                  </div>
                </div>
                <span className="font-display text-[0.58rem] font-700 uppercase tracking-wide px-2 py-0.5 rounded flex-shrink-0"
                  style={{ background: c.tagColor + '15', color: c.tagColor }}>
                  {c.tag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

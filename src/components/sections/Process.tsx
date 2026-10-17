'use client'

import { motion } from 'framer-motion'
import AnimateSection from '../AnimateSection'
import ParticleNetwork from '../ParticleNetwork'
import RingButton from '../RingButton'

const steps = [
  {
    numeral: 'I',
    number: '01',
    title: 'Audit',
    summary: 'We map your current stack.',
    body: 'A 30-minute call + a structured review of your CRM, email platform, POS data, and existing automations. We find the gaps, the duplicates, and the biggest quick wins.',
    duration: '1–2 days',
  },
  {
    numeral: 'II',
    number: '02',
    title: 'Build',
    summary: 'We build the system.',
    body: 'CRM configuration, automation sequences, lead routing, campaign templates, data integrations — built correctly the first time, with documentation your team can actually use.',
    duration: '1–3 weeks',
  },
  {
    numeral: 'III',
    number: '03',
    title: 'Launch',
    summary: 'We hand it over running.',
    body: 'Live walkthrough with your team, QA of every workflow, clean data handoff. You go live with automations that are already tested, not a "we\'ll figure it out after."',
    duration: '1–2 days',
  },
  {
    numeral: 'IV',
    number: '04',
    title: 'Optimise',
    summary: 'We keep it working.',
    body: 'Monthly check-in or ongoing retainer. We monitor deliverability, update sequences as your offers change, and expand the system as your business grows.',
    duration: 'Ongoing',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative bg-[#1A1A1E] py-28 overflow-hidden">
      <ParticleNetwork color="#C03028" opacity={0.04} count={30} connectionDistance={95} />

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '45%',
          height: '70%',
          top: '5%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(192,48,40,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ x: [0, 30, -15, 0], y: [0, -25, 15, 0], scale: [1, 1.15, 0.92, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '30%',
          height: '50%',
          bottom: '5%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(107,63,160,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ x: [0, -20, 10, 0], y: [0, 18, -10, 0], scale: [1, 0.85, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateSection className="mb-16">
          <p className="eyebrow mb-4">How it works</p>
          <h2
            className="font-display font-900 text-white leading-[1.06]"
            style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', letterSpacing: '-0.02em' }}
          >
            Four steps.
            <br />
            No surprises.
          </h2>
        </AnimateSection>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {steps.map((step, i) => (
            <AnimateSection key={step.number} delay={i * 0.09}>
              <div className="grid md:grid-cols-[64px_200px_1fr_100px] gap-6 md:gap-10 py-8 items-start">
                {/* Roman numeral */}
                <span
                  className="font-display font-900 text-white/15"
                  style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)', letterSpacing: '-0.04em', lineHeight: 1, fontStyle: 'italic' }}
                >
                  {step.numeral}
                </span>

                {/* Title */}
                <div>
                  <h3 className="font-display font-900 text-2xl text-white mb-1">{step.title}</h3>
                  <p className="font-display font-700 text-sm text-crimson">{step.summary}</p>
                </div>

                {/* Body */}
                <p className="font-body text-sm text-white/40 leading-relaxed">
                  {step.body}
                </p>

                {/* Duration badge */}
                <div className="md:text-right">
                  <span
                    className="inline-block font-display text-[0.62rem] font-700 tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>

        {/* CTA row */}
        <AnimateSection delay={0.3} className="pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-body text-sm text-white/35 max-w-sm">
            From your first call to a running system, typically 2–4 weeks, start to finish.
          </p>
          <RingButton
            href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson px-6 py-3 text-sm whitespace-nowrap flex-shrink-0"
          >
            Start with a free audit
          </RingButton>
        </AnimateSection>
      </div>
    </section>
  )
}

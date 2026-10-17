'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateSection from '../AnimateSection'
import FlowField from '../FlowField'

const before = [
  'Manual follow-up hours after a new lead comes in',
  'Guest data scattered across POS, email, and CRM',
  'Campaigns rebuilt from scratch every send',
  'No pipeline visibility, guessing at what works',
  'Repeat business left on the table every week',
]

const after = [
  'Automated follow-up triggers within 5 minutes',
  'One source of truth for every customer touchpoint',
  'Automated sequences that run without you touching them',
  'Clear pipeline: revenue forecast, attribution, churn alerts',
  'A system that turns past guests into future revenue',
]

const SHARDS = [
  { clip: 'polygon(0% 0%, 48% 0%, 30% 62%, 0% 38%)',        tx: -38, ty: -28, rot: -22 },
  { clip: 'polygon(48% 0%, 100% 0%, 100% 38%, 64% 54%)',     tx:  42, ty: -32, rot:  19 },
  { clip: 'polygon(30% 62%, 48% 0%, 64% 54%, 50% 100%)',     tx:   6, ty:  18, rot:  11 },
  { clip: 'polygon(0% 38%, 30% 62%, 18% 100%, 0% 100%)',     tx: -44, ty:  38, rot: -27 },
  { clip: 'polygon(64% 54%, 100% 38%, 100% 100%, 50% 100%)', tx:  48, ty:  44, rot:  24 },
  { clip: 'polygon(18% 100%, 50% 100%, 30% 62%, 0% 38%)',    tx: -18, ty:  50, rot: -14 },
]

const CIRCUIT_PATHS = [
  'M 20 40 L 60 40 L 60 60 L 100 60',
  'M 20 70 L 40 70 L 40 50 L 80 50',
  'M 50 20 L 50 45 L 90 45',
  'M 70 80 L 70 60 L 110 60 L 110 40',
  'M 10 55 L 30 55 L 30 75 L 60 75',
]

export default function Solution() {
  const [beforeHovered, setBeforeHovered] = useState(false)
  const [afterHovered, setAfterHovered] = useState(false)

  return (
    <section id="solution" className="relative bg-[#1A1A1E] py-24 overflow-hidden">
      <FlowField dark={true} style={{ opacity: 0.5 }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <AnimateSection className="mb-14">
          <p className="eyebrow mb-4">The fix</p>
          <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-white max-w-2xl">
            MarTech Lab Resolves Your{' '}
            <span style={{ color: '#C03028' }}>CRM</span> and{' '}
            <span style={{ color: '#C03028' }}>Automation</span> Problems
          </h2>
        </AnimateSection>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Before — shatter on hover */}
          <AnimateSection delay={0.1}>
            <div
              className="glass rounded-2xl p-7 h-full relative overflow-hidden cursor-default"
              onMouseEnter={() => setBeforeHovered(true)}
              onMouseLeave={() => setBeforeHovered(false)}
            >
              {/* Shatter overlay */}
              <AnimatePresence>
                {beforeHovered && SHARDS.map((s, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-2xl"
                    style={{ clipPath: s.clip, background: 'rgba(255,255,255,0.07)', zIndex: 10 }}
                    initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                    animate={{ x: s.tx, y: s.ty, rotate: s.rot, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.04, ease: [0.4, 0, 1, 1] }}
                  />
                ))}
              </AnimatePresence>

              {/* Crack lines on hover */}
              <AnimatePresence>
                {beforeHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ zIndex: 9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <motion.line x1="48" y1="0" x2="30" y2="62" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2 }} />
                      <motion.line x1="48" y1="0" x2="64" y2="54" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.2, delay: 0.05 }} />
                      <motion.line x1="30" y1="62" x2="0" y2="38" stroke="rgba(255,255,255,0.25)" strokeWidth="0.4"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.15, delay: 0.1 }} />
                      <motion.line x1="64" y1="54" x2="100" y2="38" stroke="rgba(255,255,255,0.25)" strokeWidth="0.4"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.15, delay: 0.1 }} />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="font-display text-xs font-700 tracking-[0.12em] uppercase text-white/30 mb-6">
                Before
              </p>
              <ul className="flex flex-col gap-4">
                {before.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span
                      className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-white/15 flex items-center justify-center text-[0.6rem] text-white/25"
                      aria-hidden="true"
                    >
                      ✕
                    </span>
                    <span className="font-body text-sm text-white/45 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateSection>

          {/* After — blueprint formation on hover */}
          <AnimateSection delay={0.2}>
            <div
              className="rounded-2xl p-7 h-full relative overflow-hidden cursor-default"
              style={{
                background: 'rgba(192,48,40,0.12)',
                border: '1px solid rgba(192,48,40,0.22)',
              }}
              onMouseEnter={() => setAfterHovered(true)}
              onMouseLeave={() => setAfterHovered(false)}
            >
              {/* Blueprint circuit overlay */}
              <AnimatePresence>
                {afterHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 130 100" preserveAspectRatio="none">
                      {CIRCUIT_PATHS.map((d, i) => (
                        <motion.path
                          key={i}
                          d={d}
                          stroke="rgba(45,138,78,0.3)"
                          strokeWidth="1.2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}
                        />
                      ))}
                      {/* Circuit nodes */}
                      {[
                        [60, 40], [60, 60], [100, 60], [40, 70], [80, 50], [50, 45], [90, 45]
                      ].map(([cx, cy], i) => (
                        <motion.circle
                          key={i}
                          cx={cx} cy={cy} r="2"
                          fill="rgba(45,138,78,0.5)"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.25, delay: 0.5 + i * 0.06 }}
                        />
                      ))}
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>

              <p className="font-display text-xs font-700 tracking-[0.12em] uppercase text-white/50 mb-6">
                After
              </p>
              <ul className="flex flex-col gap-4">
                {after.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span
                      className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[0.7rem] font-700"
                      style={{ background: '#2D8A4E', color: '#fff' }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="font-body text-sm text-white/80 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <a
                  href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-crimson px-5 py-3 text-sm"
                >
                  Get this for your business →
                </a>
              </div>
            </div>
          </AnimateSection>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import AnimateSection from '../AnimateSection'
import ParticleNetwork from '../ParticleNetwork'

const industries = [
  {
    name: 'Hospitality & F&B',
    desc: 'Independent restaurant groups, café chains, 2–5 location operators. Guest data, re-engagement, POS integration.',
    badge: 'Primary',
  },
  {
    name: 'Fitness & Yoga Studios',
    desc: 'Boutique studios, gym chains, personal training. Member retention, referral automation, class fill rates.',
    badge: 'Active',
  },
  {
    name: 'Med-Spa & Aesthetics',
    desc: 'Cosmetic clinics, wellness brands, vanity studios. Rebooking sequences, upsell flows, review automation.',
    badge: 'Active',
  },
  {
    name: 'Education & Coaching',
    desc: 'Online educators, coaching practices, course operators. Lead nurture, enrolment sequences, cohort management.',
    badge: 'Active',
  },
]

const leftFeatures = [
  {
    label: 'Built inside real operations',
    body: 'Active Revenue Operations and Marketing Ops across hospitality, B2B SaaS, and healthcare — simultaneously.',
    iconPath: 'M9 17H7a3 3 0 0 1 0-6h2M15 11h2a3 3 0 0 1 0 6h-2M12 8v10M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  },
  {
    label: 'We teach everything for free',
    body: 'The playbook is open. Read it, apply it yourself, or let us build it fast — no gatekeeping.',
    iconPath: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  },
]

const rightFeatures = [
  {
    label: 'Builder + strategist. One team.',
    body: 'No account managers. No outsourced delivery. You work directly with the people who build.',
    iconPath: 'M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5',
  },
  {
    label: 'Systems that run without you.',
    body: 'If your team needs to babysit it every week, we didn\'t build it right. Built for operators.',
    iconPath: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  },
]

const LINE_VARIANTS = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' as const },
  }),
}

const PILL_FLOAT = (i: number) => ({
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 3.2 + i * 0.8,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay: i * 0.4,
    },
  },
})

const HUB_PULSE = {
  animate: {
    scale: [1, 1.04, 0.97, 1.02, 1],
    rotate: [0, 0.8, -0.8, 0.4, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
  },
}

export default function Industries() {
  return (
    <>
      {/* Industries */}
      <section id="industries" className="relative bg-[#1E1E24] py-24 overflow-hidden">
        <ParticleNetwork color="#C03028" opacity={0.05} count={35} connectionDistance={90} />

        <div className="relative max-w-6xl mx-auto px-6">
          <AnimateSection className="mb-14">
            <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-white">
              Built for operators.
            </h2>
          </AnimateSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <AnimateSection key={ind.name} delay={i * 0.09}>
                <div className="glass rounded-2xl p-6 h-full">
                  {ind.badge === 'Primary' && (
                    <span
                      className="inline-block text-[0.65rem] font-display font-700 tracking-widest uppercase px-2.5 py-1 rounded mb-4"
                      style={{ background: 'rgba(192,48,40,0.18)', color: '#ff7b75' }}
                    >
                      Primary niche
                    </span>
                  )}
                  <div
                    className="w-2 h-2 rounded-[2px] mb-4"
                    style={{ background: '#C03028' }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display font-800 text-base text-white mb-3">{ind.name}</h3>
                  <p className="font-body text-xs text-white/45 leading-relaxed">{ind.desc}</p>
                </div>
              </AnimateSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why MarTech Lab — hub-and-spoke */}
      <section id="why" className="bg-[#1A1A1E] py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateSection className="mb-16">
            <p className="eyebrow mb-4">Why us</p>
            <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-white max-w-xl">
              The automation agency that actually understands your operations.
            </h2>
          </AnimateSection>

          {/* Hub layout */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 min-h-[320px]">

            {/* SVG connector lines — desktop only, no animated dots */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M 32 28 Q 41 38 50 50"
                fill="none"
                stroke="rgba(192,48,40,0.35)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                variants={LINE_VARIANTS}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.path
                d="M 32 72 Q 41 62 50 50"
                fill="none"
                stroke="rgba(192,48,40,0.25)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                variants={LINE_VARIANTS}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.path
                d="M 50 50 Q 59 38 68 28"
                fill="none"
                stroke="rgba(192,48,40,0.35)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                variants={LINE_VARIANTS}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.path
                d="M 50 50 Q 59 62 68 72"
                fill="none"
                stroke="rgba(192,48,40,0.25)"
                strokeWidth="0.8"
                strokeDasharray="3 3"
                variants={LINE_VARIANTS}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </svg>

            {/* Left feature pills */}
            <div className="flex flex-col gap-5 w-full lg:w-[30%] relative z-10">
              {leftFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  {...PILL_FLOAT(i)}
                  className="glass rounded-2xl p-5"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(192,48,40,0.15)' }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#C03028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={f.iconPath} />
                      </svg>
                    </span>
                    <div>
                      <p className="font-display font-800 text-sm text-white leading-snug mb-1">{f.label}</p>
                      <p className="font-body text-xs text-white/45 leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Center hub icon */}
            <div className="flex-shrink-0 relative z-10 flex items-center justify-center lg:mx-8">
              <motion.div {...HUB_PULSE}>
                {/* Outer glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: 'rgba(192,48,40,0.15)', filter: 'blur(16px)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{ background: '#C03028', boxShadow: '0 0 32px rgba(192,48,40,0.4), inset 0 1px 0 rgba(255,255,255,0.2)' }}
                >
                  {/* Flask icon */}
                  <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
                    <path d="M9 3h6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M10 3v7.5L5.5 17A2.5 2.5 0 0 0 7.8 21h8.4a2.5 2.5 0 0 0 2.3-3.5L14 10.5V3"
                      stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10.5" cy="15" r="1" fill="rgba(255,255,255,0.7)"/>
                    <circle cx="13" cy="13" r="0.7" fill="rgba(255,255,255,0.5)"/>
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Right feature pills */}
            <div className="flex flex-col gap-5 w-full lg:w-[30%] relative z-10">
              {rightFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  {...PILL_FLOAT(i)}
                  className="glass rounded-2xl p-5"
                  style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(192,48,40,0.15)' }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#C03028" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={f.iconPath} />
                      </svg>
                    </span>
                    <div>
                      <p className="font-display font-800 text-sm text-white leading-snug mb-1">{f.label}</p>
                      <p className="font-body text-xs text-white/45 leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AnimateSection from '@/components/AnimateSection'
import RingButton from '@/components/RingButton'
import FlowField from '@/components/FlowField'

/* ── Form ───────────────────────────────────────────────────────────── */

type FormState = 'idle' | 'sending' | 'sent' | 'error'

function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({ name: '', business: '', email: '', challenge: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('sending')
    // Placeholder — wire up to your form handler (Formspree, Resend, etc.)
    await new Promise(r => setTimeout(r, 1000))
    setState('sent')
  }

  const inputClass =
    'w-full font-body text-sm text-white bg-transparent rounded-xl px-4 py-3.5 outline-none transition-all placeholder:text-white/25 focus:ring-0'
  const wrapClass =
    'rounded-xl border border-white/[0.1] focus-within:border-crimson/60 transition-colors'

  if (state === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center text-center py-16 gap-5"
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: 'rgba(45,138,78,0.15)', border: '1px solid rgba(45,138,78,0.3)' }}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#2D8A4E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div>
          <p className="font-display font-900 text-white text-xl mb-2">Message received.</p>
          <p className="font-body text-sm text-white/45 max-w-xs">
            We&apos;ll be in touch within 24 hours. If it&apos;s urgent, book a call directly below.
          </p>
        </div>
        <RingButton
          href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-crimson px-6 py-3 text-sm mt-2"
        >
          Book a call instead
        </RingButton>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className={wrapClass}>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
            style={{ background: 'transparent' }}
          />
        </div>
        <div className={wrapClass}>
          <input
            required
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Business name"
            className={inputClass}
            style={{ background: 'transparent' }}
          />
        </div>
      </div>

      <div className={wrapClass}>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className={inputClass}
          style={{ background: 'transparent' }}
        />
      </div>

      <div className={`${wrapClass}`}>
        <textarea
          required
          name="challenge"
          value={form.challenge}
          onChange={handleChange}
          placeholder="What's your biggest marketing or automation challenge right now?"
          rows={5}
          className={`${inputClass} resize-none`}
          style={{ background: 'transparent' }}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'sending'}
        className="btn-crimson w-full py-4 text-sm justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'sending' ? 'Sending…' : 'Send message'}
      </button>

      <p className="font-body text-xs text-white/25 text-center">
        Response within 24 hours · No spam, ever
      </p>
    </form>
  )
}

/* ── Page ───────────────────────────────────────────────────────────── */

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-[#1A1A1E] pt-48 pb-24 overflow-hidden">
          <FlowField dark={true} style={{ opacity: 0.45 }} />

          {/* Ambient blobs */}
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: '40%', height: '55%',
              top: '-5%', left: '-10%',
              background: 'radial-gradient(circle, rgba(192,48,40,0.1) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={{ x: [0, 25, -10, 0], y: [0, -20, 12, 0], scale: [1, 1.12, 0.94, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: '30%', height: '45%',
              bottom: '0%', right: '-5%',
              background: 'radial-gradient(circle, rgba(107,63,160,0.07) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            animate={{ x: [0, -18, 8, 0], y: [0, 15, -8, 0], scale: [1, 0.88, 1.08, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
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
              <p className="eyebrow mb-5">Get in touch</p>
              <h1
                className="font-display font-900 text-white leading-[1.04] mb-5"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', letterSpacing: '-0.02em' }}
              >
                Let&apos;s find your
                <br />
                <span style={{ color: '#C03028' }}>revenue leak.</span>
              </h1>
              <p className="font-body text-base text-white/45 max-w-lg leading-relaxed">
                In 30 minutes, we&apos;ll show you exactly where your biggest automation opportunity is — and what it would take to build it. No pitch deck. No obligation. Just a straight answer.
              </p>
            </AnimateSection>
          </div>
        </section>

        {/* Two-column: calendar embed + form */}
        <section className="bg-[#1A1A1E] pb-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-6">

              {/* Left — Book a call */}
              <AnimateSection delay={0.05}>
                <div
                  className="rounded-2xl p-8 md:p-10 h-full flex flex-col"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(192,48,40,0.35)' }}
                >
                  {/* Top glow */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle, rgba(192,48,40,0.35) 0%, transparent 70%)',
                      filter: 'blur(36px)',
                      width: '12rem', height: '12rem',
                      top: '-3rem', left: '50%', transform: 'translateX(-50%)',
                    }}
                    aria-hidden="true"
                  />

                  <p className="eyebrow mb-4">Preferred</p>
                  <h2 className="font-display font-900 text-white text-2xl mb-3">Book a free 30-min audit</h2>
                  <p className="font-body text-sm text-white/45 leading-relaxed mb-8">
                    Pick a time that works for you. We&apos;ll review your current stack, identify your biggest opportunity, and give you a clear recommendation — on the call.
                  </p>

                  {/* What to expect */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {[
                      'We review your current tools and data',
                      'We find the biggest automation opportunity',
                      'We give you a clear, honest recommendation',
                      'You get a written scope before any commitment',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[0.7rem]"
                          style={{ background: '#2D8A4E', color: '#fff' }}
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span className="font-body text-sm text-white/55 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    {/* ── Calendly embed placeholder ─────────────────────
                        Replace this block with your Calendly embed script:
                        <div className="calendly-inline-widget" data-url="https://calendly.com/YOUR_LINK" style={{ minWidth: 320, height: 630 }} />
                        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
                    ─────────────────────────────────────────────────── */}
                    <RingButton
                      href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-crimson w-full py-4 text-sm justify-center"
                    >
                      Book on Google Calendar
                    </RingButton>
                    <p className="font-body text-xs text-white/25 text-center mt-4">
                      No lock-in contracts · Response within 24 hours
                    </p>
                  </div>
                </div>
              </AnimateSection>

              {/* Right — Contact form */}
              <AnimateSection delay={0.12}>
                <div
                  className="rounded-2xl p-8 md:p-10 h-full"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <p className="eyebrow mb-4">Or send a message</p>
                  <h2 className="font-display font-900 text-white text-2xl mb-3">Write to us directly</h2>
                  <p className="font-body text-sm text-white/45 leading-relaxed mb-8">
                    Not ready for a call? Tell us what you&apos;re dealing with and we&apos;ll reply with a straight answer.
                  </p>
                  <ContactForm />
                </div>
              </AnimateSection>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="bg-[#0F0F12] py-16">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateSection>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                {[
                  { stat: '< 24h', label: 'Response time on all enquiries' },
                  { stat: '100%', label: 'Written scope before any payment' },
                  { stat: '0', label: 'Lock-in contracts — ever' },
                ].map((item, i) => (
                  <AnimateSection key={item.stat} delay={i * 0.1}>
                    <div
                      className="rounded-2xl p-7"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <p
                        className="font-display font-900 mb-2"
                        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#C03028' }}
                      >
                        {item.stat}
                      </p>
                      <p className="font-body text-sm text-white/40 leading-snug">{item.label}</p>
                    </div>
                  </AnimateSection>
                ))}
              </div>
            </AnimateSection>
          </div>
        </section>

        {/* Direct contact row */}
        <section className="bg-[#0F0F12] pb-20">
          <div className="max-w-6xl mx-auto px-6">
            <AnimateSection>
              <div
                className="rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div>
                  <p className="font-display font-800 text-sm text-white mb-1">Prefer email or WhatsApp?</p>
                  <p className="font-body text-xs text-white/35">Reach us directly — same response time guarantee.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:martechlab.admin@gmail.com"
                    className="btn-ghost-white px-5 py-2.5 text-sm"
                  >
                    martechlab.admin@gmail.com
                  </a>
                  <a
                    href="https://wa.me/639686191649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost-white px-5 py-2.5 text-sm"
                  >
                    WhatsApp ↗
                  </a>
                </div>
              </div>
            </AnimateSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

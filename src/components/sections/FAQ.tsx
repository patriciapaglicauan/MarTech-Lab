'use client'

import { useState } from 'react'
import AnimateSection from '../AnimateSection'
import RingButton from '../RingButton'

const faqs = [
  {
    q: "What exactly do you automate?",
    a: "Anything that currently requires a human to do a repetitive, rule-based task. That includes: follow-up emails sent automatically after a booking or enquiry, lead routing that assigns new contacts to the right rep without manual triage, re-engagement sequences that fire when a customer goes quiet, review request messages sent at the right moment after a visit, and internal ops like syncing data between your POS, CRM, and reporting tools. If your team is doing the same thing more than twice a week, it can probably be automated.",
  },
  {
    q: "We already have a CRM. Do we actually need this?",
    a: "Having a CRM and having a CRM that works are two different things. Most businesses we work with have HubSpot or ActiveCampaign already set up, and 80% of the features are unused, the data is messy, and half the automations are broken. We fix what's there, not replace it.",
  },
  {
    q: "How long does it take to set up?",
    a: "A focused automation buildout typically takes 1–3 weeks from audit to launch. A full CRM ops setup with lead gen sequences takes 3–4 weeks. We're not slow. We're thorough. A system that breaks in month two is not a system.",
  },
  {
    q: "Will my team actually use it?",
    a: "This is the most common concern, and it's a fair one. We build with your team's actual workflow in mind. If they're on WhatsApp, we connect to WhatsApp. If they live in spreadsheets, we make sure the output lands somewhere they'll look. Adoption is part of the build, not an afterthought.",
  },
  {
    q: "What if I don't have much customer data yet?",
    a: "You likely have more than you think — POS records, email sign-ups, reservation history, past enquiries. The audit will tell us what you're working with. If data is genuinely thin, we'll start with lead generation infrastructure to build the pipeline first.",
  },
  {
    q: "Do you only work with hospitality businesses?",
    a: "Hospitality and F&B is our primary niche, but we also work with fitness studios, aesthetics clinics, and coaching businesses. The common thread is: operators with existing customer bases who aren't monetising them properly.",
  },
  {
    q: "What does it cost?",
    a: "Quick-win projects start from a fixed project fee. Full buildouts and monthly retainers are scoped after the audit — because every business is different and we don't quote before we know what we're actually solving. Book a free discovery call and we'll give you a clear range within the first 30 minutes.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-charcoal/[0.08]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-800 text-base text-charcoal group-hover:text-crimson transition-colors leading-snug">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-display font-700 transition-all"
          style={{
            background: open ? '#C03028' : 'rgba(192,48,40,0.08)',
            color: open ? '#fff' : '#C03028',
            transform: open ? 'rotate(45deg)' : 'none',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p className="font-body text-sm text-charcoal/60 leading-relaxed pb-5 pr-10">
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#F5F3EE] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.8fr] gap-12 md:gap-20 items-start">
          <AnimateSection>
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-charcoal">
              Things people
              <br />
              usually ask.
            </h2>
            <p className="font-body text-sm text-charcoal/50 mt-4 leading-relaxed max-w-xs">
              Still have a question? Book a call. We&apos;ll answer it in person.
            </p>
            <div className="mt-6">
              <RingButton
                href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-crimson inline-flex px-5 py-3 text-sm"
              >
                Book a free audit
              </RingButton>
            </div>
          </AnimateSection>

          <AnimateSection delay={0.1}>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimateSection>
        </div>
      </div>
    </section>
  )
}

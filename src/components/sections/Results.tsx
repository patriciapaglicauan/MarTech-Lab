import Link from 'next/link'
import AnimateSection from '../AnimateSection'

const results = [
  {
    client: 'Multi-location café group',
    location: 'Sydney, AU',
    context:
      'Three-location café group with a POS database of 8,000+ guests and no re-engagement strategy. Campaigns were rebuilt manually every time. Follow-up for event enquiries took 2–3 days.',
    outcome:
      'Automated guest reactivation sequence across all three locations. Lead follow-up triggered within 4 minutes of inquiry. Event enquiry-to-booking rate improved in the first 30 days.',
    tags: ['Automation', 'CRM Ops'],
  },
  {
    client: 'Boutique fitness studio',
    location: 'Manila, PH',
    context:
      'Single-studio operator spending heavily on paid social with no system to convert leads into members. Trial sign-ups were followed up manually, or not at all.',
    outcome:
      'Full lead-to-member automation pipeline. Trial booking confirmation + 3-touchpoint nurture sequence + referral trigger. Staff time on manual follow-up dropped to near zero.',
    tags: ['Lead Gen', 'Automation'],
  },
]

export default function Results() {
  return (
    <section id="results" className="bg-[#F2F0EB] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateSection className="mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">Client outcomes</p>
              <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-charcoal">
                What this looks like
                <br />
                in practice.
              </h2>
            </div>
            <Link
              href="/results"
              className="font-display text-sm font-700 text-crimson hover:underline underline-offset-4 whitespace-nowrap"
            >
              See all case studies →
            </Link>
          </div>
        </AnimateSection>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((r, i) => (
            <AnimateSection key={r.client} delay={i * 0.12}>
              <div className="bg-white rounded-2xl p-7 border border-charcoal/[0.06] h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="font-display font-800 text-base text-charcoal">{r.client}</p>
                    <p className="font-body text-xs text-charcoal/40 mt-0.5">{r.location}</p>
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {r.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-display text-[0.62rem] font-700 tracking-wide uppercase px-2.5 py-1 rounded"
                        style={{ background: 'rgba(192,48,40,0.08)', color: '#C03028' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="font-display text-[0.65rem] font-700 tracking-[0.1em] uppercase text-charcoal/30 mb-2">
                    The situation
                  </p>
                  <p className="font-body text-sm text-charcoal/55 leading-relaxed">{r.context}</p>
                </div>

                <div className="mt-auto pt-5 border-t border-charcoal/[0.06]">
                  <p className="font-display text-[0.65rem] font-700 tracking-[0.1em] uppercase mb-2" style={{ color: '#2D8A4E' }}>
                    What changed
                  </p>
                  <p className="font-body text-sm text-charcoal/70 leading-relaxed">{r.outcome}</p>
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  )
}

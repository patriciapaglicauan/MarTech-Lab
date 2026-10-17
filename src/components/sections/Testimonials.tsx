import AnimateSection from '../AnimateSection'

const testimonials = [
  {
    quote: "We had 6,000 past guests in our POS and no way to reach them. Now we have automated re-engagement running every month without us touching it.",
    name: 'Sarah M.',
    role: 'Owner, 3-location café group',
    location: 'Sydney',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    quote: "Every agency I spoke to wanted to run ads. MarTech Lab was the first team that actually looked at our data and told us where the real problem was.",
    name: 'James T.',
    role: 'GM, Boutique Hotel',
    location: 'Melbourne',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    quote: "Our trial-to-member conversion went from 'we have no idea' to something we can actually track. That alone was worth it.",
    name: 'Kat R.',
    role: 'Studio Director',
    location: 'Manila',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    quote: "I've worked with two other marketing agencies. MarTech Lab is the first one that felt like they actually understood how a restaurant operates.",
    name: 'Marco L.',
    role: 'Owner, Restaurant Group',
    location: 'Los Angeles',
    avatar: 'https://i.pravatar.cc/100?img=33',
  },
  {
    quote: "Setup took one week. The automations have been running for four months without a single issue. I don't think about it anymore. Which is exactly the point.",
    name: 'Priya S.',
    role: 'Marketing Manager',
    location: 'Brisbane',
    avatar: 'https://i.pravatar.cc/100?img=16',
  },
  {
    quote: "Finally a system where the data actually makes sense. We can see which campaigns drove bookings. We couldn't do that before.",
    name: 'David W.',
    role: 'F&B Director',
    location: 'Singapore',
    avatar: 'https://i.pravatar.cc/100?img=65',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#1A1A1E] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateSection className="mb-12">
          <p className="eyebrow mb-4">What clients say</p>
          <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-white">
            Loved by teams of Founders, Marketers, and Developers.
          </h2>
        </AnimateSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <AnimateSection key={t.name} delay={i * 0.07}>
              <div className="glass rounded-2xl p-6 h-full flex flex-col">
                {/* Quote */}
                <p className="font-body text-sm text-white/65 leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Avatar + info */}
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="flex-shrink-0 w-10 h-10 rounded-full object-cover"
                    style={{ border: '2px solid rgba(255,255,255,0.12)' }}
                  />
                  <div>
                    <p className="font-display font-800 text-sm text-white">{t.name}</p>
                    <p className="font-body text-xs text-white/35">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            </AnimateSection>
          ))}
        </div>
      </div>
    </section>
  )
}

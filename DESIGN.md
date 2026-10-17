# MarTech Lab — Design System

> Generated from homepage source. Reference this file when building any new page
> to keep the visual language consistent across Services, Contact, About, etc.

---

## Brand Identity

| Property | Value |
|---|---|
| Agency | MarTech Lab |
| Tagline | AI automations for Healthcare clinics, Gyms & Studios, and Hospitality |
| Personality | Bold · Nerdy · Trustworthy |
| Tone | Polished, straight-talking, no fluff — confident not corporate |

---

## Color Tokens

All colors are defined in `src/app/globals.css` as both `@theme` (Tailwind v4) and `:root` CSS variables.

| Token | Hex | Usage |
|---|---|---|
| `--crimson` / `text-crimson` | `#C03028` | Primary — CTAs, highlights, eyebrows, accents |
| `--crimson-dark` | `#9A2420` | Hover state for crimson buttons |
| `--stone` / `bg-stone` | `#F2F0EB` | Light background (Hero, Pain, Results, ProofStrip) |
| `--charcoal` / `text-charcoal` | `#1A1A1E` | Body text, dark card backgrounds |
| `--charcoal-deep` / `#161619` | `#161619` | About section dark bg |
| `--charcoal-black` / `#0F0F12` | `#0F0F12` | Services section, Footer |
| `--signal-green` | `#2D8A4E` | Checkmarks, positive status, "After" panel — never dominant |
| `--violet` | `#6B3FA0` | Intelligence accent — use sparingly (≤5% of any page) |

### Opacity conventions (on dark surfaces)
- Primary text: `text-white` / `text-white/80`
- Secondary text: `text-white/55` or `text-white/45`
- Tertiary / labels: `text-white/35` or `text-white/30`
- Borders on dark: `rgba(255,255,255,0.08)` to `rgba(255,255,255,0.12)`
- Borders on light: `border-charcoal/[0.07]`

---

## Typography

### Fonts
- **Display / Headings:** `font-display` → League Spartan (loaded via `next/font/google`)
- **Body:** `font-body` / `font-sans` → Poppins

### Heading scale (fluid with `clamp`)
| Element | Size | Weight | Letter-spacing |
|---|---|---|---|
| H1 hero | `clamp(2.8rem, 6vw, 5rem)` | 900 | `-0.02em` |
| H1 subtitle | `clamp(1.6rem, 3.2vw, 2.8rem)` | 900 | inherited |
| H2 section | `clamp(2.2rem, 4vw, 3.2rem)` | 900 | `-0.025em` (global default) |
| H2 services | `clamp(2.4rem, 4.5vw, 3.8rem)` | 900 | `-0.02em` |
| H2 final CTA | `clamp(2.6rem, 5.5vw, 4.4rem)` | 900 | inherited |
| H3 card | `text-xl` (1.25rem) | 900 | inherited |
| All headings | — | — | `line-height: 1.08` (global) |

### Body / utility scale
| Use | Size | Weight | Font |
|---|---|---|---|
| Body paragraph | `text-base` (1rem) | 400 | Poppins |
| Card body | `text-sm` (0.875rem) | 400 | Poppins |
| Small / meta | `text-xs` (0.75rem) | 400–500 | Poppins |
| Tiny / labels | `text-[0.62rem]` | 700 | League Spartan |

### Eyebrow label
```css
.eyebrow {
  font-family: League Spartan;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--crimson);
}
```
Use `.eyebrow` above every section headline. Always in crimson.

---

## Section Background Alternation

Pages alternate light and dark sections for rhythm. Follow this pattern:

| Section | Background |
|---|---|
| Nav (scrolled) | `#F2F0EB/95` + `backdrop-blur-md` |
| Hero | `#F2F0EB` (stone) |
| Pain / ProofStrip | `#F2F0EB` (stone) |
| Solution | `#1A1A1E` (charcoal) — has FlowField overlay |
| Services | `#0F0F12` (charcoal-black) |
| Industries / Why Us | `#F2F0EB` (stone) |
| Process | alternates — check component |
| Results | `#F2F0EB` (stone) |
| About (Mini) | `#161619` (charcoal-deep) |
| Testimonials | stone or charcoal — check |
| Final CTA | `#C03028` (crimson solid) |
| Footer | `#0F0F12` (charcoal-black) |

---

## Spacing & Layout

- **Max content width:** `max-w-6xl mx-auto px-6` (all sections)
- **Section vertical padding:** `py-24` (standard) · `py-28` (Services, FinalCTA)
- **Section grid gap:** `gap-5` (cards) · `gap-6` (result cards) · `gap-12 md:gap-20` (2-col with image)
- **Card inner padding:** `p-7` (standard) · `p-5` (compact/widget cards)
- **Border radius:** `rounded-2xl` (cards) · `rounded-lg` (buttons, small elements) · `rounded-xl` (icon containers)

---

## Buttons

Three global button styles in `globals.css`:

### `.btn-crimson`
Primary CTA. Crimson bg, white text, League Spartan 700.
```tsx
<a className="btn-crimson px-7 py-4 text-sm">Book a Free Audit</a>
```
Hover: darkens to `#9A2420`, lifts `translateY(-1px)`.

### `.btn-ghost`
Secondary CTA on light backgrounds. Charcoal border, fills on hover.
```tsx
<a className="btn-ghost px-6 py-4 text-sm">See How It Works</a>
```

### `.btn-ghost-white`
Secondary CTA on dark backgrounds. White/30 border, subtle fill on hover.
```tsx
<Link className="btn-ghost-white inline-block px-6 py-3 text-sm">Read the full story</Link>
```

### `<RingButton>` (interactive primary)
Wraps `.btn-crimson` with a mouse-tracking cursor ring and spotlight glow.
Use for the most important CTA per page (booking link, main conversion action).
```tsx
<RingButton href="..." className="btn-crimson px-7 py-4 text-sm">
  Book a Free Audit
</RingButton>
```
`ringColor="crimson"` for use on light/crimson backgrounds; default `"white"` for dark.

### FinalCTA white button (one-off)
On the crimson CTA section only — white bg, crimson text:
```tsx
className="... bg-white text-crimson hover:bg-stone ..."
```

---

## Cards

### Light surface card (stone bg sections)
```tsx
<div className="bg-white rounded-2xl p-7 border border-charcoal/[0.06] h-full flex flex-col">
```

### Dark surface card
```tsx
<div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
  className="rounded-2xl p-7 h-full flex flex-col">
```
Highlighted variant: `rgba(255,255,255,0.05)` bg, `1px solid rgba(192,48,40,0.4)` border + crimson glow at top.

### Glass card (dark backgrounds)
```css
.glass { background: rgba(255,255,255,0.06); backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; }
```

### Cursor-following spotlight (service cards)
Add a `radial-gradient` blob that follows `mousemove` inside dark cards — see `Services.tsx` for the pattern.

---

## Animation

### Framer Motion easing rule
Always cast cubic bezier arrays explicitly:
```tsx
ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
```

---

### 1. `<AnimateSection>` — scroll-reveal fade-up
**File:** `components/AnimateSection.tsx`  
Used on every section and content block across all pages.

```tsx
// variants
hidden: { opacity: 0, y: 36 }
visible: { opacity: 1, y: 0 }
// transition
duration: 0.65s · ease: [0.22, 1, 0.36, 1] · delay: prop (seconds)
// viewport
once: true · margin: '-80px'
```

Stagger pattern for sibling elements: `delay={0}`, `delay={0.09}`, `delay={0.12}`, `delay={0.15}`, `delay={0.2}`

```tsx
<AnimateSection delay={0.1}>...</AnimateSection>
```

---

### 2. Hero `fadeUp` — on-mount (Hero only)
**File:** `components/sections/Hero.tsx`  
Fires on mount (not scroll). Same easing as AnimateSection.

```tsx
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: d },
  }),
}
```

Delay sequence: `0` eyebrow → `0.1` H1 → `0.2` body → `0.3` CTAs → `0.4` trust signals → `0.5`/`0.6`/`0.7` preview cards

---

### 3. `PILL_FLOAT` — floating pill cards
**File:** `components/sections/Industries.tsx`  
Applied to the why-us hub-and-spoke feature pills with `{...PILL_FLOAT(i)}`.

```tsx
const PILL_FLOAT = (i: number) => ({
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 3.2 + i * 0.8,   // 3.2s for i=0, 4.0s for i=1
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.4,             // 0s for i=0, 0.4s for i=1
    },
  },
})
// Usage — always use PILL_FLOAT(i), never PILL_FLOAT(i + n):
<motion.div {...PILL_FLOAT(i)}>...</motion.div>
```

---

### 4. `HUB_PULSE` — center hub breathing
**File:** `components/sections/Industries.tsx`  
Applied to the crimson flask icon hub. Subtle scale + rotate breathing loop.

```tsx
const HUB_PULSE = {
  animate: {
    scale: [1, 1.04, 0.97, 1.02, 1],
    rotate: [0, 0.8, -0.8, 0.4, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}
```

Outer glow ring pulses independently:
```tsx
animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
```

---

### 5. `LINE_VARIANTS` — SVG connector draw-on
**File:** `components/sections/Industries.tsx`  
Dashed crimson lines that draw in when the Why Us section scrolls into view. Applied to each `motion.path` with `custom={i}` for stagger.

```tsx
const LINE_VARIANTS = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, delay: 0.3 + i * 0.15, ease: 'easeOut' },
  }),
}
// Usage:
<motion.path
  variants={LINE_VARIANTS}
  custom={0}           // 0.3s delay
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  stroke="rgba(192,48,40,0.35)"
  strokeDasharray="3 3"
/>
// custom={1} → 0.45s, custom={2} → 0.60s, custom={3} → 0.75s
```

⚠️ Never use native `<animateMotion>` inside Framer Motion `motion.*` elements — use one system only.

---

### 6. Glitch heading — Pain section
**File:** `components/sections/Pain.tsx`  
Applied to `.glitch-heading` on the "Sound familiar?" H2. Subtle RGB-split flicker loop.

```css
.glitch-heading { animation: glitch-sound 1.2s ease-in-out infinite; display: inline-block; }

@keyframes glitch-sound {
  0%, 88%, 100% { text-shadow: none; transform: none; }
  89%  { text-shadow: -3px 0 #C03028; transform: translateX(3px); }
  90%  { text-shadow: 3px 0 #6B3FA0;  transform: translateX(-3px); }
  91%  { text-shadow: -2px 0 #C03028; transform: translateX(2px); }
  92%  { text-shadow: none; transform: none; }
  93%  { text-shadow: 2px 0 #6B3FA0;  transform: translateX(-2px); }
  94%  { text-shadow: -1px 0 #C03028; transform: translateX(1px); }
  95%  { text-shadow: none; transform: none; }
}
```

---

### 7. Pain card hover — crimson fill
**File:** `components/sections/Pain.tsx`  
CSS-only hover. Cards flash to solid crimson on hover, text turns white.

```css
.pain-card { transition: background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease; }
.pain-card:hover {
  background: #C03028 !important;
  border-color: rgba(192,48,40,0.4) !important;
  box-shadow: 0 8px 32px rgba(192,48,40,0.25) !important;
  backdrop-filter: none !important;
}
.pain-card:hover .pain-card-title { color: rgba(255,255,255,0.95) !important; }
.pain-card:hover .pain-card-body  { color: rgba(255,255,255,0.7) !important; }
```

---

### 8. Paper strips — Pain section background
**File:** `components/sections/Pain.tsx`  
Decorative floating strips behind the pain cards. CSS float loop.

```css
.paper-strip {
  position: absolute;
  background: rgba(26,26,30,0.055);
  border-radius: 3px;
  animation: paper-float 3.5s ease-in-out infinite;
}
@keyframes paper-float {
  0%, 100% { translate: 0 0; }
  50%       { translate: 0 -5px; }
}
```
Each strip has a unique `animationDelay` (0s, 0.3s, 0.4s, 0.6s, 0.9s, 1.2s) and size/rotation via inline style.

---

### 9. Solution — Shatter on hover (Before card)
**File:** `components/sections/Solution.tsx`  
`AnimatePresence` + 6 `motion.div` shards that fly apart when the Before card is hovered.

```tsx
const SHARDS = [
  { clip: 'polygon(...)', tx: -38, ty: -28, rot: -22 },
  // ... 5 more
]

// Each shard:
initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
animate={{ x: s.tx, y: s.ty, rotate: s.rot, opacity: 0 }}
transition={{ duration: 0.45, delay: i * 0.04, ease: [0.4, 0, 1, 1] }}
```

Crack SVG lines draw in simultaneously (`pathLength: 0 → 1`, `duration: 0.2s`, staggered 50ms).

---

### 10. Solution — Blueprint formation (After card)
**File:** `components/sections/Solution.tsx`  
`AnimatePresence` SVG circuit paths draw in on hover, green nodes pop in after.

```tsx
// Paths
initial={{ pathLength: 0, opacity: 0 }}
animate={{ pathLength: 1, opacity: 1 }}
transition={{ duration: 0.7, delay: i * 0.12, ease: 'easeOut' }}

// Nodes
initial={{ scale: 0, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
transition={{ duration: 0.25, delay: 0.5 + i * 0.06 }}
```

---

### 11. Service cards — cursor-following spotlight
**File:** `components/sections/Services.tsx`  
Tracks `mousemove` within each dark service card; a radial gradient blob follows the cursor.

```tsx
// State: { x: %, y: %, show: bool } — percentages of card dimensions
style={{
  background: cursor.show
    ? `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(192,48,40,0.22) 0%, transparent 55%)`
    : 'none',
  transition: 'opacity 0.2s',
  opacity: cursor.show ? 1 : 0,
}}
```

---

### 12. `<RingButton>` — cursor ring + spotlight
**File:** `components/RingButton.tsx`  
Tracks `mousemove` on the primary CTA button. Shows a 72px ring and 150px radial glow following the cursor.

```tsx
// Ring
width: 72, height: 72
border: '1.5px solid rgba(255,255,255,0.45)'  // or rgba(192,48,40,0.55) for ringColor="crimson"
boxShadow: '0 0 14px rgba(255,255,255,0.12)'
transition: 'opacity 0.2s'

// Glow
width: 150, height: 150
background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)'
```

---

### 13. Process section — ambient gradient blobs
**File:** `components/sections/Process.tsx`  
Two large blurred radial gradient orbs that drift slowly on infinite loops.

```tsx
// Crimson blob — top right
animate={{ x: [0, 30, -15, 0], y: [0, -25, 15, 0], scale: [1, 1.15, 0.92, 1] }}
transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
style={{ background: 'radial-gradient(circle, rgba(192,48,40,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}

// Violet blob — bottom left
animate={{ x: [0, -20, 10, 0], y: [0, 18, -10, 0], scale: [1, 0.85, 1.1, 1] }}
transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
style={{ background: 'radial-gradient(circle, rgba(107,63,160,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }}
```

---

### 14. ProofStrip — infinite marquee
**File:** `components/sections/ProofStrip.tsx`  
Logo strip that scrolls left continuously. Array is doubled to create seamless loop.

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }  /* -50% because array is doubled */
}
/* Applied inline: */
style={{ animation: 'marquee 48s linear infinite', width: 'max-content' }}
```

Edge fade masks using `linear-gradient` on left/right overlay divs (`w-16`, `z-10`).  
Respects `prefers-reduced-motion` — animation is disabled if set.

---

### 15. FinalCTA — animated grid drift
**File:** `components/sections/FinalCTA.tsx`  
CSS grid background on the crimson CTA section that drifts diagonally.

```css
.animated-grid {
  background-image:
    linear-gradient(rgba(0,0,0,0.10) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.10) 1px, transparent 1px);
  background-size: 48px 48px;
  animation: grid-drift 4s linear infinite;
}
@keyframes grid-drift {
  0%   { background-position: 0 0; }
  100% { background-position: 48px 48px; }
}
```

---

### 16. `<FlowField>` — interactive particle canvas
**File:** `components/FlowField.tsx`  
Canvas-based particle network. Particles drift on sinusoidal paths and connect to nearby same-side particles with lines. Pointer proximity pulls particles toward cursor with a halo ring.

**Usage:**
```tsx
<FlowField dark={false} style={{ opacity: 0.85 }} />  // Hero (light bg)
<FlowField dark={true}  style={{ opacity: 0.5 }}  />  // Solution, Process (dark bg)
```

**Key parameters:**
- Particle count: `max(40, min(160, W*H/9000))` — scales with viewport
- Connection distance: `max(76, min(118, W*0.09))`
- Interaction radius: `max(150, min(245, W*0.19))`
- Framerate cap: 15ms minimum per frame (~66fps max)
- Dark mode: lines/dots use `rgba(249,250,252,α)` · Light mode: `rgba(26,26,30,α)`
- Respects `prefers-reduced-motion` — freezes animation, still renders static frame

**Never put FlowField inside a positioned parent without `overflow-hidden` or `relative`** — the canvas is `absolute inset-0`.

---

### 17. `<ParticleNetwork>` — static dot network
**File:** `components/ParticleNetwork.tsx`  
Used in Industries and Process sections as a subtle ambient background.

```tsx
<ParticleNetwork color="#C03028" opacity={0.05} count={35} connectionDistance={90} />
<ParticleNetwork color="#C03028" opacity={0.04} count={30} connectionDistance={95} />
```

Lower opacity than FlowField — purely decorative, no interactivity.

---

## Nav

- **Fixed top**, full-width. Transparent on load → stone bg + backdrop-blur on scroll.
- Logo: `h-28` at top → `h-14` on scroll. Nav height: `h-32` at top → `h-16` on scroll.
- Scroll threshold: `window.scrollY > 24` sets `scrolled: true`.
- All transitions: `transition-all duration-300`.
- Desktop: logo | Services · Results links | `btn-crimson` CTA.
- Mobile: hamburger → slide-down menu with links + CTA.

---

## Page Structure Template

Every new page should follow this shell:

```tsx
// src/app/<page>/page.tsx
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FinalCTA from '@/components/sections/FinalCTA'

export default function PageName() {
  return (
    <>
      <Nav />
      <main>
        {/* page-specific sections */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
```

Every new **section component** pattern:
```tsx
import AnimateSection from '../AnimateSection'

export default function MySection() {
  return (
    <section id="my-section" className="bg-[#F2F0EB] py-24"> {/* or dark bg */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimateSection className="mb-14">
          <p className="eyebrow mb-4">Section label</p>
          <h2 className="font-display font-900 text-[clamp(2.2rem,4vw,3.2rem)] text-charcoal">
            Headline here.
          </h2>
        </AnimateSection>
        {/* content */}
      </div>
    </section>
  )
}
```

---

## Reusable Components Reference

| Component | File | Use |
|---|---|---|
| `<Nav>` | `components/Nav.tsx` | Every page — sticky, scroll-aware |
| `<Footer>` | `components/Footer.tsx` | Every page — dark bg, nav links, contact |
| `<FinalCTA>` | `components/sections/FinalCTA.tsx` | Every page — crimson CTA block before footer |
| `<AnimateSection>` | `components/AnimateSection.tsx` | Scroll-reveal wrapper for any element |
| `<RingButton>` | `components/RingButton.tsx` | Primary CTA anchor with cursor ring effect |
| `<FlowField>` | `components/FlowField.tsx` | Particle canvas background (pass `dark` prop) |

---

## Anti-patterns to Avoid

- **No arrows on CTA button labels** — text only (e.g. "Book a Free Audit", not "Book →")
- **No external link arrows on internal CTAs** — arrows only on true external links in footer
- **No emoji** in UI
- **No mixing glass/blur with fully opaque cards** in the same section
- **No `animateMotion` inside `motion.*` elements** — pick one animation system per element
- **No inline font sizes below 0.6rem**
- **No dominant use of violet** — ≤5% accent only
- **Signal green is utility only** — checkmarks, status dots, "After" states; never as a primary color
- **Eyebrow is always crimson** — never charcoal or white

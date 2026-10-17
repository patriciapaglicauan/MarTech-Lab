'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RingButton from './RingButton'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F2F0EB]/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,26,30,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-32'}`}>
        <Link href="/" className="flex-shrink-0" aria-label="MarTech Lab home">
          <Image
            src="/logos/logo-light.svg"
            alt="MarTech Lab"
            width={190}
            height={120}
            priority
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-14' : 'h-28'}`}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="font-body text-sm font-500 text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Services
          </Link>
          <Link
            href="/results"
            className="font-body text-sm font-500 text-charcoal/70 hover:text-charcoal transition-colors"
          >
            Results
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <RingButton
            href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson px-4 py-2.5 text-sm"
          >
            Book a Free Audit
          </RingButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-5 h-0.5 bg-charcoal transition-all duration-200 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-charcoal transition-all duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-charcoal transition-all duration-200 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F2F0EB] border-t border-charcoal/10 px-6 pb-6 pt-4 flex flex-col gap-5">
          <Link
            href="/services"
            className="font-display text-lg font-700 text-charcoal"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/results"
            className="font-display text-lg font-700 text-charcoal"
            onClick={() => setMobileOpen(false)}
          >
            Results
          </Link>
          <RingButton
            href="https://calendar.app.google/3z7T9gLH8mHjNugPA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson px-5 py-3 text-sm justify-center mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Book a Free Audit
          </RingButton>
        </div>
      )}
    </header>
  )
}

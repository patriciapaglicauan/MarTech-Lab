import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F12] text-white/50">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/logos/logo-dark.svg"
              alt="MarTech Lab"
              width={148}
              height={30}
              className="h-11 w-auto mb-4"
            />
            <p className="font-body text-sm leading-relaxed text-white/40">
              AI automations for Healthcare clinics, Gyms & Studios, and Hospitality.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-12">
            <div>
              <p className="font-display text-xs font-700 tracking-widest uppercase text-white/30 mb-4">
                Services
              </p>
              <ul className="flex flex-col gap-3 font-body text-sm">
                <li>
                  <Link href="/services#automation" className="hover:text-white transition-colors">
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services#leadgen" className="hover:text-white transition-colors">
                    Lead Generation
                  </Link>
                </li>
                <li>
                  <Link href="/services#crmops" className="hover:text-white transition-colors">
                    CRM Ops
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-700 tracking-widest uppercase text-white/30 mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-3 font-body text-sm">
                <li>
                  <Link href="/results" className="hover:text-white transition-colors">
                    Results
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display text-xs font-700 tracking-widest uppercase text-white/30 mb-4">
                Connect
              </p>
              <ul className="flex flex-col gap-3 font-body text-sm">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:martechlab.admin@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    martechlab.admin@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/639686191649"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-body text-xs text-white/25">
            © 2025 MarTech Lab. All rights reserved.
          </p>
          <div className="flex gap-5 font-body text-xs">
            <Link href="/privacy" className="text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

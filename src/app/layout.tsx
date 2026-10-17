import type { Metadata } from 'next'
import { League_Spartan, Poppins } from 'next/font/google'
import './globals.css'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MarTech Lab — AI Automation for Hospitality & F&B',
  description:
    'We build the CRM, email, and automation systems that turn your existing guest data into recurring revenue. Specialist agency for restaurants, cafés, and hospitality operators.',
  keywords: [
    'marketing automation',
    'CRM for restaurants',
    'hospitality marketing',
    'AI automation',
    'HubSpot setup',
    'F&B marketing operations',
    'MarTech Lab',
  ],
  openGraph: {
    title: 'MarTech Lab — AI Automation for Hospitality & F&B',
    description:
      'Stop leaving repeat business on the table. We build the systems that turn your existing customers into recurring revenue.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

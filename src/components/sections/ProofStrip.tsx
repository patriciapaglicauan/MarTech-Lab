const images = [
  'hubspot.png',  // HubSpot
  'file-b7a7bcb0f4a14bebd3420c90d1bde8f9.png',  // Salesforce
  'dyn-6df7bea9c230212ac46723706e4f8f2b.png',   // Zapier
  'slack.png',   // Slack
  'file-1a784b7b3af7dbbef06b6e7676ad2069.png',  // Mailchimp
  'dyn-988596c303e111e5ad19b1527a340bce.png',   // Klaviyo
  'google sheets.png',  // Google Sheets
  'dyn-a04cab33b97dc729b3bed5b5d84c2df4.png',   // Google Ads
  'dyn-d997e7defe02974f31ff4661437f3694.png',   // Google Analytics
  'file-e381eb76e9733e53182c32baef80b59a.png',  // Meta
  'file-11c0be29e59f3d2fb3f3c557b6cf5365.png',  // Notion
  'airtable.webp',  // Airtable
  'file-201ad891f7b226c5475d8fce6da2ed59.png',  // Stripe
  'file-22eaa2b9c62c8f6d371b615da7ab8044.png',  // Asana
  'file-f179528a1dea30a8ba1a4e8d609ff1bf.png',  // Monday.com
  'file-9bdbb617a6472e4bcd18b3ecdc649d5f.png',  // Toast
  'dyn-2a1e80d6d241af86d4e0bccf348f7543.png',   // Fishbowl
  'file-44a58fc9fd09a655ceeadd65725ebdbf.png',  // Tripleseat
  'file-b7a69e30c76afca5f175629ceb35dcb5.png',  // Resy
  'file-9cf69cc8cc429236d4cfb4521864cf64.png',  // Typeform
  'file-d2f9ec8ed69ead245d6922d455b5de9d.png',  // Xendit
]

const doubled = [...images, ...images]

export default function ProofStrip() {
  return (
    <div className="bg-[#1A1A1E] py-4 overflow-hidden">
      <p className="font-display text-[0.6rem] tracking-[0.16em] uppercase text-white/20 font-700 px-6 mb-3 max-w-6xl mx-auto">
        Integrates with the tools you already use
      </p>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #1A1A1E, transparent)' }}/>
        <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #1A1A1E, transparent)' }}/>

        <div
          className="flex gap-0"
          style={{ animation: 'marquee 48s linear infinite', width: 'max-content' }}
        >
          {doubled.map((file, i) => (
            <div key={i} className="flex items-center">
              <div className="px-4 py-1.5 flex items-center whitespace-nowrap">
                <div className="rounded-md overflow-hidden flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.92)', height: 28, padding: '4px 8px' }}>
                  <img
                    src={`/logos/${file}`}
                    alt=""
                    style={{ height: 18, width: 'auto', maxWidth: 88, display: 'block' }}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-px h-4 bg-white/[0.07] flex-shrink-0" aria-hidden="true"/>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex[style*="animation"] { animation: none !important; }
        }
      `}</style>
    </div>
  )
}

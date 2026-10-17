// Brand mark SVG icons — viewBox 0 0 40 40, designed to work at 24–40px

interface IconProps { size?: number }

export function HubSpotIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="21" r="6" stroke="#FF7A59" strokeWidth="4.5" fill="none"/>
      <line x1="20" y1="15" x2="20" y2="6.5" stroke="#FF7A59" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="20" cy="4" r="3.5" fill="#FF7A59"/>
      <line x1="24.8" y1="24" x2="29.8" y2="29" stroke="#FF7A59" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="32.3" cy="31.5" r="3.5" fill="#FF7A59"/>
      <line x1="15.2" y1="24" x2="10.2" y2="29" stroke="#FF7A59" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="7.7" cy="31.5" r="3.5" fill="#FF7A59"/>
    </svg>
  )
}

export function ZapierIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="18.5" y="2" width="3" height="36" rx="1.5" fill="#FF4A00"/>
      <rect x="18.5" y="2" width="3" height="36" rx="1.5" fill="#FF4A00" transform="rotate(90 20 20)"/>
      <rect x="18.5" y="2" width="3" height="36" rx="1.5" fill="#FF4A00" transform="rotate(45 20 20)"/>
      <rect x="18.5" y="2" width="3" height="36" rx="1.5" fill="#FF4A00" transform="rotate(135 20 20)"/>
    </svg>
  )
}

export function SalesforceIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M14.5 30C9 30 5 26 5 21C5 17 7.5 13.5 11.5 12.5C11 8.5 13.5 5 17.5 5C19.5 5 21.5 6 23 8C24.5 6 27 5.5 29 6.5C32 8 33.5 11.5 32 15.5C35.5 16 37.5 19 36.5 22.5C35.5 26 32 29 28 30H14.5Z"
        fill="#00A1E0"
      />
    </svg>
  )
}

export function SlackIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Pink: left horizontal + top vertical cap */}
      <rect x="3" y="14" width="16" height="5.5" rx="2.75" fill="#E01E5A"/>
      <rect x="3" y="7" width="5.5" height="12.5" rx="2.75" fill="#E01E5A"/>
      {/* Yellow: top vertical + right horizontal cap */}
      <rect x="3" y="20.5" width="16" height="5.5" rx="2.75" fill="#ECB22E"/>
      <rect x="21" y="7" width="5.5" height="12.5" rx="2.75" fill="#ECB22E"/>
      {/* Green: right horizontal + bottom vertical */}
      <rect x="21" y="14" width="16" height="5.5" rx="2.75" fill="#2EB67D"/>
      <rect x="21" y="20.5" width="5.5" height="12.5" rx="2.75" fill="#2EB67D"/>
      {/* Blue: bottom vertical + left horizontal */}
      <rect x="3" y="20.5" width="5.5" height="12.5" rx="2.75" fill="#36C5F0"/>
      <rect x="3" y="14" width="5.5" height="12.5" rx="2.75" fill="#36C5F0"/>
    </svg>
  )
}

export function MailchimpIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="6" fill="#FFE01B"/>
      {/* Simplified chimp head */}
      <ellipse cx="20" cy="19" rx="10" ry="11" fill="#1D1D1B"/>
      {/* Ears */}
      <ellipse cx="10" cy="19" rx="3" ry="3.5" fill="#1D1D1B"/>
      <ellipse cx="30" cy="19" rx="3" ry="3.5" fill="#1D1D1B"/>
      {/* Face highlight */}
      <ellipse cx="20" cy="22" rx="6.5" ry="7" fill="#C8A97A"/>
      {/* Eyes */}
      <circle cx="16.5" cy="17" r="2" fill="#1D1D1B"/>
      <circle cx="23.5" cy="17" r="2" fill="#1D1D1B"/>
      <circle cx="17" cy="16.5" r="0.7" fill="white"/>
      <circle cx="24" cy="16.5" r="0.7" fill="white"/>
      {/* Smile */}
      <path d="M15 23 Q20 27 25 23" stroke="#1D1D1B" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

export function GoogleSheetsIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Sheet body */}
      <rect x="6" y="4" width="23" height="32" rx="2" fill="#34A853"/>
      {/* Corner fold */}
      <path d="M23 4 L29 10 L23 10 Z" fill="white" opacity="0.35"/>
      <path d="M23 4 L29 4 L29 10 Z" fill="#1E7E34"/>
      {/* Grid horizontal lines */}
      <line x1="6" y1="15" x2="29" y2="15" stroke="white" strokeWidth="1.2" opacity="0.6"/>
      <line x1="6" y1="21" x2="29" y2="21" stroke="white" strokeWidth="1.2" opacity="0.6"/>
      <line x1="6" y1="27" x2="29" y2="27" stroke="white" strokeWidth="1.2" opacity="0.6"/>
      {/* Grid vertical line */}
      <line x1="16" y1="15" x2="16" y2="36" stroke="white" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  )
}

export function KlaviyoIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#F4715B"/>
      {/* K letterform */}
      <rect x="10" y="9" width="4" height="22" rx="2" fill="white"/>
      <path d="M14 20 L26 9 L30 9 L18 20 L30 31 L26 31 Z" fill="white"/>
      {/* Pennant flag top right */}
      <polygon points="28,5 38,11 28,11" fill="white" opacity="0.85"/>
    </svg>
  )
}

export function NotionIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="3" y="3" width="34" height="34" rx="5" fill="#191919"/>
      {/* Page fold corner effect */}
      <path d="M28 3 L37 12 L28 12 Z" fill="#3D3D3D"/>
      {/* N letterform with diagonal */}
      <rect x="11" y="11" width="4" height="18" rx="2" fill="white"/>
      <rect x="25" y="11" width="4" height="18" rx="2" fill="white"/>
      <polygon points="11,11 15,11 29,29 25,29" fill="white"/>
    </svg>
  )
}

export function StripeIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#6772E5"/>
      {/* Stripe S curve */}
      <path
        d="M20 11C15 11 12 13.5 12 17.5C12 24.5 22 23 22 27C22 29 20.5 30 18.5 30C15.5 30 13 28 12 25.5L9 27.5C10.5 31.5 14.5 34 18.5 34C24 34 27 31 27 26.5C27 19.5 17 21 17 17C17 15.5 18.5 14 21 14C23.5 14 25.5 15.5 26.5 18L29.5 16C28 13 24.5 11 20 11Z"
        fill="white"
      />
    </svg>
  )
}

export function AsanaIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Three circles — Asana mark */}
      <circle cx="20" cy="11.5" r="7.5" fill="#F06A6A"/>
      <circle cx="9.5" cy="28.5" r="7.5" fill="#F06A6A"/>
      <circle cx="30.5" cy="28.5" r="7.5" fill="#F06A6A"/>
    </svg>
  )
}

export function MondayIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Monday.com — 3 diagonal colored ovals */}
      <ellipse cx="9.5" cy="28" rx="6.5" ry="4.5" fill="#FF3D57" transform="rotate(-30 9.5 28)"/>
      <ellipse cx="20" cy="21" rx="6.5" ry="4.5" fill="#FFCB00" transform="rotate(-30 20 21)"/>
      <ellipse cx="30.5" cy="14" rx="6.5" ry="4.5" fill="#0073EA" transform="rotate(-30 30.5 14)"/>
    </svg>
  )
}

export function AirtableIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Yellow rhombus (top layer) */}
      <rect x="4" y="7" width="32" height="13" rx="3" fill="#FCB400" transform="rotate(-8 20 13)"/>
      {/* Pink triangle (bottom left) */}
      <polygon points="3,23 20,30 3,37" fill="#F82B60"/>
      {/* Cyan rectangle (bottom right) */}
      <rect x="20" y="22" width="17" height="15" rx="2.5" fill="#18BFFF"/>
    </svg>
  )
}

export function ToastIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Toast bread slice — simplified from their logo */}
      <rect x="8" y="8" width="24" height="26" rx="8" fill="#FF6600"/>
      {/* Bite notch */}
      <circle cx="32" cy="16" r="7" fill="#F2F0EB"/>
      {/* White inner highlight */}
      <rect x="12" y="14" width="14" height="16" rx="5" fill="white" opacity="0.2"/>
    </svg>
  )
}

export function TypeformIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#262627"/>
      {/* T bar */}
      <rect x="8" y="10" width="24" height="5" rx="2.5" fill="white"/>
      {/* T stem */}
      <rect x="17.5" y="15" width="5" height="15" rx="2.5" fill="white"/>
    </svg>
  )
}

export function GoogleAdsIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Google Ads "G" arrow logo — 3 colored arrows pointing up */}
      {/* Blue — tallest, left */}
      <path d="M9 36 L9 14 L16 8 L16 36 Z" fill="#4285F4" rx="2"/>
      {/* Yellow — middle height, center */}
      <path d="M17 36 L17 20 L24 14 L24 36 Z" fill="#FBBC04"/>
      {/* Green — shortest, right */}
      <path d="M25 36 L25 26 L32 20 L32 36 Z" fill="#34A853"/>
    </svg>
  )
}

export function GoogleAnalyticsIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* GA4 colored bar chart arrows */}
      {/* Yellow bar — left, medium */}
      <rect x="5" y="20" width="8" height="16" rx="3" fill="#F9AB00"/>
      <polygon points="9,20 5,26 13,26" fill="#F9AB00"/>
      {/* Blue — center, tallest */}
      <rect x="16" y="10" width="8" height="26" rx="3" fill="#4285F4"/>
      <polygon points="20,10 16,16 24,16" fill="#4285F4"/>
      {/* Green — right, shorter */}
      <rect x="27" y="16" width="8" height="20" rx="3" fill="#34A853"/>
      <polygon points="31,16 27,22 35,22" fill="#34A853"/>
    </svg>
  )
}

export function FishbowlIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Fishbowl — blue circle with wave notch at top */}
      <circle cx="20" cy="20" r="17" fill="#0095DA"/>
      {/* Wave cut at top — simulating the Fishbowl logo open top */}
      <path d="M3 20 Q11 13 20 20 Q29 27 37 20" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export function ResyIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#FF4532"/>
      {/* R letterform */}
      <rect x="10" y="9" width="4.5" height="22" rx="2" fill="white"/>
      {/* R bowl */}
      <path d="M14.5 9 Q28 9 28 17 Q28 22 20 23 L14.5 23" stroke="white" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
      {/* R leg */}
      <path d="M19 23 L29 31" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  )
}

export function TripleSeatIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Navy circle bg */}
      <circle cx="20" cy="20" r="19" fill="#1B2B4B"/>
      {/* Three vertical bars — seat representation */}
      <rect x="10" y="12" width="5" height="16" rx="2.5" fill="white"/>
      <rect x="17.5" y="12" width="5" height="16" rx="2.5" fill="white"/>
      <rect x="25" y="12" width="5" height="16" rx="2.5" fill="white"/>
      {/* Seat base line */}
      <rect x="8" y="28" width="24" height="3" rx="1.5" fill="white"/>
    </svg>
  )
}

export function XenditIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Xendit diamond lattice */}
      <polygon points="20,3 37,20 20,37 3,20" fill="none" stroke="#3B5EC6" strokeWidth="4"/>
      {/* Inner diamond */}
      <polygon points="20,11 29,20 20,29 11,20" fill="#3B5EC6"/>
      {/* X cross inside */}
      <line x1="13" y1="13" x2="27" y2="27" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="27" y1="13" x2="13" y2="27" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export function MakeIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#6D00CC"/>
      {/* Make (formerly Integromat) — abstract circle connector */}
      <circle cx="12" cy="20" r="6" stroke="white" strokeWidth="3" fill="none"/>
      <circle cx="28" cy="20" r="6" stroke="white" strokeWidth="3" fill="none"/>
      <line x1="18" y1="20" x2="22" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

export function ActiveCampaignIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#356AE6"/>
      {/* AC — simplified lightning bolt / arrow */}
      <path d="M22 7 L12 22 L19 22 L18 33 L28 18 L21 18 Z" fill="white"/>
    </svg>
  )
}

export function MetaAdsIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#1877F2"/>
      {/* Meta "infinity" / M mark — simplified */}
      <path
        d="M7 24C7 18 10 14 14 14C17 14 19 16.5 20 19C21 16.5 23 14 26 14C30 14 33 18 33 24C33 29 30 31 27 31C24 31 22 29 20 26C18 29 16 31 13 31C10 31 7 29 7 24Z"
        fill="white"
      />
    </svg>
  )
}

export function OpenAIIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#10A37F"/>
      {/* OpenAI simplified star/flower mark */}
      <path
        d="M20 6 L23 15 L32 12 L26 20 L32 28 L23 25 L20 34 L17 25 L8 28 L14 20 L8 12 L17 15 Z"
        fill="white" opacity="0.9"
      />
    </svg>
  )
}

export function ClaudeIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#CC785C"/>
      {/* Claude — stylized C / anthropic diamond */}
      <path
        d="M27 12C27 12 32 16 32 20C32 24 27 28 20 28C13 28 8 24 8 20C8 16 13 12 20 12"
        stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none"
      />
      <circle cx="20" cy="20" r="4" fill="white" opacity="0.9"/>
    </svg>
  )
}

export function SquareIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#28AE60"/>
      {/* Square — their square with cut corners */}
      <rect x="8" y="8" width="24" height="24" rx="3" fill="white"/>
      <rect x="14" y="14" width="12" height="12" rx="1.5" fill="#28AE60"/>
    </svg>
  )
}

export function GoHighLevelIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="7" fill="#1A1A1E"/>
      {/* GHL — stylized HL */}
      <rect x="8" y="10" width="4.5" height="20" rx="2" fill="#D7553E"/>
      <rect x="8" y="18" width="11" height="4.5" rx="2" fill="#D7553E"/>
      <rect x="19" y="10" width="4.5" height="20" rx="2" fill="white"/>
      <rect x="24" y="25" width="8" height="4.5" rx="2" fill="white"/>
    </svg>
  )
}

export function TwilioIcon({ size = 28 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="20" fill="#F22F46"/>
      {/* Twilio — circle with 4 dots like a face */}
      <circle cx="14" cy="14" r="4" fill="white"/>
      <circle cx="26" cy="14" r="4" fill="white"/>
      <circle cx="14" cy="26" r="4" fill="white"/>
      <circle cx="26" cy="26" r="4" fill="white"/>
    </svg>
  )
}

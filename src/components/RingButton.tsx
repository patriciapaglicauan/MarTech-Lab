'use client'
import { useRef, useState, type MouseEvent } from 'react'

interface RingButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
  ringColor?: 'white' | 'crimson'
}

export default function RingButton({
  href,
  children,
  className = '',
  target,
  rel,
  onClick,
  ringColor = 'white',
}: RingButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [active, setActive] = useState(false)

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const rc =
    ringColor === 'crimson'
      ? { ring: 'rgba(192,48,40,0.55)', glow: 'rgba(192,48,40,0.12)' }
      : { ring: 'rgba(255,255,255,0.45)', glow: 'rgba(255,255,255,0.12)' }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={onClick}
    >
      {/* Cursor ring */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          opacity: active ? 1 : 0,
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: 72,
          height: 72,
          border: `1.5px solid ${rc.ring}`,
          boxShadow: `0 0 14px ${rc.glow}`,
          transition: 'opacity 0.2s',
        }}
      />
      {/* Spotlight glow */}
      <span
        aria-hidden="true"
        className="absolute pointer-events-none rounded-full"
        style={{
          opacity: active ? 1 : 0,
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: 150,
          height: 150,
          background: `radial-gradient(circle, ${rc.glow} 0%, transparent 70%)`,
          transition: 'opacity 0.2s',
        }}
      />
      <span className="relative z-10 inline-flex items-center">{children}</span>
    </a>
  )
}

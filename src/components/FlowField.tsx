'use client'
import { useEffect, useRef } from 'react'

interface FlowFieldProps {
  dark?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function FlowField({ dark = true, className = '', style }: FlowFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true }) as CanvasRenderingContext2D
    if (!ctx) return
    const parent = canvas.parentElement as HTMLElement
    if (!parent) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const ptr = { x: -1000, y: -1000, active: false, ex: -1000, ey: -1000 }
    type P = { x: number; y: number; vx: number; vy: number; homeX: number; homeY: number; phase: number; drift: number; size: number; side: number }
    const particles: P[] = []
    let W = 0, H = 0, dpr = 1, raf = 0, last = 0

    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    function mkP(): P {
      const left = Math.random() < 0.5
      const band = Math.min(W * 0.27, 390)
      const x = left ? rand(-12, band) : rand(W - band, W + 12)
      const y = rand(-12, H + 12)
      return { x, y, vx: rand(-.18, .18), vy: rand(-.18, .18), homeX: x, homeY: y, phase: rand(0, Math.PI * 2), drift: rand(.25, 1.15), size: rand(.65, 1.65), side: left ? -1 : 1 }
    }

    function resize() {
      const r = parent.getBoundingClientRect()
      const oW = W || r.width, oH = H || r.height
      W = r.width; H = r.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (particles.length === 0) {
        const n = Math.max(40, Math.min(160, Math.round((W * H) / 9000)))
        for (let i = 0; i < n; i++) particles.push(mkP())
      } else {
        for (const p of particles) {
          p.x *= W / oW; p.y *= H / oH
          p.homeX *= W / oW; p.homeY *= H / oH
        }
      }
      if (reduceMotion.matches) frame(0, true)
    }

    function frame(t = 0, s = false) {
      ctx.clearRect(0, 0, W, H)
      const sec = t / 1000
      const ir = Math.max(150, Math.min(245, W * .19))
      const gx = ptr.active ? ptr.ex : -1e4
      const gy = ptr.active ? ptr.ey : -1e4

      if (ptr.active) {
        ptr.ex += (ptr.x - ptr.ex) * .23
        ptr.ey += (ptr.y - ptr.ey) * .23
      }

      if (!s) {
        for (const p of particles) {
          const wx = Math.sin(sec * .42 + p.phase) * p.drift
          const wy = Math.cos(sec * .34 + p.phase * 1.3) * p.drift
          let ax = (p.homeX + wx - p.x) * .007
          let ay = (p.homeY + wy - p.y) * .007
          const dx = gx - p.x, dy = gy - p.y, d = Math.hypot(dx, dy)
          if (ptr.active && d < ir && d > 1) {
            const pull = (1 - d / ir) * .105
            ax += (dx / d) * pull; ay += (dy / d) * pull
          }
          p.vx = (p.vx + ax) * .955; p.vy = (p.vy + ay) * .955
          p.x += p.vx; p.y += p.vy
        }
      }

      const cd = Math.max(76, Math.min(118, W * .09))
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          if (a.side !== b.side) continue
          const dx = a.x - b.x
          if (Math.abs(dx) > cd) continue
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist >= cd) continue
          const prox = 1 - dist / cd
          const pd = ptr.active ? Math.hypot((a.x + b.x) / 2 - gx, (a.y + b.y) / 2 - gy) : Infinity
          const resp = pd < ir * 1.35 ? .3 : 0
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          const la = .12 + prox * .48 + resp * prox
          ctx.strokeStyle = dark ? `rgba(249,250,252,${la})` : `rgba(26,26,30,${la})`
          ctx.lineWidth = .8 + prox * .6; ctx.stroke()
        }
      }

      for (const p of particles) {
        const d = ptr.active ? Math.hypot(p.x - gx, p.y - gy) : Infinity
        const near = d < ir
        const a = near ? .85 + (1 - d / ir) * .15 : .38 + .42 * ((Math.sin(sec * .8 + p.phase) + 1) / 2)
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size + (near ? .7 : 0), 0, Math.PI * 2)
        ctx.fillStyle = dark ? `rgba(249,250,252,${a})` : `rgba(26,26,30,${a * .75})`
        ctx.fill()
      }

      if (ptr.active) {
        const pulse = 5 + Math.sin(sec * 2.5) * .6
        const halo = ctx.createRadialGradient(gx, gy, 0, gx, gy, 56)
        halo.addColorStop(0, dark ? 'rgba(255,255,255,.09)' : 'rgba(26,26,30,.05)')
        halo.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = halo; ctx.fillRect(gx - 56, gy - 56, 112, 112)
        ctx.beginPath(); ctx.arc(gx, gy, pulse, 0, Math.PI * 2)
        ctx.strokeStyle = dark ? 'rgba(255,255,255,.52)' : 'rgba(26,26,30,.3)'
        ctx.lineWidth = .7; ctx.stroke()
      }
    }

    function animate(t: number) {
      if (t - last > 15) { frame(t); last = t }
      raf = requestAnimationFrame(animate)
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top
      ptr.active = true
      if (ptr.ex < 0) { ptr.ex = ptr.x; ptr.ey = ptr.y }
      if (reduceMotion.matches) frame(performance.now(), true)
    }
    const onLeave = () => {
      ptr.active = false
      if (reduceMotion.matches) frame(performance.now(), true)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    parent.addEventListener('pointermove', onMove as EventListener, { passive: true })
    parent.addEventListener('pointerleave', onLeave)
    if (!reduceMotion.matches) raf = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(raf); ro.disconnect()
      parent.removeEventListener('pointermove', onMove as EventListener)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [dark])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

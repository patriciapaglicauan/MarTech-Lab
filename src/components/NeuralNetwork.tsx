'use client'
import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  pulse: number
  pulseDir: number
}

interface Signal {
  from: number
  to: number
  t: number
  speed: number
  color: [number, number, number]
}

interface NeuralNetworkProps {
  nodeCount?: number
  maxDist?: number
  className?: string
  style?: React.CSSProperties
}

export default function NeuralNetwork({
  nodeCount = 55,
  maxDist = 150,
  className = '',
  style,
}: NeuralNetworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0
    let nodes: Node[] = []
    let signals: Signal[] = []
    let raf = 0
    let lastSignalTime = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
      initNodes()
    }

    const initNodes = () => {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.8 + Math.random() * 2.2,
        pulse: Math.random(),
        pulseDir: Math.random() > 0.5 ? 1 : -1,
      }))
    }

    const spawnSignal = () => {
      for (let attempt = 0; attempt < 15; attempt++) {
        const a = Math.floor(Math.random() * nodes.length)
        const b = Math.floor(Math.random() * nodes.length)
        if (a === b) continue
        const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y)
        if (d < maxDist) {
          signals.push({
            from: a,
            to: b,
            t: 0,
            speed: 0.003 + Math.random() * 0.005,
            color: Math.random() > 0.4 ? [192, 48, 40] : [107, 63, 160],
          })
          break
        }
      }
    }

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw)
      ctx.clearRect(0, 0, w, h)

      if (now - lastSignalTime > 260) {
        spawnSignal()
        if (Math.random() > 0.55) spawnSignal()
        lastSignalTime = now
      }

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = w + 20
        else if (n.x > w + 20) n.x = -20
        if (n.y < -20) n.y = h + 20
        else if (n.y > h + 20) n.y = -20
        n.pulse += n.pulseDir * 0.006
        if (n.pulse > 1 || n.pulse < 0) n.pulseDir *= -1
      }

      ctx.lineWidth = 0.7
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.09
            ctx.strokeStyle = `rgba(26,26,30,${alpha})`
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      signals = signals.filter(s => s.t <= 1)
      for (const s of signals) {
        s.t += s.speed
        const na = nodes[s.from]
        const nb = nodes[s.to]
        const x = na.x + (nb.x - na.x) * s.t
        const y = na.y + (nb.y - na.y) * s.t
        const [r, g, b] = s.color

        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},0.1)`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},0.85)`
        ctx.fill()
      }

      for (const n of nodes) {
        const isPulsed = n.pulse > 0.75

        if (isPulsed) {
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r * 3.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(192,48,40,${(n.pulse - 0.75) * 0.06})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = isPulsed
          ? `rgba(192,48,40,${0.35 + n.pulse * 0.25})`
          : `rgba(26,26,30,${0.10 + n.pulse * 0.08})`
        ctx.fill()
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [nodeCount, maxDist])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', position: 'absolute', inset: 0, width: '100%', height: '100%', ...style }}
    />
  )
}

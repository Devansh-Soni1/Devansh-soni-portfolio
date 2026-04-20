import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/data'

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let cur = 0
          const step = target / 50
          const iv = setInterval(() => {
            cur += step
            if (cur >= target) { cur = target; clearInterval(iv) }
            setVal(Math.floor(cur))
          }, 30)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref} style={{
      fontFamily: 'Orbitron,sans-serif',
      fontSize: 'clamp(20px, 5vw, 28px)',
      fontWeight: 700, color: 'var(--blue)', display: 'block',
    }}>
      {val}{suffix}
    </span>
  )
}

export default function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1, background: 'var(--border)',
        marginTop: 48,
      }}
    >
      {stats.map((s) => (
        <div key={s.id} style={{
          background: 'var(--s1)', padding: '20px 12px', textAlign: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(0,238,255,0.02),transparent)', pointerEvents: 'none' }} />
          <Counter target={s.target} suffix={s.suffix} />
          <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 4 }}>
            {s.label}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

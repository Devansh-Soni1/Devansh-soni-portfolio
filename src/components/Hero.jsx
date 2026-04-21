import { motion } from 'framer-motion'
import Card3D from './Card3D'
import StatsBar from './StatsBar'
import useTypewriter from './useTypewriter'
import { personalInfo } from '../data/data'

export default function Hero() {
  const typed = useTypewriter(personalInfo.typewriterWords)

  return (
    <section style={{ padding: '60px 0 40px', position: 'relative' }}>

      {/* Hero grid — stacks on mobile */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 40, alignItems: 'center',
      }}>

        {/* LEFT TEXT */}
        <div style={{ minWidth: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{
              fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
              color: 'var(--blue)', fontFamily: 'JetBrains Mono,monospace',
              marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10,
              flexWrap: 'wrap',
            }}
          >
            <span style={{ display: 'inline-block', width: 24, height: 1, background: 'var(--blue)', boxShadow: '0 0 6px var(--blue)', flexShrink: 0 }} />
            Frontend Developer · {personalInfo.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Orbitron,sans-serif',
              fontSize: 'clamp(42px, 10vw, 80px)',
              fontWeight: 900, lineHeight: 0.95,
              letterSpacing: '0.04em', marginBottom: 6,
            }}
          >
            <div style={{ color: 'var(--text)' }}>{personalInfo.name.first}</div>
            <div style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--blue)' }}>
              {personalInfo.name.last}
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontFamily: 'JetBrains Mono,monospace', fontSize: 14, color: 'var(--cyan)',
              margin: '18px 0', display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap',
            }}
          >
            <span style={{ color: 'var(--blue)', opacity: 0.6 }}>[</span>
            <span style={{ color: 'var(--green)' }}>{typed}</span>
            <span className="animate-blink" style={{ color: 'var(--cyan)' }}>_</span>
            <span style={{ color: 'var(--blue)', opacity: 0.6 }}>]</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
            style={{ color: 'var(--muted2)', fontSize: 15, lineHeight: 1.75, maxWidth: 460, marginBottom: 32 }}
          >
            {personalInfo.bio}
          </motion.p>

        </div>

        {/* RIGHT — 3D Card (hidden on very small screens via auto-fit) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card3D />
        </motion.div>
      </div>

      <StatsBar />
    </section>
  )
}

import { motion } from 'framer-motion'

export default function SectionHeader({ num, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex', alignItems: 'center', gap: 16,
        margin: '70px 0 36px',
      }}
    >
      <span style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 12, color: 'var(--cyan)', letterSpacing: '0.1em' }}>
        // {num}
      </span>
      <div style={{ width: 6, height: 6, background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
      <div style={{
        fontFamily: 'Orbitron,sans-serif', fontSize: 22, fontWeight: 700,
        letterSpacing: '0.05em',
        textShadow: '0 0 20px rgba(0,170,255,0.3)',
      }}>
        {title}
      </div>
      <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg,var(--border2),transparent)' }} />
    </motion.div>
  )
}

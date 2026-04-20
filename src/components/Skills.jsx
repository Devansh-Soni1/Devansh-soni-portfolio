import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { skills } from '../data/data'

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader num="01" title="TECH STACK" />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {skills.map((sk, i) => (
          <motion.div
            key={sk.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,238,255,0.15)' }}
            className="clip-sm shimmer-parent hoverable"
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 16px',
              background: 'var(--s1)',
              border: '1px solid var(--border2)',
              cursor: 'default', transition: 'border-color 0.25s, background 0.25s',
              minWidth: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.background = 'rgba(0,238,255,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'var(--s1)' }}
          >
            <div style={{
              width: 10, height: 10, borderRadius: 2, flexShrink: 0,
              background: sk.color, boxShadow: `0 0 8px ${sk.color}`,
            }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{sk.name}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{sk.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

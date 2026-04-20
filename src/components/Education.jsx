import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { education } from '../data/data'

export default function Education() {
  return (
    <section id="background">
      <SectionHeader num="03" title="BACKGROUND" />

      <div style={{ position: 'relative', paddingLeft: 36 }}>
        {/* spine */}
        <div style={{
          position: 'absolute', left: 8, top: 0, bottom: 0, width: 1,
          background: 'linear-gradient(to bottom, var(--blue), var(--cyan), transparent)',
          boxShadow: '0 0 6px rgba(0,170,255,0.3)',
        }} />

        {education.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{ position: 'relative', marginBottom: 40 }}
          >
            {/* dot */}
            <motion.div
              whileHover={{ background: 'var(--blue)', boxShadow: '0 0 24px var(--blue)' }}
              style={{
                position: 'absolute', left: -32, top: 5,
                width: 16, height: 16,
                background: 'var(--bg)',
                border: '2px solid var(--blue)',
                boxShadow: '0 0 12px rgba(0,170,255,0.6)',
                transition: 'all 0.3s',
              }}
            />

            <div style={{ fontFamily: 'JetBrains Mono,monospace', fontSize: 11, color: 'var(--blue)', letterSpacing: '0.1em', marginBottom: 6 }}>
              {item.date}
            </div>
            <div style={{ fontFamily: 'Orbitron,sans-serif', fontSize: 18, fontWeight: 700, letterSpacing: '0.03em', marginBottom: 4 }}>
              {item.title}
            </div>
            <div style={{ color: 'var(--cyan)', fontSize: 13, marginBottom: 8, fontFamily: 'JetBrains Mono,monospace' }}>
              {item.org}
            </div>
            <p style={{ color: 'var(--muted2)', fontSize: 14, lineHeight: 1.7 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

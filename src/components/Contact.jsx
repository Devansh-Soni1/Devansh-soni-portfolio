import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { personalInfo } from '../data/data'

const links = [
  { icon: '📧', label: 'Email',     val: 'sonidevansh899@gmail.com', href: `mailto:${personalInfo.email}` },
  { icon: '📱', label: 'Phone',     val: '+91 9521186211',           href: `tel:${personalInfo.phone}` },
  { icon: '🐙', label: 'GitHub',    val: 'Devansh-Soni1',            href: personalInfo.github },
  { icon: '💼', label: 'LinkedIn',  val: 'devansh-soni1',            href: personalInfo.linkedin },
  { icon: '📸', label: 'Instagram', val: '@__devansh_soni__',        href: personalInfo.instagram },
]

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeader num="04" title="CONTACT" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          padding: 'clamp(24px, 5vw, 48px)',
          background: 'var(--s1)',
          border: '1px solid var(--border2)',
          position: 'relative', overflow: 'hidden',
          textAlign: 'center', marginBottom: 14,
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center,rgba(0,170,255,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />
        <div className="animate-cscan" style={{ position: 'absolute', left: 0, right: 0, height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,238,255,0.4),transparent)' }} />

        <div style={{
          fontFamily: 'Orbitron,sans-serif',
          fontSize: 'clamp(20px, 6vw, 32px)',
          fontWeight: 900, letterSpacing: '0.05em', marginBottom: 10,
          textShadow: '0 0 30px rgba(0,170,255,0.3)',
        }}>
          OPEN TO{' '}
          <span style={{ color: 'var(--cyan)', textShadow: '0 0 20px var(--cyan)' }}>OPPORTUNITIES</span>
        </div>
        <p style={{ color: 'var(--muted2)', fontSize: 14, marginBottom: 28 }}>
          Fresher · Full-time · Freelance · Open for everything. Let's build.
        </p>

        {/* Links grid — 2 col on mobile, wrap on desktop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 10, maxWidth: 700, margin: '0 auto',
        }}>
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -3, boxShadow: '0 8px 20px rgba(0,238,255,0.15)' }}
              className="hoverable"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                padding: '12px 16px',
                border: '1px solid var(--border2)',
                background: 'rgba(0,170,255,0.04)',
                color: 'var(--text)', fontSize: 13, fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.04em',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                wordBreak: 'break-all',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.background = 'rgba(0,238,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(0,170,255,0.04)' }}
            >
              <span style={{ fontSize: 15, flexShrink: 0 }}>{l.icon}</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.val}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

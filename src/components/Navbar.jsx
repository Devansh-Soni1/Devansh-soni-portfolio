import { useState } from 'react'
import { motion } from 'framer-motion'

const links = ['Skills', 'Projects', 'Background', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 0',
        borderBottom: '1px solid var(--border2)',
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(6,10,15,0.95)',
        backdropFilter: 'blur(16px)',
        flexWrap: 'wrap', gap: 10,
      }}
    >
      <div style={{
        fontFamily: 'Orbitron, sans-serif', fontSize: 20, fontWeight: 900,
        color: 'var(--cyan)', textShadow: '0 0 20px var(--cyan)', cursor: 'default',
      }}>
        D<span style={{ color: 'var(--blue)' }}>.</span>S
      </div>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
        {links.map((l) => (
          <button
            key={l}
            onClick={() => scrollTo(l)}
            className="clip-sm hoverable"
            style={{
              padding: '7px 14px',
              fontSize: 11, fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: l === 'Contact' ? 'var(--cyan)' : 'var(--muted2)',
              background: l === 'Contact' ? 'rgba(0,170,255,0.15)' : 'transparent',
              border: l === 'Contact' ? '1px solid var(--blue)' : '1px solid transparent',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cyan)'; e.currentTarget.style.borderColor = 'var(--border2)'; e.currentTarget.style.background = 'rgba(0,238,255,0.05)' }}
            onMouseLeave={(e) => { if (l !== 'Contact') { e.currentTarget.style.color = 'var(--muted2)'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.background = 'transparent' } }}
          >
            {l}
          </button>
        ))}
      </div>
    </motion.nav>
  )
}

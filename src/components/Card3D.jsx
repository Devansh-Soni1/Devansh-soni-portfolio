import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function Card3D() {
  const cardRef = useRef(null)
  const isMobile = () => window.innerWidth <= 600

  const handleMove = (e) => {
    if (isMobile()) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateY(${x * 22}deg) rotateX(${-y * 16}deg) scale(1.05)`
      cardRef.current.style.boxShadow = `${-x * 30}px ${y * 20}px 60px rgba(0,0,0,0.7), ${-x * 10}px ${y * 8}px 30px rgba(0,238,255,0.15)`
    }
  }

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'rotateY(0) rotateX(0) scale(1)'
      cardRef.current.style.boxShadow = '0 20px 60px rgba(0,0,0,0.6)'
    }
  }

  return (
    <div
      style={{ perspective: 900, cursor: 'none' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        ref={cardRef}
        style={{
          width: 'clamp(220px, 60vw, 280px)',
          height: 'clamp(260px, 70vw, 340px)',
          borderRadius: 16,
          background: 'linear-gradient(135deg,#0a1828,#0d2040)',
          border: '1px solid var(--border2)',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.08s ease',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,170,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,170,255,0.05) 1px,transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div className="animate-scan" style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,transparent,var(--cyan),transparent)', boxShadow: '0 0 12px var(--cyan)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%,rgba(0,238,255,0.08),transparent 60%)', pointerEvents: 'none' }} />

        {/* Avatar */}
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg,var(--blue),var(--cyan))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Orbitron, sans-serif', fontSize: 22, fontWeight: 900,
          color: 'var(--bg)', margin: '36px auto 14px',
          position: 'relative', boxShadow: '0 0 30px rgba(0,238,255,0.5)',
        }}>
          DS
          <div className="animate-rot" style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: '1px solid rgba(0,238,255,0.4)' }} />
          <div className="animate-rot-slow" style={{ position: 'absolute', inset: -10, borderRadius: '50%', border: '1px dashed rgba(0,170,255,0.2)' }} />
        </div>

        <div style={{ textAlign: 'center', fontFamily: 'Orbitron,sans-serif', fontSize: 16, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 4 }}>DEVANSH SONI</div>
        <div style={{ textAlign: 'center', color: 'var(--cyan)', fontSize: 10, letterSpacing: '0.15em', fontFamily: 'JetBrains Mono,monospace', marginBottom: 18 }}>// FULL STACK DEVELOPER</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6, padding: '0 14px' }}>
          {['React', 'Node.js', 'MongoDB', 'Tailwind'].map(t => (
            <span key={t} style={{ fontSize: 10, padding: '3px 8px', border: '1px solid rgba(0,170,255,0.3)', color: 'var(--blue)', background: 'rgba(0,170,255,0.08)', letterSpacing: '0.05em' }}>{t}</span>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,var(--blue),var(--cyan),var(--blue))', boxShadow: '0 0 10px var(--cyan)' }} />
      </div>
    </div>
  )
}

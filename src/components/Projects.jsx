import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { projects } from '../data/data'

function LiveDot({ color = 'var(--green)' }) {
  return (
    <div className="animate-livepulse" style={{
      width: 6, height: 6, borderRadius: '50%',
      background: color, boxShadow: `0 0 6px ${color}`,
      flexShrink: 0,
    }} />
  )
}

function ProjectCard({ project, index }) {
  const isPortfolio = project.tag === 'Portfolio'
  const tagColor = isPortfolio ? 'var(--orange)' : 'var(--cyan)'
  const borderDefault = isPortfolio ? 'rgba(255,106,0,0.25)' : 'var(--border2)'
  const borderHover   = isPortfolio ? 'rgba(255,106,0,0.5)'  : 'rgba(0,238,255,0.3)'

  return (
    <motion.a
      href={project.link}
      target={project.link !== '#' ? '_blank' : '_self'}
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(0,238,255,0.08)' }}
      className="top-reveal hoverable"
      style={{
        display: 'block',
        background: 'var(--s1)',
        border: `1px solid ${borderDefault}`,
        padding: 22,
        position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s, background 0.3s',
        textDecoration: 'none', color: 'inherit',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = borderHover; e.currentTarget.style.background = 'var(--s2)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = borderDefault; e.currentTarget.style.background = 'var(--s1)' }}
    >
      {/* arrow */}
      <div style={{
        position: 'absolute', top: 12, right: 12,
        fontSize: 16, opacity: 0.3, color: tagColor, transition: 'all 0.3s',
      }}>↗</div>

      {/* tag */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
        {project.isLive     && <LiveDot />}
        {isPortfolio        && <LiveDot color="var(--orange)" />}
        <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: tagColor, fontFamily: 'JetBrains Mono,monospace' }}>
          {project.tag}
        </span>
        {project.link === '#' && (
          <span style={{
            fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--muted)', fontFamily: 'JetBrains Mono,monospace',
            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border2)',
            padding: '2px 7px',
          }}>link soon</span>
        )}
      </div>

      <div style={{ fontFamily: 'Orbitron,sans-serif', fontSize: 'clamp(14px,4vw,17px)', fontWeight: 700, letterSpacing: '0.03em', marginBottom: 8 }}>
        {project.title}
      </div>

      <p style={{ color: 'var(--muted2)', fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>
        {project.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tech.map(t => (
          <span key={t} style={{
            fontSize: 10, padding: '3px 10px',
            border: '1px solid var(--border2)', color: 'var(--muted)',
            fontFamily: 'JetBrains Mono,monospace', letterSpacing: '0.05em',
          }}>{t}</span>
        ))}
      </div>
    </motion.a>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader num="02" title="SELECTED WORK" />
      {/* auto-fit: single col on mobile, 2-col on desktop */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 14,
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}

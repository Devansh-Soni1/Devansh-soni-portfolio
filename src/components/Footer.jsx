export default function Footer() {
  return (
    <footer style={{
      padding: '24px 0',
      borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: 8,
      marginTop: 60,
    }}>
      <div style={{ fontFamily: 'Orbitron,sans-serif', fontSize: 16, fontWeight: 900, color: 'var(--cyan)', textShadow: '0 0 12px var(--cyan)' }}>
        DS.
      </div>
      <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: '0.12em', fontFamily: 'JetBrains Mono,monospace' }}>
        © 2025 · DEVANSH SONI · SIKAR
      </div>
    </footer>
  )
}

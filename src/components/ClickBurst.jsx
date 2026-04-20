import { useEffect } from 'react'

const COLORS = ['#00eeff', '#00aaff', '#ff2244', '#ff6a00', '#00ff88']

export default function ClickBurst() {
  useEffect(() => {
    const handler = (e) => {
      for (let i = 0; i < 12; i++) {
        const p  = document.createElement('div')
        const sz = Math.random() * 6 + 3
        const c  = COLORS[i % COLORS.length]
        Object.assign(p.style, {
          position: 'fixed',
          width:  `${sz}px`,
          height: `${sz}px`,
          left:   `${e.clientX}px`,
          top:    `${e.clientY}px`,
          background:   c,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: '9990',
          boxShadow: `0 0 ${sz * 2}px ${c}`,
        })
        document.body.appendChild(p)

        const ang  = Math.random() * Math.PI * 2
        const dist = 60 + Math.random() * 120

        p.animate(
          [
            { transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
            {
              transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist}px)) scale(0)`,
              opacity: 0,
            },
          ],
          { duration: 500 + Math.random() * 300, easing: 'cubic-bezier(0,0,0.2,1)' }
        ).onfinish = () => p.remove()
      }
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return null
}

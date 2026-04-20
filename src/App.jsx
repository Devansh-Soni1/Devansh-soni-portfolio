import { useEffect } from 'react'
import Cursor         from './components/Cursor'
import ParticleCanvas from './components/ParticleCanvas'
import BgGrid         from './components/BgGrid'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Background     from './components/Background'
import Contact        from './components/Contact'
import Footer         from './components/Footer'

function useClickBurst() {
  useEffect(() => {
    const COLORS = ['#00eeff','#00aaff','#ff2244','#ff6a00','#00ff88']
    const handle = (e) => {
      for (let i = 0; i < 10; i++) {
        const p   = document.createElement('div')
        const sz  = Math.random() * 6 + 3
        const c   = COLORS[i % COLORS.length]
        Object.assign(p.style, {
          position:'fixed', width:`${sz}px`, height:`${sz}px`,
          left:`${e.clientX}px`, top:`${e.clientY}px`,
          background:c, boxShadow:`0 0 ${sz*2}px ${c}`,
          borderRadius:'50%', pointerEvents:'none', zIndex:9990,
        })
        document.body.appendChild(p)
        const ang  = Math.random() * Math.PI * 2
        const dist = 50 + Math.random() * 100
        p.animate([
          { transform:'translate(-50%,-50%) scale(1)', opacity:1 },
          { transform:`translate(calc(-50% + ${Math.cos(ang)*dist}px),calc(-50% + ${Math.sin(ang)*dist}px)) scale(0)`, opacity:0 },
        ], { duration:500 + Math.random()*300, easing:'cubic-bezier(0,0,0.2,1)' }).onfinish = () => p.remove()
      }
    }
    document.addEventListener('click', handle)
    return () => document.removeEventListener('click', handle)
  }, [])
}

export default function App() {
  useClickBurst()
  return (
    <>
      <BgGrid />
      <ParticleCanvas />
      <Cursor />
      <div style={{
        position:'relative', zIndex:1,
        maxWidth: 960,
        margin:'0 auto',
        padding:'0 clamp(16px, 4vw, 28px) 100px',
      }}>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Background />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

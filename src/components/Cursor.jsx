import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px,${e.clientY - 5}px)`
      }
    }
    document.addEventListener('mousemove', onMove)

    let raf
    const animRing = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx - 18) * 0.1
      pos.current.ry += (pos.current.my - pos.current.ry - 18) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.rx}px,${pos.current.ry}px)`
      }
      raf = requestAnimationFrame(animRing)
    }
    animRing()

    // hover effects
    const addHover = () => {
      document.querySelectorAll('a, button, .hoverable').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          if (!dotRef.current || !ringRef.current) return
          dotRef.current.style.width  = '6px'
          dotRef.current.style.height = '6px'
          dotRef.current.style.boxShadow = '0 0 20px #00eeff, 0 0 40px #00eeff'
          ringRef.current.style.width  = '48px'
          ringRef.current.style.height = '48px'
        })
        el.addEventListener('mouseleave', () => {
          if (!dotRef.current || !ringRef.current) return
          dotRef.current.style.width  = '10px'
          dotRef.current.style.height = '10px'
          dotRef.current.style.boxShadow = '0 0 12px #00eeff, 0 0 24px #00eeff'
          ringRef.current.style.width  = '36px'
          ringRef.current.style.height = '36px'
        })
      })
    }
    // slight delay so DOM is ready
    setTimeout(addHover, 500)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', width: 10, height: 10,
          background: 'var(--cyan)', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 9999,
          boxShadow: '0 0 12px #00eeff, 0 0 24px #00eeff',
          transition: 'width 0.15s, height 0.15s, box-shadow 0.2s',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', width: 36, height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(0,238,255,0.4)',
          pointerEvents: 'none', zIndex: 9998,
          transition: 'width 0.2s, height 0.2s',
        }}
      />
    </>
  )
}

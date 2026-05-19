'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dot   = useRef<HTMLDivElement>(null)
  const ring  = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [hidden,  setHidden]  = useState(false)

  useEffect(() => {
    /* Only on devices with a real pointer */
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf: number
    let mx = 0, my = 0   // mouse
    let rx = 0, ry = 0   // ring current position

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY

      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
      }

      const target = e.target as HTMLElement
      setHovered(!!target.closest('a, button, [data-hover], input, textarea'))
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      if (ring.current) {
        const size   = hovered ? 52 : 34
        const offset = size / 2
        rx = lerp(rx, mx, 0.14)
        ry = lerp(ry, my, 0.14)
        ring.current.style.transform = `translate(${rx - offset}px, ${ry - offset}px)`
        ring.current.style.width  = `${size}px`
        ring.current.style.height = `${size}px`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered])

  return (
    <>
      {/* inner dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full bg-gold transition-opacity duration-200"
        style={{
          width: 8,
          height: 8,
          opacity: hidden ? 0 : 1,
          transform: 'translate(-50px, -50px)',
          scale: hovered ? '0' : '1',
          transition: 'opacity .2s, scale .2s',
        }}
      />
      {/* outer ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-gold/40 transition-all duration-150"
        style={{
          width: 34,
          height: 34,
          opacity: hidden ? 0 : 1,
          backgroundColor: hovered ? 'rgba(201,164,98,0.07)' : 'transparent',
          transition: 'opacity .2s, background-color .2s',
        }}
      />
    </>
  )
}

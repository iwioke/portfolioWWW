'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Arrow } from '../icons'

export function HorizontalGallery({ label, count, children }: { label: string; count: number; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [edges, setEdges] = useState({ start: true, end: count < 2 })

  useEffect(() => {
    const gallery = ref.current
    if (!gallery) return
    const update = () => {
      const start = gallery.scrollLeft < 2
      const end = gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 2
      setEdges((current) => current.start === start && current.end === end ? current : { start, end })
    }
    const observer = new ResizeObserver(update)
    observer.observe(gallery)
    gallery.addEventListener('scroll', update, { passive: true })
    return () => { observer.disconnect(); gallery.removeEventListener('scroll', update) }
  }, [])

  function move(direction: number) {
    const gallery = ref.current
    if (!gallery) return
    gallery.scrollBy({ left: direction * gallery.clientWidth * 0.75, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  return <div className="horizontal-gallery"><div className="horizontal-toolbar"><span className="micro">A closer look / {String(count).padStart(2, '0')} frames</span><div className="gallery-arrows"><button disabled={edges.start} onClick={() => move(-1)} aria-label={`Scroll ${label} backwards`}><Arrow direction="left" /></button><button disabled={edges.end} onClick={() => move(1)} aria-label={`Scroll ${label} forwards`}><Arrow direction="right" /></button></div></div><div ref={ref} className="horizontal-track" tabIndex={0} role="region" aria-label={label}>{children}</div></div>
}

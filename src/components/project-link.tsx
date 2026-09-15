'use client'

import { useRef, type ReactNode } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { Arrow } from './icons'

export function ProjectLink({ href, label, className = '', children }: { href: string; label: string; className?: string; children: ReactNode }) {
  const bounds = useRef<DOMRect | null>(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 180, damping: 24 })
  const springY = useSpring(y, { stiffness: 180, damping: 24 })

  return <Link href={href} aria-label={label} className={`project-link ${className}`}
    onPointerEnter={(event) => { if (event.pointerType === 'mouse') bounds.current = event.currentTarget.getBoundingClientRect() }}
    onPointerMove={(event) => {
      if (reduced || event.pointerType !== 'mouse' || !bounds.current) return
      x.set(((event.clientX - bounds.current.left) / bounds.current.width - 0.5) * 20)
      y.set(((event.clientY - bounds.current.top) / bounds.current.height - 0.5) * 20)
    }}
    onPointerLeave={() => { x.set(0); y.set(0); bounds.current = null }}>
    {children}
    <motion.span className="project-view-cue micro" style={{ x: springX, y: springY }} aria-hidden="true">View<Arrow /></motion.span>
  </Link>
}

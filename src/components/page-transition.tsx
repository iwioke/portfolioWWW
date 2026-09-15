'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { MotionConfig, useAnimate } from 'motion/react'

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const [scope, animate] = useAnimate()
  const first = useRef(true)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!first.current) document.getElementById('main-content')?.focus({ preventScroll: true })
      first.current = false
    })
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const animation = !reduced && scope.current ? animate(scope.current, { opacity: [0.97, 1], y: [6, 0] }, { duration: 0.36, ease: [0.22, 1, 0.36, 1] }) : undefined
    return () => { cancelAnimationFrame(frame); animation?.stop() }
  }, [pathname, animate, scope])

  return <MotionConfig reducedMotion="user"><div className="page-transition" ref={scope}>{children}</div></MotionConfig>
}

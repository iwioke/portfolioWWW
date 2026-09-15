'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import type { MediaAsset } from '@/content/types'
import { Arrow } from './icons'
import { MediaFigure } from './media/media-figure'

export interface IndexEntry {
  slug: string
  title: string
  number: string
  date: string
  disciplines: string[]
  format: 'case-study' | 'archive'
  preview: MediaAsset
}

export function WorkIndex({ entries }: { entries: IndexEntry[] }) {
  const [activeSlug, setActiveSlug] = useState(entries[0]?.slug)
  const active = entries.find((entry) => entry.slug === activeSlug) ?? entries[0]
  const reduced = useReducedMotion()

  if (!active) return <p className="empty-index">No projects in this category. <Link href="/work">View all work.</Link></p>

  return <div className="work-index">
    <div className="index-list">{entries.map((entry) => <Link key={entry.slug} href={`/work/${entry.slug}`} className={`index-entry ${active.slug === entry.slug ? 'is-active' : ''}`} onPointerEnter={() => setActiveSlug(entry.slug)} onFocus={() => setActiveSlug(entry.slug)}>
      <div className="index-entry-top micro"><span>{entry.number}</span><span>{entry.date}</span><Arrow /></div>
      <h2>{entry.title}</h2>
      <div className="index-mobile-preview"><MediaFigure asset={entry.preview} interactive={false} caption={false} /></div>
      <div className="index-entry-bottom micro"><span>{entry.disciplines.join(' / ')}</span><span>{entry.format === 'archive' ? 'Archive' : 'Project'}</span></div>
    </Link>)}</div>
    <aside className="index-preview" aria-label="Project preview">
      <div className="index-preview-top micro"><span>In view / {active.number}</span><span>{active.format === 'archive' ? 'Reserved archive preview' : 'Selected project'}</span></div>
      <AnimatePresence initial={false} mode="wait"><motion.div key={active.slug} className="index-preview-image" style={{ '--preview-ratio': active.preview.aspect[0] / active.preview.aspect[1] } as React.CSSProperties} initial={{ opacity: 0.6, y: reduced ? 0 : 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0.6 }} transition={{ duration: reduced ? 0 : 0.18 }}>
        <MediaFigure asset={active.preview} index={Number(active.number)} interactive={false} caption={false} sizes="50vw" />
      </motion.div></AnimatePresence>
      <Link href={`/work/${active.slug}`} className="index-preview-link"><span>{active.title}</span><span className="micro">Open <Arrow /></span></Link>
    </aside>
  </div>
}

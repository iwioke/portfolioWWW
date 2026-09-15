'use client'

import { useCallback, useState, type ReactNode } from 'react'
import { assetDate, assetRatio } from '@/content/media'
import type { MediaAsset } from '@/content/types'
import { Dialog } from '../dialog'
import { Arrow, Close } from '../icons'
import { MediaContext } from './media-context'
import { MediaVisual } from './media-visual'

export function MediaProvider({ assets, children }: { assets: MediaAsset[]; children: ReactNode }) {
  const [index, setIndex] = useState<number | null>(null)
  const asset = index === null ? undefined : assets[index]
  const close = useCallback(() => setIndex(null), [])
  const open = useCallback((id: string) => {
    const next = assets.findIndex((item) => item.id === id)
    if (next >= 0) setIndex(next)
  }, [assets])

  function step(direction: number) {
    setIndex((current) => current === null ? null : (current + direction + assets.length) % assets.length)
  }

  return (
    <MediaContext.Provider value={open}>
      {children}
      <Dialog id="fullscreen-media" open={Boolean(asset)} onClose={close} titleId="media-viewer-title" descriptionId="media-viewer-description" className="media-viewer"
        onKeyDown={(event) => {
          if (event.target instanceof HTMLVideoElement || event.altKey || event.ctrlKey || event.metaKey) return
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); step(event.key === 'ArrowRight' ? 1 : -1) }
        }}>
        {asset && index !== null && <div className="viewer-inner">
          <div className="viewer-top"><span className="micro">{asset.media ? 'Original media' : 'Asset slot preview'} / {String(index + 1).padStart(2, '0')} of {String(assets.length).padStart(2, '0')}</span><button tabIndex={0} className="text-control micro" data-modal-close onClick={close}>Close <Close /></button></div>
          <div className="viewer-stage"><div className="viewer-artwork" style={{ aspectRatio: assetRatio(asset), maxWidth: `min(100%, calc((100dvh - 240px) * ${asset.aspect[0] / asset.aspect[1]}))` }}><MediaVisual key={asset.id} asset={asset} index={index + 1} priority expanded sizes="100vw" /></div></div>
          <div className="viewer-bottom"><div aria-live="polite" aria-atomic="true"><h2 id="media-viewer-title">{asset.title}</h2><p id="media-viewer-description" className="micro">{assetDate(asset)} / {asset.medium}{!asset.media && ' / Reserved asset slot'}</p></div>{assets.length > 1 ? <div className="viewer-arrows"><button tabIndex={0} onClick={() => step(-1)} aria-label="Previous media"><Arrow direction="left" /></button><button tabIndex={0} onClick={() => step(1)} aria-label="Next media"><Arrow direction="right" /></button></div> : <button tabIndex={0} className="text-control micro" onClick={close}>Back to project<Arrow direction="left" /></button>}</div>
        </div>}
      </Dialog>
    </MediaContext.Provider>
  )
}

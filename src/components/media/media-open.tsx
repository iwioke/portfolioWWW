'use client'

import { Expand } from '../icons'
import { useMedia } from './media-context'

export function MediaOpen({ id, title, placeholder, video = false }: { id: string; title: string; placeholder: boolean; video?: boolean }) {
  const open = useMedia()
  return <button className={`media-open ${video ? 'media-open--video' : ''}`} onClick={(event) => { event.currentTarget.focus({ preventScroll: true }); open(id) }} aria-label={placeholder ? `Inspect ${title} asset slot` : `Open ${title} fullscreen`}><span className="media-open-label micro">{placeholder ? 'View slot' : 'Open'}<Expand /></span></button>
}

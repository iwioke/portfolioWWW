import { assetRatio } from '@/content/media'
import type { MediaAsset } from '@/content/types'
import { MediaOpen } from './media-open'
import { MediaVisual } from './media-visual'

export function MediaFigure({ asset, index = 1, priority = false, interactive = true, caption = true, className = '', sizes }: {
  asset: MediaAsset
  index?: number
  priority?: boolean
  interactive?: boolean
  caption?: boolean
  className?: string
  sizes?: string
}) {
  return (
    <figure className={`media-figure ${className}`} data-asset={asset.id}>
      <div className="media-frame" style={{ aspectRatio: assetRatio(asset) }}>
        <MediaVisual key={asset.media?.src ?? asset.id} asset={asset} index={index} priority={priority} sizes={sizes} />
        {interactive && <MediaOpen id={asset.id} title={asset.title} placeholder={!asset.media} video={asset.media?.type === 'video'} />}
      </div>
      {caption && <figcaption className="media-caption"><span>{asset.caption}</span><span className="micro">{asset.media?.sourceLabel ?? (asset.media ? asset.medium : 'Reserved asset slot')}</span></figcaption>}
    </figure>
  )
}

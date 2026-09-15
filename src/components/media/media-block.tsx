import type { MediaAsset, MediaBlock as Block } from '@/content/types'
import { HorizontalGallery } from './horizontal-gallery'
import { MediaFigure } from './media-figure'

export function MediaBlock({ block, collection }: { block: Block; collection: MediaAsset[] }) {
  const figures = block.assets.map((asset) => <MediaFigure key={asset.id} asset={asset} index={collection.findIndex((item) => item.id === asset.id) + 1} />)
  if (block.layout === 'horizontal') return <HorizontalGallery label={block.title ?? 'Project details'} count={block.assets.length}>{figures}</HorizontalGallery>

  return <div className={`media-block media-block--${block.layout}`} data-layout={block.layout}>
    {block.layout === 'image-text' && <div className="block-copy">{block.title && <h3>{block.title}</h3>}{block.copy && <p>{block.copy}</p>}</div>}
    <div className="block-assets">{figures}</div>
  </div>
}

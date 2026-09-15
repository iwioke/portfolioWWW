'use client'

import { useState } from 'react'
import Image from 'next/image'
import { assetRatio } from '@/content/media'
import { mediaKinds, type MediaAsset } from '@/content/types'
import { Plus } from '../icons'

export function MediaVisual({ asset, index = 1, priority = false, expanded = false, sizes = '(max-width: 800px) 100vw, 85vw' }: {
  asset: MediaAsset
  index?: number
  priority?: boolean
  expanded?: boolean
  sizes?: string
}) {
  const [failed, setFailed] = useState(false)
  const media = asset.media

  return (
    <div className="media-visual" data-surface={asset.surface} data-presentation={asset.presentation} data-kind={asset.kind} data-expanded={expanded || undefined}>
      {media && !failed ? media.type === 'image' ? (
        <div className="media-image-wrap">
          <Image src={media.src} alt={media.alt} fill sizes={sizes} quality={85} preload={priority}
            style={{ objectFit: expanded ? 'contain' : asset.fit, objectPosition: asset.position }}
            onError={() => setFailed(true)} />
        </div>
      ) : (
        <video className="media-video" src={media.src} poster={media.poster} tabIndex={0} controls playsInline preload="metadata"
          style={{ objectFit: expanded ? 'contain' : asset.fit, objectPosition: asset.position }}
          loop={asset.kind === 'animation'} aria-label={media.description} onError={() => setFailed(true)}>
          {media.captions?.map((track, index) => <track key={track.src} kind="captions" src={track.src} srcLang={track.language} label={track.label} default={index === 0} />)}
          Your browser does not support this video. <a href={media.src}>Open the original file</a>.
        </video>
      ) : (
        <div className="media-placeholder" role="img" aria-label={failed ? `${asset.title} could not be loaded.` : `${asset.project}: reserved ${mediaKinds[asset.kind].toLowerCase()} slot. ${asset.title}. Original material to follow.`}>
          <div className="placeholder-top micro"><span>{asset.project}<br />{mediaKinds[asset.kind]}</span><span>{failed ? 'Unavailable' : 'Reserved media'}<br />{assetRatio(asset).replaceAll(' ', '')}</span></div>
          <div className="placeholder-guides" aria-hidden="true"><span /><span /><Plus /></div>
          <span className="placeholder-number" aria-hidden="true">{String(index).padStart(2, '0')}</span>
          <div className="placeholder-bottom"><span className="placeholder-title">{asset.title}</span><span className="micro">{failed ? 'The original asset could not load' : 'Original material to follow'}</span></div>
          <span className="crop crop--tl" /><span className="crop crop--tr" /><span className="crop crop--bl" /><span className="crop crop--br" />
        </div>
      )}
    </div>
  )
}

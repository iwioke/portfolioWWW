import type { ReactNode } from 'react'
import { renderToStaticMarkup as renderStatic } from 'react-dom/server'
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import { describe, expect, it } from 'vitest'
import { mediaSlot } from '@/content/media'
import { layouts } from '@/content/types'
import nextConfig from '../../../next.config'
import { MediaBlock } from './media-block'
import { MediaProvider } from './media-provider'
import { MediaVisual } from './media-visual'

const slot = mediaSlot({ id: 'test-media', project: 'Test fixture', title: 'Original material', kind: 'hero' })

function renderToStaticMarkup(element: ReactNode) {
  return renderStatic(<ImageConfigContext.Provider value={{ ...imageConfigDefault, ...nextConfig.images }}>{element}</ImageConfigContext.Provider>)
}

describe('original media and placeholder rendering', () => {
  it('labels an empty slot without a broken image or invented artwork', () => {
    const html = renderToStaticMarkup(<MediaVisual asset={slot} />)
    expect(html).toContain('Reserved media')
    expect(html).toContain('Original material to follow')
    expect(html).not.toContain('<img')
    expect(html).not.toContain('<video')
  })

  it('renders responsive, lazily loaded original imagery with alt text', () => {
    const html = renderToStaticMarkup(<MediaVisual asset={{ ...slot, media: { type: 'image', src: '/original.webp', alt: 'Original identity composition', width: 1800, height: 1200 } }} />)
    expect(html).toContain('alt="Original identity composition"')
    expect(html).toContain('srcSet=')
    expect(html).toContain('loading="lazy"')
    expect(html).not.toContain('Reserved media')
  })

  it('preserves cropping rules for videos as well as images', () => {
    const html = renderToStaticMarkup(<MediaVisual asset={{ ...slot, fit: 'cover', position: '30% 50%', media: { type: 'video', src: '/original.mp4', description: 'Original product recording' } }} />)
    expect(html).toContain('object-fit:cover')
    expect(html).toContain('object-position:30% 50%')
  })

  it('provides native playback and captions without forced autoplay', () => {
    const html = renderToStaticMarkup(<MediaVisual asset={{ ...slot, kind: 'video', media: { type: 'video', src: '/original.mp4', poster: '/original.webp', description: 'Original product walkthrough', captions: [{ src: '/captions.vtt', language: 'en', label: 'English' }] } }} />)
    expect(html).toContain('controls=""')
    expect(html).toMatch(/playsinline/i)
    expect(html).toContain('kind="captions"')
    expect(html).not.toMatch(/<video[^>]*autoplay/i)
  })

  it.each(layouts)('supports the %s layout as data rather than a new page component', (layout) => {
    const html = renderToStaticMarkup(<MediaProvider assets={[slot]}><MediaBlock block={{ id: 'test-block', layout, assets: [slot] }} collection={[slot]} /></MediaProvider>)
    expect(html).toContain(layout === 'horizontal' ? 'horizontal-track' : `media-block--${layout}`)
    expect(html).toContain('data-asset="test-media"')
    expect(html).toContain('Inspect Original material asset slot')
  })
})

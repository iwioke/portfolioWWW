import { mediaKinds, type AspectRatio, type MediaAsset, type MediaKind } from './types'

const proportions: Record<MediaKind, AspectRatio> = {
  hero: [16, 10], identity: [4, 3], desktop: [16, 10], mobile: [9, 19.5],
  poster: [2, 3], typography: [1, 1], lettering: [3, 2], stationery: [3, 4],
  print: [3, 4], application: [3, 2], mockup: [4, 5], process: [4, 3],
  sketch: [4, 5], figma: [16, 10], detail: [1, 1], video: [16, 9], animation: [16, 9],
}

type SlotInput = Pick<MediaAsset, 'id' | 'project' | 'title' | 'kind'> & Partial<Omit<MediaAsset, 'id' | 'project' | 'title' | 'kind'>>

export function mediaSlot(input: SlotInput): MediaAsset {
  return {
    year: null,
    medium: mediaKinds[input.kind],
    aspect: proportions[input.kind],
    fit: 'contain',
    position: 'center',
    surface: 'fog',
    presentation: 'full',
    caption: input.title,
    media: null,
    ...input,
  }
}

export function assetRatio(asset: MediaAsset) {
  return `${asset.aspect[0]} / ${asset.aspect[1]}`
}

export function assetDate(asset: MediaAsset) {
  return asset.year === null ? 'No date' : String(asset.year)
}

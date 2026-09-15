export type AspectRatio = readonly [number, number]
export type Surface = 'paper' | 'fog' | 'ink'

export const mediaKinds = {
  hero: 'Project cover',
  identity: 'Visual identity',
  desktop: 'Desktop screen',
  mobile: 'Mobile screen',
  poster: 'Poster design',
  typography: 'Typography',
  lettering: 'Lettering',
  stationery: 'Stationery',
  print: 'Print',
  application: 'Brand application',
  mockup: 'Mockup',
  process: 'Process work',
  sketch: 'Sketch',
  figma: 'Figma exploration',
  detail: 'Close-up detail',
  video: 'Video',
  animation: 'Animation',
} as const

export type MediaKind = keyof typeof mediaKinds

export type OriginalMedia =
  | {
      type: 'image'
      src: string
      alt: string
      width: number
      height: number
      source?: string
      sourceLabel?: string
    }
  | {
      type: 'video'
      src: string
      poster?: string
      description: string
      source?: string
      sourceLabel?: string
      captions?: { src: string; language: string; label: string }[]
    }

export interface MediaAsset {
  id: string
  project: string
  title: string
  kind: MediaKind
  year: number | null
  medium: string
  aspect: AspectRatio
  fit: 'cover' | 'contain'
  position: string
  surface: Surface
  presentation: 'full' | 'inset' | 'mark' | 'icon'
  caption: string
  media: OriginalMedia | null
}

export const layouts = ['single', 'duo', 'trio', 'full-width', 'split', 'image-text', 'sequence', 'gallery', 'video', 'horizontal'] as const
export type MediaLayout = (typeof layouts)[number]

export interface MediaBlock {
  id: string
  layout: MediaLayout
  assets: MediaAsset[]
  title?: string
  copy?: string
}

export interface Chapter {
  id: string
  title: string
  description: string
  blocks: MediaBlock[]
}

export interface ArchivePiece {
  asset: MediaAsset
  scale: 'monument' | 'left' | 'right' | 'wide' | 'detail' | 'small'
}

export interface Project {
  slug: string
  title: string
  shortTitle?: string
  year: number | null
  yearEvidence?: string
  status: 'published' | 'draft'
  progress?: string
  format: 'case-study' | 'archive'
  categories: string[]
  disciplines: string[]
  summary: string
  introduction: string
  role: string
  services: string[]
  technologies: string[]
  hero: MediaAsset
  preview?: MediaAsset
  homeLayout: 'lead' | 'offset' | 'poster' | 'type'
  chapters: Chapter[]
  archive: ArchivePiece[]
  credits: { name: string; role: string }[]
  links: { label: string; href: string }[]
  sources: string[]
}

import { mediaSlot } from '../media'
import type { ArchivePiece, Project } from '../types'

const project = 'Posters'
const archive: ArchivePiece[] = [
  { scale: 'monument', asset: mediaSlot({ id: 'poster-full', project, title: 'Full composition', kind: 'poster', surface: 'paper', caption: 'Poster / Full composition' }) },
  { scale: 'right', asset: mediaSlot({ id: 'poster-detail', project, title: 'A closer look', kind: 'detail', fit: 'cover', medium: 'Poster detail' }) },
  { scale: 'left', asset: mediaSlot({ id: 'poster-vertical', project, title: 'Vertical format', kind: 'poster', surface: 'ink' }) },
  { scale: 'wide', asset: mediaSlot({ id: 'poster-horizontal', project, title: 'Horizontal format', kind: 'poster', aspect: [3, 2], surface: 'paper' }) },
  { scale: 'detail', asset: mediaSlot({ id: 'poster-type', project, title: 'Type in focus', kind: 'typography', aspect: [4, 3], fit: 'cover', medium: 'Typography / Poster detail' }) },
  { scale: 'monument', asset: mediaSlot({ id: 'poster-complete', project, title: 'The whole picture', kind: 'poster' }) },
]

export const posters: Project = {
  slug: 'posters', title: project, year: null, status: 'published', format: 'archive',
  categories: ['posters', 'experimental'], disciplines: ['Poster design', 'Typography', 'Composition'],
  summary: 'The full composition. The detail within it.',
  introduction: 'Poster design and visual experiments. A space for scale, composition and type—with enough room to look closer.',
  role: 'Poster design', services: ['Poster design', 'Typography'], technologies: [],
  hero: mediaSlot({ id: 'posters-cover', project, title: 'Poster archive', kind: 'poster', aspect: [4, 5], surface: 'paper' }),
  homeLayout: 'poster', chapters: [], archive, credits: [], links: [], sources: ['https://github.com/iwioke/iwioke'],
}

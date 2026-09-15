import { mediaSlot } from '../media'
import type { ArchivePiece, Project } from '../types'

const project = 'Posters'
const source = 'https://github.com/iwioke/iwioke'

const archive: ArchivePiece[] = [
  { scale: 'monument', asset: mediaSlot({ id: 'poster-22', project, title: 'Full composition', kind: 'poster', surface: 'paper', caption: 'Poster / Full composition', media: { type: 'image', src: '/media/posters/22-1.jpg', alt: 'A poster design with bold typographic composition in portrait format', width: 1506, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'right', asset: mediaSlot({ id: 'poster-11', project, title: 'Vertical study', kind: 'poster', surface: 'ink', caption: 'Poster / Vertical study', media: { type: 'image', src: '/media/posters/group-11.jpg', alt: 'A portrait poster with strong vertical typographic structure', width: 1403, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'left', asset: mediaSlot({ id: 'poster-13', project, title: 'Composed form', kind: 'poster', surface: 'paper', caption: 'Poster / Composed form', media: { type: 'image', src: '/media/posters/group-13.jpg', alt: 'A poster design with composed typographic and visual elements', width: 1448, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'wide', asset: mediaSlot({ id: 'poster-15', project, title: 'Structure', kind: 'poster', surface: 'paper', caption: 'Poster / Structural composition', media: { type: 'image', src: '/media/posters/group-15.jpg', alt: 'A poster with structural typographic composition', width: 1475, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'monument', asset: mediaSlot({ id: 'poster-17', project, title: 'Tall format', kind: 'poster', surface: 'ink', caption: 'Poster / Tall format', media: { type: 'image', src: '/media/posters/group-17.jpg', alt: 'A tall portrait poster with bold visual hierarchy', width: 1372, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'detail', asset: mediaSlot({ id: 'poster-18', project, title: 'Detail crop', kind: 'detail', aspect: [4, 5], fit: 'cover', surface: 'paper', medium: 'Poster detail', caption: 'Poster / Detail crop', media: { type: 'image', src: '/media/posters/group-18.jpg', alt: 'A cropped detail from a poster showing typographic treatment', width: 1650, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'left', asset: mediaSlot({ id: 'poster-19', project, title: 'Type-led', kind: 'poster', caption: 'Poster / Type-led composition', media: { type: 'image', src: '/media/posters/group-19.jpg', alt: 'A poster design led by typographic elements', width: 1451, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'right', asset: mediaSlot({ id: 'poster-21', project, title: 'Layered', kind: 'poster', surface: 'paper', caption: 'Poster / Layered composition', media: { type: 'image', src: '/media/posters/group-21.jpg', alt: 'A poster with layered visual and typographic elements', width: 1462, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'monument', asset: mediaSlot({ id: 'poster-24', project, title: 'Monumental', kind: 'poster', surface: 'ink', caption: 'Poster / Monumental scale', media: { type: 'image', src: '/media/posters/group-24.jpg', alt: 'A poster at monumental scale with bold composition', width: 1316, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'wide', asset: mediaSlot({ id: 'poster-25', project, title: 'Presence', kind: 'poster', surface: 'paper', caption: 'Poster / Visual presence', media: { type: 'image', src: '/media/posters/group-25.jpg', alt: 'A poster with strong visual presence and typographic scale', width: 1316, height: 2000, source, sourceLabel: 'Original design work' } }) },
  { scale: 'detail', asset: mediaSlot({ id: 'poster-28', project, title: 'Closing piece', kind: 'poster', aspect: [3, 4], fit: 'cover', surface: 'paper', medium: 'Poster', caption: 'Poster / Closing composition', media: { type: 'image', src: '/media/posters/group-28.jpg', alt: 'A closing poster composition with refined typographic detail', width: 1533, height: 2000, source, sourceLabel: 'Original design work' } }) },
]

export const posters: Project = {
  slug: 'posters', title: project, year: null, status: 'published', format: 'archive',
  categories: ['posters', 'experimental'], disciplines: ['Poster design', 'Typography', 'Composition'],
  summary: 'The full composition. The detail within it.',
  introduction: 'Poster design and visual experiments. A space for scale, composition and type—with enough room to look closer.',
  role: 'Poster design', services: ['Poster design', 'Typography'], technologies: [],
  hero: mediaSlot({ id: 'posters-cover', project, title: 'Poster archive', kind: 'poster', aspect: [4, 5], surface: 'paper', caption: 'Poster archive / Selected work', media: { type: 'image', src: '/media/posters/22-1.jpg', alt: 'A poster design with bold typographic composition in portrait format', width: 1506, height: 2000, source, sourceLabel: 'Original design work' } }),
  homeLayout: 'poster', chapters: [], archive, credits: [], links: [], sources: [source],
}

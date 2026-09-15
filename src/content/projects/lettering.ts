import { mediaSlot } from '../media'
import type { ArchivePiece, Project } from '../types'

const project = 'Type / Lettering'
const source = 'https://github.com/iwioke/iwioke'

const archive: ArchivePiece[] = [
  { scale: 'monument', asset: mediaSlot({ id: 'lettering-12', project, title: 'Lettering composition', kind: 'lettering', aspect: [1, 1], medium: 'Lettering / Figma', surface: 'ink', caption: 'Lettering / Square composition', media: { type: 'image', src: '/media/lettering/group-12.jpg', alt: 'A square lettering composition with custom typographic forms', width: 2000, height: 1991, source, sourceLabel: 'Original lettering work' } }) },
  { scale: 'left', asset: mediaSlot({ id: 'lettering-20', project, title: 'Letterform study', kind: 'lettering', aspect: [1, 1], medium: 'Lettering / Figma', surface: 'paper', caption: 'Lettering / Letterform study', media: { type: 'image', src: '/media/lettering/group-20.jpg', alt: 'A letterform study exploring custom typographic shapes', width: 1842, height: 2000, source, sourceLabel: 'Original lettering work' } }) },
  { scale: 'right', asset: mediaSlot({ id: 'lettering-29', project, title: 'Type composition', kind: 'lettering', aspect: [4, 5], medium: 'Lettering / Figma', caption: 'Lettering / Type composition', media: { type: 'image', src: '/media/lettering/group-29.jpg', alt: 'A typographic composition with custom lettering in portrait format', width: 1731, height: 2000, source, sourceLabel: 'Original lettering work' } }) },
  { scale: 'wide', asset: mediaSlot({ id: 'lettering-rectangle', project, title: 'Wide composition', kind: 'lettering', aspect: [3, 2], medium: 'Lettering / Figma', surface: 'paper', caption: 'Lettering / Wide composition', media: { type: 'image', src: '/media/lettering/rectangle.jpg', alt: 'A wide lettering composition with horizontal typographic flow', width: 2000, height: 1430, source, sourceLabel: 'Original lettering work' } }) },
]

export const lettering: Project = {
  slug: 'lettering', title: project, shortTitle: 'Lettering', year: null, status: 'published', format: 'archive',
  categories: ['lettering', 'experimental'], disciplines: ['Lettering', 'Typography', 'Figma'],
  summary: 'Letterforms, studies and compositions. Type treated as image.',
  introduction: 'Custom lettering, hand-drawn studies and typographic experiments in Figma. Not just what a letter says—what it does on the page.',
  role: 'Lettering & typographic exploration', services: ['Lettering', 'Typography'], technologies: ['Figma'],
  hero: mediaSlot({ id: 'lettering-cover', project, title: 'Type / Lettering', kind: 'lettering', aspect: [1, 1], surface: 'ink', caption: 'Type / Lettering archive', media: { type: 'image', src: '/media/lettering/group-12.jpg', alt: 'A square lettering composition with custom typographic forms', width: 2000, height: 1991, source, sourceLabel: 'Original lettering work' } }),
  homeLayout: 'type', chapters: [], archive, credits: [], links: [], sources: [source],
}

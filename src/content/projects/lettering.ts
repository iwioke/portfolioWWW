import { mediaSlot } from '../media'
import type { ArchivePiece, Project } from '../types'

const project = 'Type / Lettering'
const archive: ArchivePiece[] = [
  { scale: 'wide', asset: mediaSlot({ id: 'lettering-composition', project, title: 'Lettering composition', kind: 'lettering', medium: 'Lettering / Figma', surface: 'ink' }) },
  { scale: 'left', asset: mediaSlot({ id: 'lettering-letterform', project, title: 'Individual letterform', kind: 'typography', medium: 'Type study / Figma', surface: 'paper' }) },
  { scale: 'right', asset: mediaSlot({ id: 'lettering-sketch', project, title: 'Hand-drawn beginnings', kind: 'sketch', medium: 'Hand-drawn type / Sketch' }) },
  { scale: 'wide', asset: mediaSlot({ id: 'lettering-figma', project, title: 'On the artboard', kind: 'figma', medium: 'Figma exploration', surface: 'paper' }) },
  { scale: 'monument', asset: mediaSlot({ id: 'lettering-finished', project, title: 'Finished lettering', kind: 'lettering', aspect: [1, 1], medium: 'Lettering / Figma' }) },
  { scale: 'small', asset: mediaSlot({ id: 'lettering-motion', project, title: 'Type in motion', kind: 'animation', medium: 'Animation slot', surface: 'ink' }) },
]

export const lettering: Project = {
  slug: 'lettering', title: project, shortTitle: 'Lettering', year: null, status: 'published', format: 'archive',
  categories: ['lettering', 'experimental'], disciplines: ['Lettering', 'Typography', 'Figma'],
  summary: 'Letterforms, studies and compositions. Type treated as image.',
  introduction: 'Custom lettering, hand-drawn studies and typographic experiments in Figma. Not just what a letter says—what it does on the page.',
  role: 'Lettering & typographic exploration', services: ['Lettering', 'Typography'], technologies: ['Figma'],
  hero: mediaSlot({ id: 'lettering-cover', project, title: 'Type / Lettering', kind: 'lettering', aspect: [3, 2], surface: 'ink' }),
  homeLayout: 'type', chapters: [], archive, credits: [], links: [], sources: [],
}

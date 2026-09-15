import { mediaSlot } from '../media'
import { profile } from '../profile'
import type { Project } from '../types'

const project = 'LM Group'
const source = 'https://github.com/iwioke/lm-group-europe-website'

const hero = mediaSlot({
  id: 'lm-cover', project, title: 'LM Group identity', kind: 'hero',
  surface: 'fog', presentation: 'mark', caption: 'LM Group / Original identity lockup',
  media: { type: 'image', src: '/media/lm-group/logo.svg', alt: 'LM Group’s black monogram and wordmark', width: 37, height: 29, source: `${source}/blob/main/assets/lm-group-logo.svg`, sourceLabel: 'Original repository asset' },
})

const desktop = mediaSlot({
  id: 'lm-desktop', project, title: 'Europe / Desktop', kind: 'desktop',
  aspect: [16, 10], caption: 'Europe website / Desktop',
  media: { type: 'image', src: '/media/lm-group/website-desktop.jpg', alt: 'The published LM Group Europe website with its monochrome identity, oversized freight logistics headline and red contact link', width: 1800, height: 1125, source: 'https://llclmgroup.com', sourceLabel: 'Live website capture' },
})

export const lmGroup: Project = {
  slug: 'lm-group', title: project, year: 2026,
  yearEvidence: 'The project year was explicitly supplied in the portfolio brief.',
  status: 'published', format: 'case-study',
  categories: ['branding', 'web', 'digital'],
  disciplines: ['Visual identity', 'Digital', 'Print', 'Art direction'],
  summary: 'A visual identity that moves between screen, paper and the physical world.',
  introduction: 'A connected visual language for an international freight and logistics company. My work for LM Group extends across identity, websites and wider corporate communication—considering how the company appears in both digital and physical spaces.',
  role: 'Visual identity, design & digital implementation',
  services: ['Visual identity', 'Website design', 'Web development', 'Corporate communication'],
  technologies: ['Figma', 'HTML & CSS', 'Tailwind CSS', 'JavaScript'],
  hero, preview: desktop, homeLayout: 'lead',
  chapters: [
    {
      id: 'identity', title: 'Identity, then system.',
      description: 'A point of recognition. The mark and the visual relationships that connect the wider identity.',
      blocks: [{
        id: 'identity-system', layout: 'duo', assets: [
          mediaSlot({ id: 'lm-mark', project, title: 'The monogram', kind: 'identity', aspect: [1, 1], surface: 'paper', presentation: 'mark', caption: 'Identity / Original monogram', media: { type: 'image', src: '/media/lm-group/mark.svg', alt: 'The original LM Group monogram in black', width: 29, height: 18, source: `${source}/blob/main/assets/lm-mark.svg`, sourceLabel: 'Original repository asset' } }),
          mediaSlot({ id: 'lm-system', project, title: 'Visual language', kind: 'identity', aspect: [1, 1], caption: 'Typography / Colour / Identity system' }),
        ],
      }],
    },
    {
      id: 'digital', title: 'The identity on screen.',
      description: 'Multilingual websites for Europe and Kazakhstan. Two regional expressions of one visual language, across desktop and mobile.',
      blocks: [
        { id: 'digital-desktop', layout: 'full-width', assets: [desktop] },
        { id: 'digital-responsive', layout: 'split', assets: [
          mediaSlot({ id: 'lm-kazakhstan', project, title: 'Kazakhstan / Digital', kind: 'desktop', caption: 'Kazakhstan website / Further screen documentation' }),
          mediaSlot({ id: 'lm-mobile', project, title: 'Europe / Mobile', kind: 'mobile', aspect: [390, 844], caption: 'Responsive website / Mobile', media: { type: 'image', src: '/media/lm-group/website-mobile.jpg', alt: 'The real mobile LM Group website, with compact navigation and a vertically composed logistics headline', width: 390, height: 844, source: 'https://llclmgroup.com', sourceLabel: 'Live website capture' } }),
        ] },
      ],
    },
    {
      id: 'stationery', title: 'The everyday matters.',
      description: 'Reserved for the quieter corporate touchpoints: cards, letterheads, documents and envelopes. Original stationery material will complete this chapter.',
      blocks: [{ id: 'stationery-composition', layout: 'trio', assets: [
        mediaSlot({ id: 'lm-cards', project, title: 'Cards & envelopes', kind: 'stationery', aspect: [4, 3], surface: 'paper', caption: 'Business cards / Envelope asset slot' }),
        mediaSlot({ id: 'lm-letterhead', project, title: 'Letterheads', kind: 'stationery', caption: 'Corporate stationery asset slot' }),
        mediaSlot({ id: 'lm-documents', project, title: 'Documents', kind: 'stationery', surface: 'paper', caption: 'Corporate document asset slot' }),
      ] }],
    },
    {
      id: 'print', title: 'A different kind of presence.',
      description: 'Space for printed communication, brochures and other supplied print material. A change of medium, not a separate identity.',
      blocks: [{ id: 'print-composition', layout: 'single', assets: [
        mediaSlot({ id: 'lm-print', project, title: 'Printed communication', kind: 'print', aspect: [3, 2], caption: 'Print / Brochures / Corporate material' }),
      ] }],
    },
    {
      id: 'applications', title: 'Beyond a flat surface.',
      description: 'Physical and environmental applications, branded materials, merchandise and logistics-related communication. Reserved for verified project documentation.',
      blocks: [{ id: 'brand-applications', layout: 'image-text', title: 'One language.\nMany contexts.', copy: 'The portfolio leaves room for the identity to be seen in its real surroundings. No speculative mockups stand in for completed work.', assets: [
        mediaSlot({ id: 'lm-physical', project, title: 'Brand in context', kind: 'application', aspect: [4, 5], caption: 'Physical / Environmental / Branded applications' }),
      ] }],
    },
    {
      id: 'details', title: 'Look a little closer.',
      description: 'Close-ups, process and supporting material. A flexible sequence for the details behind the system.',
      blocks: [{ id: 'detail-gallery', layout: 'horizontal', assets: [
        mediaSlot({ id: 'lm-close-up', project, title: 'Close-up detail', kind: 'detail', surface: 'paper', fit: 'cover' }),
        mediaSlot({ id: 'lm-type', project, title: 'Type in context', kind: 'typography' }),
        mediaSlot({ id: 'lm-process', project, title: 'Process material', kind: 'process', surface: 'paper' }),
        mediaSlot({ id: 'lm-mockup', project, title: 'Original mockup', kind: 'mockup' }),
      ] }],
    },
    {
      id: 'final-system', title: 'The complete picture.',
      description: 'A final composition reserved for the full system: identity, digital and physical communication, seen together.',
      blocks: [{ id: 'complete-system', layout: 'full-width', assets: [
        mediaSlot({ id: 'lm-final', project, title: 'The complete system', kind: 'identity', aspect: [16, 9], surface: 'ink', caption: 'Identity → Digital → Stationery → Print → Applications' }),
      ] }],
    },
  ],
  archive: [],
  credits: [{ name: profile.name, role: 'Design & development' }],
  links: [
    { label: 'Europe website', href: 'https://llclmgroup.com' },
    { label: 'Kazakhstan website', href: 'https://llclmgroup.store' },
    { label: 'Europe source', href: source },
    { label: 'Kazakhstan source', href: 'https://github.com/iwioke/lm-group-kazakhstan-website' },
  ],
  sources: [profile.sources[1], source, 'https://github.com/iwioke/lm-group-kazakhstan-website'],
}

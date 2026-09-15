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
      blocks: [
        { id: 'identity-system', layout: 'duo', assets: [
          mediaSlot({ id: 'lm-mark', project, title: 'The monogram', kind: 'identity', aspect: [1, 1], surface: 'paper', presentation: 'mark', caption: 'Identity / Original monogram', media: { type: 'image', src: '/media/lm-group/mark.svg', alt: 'The original LM Group monogram in black', width: 29, height: 18, source: `${source}/blob/main/assets/lm-mark.svg`, sourceLabel: 'Original repository asset' } }),
          mediaSlot({ id: 'lm-system', project, title: 'Visual language', kind: 'identity', aspect: [1, 1], caption: 'Typography / Colour / Identity system' }),
        ] },
        { id: 'identity-logo-mockup', layout: 'full-width', assets: [
          mediaSlot({ id: 'lm-logo-mockup', project, title: 'The lockup in context', kind: 'identity', aspect: [4, 3], surface: 'paper', caption: 'Identity / Logo application', media: { type: 'image', src: '/media/lm-group/identity/logo-mockup.jpg', alt: 'LM Group logo applied to a physical surface, showing the monogram and wordmark in a real-world setting', width: 2000, height: 1500, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        ] },
        { id: 'identity-compositions', layout: 'split', assets: [
          mediaSlot({ id: 'lm-gemini-01', project, title: 'Identity composition', kind: 'identity', aspect: [3, 2], caption: 'Identity / Visual composition', media: { type: 'image', src: '/media/lm-group/identity/gemini-01.jpg', alt: 'LM Group identity composition with the monogram set against a dark background', width: 1600, height: 1069, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
          mediaSlot({ id: 'lm-gemini-02', project, title: 'System in motion', kind: 'identity', aspect: [16, 9], surface: 'ink', caption: 'Identity / System expression', media: { type: 'image', src: '/media/lm-group/identity/gemini-02.jpg', alt: 'LM Group visual system expressed across a wide cinematic composition', width: 1600, height: 936, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        ] },
      ],
    },
    {
      id: 'digital', title: 'The identity on screen.',
      description: 'Multilingual websites for Europe and Kazakhstan. Two regional expressions of one visual language, across desktop and mobile.',
      blocks: [
        { id: 'digital-desktop', layout: 'full-width', assets: [desktop] },
        { id: 'digital-eu-video', layout: 'video', assets: [
          mediaSlot({ id: 'lm-eu-recording', project, title: 'Europe website / In motion', kind: 'video', aspect: [16, 9], surface: 'ink', caption: 'Europe / Screen recording', media: { type: 'video', src: '/media/lm-group/digital/eu-website.mp4', poster: '/media/lm-group/digital/eu-website-poster.jpg', description: 'A screen recording of the published LM Group Europe website, showing navigation, motion and the multilingual interface.', source: 'https://llclmgroup.com', sourceLabel: 'Live website recording' } }),
        ] },
        { id: 'digital-kz-video', layout: 'video', assets: [
          mediaSlot({ id: 'lm-kz-recording', project, title: 'Kazakhstan website / In motion', kind: 'video', aspect: [16, 9], caption: 'Kazakhstan / Screen recording', media: { type: 'video', src: '/media/lm-group/digital/kz-website.mp4', poster: '/media/lm-group/digital/kz-website-poster.jpg', description: 'A screen recording of the published LM Group Kazakhstan website, showing the four-language interface and regional logistics content.', source: 'https://llclmgroup.store', sourceLabel: 'Live website recording' } }),
        ] },
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
      description: 'Physical and environmental applications, branded merchandise and logistics-related communication. The identity extends from screen to the physical world.',
      blocks: [
        { id: 'brand-applications-intro', layout: 'image-text', title: 'One language.\nMany contexts.', copy: 'The identity moves from screen into physical space—apparel, packaging, environmental graphics and logistics materials, all carrying the same visual language.', assets: [
          mediaSlot({ id: 'lm-boxes', project, title: 'Logistics packaging', kind: 'application', aspect: [4, 5], caption: 'Applications / Isometric packaging', media: { type: 'image', src: '/media/lm-group/applications/boxes.jpg', alt: 'LM Group branded shipping boxes stacked in an isometric composition, showing the identity applied to logistics packaging', width: 2000, height: 1621, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        ] },
        { id: 'brand-applications-billboard', layout: 'full-width', assets: [
          mediaSlot({ id: 'lm-billboard', project, title: 'Environmental presence', kind: 'application', aspect: [3, 2], surface: 'ink', caption: 'Applications / Nighttime billboard', media: { type: 'image', src: '/media/lm-group/applications/billboard.jpg', alt: 'LM Group identity displayed on a nighttime billboard, showing the monogram at large environmental scale', width: 2000, height: 1333, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        ] },
        { id: 'brand-applications-apparel', layout: 'trio', assets: [
          mediaSlot({ id: 'lm-tshirt', project, title: 'T-shirt', kind: 'mockup', aspect: [4, 5], surface: 'paper', caption: 'Apparel / Oversized T-shirt', media: { type: 'image', src: '/media/lm-group/applications/tshirt.jpg', alt: 'LM Group logo on a free-floating oversized T-shirt mockup', width: 2000, height: 1333, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
          mediaSlot({ id: 'lm-hoodie', project, title: 'Hoodie', kind: 'mockup', aspect: [4, 5], caption: 'Apparel / Simple hoodie', media: { type: 'image', src: '/media/lm-group/applications/hoodie.jpg', alt: 'LM Group logo on a simple hoodie mockup', width: 2000, height: 1333, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
          mediaSlot({ id: 'lm-jacket', project, title: 'Puffer jacket', kind: 'mockup', aspect: [4, 5], surface: 'paper', caption: 'Apparel / Puffer jacket', media: { type: 'image', src: '/media/lm-group/applications/jacket.jpg', alt: 'LM Group logo on a puffer jacket mockup', width: 2000, height: 1333, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        ] },
        { id: 'brand-applications-accessories', layout: 'split', assets: [
          mediaSlot({ id: 'lm-tote', project, title: 'Tote bag', kind: 'mockup', aspect: [5, 4], surface: 'paper', caption: 'Accessories / Tote bag', media: { type: 'image', src: '/media/lm-group/applications/tote-bag.jpg', alt: 'LM Group logo on a tote bag mockup', width: 2000, height: 1600, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
          mediaSlot({ id: 'lm-mockup-01', project, title: 'Brand mockup', kind: 'mockup', aspect: [1, 1], caption: 'Applications / Brand mockup', media: { type: 'image', src: '/media/lm-group/applications/mockup-01.jpg', alt: 'LM Group identity applied to a branded surface mockup', width: 2000, height: 2000, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        ] },
      ],
    },
    {
      id: 'details', title: 'Look a little closer.',
      description: 'Close-ups, compositions and supporting material. The details behind the system.',
      blocks: [{ id: 'detail-gallery', layout: 'horizontal', assets: [
        mediaSlot({ id: 'lm-group-67', project, title: 'Composition study', kind: 'detail', aspect: [4, 5], surface: 'paper', caption: 'Details / Composition study', media: { type: 'image', src: '/media/lm-group/details/group-67.jpg', alt: 'LM Group composition study showing the identity elements arranged in a detailed layout', width: 1428, height: 1600, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        mediaSlot({ id: 'lm-group-32', project, title: 'System overview', kind: 'detail', aspect: [16, 10], caption: 'Details / System overview', media: { type: 'image', src: '/media/lm-group/details/group-32.jpg', alt: 'LM Group system overview showing identity, digital and print elements together', width: 1600, height: 973, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        mediaSlot({ id: 'lm-group-33', project, title: 'Vertical composition', kind: 'detail', aspect: [4, 5], surface: 'paper', caption: 'Details / Vertical composition', media: { type: 'image', src: '/media/lm-group/details/group-33.jpg', alt: 'LM Group vertical composition with the monogram and typography in a portrait layout', width: 1126, height: 1600, source: 'https://llclmgroup.com', sourceLabel: 'Original brand material' } }),
        mediaSlot({ id: 'lm-process', project, title: 'Process material', kind: 'process', surface: 'paper', caption: 'Process / Asset slot' }),
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

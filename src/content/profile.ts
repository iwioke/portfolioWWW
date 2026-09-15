export const profile = {
  alias: 'IWIoke',
  name: 'Maxim Matsulevich',
  location: 'Minsk, Belarus',
  email: 'iwiokework@gmail.com' as string | null,
  edition: 2026,
  availability: 'open' as 'open' | 'limited' | 'closed',
  description: 'Multidisciplinary graphic and web designer working across visual identity, digital products, posters, lettering and creative development.',
  introduction: 'I’m Maxim Matsulevich, a graphic and web designer. I work across identities, interfaces and typographic work—and develop the digital things I design.',
  designTools: ['Figma', 'Adobe Photoshop'],
  developmentTools: ['React', 'Next.js', 'HTML & CSS', 'Tailwind CSS', 'Swift', 'SwiftUI', 'AppKit'],
  channels: [
    { label: 'Telegram', name: '@iwiokedamn', href: 'https://t.me/iwiokedamn' },
    { label: 'Instagram', name: '@iwiokebaa', href: 'https://www.instagram.com/iwiokebaa/' },
    { label: 'GitHub', name: '@iwioke', href: 'https://github.com/iwioke' },
    { label: 'X', name: '@tipokasyak', href: 'https://x.com/tipokasyak' },
  ],
  sources: ['https://github.com/iwioke', 'https://github.com/iwioke/iwioke'],
}

export function availabilityLabel(status = profile.availability) {
  return { open: 'Open for commissions', limited: 'Available for selected projects', closed: 'Currently not taking new projects' }[status]
}

export const disciplines = [
  { title: 'Visual identity', detail: 'Marks / systems / applications', category: 'branding' },
  { title: 'Web design', detail: 'Structure / composition / interaction', category: 'web' },
  { title: 'UI & digital products', detail: 'Interfaces / native experiences', category: 'digital' },
  { title: 'Poster design', detail: 'Type / image / printed matter', category: 'posters' },
  { title: 'Lettering & typography', detail: 'Letterforms / studies / Figma', category: 'lettering' },
  { title: 'Creative development', detail: 'Web / React / SwiftUI', category: 'digital' },
  { title: 'Art direction', detail: 'A point of view across touchpoints', category: 'branding' },
]

export const categoryLabels: Record<string, string> = {
  branding: 'Branding',
  web: 'Web',
  digital: 'Digital',
  posters: 'Posters',
  lettering: 'Lettering',
  experimental: 'Experimental',
}

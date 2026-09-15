import { mediaSlot } from '../media'
import { profile } from '../profile'
import type { Project } from '../types'

const project = 'iwiqoVPN'
const source = 'https://github.com/iwioke/iwiqoVPN'

export const iwiqoVPN: Project = {
  slug: 'iwiqovpn', title: project, year: null,
  status: 'published', progress: 'In development', format: 'case-study',
  categories: ['digital'], disciplines: ['Product design', 'UI design', 'Creative development'],
  summary: 'A native macOS product. A compact interface, built close to the platform.',
  introduction: 'A native macOS menu-bar VPN client built with SwiftUI and WireGuard. Connection controls, server selection and live traffic statistics sit in a compact interface, with light and dark themes and Telegram-based configuration.',
  role: 'Interface design & native macOS development',
  services: ['Product design', 'UI design', 'Creative development'],
  technologies: ['Swift', 'SwiftUI', 'AppKit', 'WireGuard'],
  hero: mediaSlot({
    id: 'vpn-cover', project, title: 'iwiqoVPN', kind: 'hero', surface: 'ink', presentation: 'icon',
    caption: 'iwiqoVPN / Original application icon',
    media: { type: 'image', src: '/media/iwiqovpn/icon.png', alt: 'The original iwiqoVPN application icon: a vivid pink shield on black', width: 1024, height: 1024, source: `${source}/tree/main/Sources/iwiqoVPN/Assets.xcassets/AppIcon.appiconset`, sourceLabel: 'Original repository asset' },
  }),
  homeLayout: 'offset',
  chapters: [
    {
      id: 'native', title: 'At home in the menu bar.',
      description: 'An interface built around the native macOS environment, rather than a separate, oversized window.',
      blocks: [{ id: 'native-interface', layout: 'split', assets: [
        mediaSlot({ id: 'vpn-desktop', project, title: 'The macOS interface', kind: 'desktop', aspect: [4, 5], caption: 'Desktop / Original interface capture', media: { type: 'image', src: '/media/iwiqovpn/screen-marketing.jpg', alt: 'iwiqoVPN application interface showing the connection state in a compact macOS popover', width: 997, height: 1200, source: `${source}`, sourceLabel: 'Original application capture' } }),
        mediaSlot({ id: 'vpn-menu-bar', project, title: 'Menu-bar interaction', kind: 'desktop', aspect: [4, 5], surface: 'paper', caption: 'Menu bar / Popover interaction', media: { type: 'image', src: '/media/iwiqovpn/screen-01.jpg', alt: 'iwiqoVPN menu bar popover with connection controls and server selection', width: 997, height: 1200, source: `${source}`, sourceLabel: 'Original application capture' } }),
      ] }],
    },
    {
      id: 'states', title: 'The information you need.',
      description: 'One-click connection, server selection and live traffic statistics. These frames show the actual UI states of the native application.',
      blocks: [{ id: 'product-states', layout: 'trio', assets: [
        mediaSlot({ id: 'vpn-connection', project, title: 'Connection state', kind: 'desktop', aspect: [4, 5], caption: 'Connection / One-click connect', media: { type: 'image', src: '/media/iwiqovpn/screen-02.jpg', alt: 'iwiqoVPN connection state with one-click connect and live status indicator', width: 997, height: 1200, source: `${source}`, sourceLabel: 'Original application capture' } }),
        mediaSlot({ id: 'vpn-server', project, title: 'Server selection', kind: 'desktop', aspect: [4, 5], surface: 'paper', caption: 'Servers / Selection interface', media: { type: 'image', src: '/media/iwiqovpn/screen-03.jpg', alt: 'iwiqoVPN server selection interface listing available WireGuard servers', width: 996, height: 1200, source: `${source}`, sourceLabel: 'Original application capture' } }),
        mediaSlot({ id: 'vpn-statistics', project, title: 'Live statistics', kind: 'desktop', aspect: [4, 5], caption: 'Statistics / Traffic data asset slot' }),
      ] }],
    },
    {
      id: 'themes', title: 'Light. Dark. Native.',
      description: 'The application supports both light and dark themes. Original captures will show how the interface responds to each.',
      blocks: [{ id: 'theme-pair', layout: 'duo', assets: [
        mediaSlot({ id: 'vpn-light', project, title: 'Light interface', kind: 'desktop', aspect: [4, 5], surface: 'paper' }),
        mediaSlot({ id: 'vpn-dark', project, title: 'Dark interface', kind: 'desktop', aspect: [4, 5], surface: 'ink' }),
      ] }],
    },
    {
      id: 'configuration', title: 'The supporting details.',
      description: 'Settings, launch preferences and Telegram-based configuration are part of the publicly documented application.',
      blocks: [{ id: 'setup-sequence', layout: 'sequence', assets: [
        mediaSlot({ id: 'vpn-settings', project, title: 'Settings & preferences', kind: 'desktop', aspect: [3, 2] }),
        mediaSlot({ id: 'vpn-setup', project, title: 'Configuration flow', kind: 'process', aspect: [16, 9], surface: 'paper' }),
      ] }],
    },
    {
      id: 'in-use', title: 'The product, in use.',
      description: 'Reserved for an original screen recording. Native controls, no forced autoplay.',
      blocks: [{ id: 'product-video', layout: 'video', assets: [
        mediaSlot({ id: 'vpn-recording', project, title: 'Product walkthrough', kind: 'video', surface: 'ink' }),
      ] }],
    },
  ],
  archive: [], credits: [{ name: profile.name, role: 'Design & development' }],
  links: [{ label: 'Explore the source', href: source }], sources: [source, profile.sources[1]],
}

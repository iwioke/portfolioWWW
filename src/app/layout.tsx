import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { profile } from '@/content/profile'
import { siteOrigin } from '@/lib/seo'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

const sans = localFont({ src: '../../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2', variable: '--font-sans', weight: '100 900', display: 'swap', fallback: ['Arial', 'sans-serif'] })
const mono = localFont({ src: '../../node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2', variable: '--font-mono', weight: '100 900', display: 'swap', fallback: ['Courier New', 'monospace'], adjustFontFallback: false })
const origin = siteOrigin()

export const metadata: Metadata = {
  metadataBase: origin ? new URL(origin) : undefined,
  title: { default: 'IWIoke — Graphic + Digital', template: '%s — IWIoke' },
  description: profile.description,
  applicationName: 'IWIoke Portfolio',
  icons: { icon: '/icon.svg' },
  robots: { index: Boolean(origin), follow: Boolean(origin) },
}

export const viewport: Viewport = { themeColor: '#f4f4f0', colorScheme: 'light', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, alternateName: profile.alias, jobTitle: 'Graphic and web designer', description: profile.description, ...(origin ? { url: origin } : {}), ...(profile.email ? { email: profile.email } : {}), sameAs: profile.channels.map((channel) => channel.href) }
  return <html lang="en"><body className={`${sans.variable} ${mono.variable}`}>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Header />
    <PageTransition><main id="main-content" tabIndex={-1}>{children}</main></PageTransition>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replaceAll('<', '\\u003c') }} />
  </body></html>
}

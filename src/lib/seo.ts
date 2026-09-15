import type { Metadata } from 'next'
import { profile } from '@/content/profile'

export function siteOrigin(value = process.env.SITE_URL): string | undefined {
  if (!value?.trim()) return undefined
  const url = new URL(value)
  const local = ['localhost', '127.0.0.1'].includes(url.hostname)
  if ((url.protocol !== 'https:' && !(local && url.protocol === 'http:')) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS origin without a path, credentials, query or fragment.')
  }
  return url.origin
}

export function pageMetadata(title: string, path: string, description = profile.description): Metadata {
  const origin = siteOrigin()
  const fullTitle = `${title} — ${profile.alias}`
  return {
    title: { absolute: fullTitle },
    description,
    ...(origin ? { alternates: { canonical: `${origin}${path}` } } : {}),
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      siteName: `${profile.alias} — ${profile.name}`,
      ...(origin ? { url: `${origin}${path}`, images: [{ url: `${origin}/social-image`, width: 1200, height: 630, alt: 'IWIoke — Graphic + Digital. Portfolio 2026.' }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      ...(origin ? { images: [`${origin}/social-image`] } : {}),
    },
    robots: { index: Boolean(origin), follow: Boolean(origin) },
  }
}

import type { MetadataRoute } from 'next'
import { siteOrigin } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  const origin = siteOrigin()
  return origin ? { rules: { userAgent: '*', allow: '/' }, sitemap: `${origin}/sitemap.xml` } : { rules: { userAgent: '*', disallow: '/' } }
}

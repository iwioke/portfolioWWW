import type { MetadataRoute } from 'next'
import { publishedProjects } from '@/content/projects'
import { siteOrigin } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteOrigin()
  if (!origin) return []
  return ['/', '/work', '/info', '/contact', ...publishedProjects.map((project) => `/work/${project.slug}`)].map((path) => ({ url: `${origin}${path}` }))
}

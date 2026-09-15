import Link from 'next/link'
import { publishedProjects } from '@/content/projects'
import { Arrow } from './icons'

export function NextProject({ slug }: { slug: string }) {
  if (publishedProjects.length < 2) return null
  const index = publishedProjects.findIndex((project) => project.slug === slug)
  const project = publishedProjects[(index + 1) % publishedProjects.length]
  return <Link href={`/work/${project.slug}`} className="next-project"><span className="micro">Next / Keep exploring</span><span className="next-project-name">{project.title}<Arrow direction="right" /></span></Link>
}

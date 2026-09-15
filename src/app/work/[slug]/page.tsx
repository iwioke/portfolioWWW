import { notFound } from 'next/navigation'
import { getProject, publishedProjects } from '@/content/projects'
import { pageMetadata } from '@/lib/seo'
import { CaseStudy } from '@/components/case-study'
import { Archive } from '@/components/archive'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return publishedProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props) {
  const project = getProject((await params).slug)
  if (!project) return { title: 'Project not found', robots: { index: false, follow: false } }
  return pageMetadata(project.title, `/work/${project.slug}`, project.introduction)
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  return project.format === 'archive' ? <Archive project={project} /> : <CaseStudy project={project} />
}

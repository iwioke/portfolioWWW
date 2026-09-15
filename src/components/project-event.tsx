import Link from 'next/link'
import { projectDate } from '@/content/projects'
import type { Project } from '@/content/types'
import { Arrow } from './icons'
import { ProjectLink } from './project-link'
import { MediaFigure } from './media/media-figure'

export function ProjectEvent({ project, index, count }: { project: Project; index: number; count: number }) {
  const number = String(index + 1).padStart(2, '0')
  return <article className={`project-event project-event--${project.homeLayout}`}>
    <div className="event-meta micro"><span>{number} / {String(count).padStart(2, '0')}</span><span>{projectDate(project)}</span><span>{project.format === 'archive' ? 'Editorial archive' : 'Selected project'}</span></div>
    <div className="event-heading"><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><span className="micro">{project.disciplines.join(' / ')}</span></div>
    <ProjectLink href={`/work/${project.slug}`} label={`Explore ${project.title}`} className="event-visual">
      <MediaFigure asset={project.hero} index={index + 1} interactive={false} caption={false} sizes={project.homeLayout === 'poster' ? '(max-width: 800px) 100vw, 42vw' : '(max-width: 800px) 100vw, 80vw'} />
      {project.homeLayout === 'lead' && project.preview && <div className="event-inset"><span className="micro">Digital / Live website</span><MediaFigure asset={project.preview} interactive={false} caption={false} sizes="(max-width: 800px) 65vw, 36vw" /></div>}
      {project.hero.media && <span className="event-visual-note micro">{project.hero.media.sourceLabel}</span>}
    </ProjectLink>
    <div className="event-bottom"><p>{project.summary}</p><Link href={`/work/${project.slug}`} className="text-link micro">{project.format === 'archive' ? 'Explore archive' : 'View case study'}<Arrow /></Link></div>
  </article>
}

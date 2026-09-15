import Link from 'next/link'
import { getProjectAssets, projectDate } from '@/content/projects'
import type { Project } from '@/content/types'
import { Arrow, Plus } from './icons'
import { ContactCTA } from './contact-cta'
import { NextProject } from './next-project'
import { MediaBlock } from './media/media-block'
import { MediaFigure } from './media/media-figure'
import { MediaProvider } from './media/media-provider'

export function CaseStudy({ project }: { project: Project }) {
  const assets = getProjectAssets(project)
  return <MediaProvider key={project.slug} assets={assets}>
    <article className={`case-study case-study--${project.slug}`}>
      <header className="project-header shell"><Link href="/work" className="back-link micro"><Arrow direction="left" />Work index</Link><div className="project-heading"><h1>{project.title}</h1><span className="project-date">{projectDate(project)}</span></div><div className="project-disciplines micro"><span>{project.disciplines.join(' / ')}</span><span>{project.progress ?? 'A multidisciplinary project'}</span></div></header>
      <div className="project-hero shell"><MediaFigure asset={project.hero} priority /></div>
      <div className="shell">
        <section className="project-introduction" aria-labelledby="project-overview"><h2 id="project-overview" className="micro">About the project</h2><p className="project-intro-copy">{project.introduction}</p><dl className="project-facts"><div><dt className="micro">My role</dt><dd>{project.role}</dd></div><div><dt className="micro">Areas of work</dt><dd>{project.services.join(' / ')}</dd></div><div><dt className="micro">Tools & technology</dt><dd>{project.technologies.join(' / ')}</dd></div></dl></section>
        <div className="documentation-note"><Plus /><span className="micro">Documentation</span><p>Original assets are shown where available. Labeled frames reserve space for further project material; they are not additional deliverable claims.</p></div>
        <nav className="chapter-index" aria-label="Project chapters">{project.chapters.map((chapter, index) => <a key={chapter.id} href={`#${chapter.id}`}><span className="micro">{String(index + 1).padStart(2, '0')}</span>{chapter.id.replaceAll('-', ' ')}</a>)}</nav>
        <div className="project-chapters">{project.chapters.map((chapter, index) => <section className="project-chapter" id={chapter.id} key={chapter.id} aria-labelledby={`${chapter.id}-heading`}>
          <div className="chapter-heading"><span className="chapter-label micro">{String(index + 1).padStart(2, '0')} / {chapter.id.replaceAll('-', ' ')}</span><h2 id={`${chapter.id}-heading`}>{chapter.title}</h2><p>{chapter.description}</p></div>
          {chapter.blocks.map((block) => <MediaBlock key={block.id} block={block} collection={assets} />)}
        </section>)}</div>
        <div className="project-credits"><div><h2 className="micro">Credits</h2>{project.credits.map((credit) => <p key={`${credit.name}-${credit.role}`}>{credit.name}<span>{credit.role}</span></p>)}</div><div><h2 className="micro">Elsewhere</h2>{project.links.map((link) => <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label}<Arrow /></a>)}</div></div>
        <NextProject slug={project.slug} />
      </div>
    </article>
    <ContactCTA prompt="Have a similar project?" project={project.slug} />
  </MediaProvider>
}

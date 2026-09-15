import Link from 'next/link'
import { filterProjects, getCategories, normalizeCategory, projectDate, publishedProjects } from '@/content/projects'
import { profile } from '@/content/profile'
import { pageMetadata } from '@/lib/seo'
import { WorkIndex } from '@/components/work-index'
import { ContactCTA } from '@/components/contact-cta'

export const metadata = pageMetadata('Work index', '/work')

export default async function Work({ searchParams }: { searchParams: Promise<{ category?: string | string[] }> }) {
  const category = normalizeCategory((await searchParams).category)
  const visible = filterProjects(category)
  const entries = visible.map((project) => ({ slug: project.slug, title: project.title, number: String(publishedProjects.findIndex((item) => item.slug === project.slug) + 1).padStart(2, '0'), date: projectDate(project), disciplines: project.disciplines, format: project.format, preview: project.preview ?? project.hero }))
  const categories = getCategories()

  return <>
    <div className="work-page shell"><header className="work-heading"><div className="section-kicker micro"><span>The work index</span><span>Portfolio / {profile.edition}</span></div><div className="work-title-row"><h1>Work<sup>({String(publishedProjects.length).padStart(2, '0')})</sup></h1><p>Identities, interfaces and experiments.<br />The work, indexed.</p></div></header>
      <nav className="work-filters" aria-label="Filter work by discipline">{categories.map((item) => <Link key={item.id} href={item.id === 'all' ? '/work' : `/work?category=${item.id}`} scroll={false} aria-current={category === item.id ? 'page' : undefined}><span>{item.label}</span><span>{String(filterProjects(item.id).length).padStart(2, '0')}</span></Link>)}</nav>
      <p className="sr-only" role="status">{visible.length} collections shown. Filter: {categories.find((item) => item.id === category)?.label}.</p>
      <WorkIndex entries={entries} />
      <div className="index-note"><span className="micro">A note on the archive</span><p>The projects are real; the documentation is evolving. Original assets are shown where available. Reserved frames leave room for the work still to be added.</p></div>
    </div>
    <ContactCTA prompt="Looking for a designer?" />
  </>
}

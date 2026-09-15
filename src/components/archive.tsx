import Link from 'next/link'
import { assetDate } from '@/content/media'
import { profile } from '@/content/profile'
import type { Project } from '@/content/types'
import { Arrow, Plus } from './icons'
import { MediaProvider } from './media/media-provider'
import { MediaFigure } from './media/media-figure'
import { NextProject } from './next-project'
import { ContactCTA } from './contact-cta'

export function Archive({ project }: { project: Project }) {
  const typeArchive = project.slug === 'lettering'
  const assets = project.archive.map((piece) => piece.asset)
  const hasPlaceholders = assets.some((asset) => !asset.media)

  return <MediaProvider key={project.slug} assets={assets}>
    <article className={`archive archive--${typeArchive ? 'type' : 'posters'}`}>
      <div className="shell">
        <header className="archive-header"><Link href="/work" className="back-link micro"><Arrow direction="left" />Work index</Link><div className="section-kicker micro"><span>{typeArchive ? 'A typographic archive' : 'An editorial poster archive'}</span><span>Portfolio edition / {profile.edition}</span></div><h1>{typeArchive ? <>Type /<br />Lettering</> : 'Posters'}</h1><div className="archive-introduction"><p>{project.introduction}</p><span className="micro">{typeArchive ? 'Letterforms / Studies / Figma' : 'Scale / Composition / Detail'}<br />Select a frame to open <Arrow /></span></div></header>
        {hasPlaceholders && <div className="documentation-note"><Plus /><span className="micro">An evolving archive</span><p>Reserved display spaces, ready for original artwork. Titles describe the intended format; unverified dates are left open.</p></div>}
        <div className="archive-gallery">{project.archive.map((piece, index) => <section className={`archive-piece archive-piece--${piece.scale}`} key={piece.asset.id} aria-labelledby={`${piece.asset.id}-title`}>
          <div className="piece-top micro"><span>{String(index + 1).padStart(2, '0')} / {piece.asset.media ? 'Selected piece' : 'Reserved display space'}</span><span>{piece.asset.media ? 'Open' : 'Media slot'}<Arrow /></span></div>
          <MediaFigure asset={piece.asset} index={index + 1} caption={false} priority={index === 0} />
          <div className="piece-caption"><h2 id={`${piece.asset.id}-title`}>{piece.asset.title}</h2><span className="micro">{assetDate(piece.asset)} / {piece.asset.medium}</span></div>
        </section>)}</div>
        <div className="archive-end"><span className="micro">An open-ended collection</span><p>{typeArchive ? 'More forms to find.' : 'Room for another composition.'}</p><span className="micro">End of this chapter</span></div>
        <NextProject slug={project.slug} />
      </div>
    </article>
    <ContactCTA prompt={typeArchive ? 'A typographic project in mind?' : 'Have a poster project?'} project={project.slug} />
  </MediaProvider>
}

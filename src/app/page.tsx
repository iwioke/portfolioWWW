import Link from 'next/link'
import { availabilityLabel, profile } from '@/content/profile'
import { publishedProjects } from '@/content/projects'
import { pageMetadata } from '@/lib/seo'
import { Arrow } from '@/components/icons'
import { ProjectEvent } from '@/components/project-event'
import { Practice } from '@/components/practice'
import { ContactCTA } from '@/components/contact-cta'
import { MediaFigure } from '@/components/media/media-figure'

export const metadata = pageMetadata('Graphic + Digital', '/')

export default function Home() {
  const featured = publishedProjects[0]
  return <>
    <section className="home-hero shell" aria-labelledby="home-title">
      <div className="hero-top micro"><span>Independent designer / Creative developer</span><span>Portfolio — {profile.edition}</span></div>
      <div className="hero-composition"><h1 id="home-title"><span>Graphic</span><span className="hero-second-line"><span className="hero-plus">+</span>Digital</span></h1><div className="hero-margin"><span className="micro">Identity<br />Interfaces<br />Type<br />Development</span><Link className="hero-feature" href={`/work/${featured.slug}`} aria-label={`Featured project: ${featured.title}`}><MediaFigure asset={featured.hero} interactive={false} caption={false} priority sizes="200px" /><span className="micro">01 / {featured.title}<Arrow /></span></Link></div></div>
      <div className="hero-bottom"><p>{profile.introduction}</p><a href="#selected-work" className="hero-scroll micro">Discover the work<Arrow direction="down" /></a><Link href="/contact" className="hero-availability micro"><span className={`status-dot status-dot--${profile.availability}`} />{availabilityLabel()}</Link></div>
    </section>
    <section id="selected-work" className="selected-work shell" aria-labelledby="selected-title"><div className="section-kicker"><h2 id="selected-title" className="micro">01 / Selected work</h2><span className="micro">Projects & visual archives / {String(publishedProjects.length).padStart(2, '0')}</span></div><div className="project-events">{publishedProjects.map((project, index) => <ProjectEvent key={project.slug} project={project} index={index} count={publishedProjects.length} />)}</div><Link href="/work" className="all-work-link"><span className="micro">See the complete index</span><span>All work<Arrow direction="right" /></span></Link></section>
    <div className="practice-band"><Practice /></div>
    <section className="home-info shell" aria-labelledby="home-info-title"><span className="micro">02 / The way I see it</span><h2 id="home-info-title">How it looks.<br />How it works.<br /><span>How it holds together.</span></h2><div><p>A visual identity, a poster, a website or a native application. I’m interested in the details that connect the whole thing.</p><Link href="/info" className="text-link micro">More about the practice<Arrow /></Link></div></section>
    <ContactCTA prompt="Have a project in mind?" />
  </>
}

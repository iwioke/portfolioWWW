import Link from 'next/link'
import { availabilityLabel, profile } from '@/content/profile'
import { Arrow } from './icons'

export function ContactCTA({ prompt = 'Have a project in mind?', project }: { prompt?: string; project?: string }) {
  return <section className="contact-cta" aria-labelledby="contact-cta-title"><div className="shell">
    <div className="cta-top micro"><span className="availability"><span className={`status-dot status-dot--${profile.availability}`} />{availabilityLabel()}</span><span>{prompt}</span></div>
    <Link href={project ? `/contact?project=${encodeURIComponent(project)}` : '/contact'} className="cta-composition"><h2 id="contact-cta-title">{profile.availability === 'closed' ? <>Keep in<br />touch.</> : <>Let’s<br />work.</>}</h2><div className="cta-action"><Arrow /><span className="micro">Contact</span></div></Link>
    <div className="cta-bottom micro"><span>Identity / Digital / Posters / Type</span>{profile.email && <a href={`mailto:${profile.email}`}>{profile.email}<Arrow /></a>}</div>
  </div></section>
}

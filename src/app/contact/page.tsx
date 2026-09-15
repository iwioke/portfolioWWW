import { availabilityLabel, profile } from '@/content/profile'
import { getProject } from '@/content/projects'
import { pageMetadata } from '@/lib/seo'
import { Arrow } from '@/components/icons'
import { CopyEmail } from '@/components/copy-email'

export const metadata = pageMetadata('Contact', '/contact', 'Contact IWIoke — Maxim Matsulevich — for visual identity, web design, digital products, posters, lettering and creative development.')

export default async function Contact({ searchParams }: { searchParams: Promise<{ project?: string | string[] }> }) {
  const query = (await searchParams).project
  const project = typeof query === 'string' ? getProject(query) : undefined
  const subject = project ? `Project enquiry — ${project.title}` : 'Project enquiry'

  return <div className="contact-page shell">
    <header className="contact-heading"><div className="section-kicker micro"><span>Contact / Have a project in mind?</span><span className="availability"><span className={`status-dot status-dot--${profile.availability}`} />{availabilityLabel()}</span></div><div className="contact-title"><h1>Let’s<br />talk.</h1><Arrow /></div></header>
    <section className="contact-email" aria-labelledby="email-title"><div><h2 id="email-title" className="micro">Email / Start here</h2><p>A few lines about what you’re making,<br />what you need and the timing.</p>{project && <p className="contact-context micro">In connection with / {project.title}</p>}</div><div className="contact-email-main">{profile.email ? <><a className="email-address" href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}`}>{profile.email}<Arrow /></a><div className="email-actions"><span className="micro">Opens your email app</span><CopyEmail email={profile.email} /></div></> : <p className="email-placeholder">[EMAIL TO BE PROVIDED]</p>}</div></section>
    <section className="contact-channels" aria-labelledby="channels-title"><h2 id="channels-title" className="micro">Elsewhere / Verified profiles</h2><div className="contact-channel-list">{profile.channels.map((channel) => <a key={channel.label} href={channel.href} target="_blank" rel="noopener noreferrer"><span>{channel.label}<span className="micro">{channel.name}</span></span><Arrow /></a>)}</div></section>
    <section className="contact-practice" aria-labelledby="contact-practice-title"><h2 id="contact-practice-title" className="micro">I work across</h2><p>Identity / Digital / Type<br />Posters / Web / Product</p><span className="micro">A conversation is a good place to start.</span></section>
  </div>
}

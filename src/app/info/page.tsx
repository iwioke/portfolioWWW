import Link from 'next/link'
import { availabilityLabel, profile } from '@/content/profile'
import { pageMetadata } from '@/lib/seo'
import { Arrow } from '@/components/icons'
import { Practice } from '@/components/practice'
import { ContactCTA } from '@/components/contact-cta'

export const metadata = pageMetadata('Info', '/info')

export default function Info() {
  return <>
    <div className="info-page shell"><header className="info-heading"><div className="section-kicker micro"><span>Info / The person behind the work</span><span>{profile.location}</span></div><h1>A practice,<br />not a box.</h1></header>
      <section className="info-introduction" aria-labelledby="info-name"><div className="info-identity"><h2 id="info-name">Maxim<br />Matsulevich</h2><span className="micro">Also known as IWIoke<br />Graphic + web designer</span><Link href="/contact" className="availability micro"><span className={`status-dot status-dot--${profile.availability}`} />{availabilityLabel()}</Link></div><div className="info-copy"><p className="info-lead">I work where graphic design meets the interface—from a visual identity or a poster to the code behind a digital product.</p><p>Based in Minsk, my practice connects identity, websites, posters, lettering and typography. I care about the relationships between the parts: how a mark works on a page, how type shapes a screen, how an interface feels in use.</p><p>Alongside design, I develop web interfaces with React and Next.js, and explore native macOS products with SwiftUI. Design and development inform each other.</p><Link href="/work" className="text-link micro">See it in the work<Arrow /></Link></div></section>
      <section className="toolkit" aria-labelledby="toolkit-title"><h2 id="toolkit-title" className="micro">Tools in the practice</h2><div className="toolkit-row"><h3>Design</h3><p>{profile.designTools.join(' / ')}</p></div><div className="toolkit-row"><h3>Development</h3><p>{profile.developmentTools.join(' / ')}</p></div></section>
    </div>
    <div className="practice-band"><Practice /></div>
    <section className="info-commissions shell"><span className="micro">Commissions & collaborations</span><p>Identity. Digital. Type. Print.<br />A focused piece or a connected system.</p><Link href="/contact" className="text-link micro">Contact me<Arrow /></Link></section>
    <ContactCTA prompt="A project for this practice?" />
  </>
}

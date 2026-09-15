import Link from 'next/link'
import { disciplines } from '@/content/profile'
import { Arrow } from './icons'

export function Practice() {
  return <section className="practice shell" aria-labelledby="practice-title">
    <div className="section-kicker micro"><span>The practice</span><span>Graphic / Digital / Development</span></div>
    <div className="practice-intro"><h2 id="practice-title">One practice.<br />Many formats.</h2><p>From a mark to an interface.<br />From a letterform to a working product.<br />Not separate disciplines. Connected decisions.</p></div>
    <div className="discipline-list">{disciplines.map((discipline, index) => <Link className="discipline" key={discipline.title} href={`/work?category=${discipline.category}`}><span className="micro">{String(index + 1).padStart(2, '0')}</span><span className="discipline-name">{discipline.title}</span><span className="discipline-detail micro">{discipline.detail}</span><Arrow /></Link>)}</div>
  </section>
}

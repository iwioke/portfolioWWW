import Link from 'next/link'
import { profile } from '@/content/profile'
import { Arrow } from './icons'

export function Footer() {
  return <footer className="site-footer"><div className="footer-inner shell"><Link className="footer-name" href="/">IWIoke<span className="micro">Maxim Matsulevich</span></Link><nav aria-label="Verified social profiles">{profile.channels.map((channel) => <a href={channel.href} key={channel.label} target="_blank" rel="noopener noreferrer">{channel.label}<Arrow /></a>)}</nav><span className="micro">© {profile.edition}<br />{profile.location}</span></div></footer>
}

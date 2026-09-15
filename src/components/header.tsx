'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { availabilityLabel, profile } from '@/content/profile'
import { Dialog } from './dialog'
import { Arrow, Close, Plus } from './icons'

const navigation = [{ href: '/work', label: 'Work' }, { href: '/info', label: 'Info' }, { href: '/contact', label: 'Contact' }]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 801px)')
    const change = () => { if (desktop.matches) closeMenu() }
    desktop.addEventListener('change', change)
    return () => desktop.removeEventListener('change', change)
  }, [closeMenu])

  return (
    <>
      <header className="site-header">
        <div className="header-inner shell">
          <Link href="/" className="wordmark" aria-label="IWIoke — home">IWIoke</Link>
          <span className="header-descriptor micro">Graphic + web designer<br />Portfolio / {profile.edition}</span>
          <nav className="desktop-navigation" aria-label="Primary navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? 'page' : undefined}>{item.label}{item.href === '/contact' && <Arrow />}</Link>)}
          </nav>
          <Link href="/contact" className="header-availability micro"><span className={`status-dot status-dot--${profile.availability}`} />{availabilityLabel()}</Link>
          <Link href="/contact" className="mobile-contact micro">Contact <Arrow /></Link>
          <button tabIndex={0} className="menu-toggle micro" aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={(event) => { event.currentTarget.focus({ preventScroll: true }); setMenuOpen(true) }}>Menu <Plus /></button>
        </div>
      </header>
      <Dialog id="mobile-navigation" open={menuOpen} onClose={closeMenu} titleId="navigation-title" className="mobile-menu">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top"><span className="wordmark">IWIoke</span><button tabIndex={0} className="text-control micro" onClick={closeMenu} data-modal-close>Close <Close /></button></div>
          <h2 id="navigation-title" className="micro">The index / {profile.edition}</h2>
          <nav aria-label="Mobile navigation">{navigation.map((item, index) => <Link key={item.href} href={item.href} tabIndex={0} onClick={closeMenu} aria-current={pathname.startsWith(item.href) ? 'page' : undefined}><span className="micro">0{index + 1}</span>{item.label}<Arrow /></Link>)}</nav>
          <div className="mobile-menu-bottom"><span className="micro availability"><span className={`status-dot status-dot--${profile.availability}`} />{availabilityLabel()}</span>{profile.email && <a tabIndex={0} href={`mailto:${profile.email}`}>{profile.email} <Arrow /></a>}<span className="micro">{profile.location}</span></div>
        </div>
      </Dialog>
    </>
  )
}

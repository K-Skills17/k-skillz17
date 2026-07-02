'use client'

import { useState } from 'react'

const BOOKING_LINK = '{{BOOKING_LINK}}'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#contact', label: 'Contact' },
  ]

  const close = () => setOpen(false)

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <a href="#" className="nav-logo" onClick={close}>
          Stephen Komando
        </a>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href={BOOKING_LINK}
              className="btn btn-primary nav-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav-mobile" id="mobile-menu">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>{l.label}</a>
              </li>
            ))}
            <li>
              <a
                href={BOOKING_LINK}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const primaryLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/qualifications', label: 'Qualifications' },
  { to: '/research', label: 'Research', kind: 'Scholarship' },
]

const moreLinks = [
  { to: '/austrianprocess', label: 'Austrian Process', kind: 'Applied Philosophy' },
  { to: '/mannheim-capital', label: 'Mannheim Capital', kind: 'Venture' },
  { to: '/consulting', label: 'Consulting', kind: 'Engagement' },
  { to: '/ibbi-valuation', label: 'IBBI Valuation', kind: 'Practice' },
  { to: '/teaching', label: 'Teaching', kind: 'Academia' },
  { to: '/continuous-learning', label: 'Continuous Learning' },
  { to: '/tech-stack', label: 'Tech Stack' },
]

const allLinks = [...primaryLinks, ...moreLinks]

function NavItem({ link }) {
  return (
    <li key={link.to}>
      <NavLink
        to={link.to}
        end={link.end}
        title={link.kind}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
      >
        {link.label}
      </NavLink>
    </li>
  )
}

function MoreMenu() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const location = useLocation()
  const isActive = moreLinks.some((link) => link.to === location.pathname)

  useEffect(() => {
    if (!open) return undefined
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false)
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <li className="site-nav__more" ref={containerRef}>
      <button
        type="button"
        className={isActive ? 'active' : undefined}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        More
      </button>
      {open ? (
        <ul className="site-nav__more-menu">
          {moreLinks.map((link) => (
            <NavItem link={link} key={link.to} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

function MobileToggle({ open, onToggle }) {
  return (
    <button
      type="button"
      className="site-nav__toggle"
      aria-expanded={open}
      aria-controls="site-nav-drawer"
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        {open ? (
          <path
            d="M5 5l12 12M17 5L5 17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        ) : (
          <path
            d="M3 6h16M3 11h16M3 16h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )}
      </svg>
    </button>
  )
}

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setDrawerOpen(false)
  }, [location.pathname])

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <NavLink to="/" className="site-nav__name">
          Ashok M
        </NavLink>
        <ul className="site-nav__links">
          {primaryLinks.map((link) => (
            <NavItem link={link} key={link.to} />
          ))}
          <MoreMenu />
        </ul>
        <MobileToggle open={drawerOpen} onToggle={() => setDrawerOpen((v) => !v)} />
      </div>
      {drawerOpen ? (
        <ul className="site-nav__drawer" id="site-nav-drawer">
          {allLinks.map((link) => (
            <NavItem link={link} key={link.to} />
          ))}
        </ul>
      ) : null}
    </nav>
  )
}

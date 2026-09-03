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

export default function Nav() {
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
      </div>
    </nav>
  )
}

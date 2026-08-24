import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/qualifications', label: 'Qualifications' },
  { to: '/research', label: 'Research', kind: 'Scholarship' },
  { to: '/austrianprocess', label: 'Austrian Process', kind: 'Applied Philosophy' },
  { to: '/mannheim-capital', label: 'Mannheim Capital', kind: 'Venture' },
  { to: '/consulting', label: 'Consulting', kind: 'Engagement' },
  { to: '/ibbi-valuation', label: 'IBBI Valuation', kind: 'Credential' },
  { to: '/teaching', label: 'Teaching', kind: 'Academia' },
  { to: '/continuous-learning', label: 'Continuous Learning' },
  { to: '/tech-stack', label: 'Tech Stack' },
]

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <NavLink to="/" className="site-nav__name">
          Ashok M
        </NavLink>
        <ul className="site-nav__links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                <span className="site-nav__label">{link.label}</span>
                {link.kind ? <span className="site-nav__kind">{link.kind}</span> : null}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

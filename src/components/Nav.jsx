import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/experience', label: 'Experience' },
  { to: '/qualifications', label: 'Qualifications' },
  { to: '/research', label: 'Research', kind: 'Scholarship' },
  { to: '/austrianprocess', label: 'Austrian Process', kind: 'Applied Philosophy' },
  { to: '/mannheim-capital', label: 'Mannheim Capital', kind: 'Venture' },
  { to: '/consulting', label: 'Consulting', kind: 'Engagement' },
  { to: '/ibbi-valuation', label: 'IBBI Valuation', kind: 'Practice' },
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
                title={link.kind}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

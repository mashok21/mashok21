import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/qualifications', label: 'Qualifications' },
  { to: '/research', label: 'Research' },
  { to: '/austrianprocess', label: 'Austrian Process' },
  { to: '/mannheim-capital', label: 'Mannheim Capital' },
  { to: '/ibbi-valuation', label: 'IBBI Valuation' },
  { to: '/tech-stack', label: 'Tech Stack' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/continuous-learning', label: 'Continuous Learning' },
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
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

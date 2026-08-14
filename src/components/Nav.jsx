import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/continuous-learning', label: 'Continuous Learning' },
  { to: '/research', label: 'Research' },
  { to: '/austrianprocess', label: 'austrianprocess.com' },
  { to: '/mannheim-capital', label: 'Mannheim Capital' },
  { to: '/teaching', label: 'Teaching' },
  { to: '/writing', label: 'Writing' },
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

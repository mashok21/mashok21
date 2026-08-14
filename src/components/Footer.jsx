import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>&copy; {year} Ashok M</span>
        <span style={{ display: 'flex', gap: '1.25rem' }}>
          <Link to="/mannheim-capital">Mannheim Capital</Link>
          <a href="https://www.linkedin.com/in/ashokm-ca-cfa" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  )
}

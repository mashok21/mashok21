export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>&copy; {year} Ashok M</span>
        <span style={{ display: 'flex', gap: '1.25rem' }}>
          <a href="https://mannheimcapital.com" target="_blank" rel="noreferrer">
            Mannheim Capital
          </a>
          <a href="https://www.linkedin.com/in/ashokm-ca-cfa" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  )
}

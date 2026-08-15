import ExternalLink from './ExternalLink'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>&copy; {year} Ashok M</span>
        <span style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          <ExternalLink href="https://mannheimcapital.com">Mannheim Capital</ExternalLink>
          <ExternalLink href="https://www.austrianprocess.com">Austrian Process</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/ashokm-ca-cfa">LinkedIn</ExternalLink>
          <span>ashok.21aug [at] gmail [dot] com</span>
        </span>
      </div>
    </footer>
  )
}

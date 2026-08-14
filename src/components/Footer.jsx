export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>&copy; {year} Ashok M</span>
        <a href="https://www.linkedin.com/in/ashokm-ca-cfa" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

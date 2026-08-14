import { interests } from '../data/home'
import ExternalLink from '../components/ExternalLink'

export default function Home() {
  return (
    <div className="page home-hero">
      <div className="container">
        <img
          src="/images/ashok-headshot.jpg"
          alt="Ashok M"
          className="home-hero__avatar"
        />
        <p className="eyebrow">Bengaluru, India</p>
        <h1>Ashok M</h1>
        <p className="home-hero__bio">
          Ashok M is a research economist working at the intersection of economic theory and
          capital markets. He runs Mannheim Capital, a boutique wealth practice in Bengaluru. It
          offers mutual fund distribution and IBBI-registered valuation services for securities
          and financial assets. He also produces independent macro research on Indian capital
          markets through an Austrian capital theory lens. He teaches statistics, managerial
          economics and ethics in finance to MBA and executive students in Bengaluru.
        </p>
        <div className="action-row">
          <ExternalLink className="btn" href="https://www.linkedin.com/in/ashokm-ca-cfa">
            LinkedIn
          </ExternalLink>
          <a className="btn btn--gold" href="/cv/Ashok-M-CV.pdf" download>
            Download CV
          </a>
        </div>

        <p className="home-hero__interests">
          {interests.join(' · ')}
        </p>
      </div>
    </div>
  )
}

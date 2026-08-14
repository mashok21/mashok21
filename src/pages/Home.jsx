import { interests } from '../data/home'
import ExternalLink from '../components/ExternalLink'
import EntryList from '../components/EntryList'
import Section from '../components/Section'

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <img
          src="/images/ashok-headshot.jpg"
          alt="Ashok M"
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--gold)',
            marginBottom: '1rem',
          }}
        />
        <p className="eyebrow">Bengaluru, India</p>
        <h1>Ashok M</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '38rem' }}>
          Ashok M is a research economist working at the intersection of economic theory and
          capital markets. He runs Mannheim Capital, a boutique wealth practice in Bengaluru,
          offering mutual fund distribution. He also provides IBBI-registered valuation services
          for securities and financial assets. Separately, he produces independent macro research
          on Indian capital markets through an Austrian capital theory lens. He teaches statistics,
          managerial economics and ethics in finance to MBA and executive students in Bengaluru.
        </p>
        <div className="action-row">
          <ExternalLink className="btn" href="https://www.linkedin.com/in/ashokm-ca-cfa">
            LinkedIn
          </ExternalLink>
          <a className="btn btn--gold" href="/cv/Ashok-M-CV.pdf" download>
            Download CV
          </a>
        </div>

        <Section title="Interests" style={{ marginTop: '3rem' }}>
          <EntryList items={interests} itemKey={(item) => item}>
            {(item) => item}
          </EntryList>
        </Section>
      </div>
    </div>
  )
}

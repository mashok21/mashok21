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
          Ashok M works at the intersection of economic theory and capital markets – through
          independent macro research, a boutique valuation and wealth advisory practice (Mannheim
          Capital), and teaching at Bengaluru business schools.
        </p>
        <div className="action-row">
          <ExternalLink className="btn btn--linkedin" href="https://www.linkedin.com/in/ashokm-ca-cfa">
            <span>Connect on</span>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
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

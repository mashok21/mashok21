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
          Ashok M works at the intersection of economic theory and capital markets. His work spans
          independent macro research, a boutique valuation and wealth advisory practice (Mannheim
          Capital), and teaching at Bengaluru business schools.
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

import { Link } from 'react-router-dom'
import { interests } from '../data/home'
import ExternalLink from '../components/ExternalLink'
import EntryList from '../components/EntryList'
import Section from '../components/Section'
import usePageMeta from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    null,
    'Ashok M — Research economist, investment practitioner, and educator. CFA, FCA, PhD scholar in Economics.'
  )

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

        <p className="text-muted page-intro" style={{ marginTop: '1.5rem' }}>
          Currently building <Link to="/austrianprocess">Austrian Process</Link>, an interactive
          platform that turns Austrian capital theory into hands-on tools: a live model of capital
          structure, real interest-rate data, and a research assistant grounded in primary texts.
        </p>

        <Section title="Interests" style={{ marginTop: '3rem' }}>
          <EntryList items={interests} itemKey={(item) => item}>
            {(item) => item}
          </EntryList>
        </Section>
      </div>
    </div>
  )
}

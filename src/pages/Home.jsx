import { Link } from 'react-router-dom'
import { interests } from '../data/home'
import { publications, presentations } from '../data/research'
import ExternalLink from '../components/ExternalLink'
import EntryList from '../components/EntryList'
import Section from '../components/Section'
import { usePageMetaForRoute } from '../hooks/usePageMeta'

// Counts come from research.js so the strip cannot drift from the Research
// page; the rest restate facts already on /qualifications and /experience.
const highlights = [
  `${publications.length} journal publications on Austrian economics (2025)`,
  `${presentations.length} international conference presentations (2025)`,
  'CFA Charterholder (2011) and Fellow Chartered Accountant, All-India Rank 45 in the ICAI Professional Education Examination-II (May 2003)',
  'Mannheim Capital serves 100 high-net-worth families as their independent mutual fund distributor and financial planner',
  'Twenty years in equity research, wealth management, investment banking and corporate finance',
]

export default function Home() {
  usePageMetaForRoute('/')

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
          Capital), and teaching at Bengaluru business schools as a Professor-of-Practice–style
          educator.
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

        <Section title="Selected achievements" style={{ marginTop: '3rem' }}>
          <EntryList items={highlights} itemKey={(item) => item}>
            {(item) => item}
          </EntryList>
        </Section>

        <Section title="Interests" style={{ marginTop: '3rem' }}>
          <EntryList items={interests} itemKey={(item) => item}>
            {(item) => item}
          </EntryList>
        </Section>
      </div>
    </div>
  )
}

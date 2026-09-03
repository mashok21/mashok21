import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import { mannheimArticles } from '../data/mannheimWriting'
import { usePageMetaForRoute } from '../hooks/usePageMeta'

// Kept deliberately to a practice description plus a link-out to the
// practice's own writing, not a sales page. Mannheim Capital is a live
// regulated advisory business, not a portfolio project.
export default function MannheimCapital() {
  usePageMetaForRoute('/mannheim-capital')

  return (
    <div className="page">
      <div className="container">
        <img
          src="/images/ashok-headshot.jpg"
          alt="Ashok M"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--gold)',
            marginBottom: '1rem',
          }}
        />
        <SectionHeader
          eyebrow="Venture"
          title="Mannheim Capital"
          intro="A boutique wealth practice in Bengaluru, built on capital stewardship aligned with time, not prediction or market timing."
        />
        <p
          className="text-muted"
          style={{ fontStyle: 'italic', letterSpacing: '0.02em', marginTop: '-1rem' }}
        >
          Structured. Enduring. Measured.
        </p>

        <Section title="Practice">
          <p>
            The practice is for investors who have moved past the noise and want one trusted
            relationship to bring order to their financial life. It offers mutual fund
            distribution alongside portfolio construction and macro-driven asset allocation for
            high-net-worth clients. Separately, it also covers IBBI-registered valuation of
            securities and financial assets, detailed on its own{' '}
            <Link to="/ibbi-valuation">page</Link>.
          </p>
        </Section>

        <Section title="Writing">
          <EntryList items={mannheimArticles} itemKey={(article) => article.url}>
            {(article) => (
              <>
                <ExternalLink href={article.url}>
                  <span className="entry__title">{article.title}</span>
                </ExternalLink>
                <span className="entry__meta">{article.date}</span>
              </>
            )}
          </EntryList>
        </Section>

        <div className="action-row">
          <ExternalLink className="btn" href="https://mannheimcapital.com">
            mannheimcapital.com
          </ExternalLink>
        </div>
      </div>
    </div>
  )
}

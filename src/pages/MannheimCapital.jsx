import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import Recommendations from '../components/Recommendations'
import { mannheimArticles } from '../data/mannheimWriting'
import { clientRecommendations } from '../data/recommendations'
import { usePageMetaForRoute } from '../hooks/usePageMeta'

// Kept deliberately to a practice description plus a link-out to the
// practice's own writing, not a sales page. Mannheim Capital is a live
// regulated mutual fund distribution business, not a portfolio project.
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
          intro="A boutique mutual fund distribution practice in Bengaluru, built on capital stewardship aligned with time, not prediction or market timing."
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
            relationship to bring order to their financial life. It distributes mutual funds to
            high-net-worth clients, and any guidance it gives is incidental to that distribution.
          </p>
        </Section>

        <Section title="What clients say">
          <Recommendations items={clientRecommendations} />
          <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '1rem' }}>
            As published on <ExternalLink href="https://mannheimcapital.com/services">mannheimcapital.com</ExternalLink>.
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

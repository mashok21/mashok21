import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import { mannheimArticles } from '../data/mannheimWriting'

export default function MannheimCapital() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Practice"
          title="Mannheim Capital"
          intro="A boutique mutual fund distribution practice in Bengaluru. It also offers IBBI-registered valuation services for securities and financial assets. The practice is built on capital stewardship aligned with time, not prediction or market timing."
        />

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

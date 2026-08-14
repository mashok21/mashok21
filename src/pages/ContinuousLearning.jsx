import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import { certificationGroups } from '../data/certifications'

export default function ContinuousLearning() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Continuous Learning"
          title="Ongoing training and credentials"
          intro="Organized by theme, not by date. Certifications and coursework that feed directly into research, teaching or the tools used to build things."
        />

        {certificationGroups.map((group) => (
          <Section title={group.theme} key={group.theme}>
            <EntryList items={group.entries}>
              {(entry) => (
                <>
                  <span className="entry__title">{entry.title}</span>
                  <span className="entry__meta">
                    {entry.url ? (
                      <ExternalLink href={entry.url}>{entry.issuer}</ExternalLink>
                    ) : (
                      entry.issuer
                    )}
                    , {entry.date}
                  </span>
                  <div className="entry__note">{entry.note}</div>
                </>
              )}
            </EntryList>
          </Section>
        ))}
      </div>
    </div>
  )
}

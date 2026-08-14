import SectionHeader from '../components/SectionHeader'
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
          <section className="entry-group" key={group.theme}>
            <h2 className="entry-group__title">{group.theme}</h2>
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
          </section>
        ))}
      </div>
    </div>
  )
}

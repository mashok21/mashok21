import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import { phd, publications, presentations } from '../data/research'
import usePageMeta from '../hooks/usePageMeta'

export default function Research() {
  usePageMeta(
    'Research',
    'Doctoral work in Economics, journal publications and conference presentations.'
  )

  return (
    <div className="page">
      <div className="container">
        <SectionHeader eyebrow="Scholarship" title="Doctoral work, publications and presentations" />

        <Section title="PhD progress">
          <p>
            <strong>{phd.degree}</strong>
            <br />
            <span className="text-muted">
              {phd.institution} &middot; {phd.status}
            </span>
          </p>
          <p>{phd.description}</p>
        </Section>

        <Section title="Journal articles">
          {publications.map((pub) => (
            <div className="citation" key={pub.citation}>
              <p>
                {pub.citation}
                {pub.url && (
                  <>
                    {' '}
                    <ExternalLink href={pub.url}>{pub.url}</ExternalLink>
                  </>
                )}
              </p>
              <p className="text-muted">{pub.note}</p>
            </div>
          ))}
        </Section>

        <Section title="Conference presentations">
          <EntryList items={presentations}>
            {(item) => (
              <>
                <span className="entry__title">{item.title}</span>
                <span className="entry__meta">{item.date}</span>
                <div className="entry__note">
                  {item.venue}. {item.description}
                </div>
              </>
            )}
          </EntryList>
        </Section>
      </div>
    </div>
  )
}

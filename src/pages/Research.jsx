import SectionHeader from '../components/SectionHeader'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import { phd, publications, presentations, honors } from '../data/research'

export default function Research() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader eyebrow="Research" title="Doctoral work, publications and presentations" />

        <section className="entry-group">
          <h2 className="entry-group__title">PhD progress</h2>
          <p>
            <strong>{phd.degree}</strong>
            <br />
            <span className="text-muted">
              {phd.institution} &middot; {phd.status}
            </span>
          </p>
          <p>{phd.description}</p>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Journal articles</h2>
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
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Conference presentations</h2>
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
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Honors and awards</h2>
          <EntryList items={honors}>
            {(item) => (
              <>
                <span className="entry__title">{item.title}</span>
                <span className="entry__meta">{item.date}</span>
                <div className="entry__note">{item.issuer}</div>
                <p className="text-muted">{item.description}</p>
              </>
            )}
          </EntryList>
        </section>
      </div>
    </div>
  )
}

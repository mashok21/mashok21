import SectionHeader from '../components/SectionHeader'
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
                    <a href={pub.url} target="_blank" rel="noopener noreferrer">
                      {pub.url}
                    </a>
                  </>
                )}
              </p>
              <p className="text-muted">{pub.note}</p>
            </div>
          ))}
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Conference presentations</h2>
          <ul className="entry-list">
            {presentations.map((item) => (
              <li className="entry" key={item.title}>
                <span className="entry__title">{item.title}</span>
                <span className="entry__meta">{item.date}</span>
                <div className="entry__note">
                  {item.venue}. {item.description}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Honors and awards</h2>
          <ul className="entry-list">
            {honors.map((item) => (
              <li className="entry" key={item.title}>
                <span className="entry__title">{item.title}</span>
                <span className="entry__meta">{item.date}</span>
                <div className="entry__note">{item.issuer}</div>
                <p className="text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

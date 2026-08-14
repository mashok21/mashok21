import SectionHeader from '../components/SectionHeader'
import EntryList from '../components/EntryList'
import { qualifications, honors } from '../data/qualifications'
import { education } from '../data/education'

export default function Qualifications() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Background"
          title="Qualifications, education and honors"
        />

        <section className="entry-group">
          <h2 className="entry-group__title">Qualifications</h2>
          <EntryList items={qualifications}>
            {(q) => (
              <>
                <span className="entry__title">{q.title}</span>
                <span className="entry__meta">{q.meta}</span>
              </>
            )}
          </EntryList>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Education</h2>
          <EntryList items={education} itemKey={(item) => item.degree}>
            {(item) => (
              <>
                <span className="entry__title">{item.degree}</span>
                <span className="entry__meta">
                  {item.institution}
                  {item.period ? ` · ${item.period}` : ''}
                </span>
              </>
            )}
          </EntryList>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Honors</h2>
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

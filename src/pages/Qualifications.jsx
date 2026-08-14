import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
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

        <Section title="Qualifications">
          <EntryList items={qualifications}>
            {(q) => (
              <>
                <span className="entry__title">{q.title}</span>
                <span className="entry__meta">{q.meta}</span>
              </>
            )}
          </EntryList>
        </Section>

        <Section title="Education">
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
        </Section>

        <Section title="Honors">
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
        </Section>
      </div>
    </div>
  )
}

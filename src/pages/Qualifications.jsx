import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import EntryGroupTree from '../components/EntryGroupTree'
import ExternalLink from '../components/ExternalLink'
import { qualifications } from '../data/qualifications'
import { educationTree } from '../data/education'

export default function Qualifications() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Background"
          title="Qualifications, education and honors"
        />

        <Section title="Professional Qualifications">
          <EntryList items={qualifications}>
            {(q) => (
              <>
                <span className="entry__title">
                  {q.path ? <Link to={q.path}>{q.title}</Link> : q.title}
                </span>
                <span className="entry__meta">
                  {q.url ? <ExternalLink href={q.url}>{q.meta}</ExternalLink> : q.meta}
                </span>
                {q.note ? <div className="entry__note">{q.note}</div> : null}
              </>
            )}
          </EntryList>
        </Section>

        <EntryGroupTree group={educationTree} />
      </div>
    </div>
  )
}

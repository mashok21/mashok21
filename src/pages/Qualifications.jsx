import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import EntryGroupTree from '../components/EntryGroupTree'
import ExternalLink from '../components/ExternalLink'
import { qualifications } from '../data/qualifications'
import { educationTree } from '../data/education'
import usePageMeta from '../hooks/usePageMeta'

export default function Qualifications() {
  usePageMeta(
    'Qualifications',
    'CFA Charterholder, Fellow Chartered Accountant and IBBI Registered Valuer, plus education from a PhD in progress through school.'
  )

  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Background"
          title="Qualifications, education and honors"
        />

        <Section title="Professional Qualifications">
          <div className="credentials-list">
            <EntryList items={qualifications}>
              {(q) => (
                <>
                  {q.logo ? (
                    <span className="entry__logo-wrap">
                      <img className="entry__logo" src={q.logo} alt={`${q.meta} logo`} />
                    </span>
                  ) : null}
                  <div className="entry__body">
                    <div className="entry__title">
                      {q.path ? <Link to={q.path}>{q.title}</Link> : q.title}
                    </div>
                    <div className="entry__meta">
                      {q.url ? <ExternalLink href={q.url}>{q.meta}</ExternalLink> : q.meta}
                    </div>
                    {q.note ? <div className="entry__note">{q.note}</div> : null}
                  </div>
                </>
              )}
            </EntryList>
          </div>
        </Section>

        <EntryGroupTree group={educationTree} />
      </div>
    </div>
  )
}

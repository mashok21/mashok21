import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import EntryList from '../components/EntryList'
import { experienceGroups } from '../data/experience'

function RoleGroup({ group }) {
  return (
    <section className="entry-tree">
      <h2 className="entry-tree__title">{group.theme}</h2>
      <div className="entry-tree__branches">
        <EntryList items={group.roles} itemKey={(role) => `${role.title}-${role.employer}`}>
          {(role) => (
            <>
              <span className="entry__title">
                {role.path ? <Link to={role.path}>{role.title}</Link> : role.title}
              </span>
              <span className="entry__meta">{role.period}</span>
              <div className="entry__note">
                <strong>{role.employer}</strong>
                {role.location ? ` · ${role.location}` : ''}. {role.description}
              </div>
            </>
          )}
        </EntryList>
      </div>
    </section>
  )
}

export default function Experience() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Background"
          title="Work history and industry experience"
          intro="Twenty years in financial markets, including equity research, wealth management, investment banking and corporate-finance leadership. It began with an early foundation in audit, before returning to independent research and practice."
        />
        {experienceGroups.map((group) => (
          <RoleGroup group={group} key={group.theme} />
        ))}

        <p
          className="text-muted"
          style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--space-2)' }}
        >
          Concurrently, since April 2014, I've run independent practice:{' '}
          <Link to="/mannheim-capital">Mannheim Capital</Link>, a boutique wealth practice, and,
          since 2021, IBBI-registered valuation work through{' '}
          <Link to="/ibbi-valuation">capadvisors.in</Link>.
        </p>
      </div>
    </div>
  )
}

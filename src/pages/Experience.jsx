import SectionHeader from '../components/SectionHeader'
import EntryList from '../components/EntryList'
import PositionRow from '../components/PositionRow'
import { experienceGroups } from '../data/experience'
import { usePageMetaForRoute } from '../hooks/usePageMeta'

function RoleGroup({ group }) {
  return (
    <section className="entry-tree">
      <h2 className="entry-tree__title">{group.theme}</h2>
      <div className="entry-tree__branches">
        <EntryList items={group.roles} itemKey={(role) => `${role.title}-${role.employer}`}>
          {(role) => (
            <PositionRow
              title={role.title}
              path={role.path}
              institution={role.employer}
              location={role.location}
              period={role.period}
              description={role.description}
            />
          )}
        </EntryList>
      </div>
    </section>
  )
}

export default function Experience() {
  usePageMetaForRoute('/experience')

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
      </div>
    </div>
  )
}

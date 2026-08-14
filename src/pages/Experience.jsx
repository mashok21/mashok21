import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import { experienceRoles } from '../data/experience'

function RoleList({ roles, label }) {
  if (roles.length === 0) return null
  return (
    <Section title={label}>
      <EntryList items={roles} itemKey={(role) => `${role.title}-${role.employer}`}>
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
    </Section>
  )
}

export default function Experience() {
  const current = experienceRoles.filter((r) => r.status === 'current')
  const past = experienceRoles.filter((r) => r.status === 'past')

  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Background"
          title="Work history and industry experience"
          intro="Twenty years across audit, equity research, wealth management, investment banking and corporate finance, before returning to independent research and practice."
        />
        <RoleList roles={current} label="Current" />
        <RoleList roles={past} label="Past" />
      </div>
    </div>
  )
}

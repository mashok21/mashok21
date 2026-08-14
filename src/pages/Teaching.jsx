import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import { pedagogyNote, teachingRoles } from '../data/teaching'

function RoleList({ roles, label }) {
  if (roles.length === 0) return null
  return (
    <Section title={label}>
      <EntryList items={roles}>
        {(role) => (
          <>
            <span className="entry__title">{role.title}</span>
            <span className="entry__meta">{role.period}</span>
            <div className="entry__note">
              <strong>{role.institution}</strong>. {role.description}
            </div>
          </>
        )}
      </EntryList>
    </Section>
  )
}

export default function Teaching() {
  const current = teachingRoles.filter((r) => r.status === 'current')
  const past = teachingRoles.filter((r) => r.status === 'past')

  return (
    <div className="page">
      <div className="container">
        <SectionHeader eyebrow="Teaching" title="Current and past teaching roles" intro={pedagogyNote} />
        <RoleList roles={current} label="Current" />
        <RoleList roles={past} label="Past" />
      </div>
    </div>
  )
}

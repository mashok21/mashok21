import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import { pedagogyNote, teachingRoles, talks } from '../data/teaching'

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

function TalkList({ items }) {
  if (items.length === 0) return null
  return (
    <Section title="Talks & Invited Sessions">
      <EntryList items={items} itemKey={(talk) => `${talk.title}-${talk.venue}`}>
        {(talk) => (
          <>
            <span className="entry__title">
              {talk.url ? (
                <ExternalLink href={talk.url}>{talk.title}</ExternalLink>
              ) : (
                talk.title
              )}
            </span>
            <span className="entry__meta">{talk.date}</span>
            <div className="entry__note">
              <strong>{talk.venue}</strong>. {talk.description}
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
        <TalkList items={talks} />
      </div>
    </div>
  )
}

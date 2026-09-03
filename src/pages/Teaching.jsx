import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import EntryGroupTree from '../components/EntryGroupTree'
import ExternalLink from '../components/ExternalLink'
import { pedagogyNote, teachingRoles, talks } from '../data/teaching'
import usePageMeta from '../hooks/usePageMeta'

// Groups past roles by their start year (first 4-digit year found in the
// period string) so the Past section reads as a tree, most recent year
// first, rather than one long flat list.
function groupPastRolesByYear(roles) {
  const groups = []
  for (const role of roles) {
    const year = role.period.match(/\d{4}/)?.[0] ?? role.period
    let group = groups.find((g) => g.theme === year)
    if (!group) {
      group = { theme: year, entries: [] }
      groups.push(group)
    }
    group.entries.push({
      title: role.title,
      issuer: role.institution,
      date: role.period,
      note: role.description,
    })
  }
  return groups.sort((a, b) => b.theme.localeCompare(a.theme))
}

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
  usePageMeta('Teaching', pedagogyNote)

  const current = teachingRoles.filter((r) => r.status === 'current')
  const past = teachingRoles.filter((r) => r.status === 'past')
  const pastTree = { theme: 'Past', subgroups: groupPastRolesByYear(past) }

  return (
    <div className="page">
      <div className="container">
        <SectionHeader eyebrow="Academia" title="Current and past teaching roles" intro={pedagogyNote} />
        <RoleList roles={current} label="Current" />
        {past.length > 0 ? <EntryGroupTree group={pastTree} /> : null}
        <TalkList items={talks} />
      </div>
    </div>
  )
}

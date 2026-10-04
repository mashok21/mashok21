import Section from './Section'
import EntryList from './EntryList'
import ExternalLink from './ExternalLink'

function EntryRow(entry) {
  return (
    <>
      <span className="entry__title">{entry.title}</span>
      <span className="entry__meta">
        {entry.url ? <ExternalLink href={entry.url}>{entry.issuer}</ExternalLink> : entry.issuer}
        {entry.date ? <>, {entry.date === 'In progress' ? <em>{entry.date}</em> : entry.date}</> : null}
      </span>
      <div className="entry__note">{entry.note}</div>
      {entry.certificateUrl ? (
        <div className="entry__note">
          <ExternalLink href={entry.certificateUrl}>View the certificate (PDF)</ExternalLink>
        </div>
      ) : null}
    </>
  )
}

// Renders a certification group at any nesting depth: a leaf group (has
// `entries`) becomes a heading + EntryList; a branch group (has
// `subgroups`) becomes a heading + note followed by its children, indented
// as a tree. Heading level increases with depth so nesting is legible.
// `renderEntry` overrides the default issuer/date row (e.g. PositionRow,
// for a group whose entries are positions rather than credentials) and is
// threaded through recursive calls so it applies at every depth.
export default function EntryGroupTree({ group, depth = 0, renderEntry = EntryRow }) {
  const level = Math.min(2 + depth, 6)
  const branchStyle =
    group.color || group.gradient
      ? {
          ...(group.color ? { '--branch-color': group.color } : null),
          ...(group.gradient ? { '--branch-gradient': group.gradient } : null),
        }
      : undefined

  if (group.subgroups) {
    const Heading = `h${level}`
    return (
      <section className="entry-tree" style={branchStyle}>
        <Heading className="entry-tree__title">{group.theme}</Heading>
        {group.note ? <p className="text-muted entry-tree__note">{group.note}</p> : null}
        <div className="entry-tree__branches">
          {group.subgroups.map((subgroup) => (
            <EntryGroupTree
              group={subgroup}
              depth={depth + 1}
              renderEntry={renderEntry}
              key={subgroup.theme}
            />
          ))}
        </div>
      </section>
    )
  }

  return (
    <Section title={group.theme} level={level} style={branchStyle}>
      <EntryList items={group.entries}>{renderEntry}</EntryList>
    </Section>
  )
}

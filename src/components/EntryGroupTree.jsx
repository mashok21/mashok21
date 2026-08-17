import Section from './Section'
import EntryList from './EntryList'
import ExternalLink from './ExternalLink'

function EntryRow(entry) {
  return (
    <>
      <span className="entry__title">{entry.title}</span>
      <span className="entry__meta">
        {entry.url ? <ExternalLink href={entry.url}>{entry.issuer}</ExternalLink> : entry.issuer}, {entry.date}
      </span>
      <div className="entry__note">{entry.note}</div>
    </>
  )
}

// Renders a certification group at any nesting depth: a leaf group (has
// `entries`) becomes a heading + EntryList; a branch group (has
// `subgroups`) becomes a heading + note followed by its children, indented
// as a tree. Heading level increases with depth so nesting is legible.
export default function EntryGroupTree({ group, depth = 0 }) {
  const level = Math.min(2 + depth, 6)

  if (group.subgroups) {
    const Heading = `h${level}`
    return (
      <section className="entry-tree">
        <Heading className="entry-tree__title">{group.theme}</Heading>
        {group.note ? <p className="text-muted entry-tree__note">{group.note}</p> : null}
        <div className="entry-tree__branches">
          {group.subgroups.map((subgroup) => (
            <EntryGroupTree group={subgroup} depth={depth + 1} key={subgroup.theme} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <Section title={group.theme} level={level}>
      <EntryList items={group.entries}>{EntryRow}</EntryList>
    </Section>
  )
}

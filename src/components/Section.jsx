export default function Section({ title, style, level = 2, children }) {
  const Heading = `h${level}`
  return (
    <section className="entry-group" style={style}>
      <Heading className="entry-group__title">{title}</Heading>
      {children}
    </section>
  )
}

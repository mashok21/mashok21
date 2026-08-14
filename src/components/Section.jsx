export default function Section({ title, style, children }) {
  return (
    <section className="entry-group" style={style}>
      <h2 className="entry-group__title">{title}</h2>
      {children}
    </section>
  )
}

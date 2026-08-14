export default function SectionHeader({ eyebrow, title, intro }) {
  return (
    <header className="page-intro">
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h1>{title}</h1>
      {intro ? <p className="text-muted">{intro}</p> : null}
    </header>
  )
}

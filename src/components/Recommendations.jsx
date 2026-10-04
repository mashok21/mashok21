export default function Recommendations({ items }) {
  return (
    <div className="recos">
      {items.map((r) => (
        <figure className="reco" key={r.name}>
          <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
          <figcaption>
            <strong>{r.name}</strong>
            <span className="text-muted">, {r.role}</span>
            {r.note ? <div className="text-muted reco__note">{r.note}</div> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

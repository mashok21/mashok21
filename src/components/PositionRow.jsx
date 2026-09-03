import { Link } from 'react-router-dom'

// The one row layout for "a position held at an institution over a period,
// with a description": title (optionally linked) / period / bold
// institution (+ optional location) and description. Used everywhere that
// shape appears — Experience roles, Teaching's current and past roles — so
// title/institute/date/description read the same way across the whole
// site instead of each page inventing its own order.
export default function PositionRow({ title, path, institution, location, period, description }) {
  return (
    <>
      <span className="entry__title">{path ? <Link to={path}>{title}</Link> : title}</span>
      <span className="entry__meta">{period}</span>
      <div className="entry__note">
        <strong>{institution}</strong>
        {location ? ` · ${location}` : ''}. {description}
      </div>
    </>
  )
}

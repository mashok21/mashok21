import SectionHeader from '../components/SectionHeader'
import { mannheimArticles } from '../data/mannheimWriting'

export default function MannheimCapital() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Practice"
          title="Mannheim Capital"
          intro="A boutique mutual fund distribution practice in Bengaluru. It also offers IBBI-registered valuation services for securities and financial assets. The practice is built on capital stewardship aligned with time, not prediction or market timing."
        />

        <section className="entry-group">
          <h2 className="entry-group__title">Writing</h2>
          <ul className="entry-list">
            {mannheimArticles.map((article) => (
              <li className="entry" key={article.url}>
                <a href={article.url} target="_blank" rel="noreferrer">
                  <span className="entry__title">{article.title}</span>
                </a>
                <span className="entry__meta">{article.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="action-row">
          <a className="btn" href="https://mannheimcapital.com" target="_blank" rel="noreferrer">
            mannheimcapital.com
          </a>
        </div>
      </div>
    </div>
  )
}

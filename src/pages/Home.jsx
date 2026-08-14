import { qualifications, interests, honors } from '../data/home'
import { education } from '../data/education'
import ExternalLink from '../components/ExternalLink'
import EntryList from '../components/EntryList'

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <img
          src="/images/ashok-headshot.jpg"
          alt="Ashok M"
          style={{
            width: '84px',
            height: '84px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--gold)',
            marginBottom: '1rem',
          }}
        />
        <p className="eyebrow">Bengaluru, India</p>
        <h1>Ashok M</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '38rem' }}>
          Ashok M is a research economist working at the intersection of economic theory and
          capital markets. He runs Mannheim Capital, a boutique wealth practice in Bengaluru. It
          offers mutual fund distribution and IBBI-registered valuation services for securities
          and financial assets. He also produces independent macro research on Indian capital
          markets through an Austrian capital theory lens. He teaches statistics, managerial
          economics and ethics in finance to MBA and executive students in Bengaluru.
        </p>
        <div className="action-row">
          <ExternalLink className="btn" href="https://www.linkedin.com/in/ashokm-ca-cfa">
            LinkedIn
          </ExternalLink>
          <a className="btn btn--gold" href="/cv/Ashok-M-CV.pdf" download>
            Download CV
          </a>
        </div>

        <section className="entry-group" style={{ marginTop: '3rem' }}>
          <h2 className="entry-group__title">Interests</h2>
          <EntryList items={interests} itemKey={(item) => item}>
            {(item) => item}
          </EntryList>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Qualifications</h2>
          <EntryList items={qualifications}>
            {(q) => (
              <>
                <span className="entry__title">{q.title}</span>
                <span className="entry__meta">{q.meta}</span>
              </>
            )}
          </EntryList>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Education</h2>
          <EntryList items={education} itemKey={(item) => item.degree}>
            {(item) => (
              <>
                <span className="entry__title">{item.degree}</span>
                <span className="entry__meta">
                  {item.institution}
                  {item.period ? ` · ${item.period}` : ''}
                </span>
              </>
            )}
          </EntryList>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Honors</h2>
          <EntryList items={honors}>
            {(item) => (
              <>
                <span className="entry__title">{item.title}</span>
                <span className="entry__meta">{item.date}</span>
                <div className="entry__note">{item.issuer}</div>
                <p className="text-muted">{item.description}</p>
              </>
            )}
          </EntryList>
        </section>
      </div>
    </div>
  )
}

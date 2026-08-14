import { qualifications, interests } from '../data/home'

export default function Home() {
  return (
    <div className="page">
      <div className="container">
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
          <a
            className="btn"
            href="https://www.linkedin.com/in/ashokm-ca-cfa"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn--gold" href="/cv/Ashok-M-CV.pdf" download>
            Download CV
          </a>
        </div>

        <section className="entry-group" style={{ marginTop: '3rem' }}>
          <h2 className="entry-group__title">Interests</h2>
          <ul className="entry-list">
            {interests.map((item) => (
              <li className="entry" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Qualifications</h2>
          <ul className="entry-list">
            {qualifications.map((q) => (
              <li className="entry" key={q.title}>
                <span className="entry__title">{q.title}</span>
                <span className="entry__meta">{q.meta}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

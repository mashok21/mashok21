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
          economics and ethics in finance to MBA and executive students in Bengaluru. He holds
          the CFA charter and is a Fellow Chartered Accountant. He is a PhD scholar in Economics
          at Srinivas University, researching capital theory, credit distortions and business
          cycles.
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
      </div>
    </div>
  )
}

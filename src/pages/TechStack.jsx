import SectionHeader from '../components/SectionHeader'
import ExternalLink from '../components/ExternalLink'

export default function TechStack() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Full-stack, Python and applied data science"
          intro="A blend of formal training and self-taught, project-driven learning, applied across this site, austrianprocess.com and independent research work."
        />

        <section className="entry-group">
          <h2 className="entry-group__title">Full-stack web development (MERN)</h2>
          <p>
            React, Node.js, Express and MongoDB, the stack behind both this site and
            austrianprocess.com. Trained through DCT Academy's Post Graduate Program in Full Stack
            Web Development, a dual-certification program (Front End, then Full Stack) covering
            core and advanced JavaScript, React and Redux, and a Node/Express/MongoDB backend, and
            through Great Learning's Full Stack Web Development with MERN Stack certificate.
          </p>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Python and data</h2>
          <p>
            Formal grounding via the University of Michigan's Python for Everybody and Python 3
            Programming specializations on Coursera. The broader data science toolkit, pandas,
            scikit-learn, statistical modelling and machine learning, is self-taught through applied
            project work, later reinforced by two years instructing a full-cycle professional data
            science curriculum at Learnbay and ExcelR.
          </p>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Projects</h2>
          <p>
            <strong>Stonelink Monte Carlo Portfolio Risk Simulation Engine.</strong> A Django/DRF
            backend running a NumPy-vectorized Monte Carlo engine (3,000-path simulations with
            positive semi-definite covariance repair), paired with a React/Vite frontend, deployed
            on Railway and Vercel. Built for Stonelink Investment Labs; the codebase is
            client-confidential, so no public repository link is available.
          </p>
          <p>
            <strong>Mutual Fund Analysis.</strong> A modular Python project analyzing mutual fund
            scheme characteristics: descriptive analysis, structural PCA, unsupervised clustering,
            contemporaneous explanatory analysis and a governed next-month forecasting exercise on
            scheme-level panel data.{' '}
            <ExternalLink href="https://github.com/mashok21/mutualfundsanalysis">
              github.com/mashok21/mutualfundsanalysis
            </ExternalLink>
          </p>
        </section>
      </div>
    </div>
  )
}

import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
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

        <Section title="Full-stack web development (MERN)">
          <p>
            React, Node.js, Express and MongoDB, the stack behind both this site and
            austrianprocess.com. Trained through{' '}
            <ExternalLink href="https://www.dctacademy.com">DCT Academy's</ExternalLink> Post
            Graduate Program in Full Stack Web Development, a dual-certification program (Front
            End, then Full Stack) covering core and advanced JavaScript, React and Redux, and a
            Node/Express/MongoDB backend, and through Great Learning's Full Stack Web Development
            with MERN Stack certificate.
          </p>
        </Section>

        <Section title="Python and data">
          <p>
            Formal grounding via the University of Michigan's{' '}
            <ExternalLink href="https://www.coursera.org/specializations/python">
              Python for Everybody
            </ExternalLink>{' '}
            (
            <ExternalLink href="https://www.coursera.org/account/accomplishments/specialization/SRB74TUQW5PZ">
              certificate
            </ExternalLink>
            ) and{' '}
            <ExternalLink href="https://www.coursera.org/specializations/python-3-programming">
              Python 3 Programming
            </ExternalLink>{' '}
            (
            <ExternalLink href="https://www.coursera.org/account/accomplishments/specialization/2NEJHWE9MX2V">
              certificate
            </ExternalLink>
            ) specializations on Coursera. The broader data science toolkit, pandas, scikit-learn,
            statistical modelling and machine learning, is self-taught through applied project
            work, later reinforced by two years instructing a full-cycle professional data science
            curriculum at <ExternalLink href="https://www.learnbay.co">Learnbay</ExternalLink> and{' '}
            <ExternalLink href="https://www.excelr.com">ExcelR</ExternalLink>.
          </p>
        </Section>

        <Section title="Projects">
          <p>
            <strong>Stonelink Monte Carlo Portfolio Risk Simulation Engine.</strong> A Django/DRF
            backend running a NumPy-vectorized Monte Carlo engine (3,000-path simulations with
            positive semi-definite covariance repair), paired with a React/Vite frontend, deployed
            on Railway and Vercel. Built for Stonelink Investment Labs; the codebase is
            client-confidential.{' '}
            <ExternalLink href="https://github.com/mashok21/stonelink-monte-carlo-simulation">
              Backend
            </ExternalLink>{' '}
            /{' '}
            <ExternalLink href="https://github.com/mashok21/stonelink-monte-carlo-simulation-frontend">
              Frontend
            </ExternalLink>{' '}
            (private repositories).
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
          <p>
            <strong>Ask Austrian (austrianprocess.com).</strong> A retrieval-augmented research
            assistant: a LangGraph agent retrieves passages from a MongoDB Atlas vector index built
            on local sentence-transformer embeddings, then answers using Gemini as the primary
            model with Claude as an automatic fallback. Two independent guardrails, a pre-filter
            and a post-generation check, stop it from giving financial or investment advice.
          </p>
        </Section>
      </div>
    </div>
  )
}

import SectionHeader from '../components/SectionHeader'
import ExternalLink from '../components/ExternalLink'
import { usePageMetaForRoute } from '../hooks/usePageMeta'

const orchestration = {
  key: 'orchestration',
  label: 'ai & agent orchestration',
  color: 'var(--gold-soft)',
  tags: ['LangGraph', 'RAG', 'Gemini', 'Claude'],
}

const layers = [
  { key: 'frontend', label: 'frontend', color: 'var(--navy)', tags: ['React', 'Vite'] },
  {
    key: 'backend-mern',
    label: 'backend · mern',
    color: 'var(--gold)',
    tags: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    key: 'backend-python',
    label: 'backend · python',
    color: 'var(--text-muted)',
    tags: ['Django', 'DRF'],
  },
  {
    key: 'data',
    label: 'data science',
    color: 'var(--navy-deep)',
    tags: ['Python', 'pandas', 'scikit-learn', 'NumPy', 'statistical modeling', 'ML'],
  },
]

const projects = [
  {
    name: 'stonelink-monte-carlo-simulation',
    tags: ['Django', 'DRF', 'React', 'NumPy'],
    desc: 'A Monte Carlo portfolio risk engine built for Stonelink Investment Labs and deployed on Railway and Vercel. It runs 3,000-path simulations, vectorized with NumPy, and repairs the covariance matrix to keep it positive semi-definite. The codebase is client-confidential.',
    links: (
      <>
        <ExternalLink href="https://github.com/mashok21/stonelink-monte-carlo-simulation">
          backend (private)
        </ExternalLink>
        <ExternalLink href="https://github.com/mashok21/stonelink-monte-carlo-simulation-frontend">
          frontend (private)
        </ExternalLink>
      </>
    ),
  },
  {
    name: 'mutualfundsanalysis',
    tags: ['Python', 'PCA', 'k-means'],
    desc: 'An analysis of mutual fund schemes that starts with descriptive stats, moves through structural PCA and k-means clustering, and ends with governed next-month forecasting on scheme-level panel data.',
    links: (
      <ExternalLink href="https://github.com/mashok21/mutualfundsanalysis">
        github.com/mashok21/mutualfundsanalysis
      </ExternalLink>
    ),
  },
  {
    name: 'ask-austrian',
    tags: ['LangGraph', 'RAG', 'Gemini', 'Claude'],
    desc: 'A retrieval-augmented research assistant that searches over MongoDB Atlas vector search, running Gemini as the primary model with automatic fallback to Claude. Dual guardrails keep it from giving financial or investment advice.',
    links: <ExternalLink href="https://austrianprocess.com">austrianprocess.com</ExternalLink>,
  },
]

export default function TechStack() {
  usePageMetaForRoute('/tech-stack')

  return (
    <div className="page tech-page">
      <div className="container">
        <SectionHeader
          eyebrow="$ cat tech_stack.json"
          title="{ full-stack · python · applied data science }"
        />

        <div
          className="stack-layer stack-layer--orchestration"
          style={{ '--layer-color': orchestration.color }}
        >
          <div className="stack-layer__label">{orchestration.label}</div>
          <div className="tech-tags">
            {orchestration.tags.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <span className="stack-layer__connector">▾</span>
        </div>

        <div className="stack">
          {layers.map((layer, i) => (
            <div className="stack-layer" style={{ '--layer-color': layer.color }} key={layer.key}>
              <div className="stack-layer__label">{layer.label}</div>
              <div className="tech-tags">
                {layer.tags.map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {i < layers.length - 1 ? <span className="stack-layer__connector">▾</span> : null}
            </div>
          ))}
        </div>
        <p className="tech-note">
          trained via <ExternalLink href="https://www.dctacademy.com">DCT Academy</ExternalLink> (PGP,
          Full Stack) · Great Learning (MERN) ·{' '}
          <ExternalLink href="https://www.coursera.org/specializations/python">
            Python for Everybody
          </ExternalLink>{' '}
          &{' '}
          <ExternalLink href="https://www.coursera.org/specializations/python-3-programming">
            Python 3 Programming
          </ExternalLink>{' '}
          (Coursera) · 2 yrs teaching data science at{' '}
          <ExternalLink href="https://www.learnbay.co">Learnbay</ExternalLink> &{' '}
          <ExternalLink href="https://www.excelr.com">ExcelR</ExternalLink>
        </p>

        <h2 className="tech-section-label">// projects</h2>
        <div className="project-cards">
          {projects.map((project) => (
            <div className="project-card" key={project.name}>
              <div className="project-card__name">{project.name}</div>
              <div className="tech-tags project-card__tags">
                {project.tags.map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="project-card__desc">{project.desc}</p>
              <div className="project-card__links">{project.links}</div>
            </div>
          ))}
        </div>

        <p className="tech-note">
          more on <ExternalLink href="https://github.com/mashok21">github.com/mashok21</ExternalLink>
        </p>
      </div>
    </div>
  )
}

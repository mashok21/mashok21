import SectionHeader from '../components/SectionHeader'
import ExternalLink from '../components/ExternalLink'

function SkillsRow({ label, tags }) {
  return (
    <div className="skills-row">
      <span className="skills-row__label">{label}</span>
      <div className="tech-tags">
        {tags.map((tag) => (
          <span className="tech-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <div className="page tech-page">
      <div className="container">
        <SectionHeader
          eyebrow="$ cat tech_stack.json"
          title="{ full-stack · python · applied data science }"
        />

        <div className="skills-block">
          <SkillsRow label="web" tags={['React', 'Node.js', 'Express', 'MongoDB', 'Vite']} />
          <SkillsRow
            label="data"
            tags={['Python', 'Django', 'pandas', 'scikit-learn', 'NumPy', 'statistical modeling', 'ML']}
          />
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
        </div>

        <h2 className="tech-section-label">// featured</h2>
        <div className="tech-projects">
          <div className="code-block">
            <div className="code-block__head">
              <span className="code-block__dots">
                <span />
                <span />
                <span />
              </span>
              <span className="code-block__filename">views.py</span>
            </div>
            <div className="code-block__body">
              <div className="tech-tags">
                {['Django', 'DRF', 'NumPy', 'React', 'Vite', 'Railway', 'Vercel'].map((tag) => (
                  <span className="tech-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="code-block__line">
                <span className="code-block__key">class</span> StonelinkMonteCarloEngine(APIView):
              </div>
              <div className="code-block__line code-indent-1">"""</div>
              <ul className="code-list code-indent-1">
                <li>3,000-path Monte Carlo simulation — NumPy-vectorized</li>
                <li>Positive semi-definite covariance repair</li>
                <li>Backend: Django/DRF · Frontend: React/Vite</li>
                <li>Deployed: Railway (API) + Vercel (frontend)</li>
                <li>Built for Stonelink Investment Labs — codebase client-confidential</li>
              </ul>
              <div className="code-block__line code-indent-1">"""</div>
              <div className="code-block__line code-indent-1">
                <span className="code-block__key">def</span> post(self, request):
              </div>
              <div className="code-block__line code-indent-2">
                <span className="code-block__key">return</span> Response(run_simulation(request.data))
              </div>
              <div className="code-block__links">
                <ExternalLink href="https://github.com/mashok21/stonelink-monte-carlo-simulation">
                  backend (private)
                </ExternalLink>
                <ExternalLink href="https://github.com/mashok21/stonelink-monte-carlo-simulation-frontend">
                  frontend (private)
                </ExternalLink>
              </div>
            </div>
          </div>
        </div>

        <p className="tech-note" style={{ marginTop: 'var(--space-3)' }}>
          other work:{' '}
          <ExternalLink href="https://github.com/mashok21/mutualfundsanalysis">
            mutualfundsanalysis
          </ExternalLink>{' '}
          (PCA, k-means) ·{' '}
          <ExternalLink href="https://austrianprocess.com">ask-austrian</ExternalLink> (RAG, LangGraph)
          — more on <ExternalLink href="https://github.com/mashok21">github.com/mashok21</ExternalLink>
        </p>
      </div>
    </div>
  )
}

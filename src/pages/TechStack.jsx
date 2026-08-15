import SectionHeader from '../components/SectionHeader'
import ExternalLink from '../components/ExternalLink'

function CodeBlock({ filename, lang = 'ts', name, tags, items }) {
  const tagList = (
    <div className="tech-tags code-indent-2">
      {tags.map((tag) => (
        <span className="tech-tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  )
  const bulletList = (
    <ul className="code-list code-indent-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )

  return (
    <div className="code-block">
      <div className="code-block__head">
        <span className="code-block__dots">
          <span />
          <span />
          <span />
        </span>
        <span className="code-block__filename">{filename}</span>
      </div>
      <div className="code-block__body">
        {lang === 'py' ? (
          <>
            <div className="code-block__line">
              <span className="code-block__key">@stack</span>
            </div>
            <div className="code-block__line">
              <span className="code-block__key">def</span> {name}():
            </div>
            <div className="code-block__line code-indent-1">
              <span className="code-block__key">return</span> {'{'}
            </div>
            <div className="code-block__line code-indent-2">"tags": [</div>
            {tagList}
            <div className="code-block__line code-indent-2">],</div>
            <div className="code-block__line code-indent-2">"notes": [</div>
            {bulletList}
            <div className="code-block__line code-indent-2">],</div>
            <div className="code-block__line code-indent-1">{'}'}</div>
          </>
        ) : (
          <>
            <div className="code-block__line">
              <span className="code-block__key">const</span> {name} = {'{'}
            </div>
            {tagList}
            {bulletList}
            <div className="code-block__brace">{'}'}</div>
          </>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ name, tags, items, links, tree = false }) {
  return (
    <div className="term-card">
      <div className="term-card__prompt">
        <span className="term-card__prompt-sign">$</span>
        <span className="term-card__title">{name}</span>
      </div>
      <div className="term-card__tags">
        {tags.map((tag) => (
          <span className="tech-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      {tree ? (
        <ul className="code-list code-list--tree">
          {items.map((item, i) => (
            <li key={i}>
              <span className="tree-connector">{i === items.length - 1 ? '└──' : '├──'}</span>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="code-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {links ? <div className="term-card__links">{links}</div> : null}
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
        <div className="tech-page__links">
          <ExternalLink href="https://github.com/mashok21">github.com/mashok21</ExternalLink>
        </div>

        <div className="tech-stack">
          <CodeBlock
            filename="fullStack.ts"
            name="fullStack"
            tags={['React', 'Node.js', 'Express', 'MongoDB', 'Vite']}
            items={[
              <>
                <ExternalLink href="https://www.dctacademy.com">DCT Academy</ExternalLink> — PG
                Program, Full Stack Web Development (dual-certified: Front End → Full Stack)
              </>,
              'Core & advanced JavaScript, React + Redux, Node/Express/MongoDB backend',
              'Great Learning — Full Stack Web Development with MERN Stack certificate',
              <>
                shipped: this site, <ExternalLink href="https://austrianprocess.com">austrianprocess.com</ExternalLink>
              </>,
            ]}
          />

          <CodeBlock
            filename="python_data.py"
            lang="py"
            name="python_data"
            tags={['Python', 'Django', 'pandas', 'scikit-learn', 'NumPy', 'statistical modeling', 'ML']}
            items={[
              <>
                <ExternalLink href="https://www.coursera.org/specializations/python">
                  Python for Everybody
                </ExternalLink>{' '}
                — University of Michigan (
                <ExternalLink href="https://www.coursera.org/account/accomplishments/specialization/SRB74TUQW5PZ">
                  certificate
                </ExternalLink>
                )
              </>,
              <>
                <ExternalLink href="https://www.coursera.org/specializations/python-3-programming">
                  Python 3 Programming
                </ExternalLink>{' '}
                — University of Michigan (
                <ExternalLink href="https://www.coursera.org/account/accomplishments/specialization/2NEJHWE9MX2V">
                  certificate
                </ExternalLink>
                )
              </>,
              'pandas, scikit-learn, statistical modelling & ML — self-taught, project-driven',
              <>
                2 years teaching full-cycle data science curriculum at{' '}
                <ExternalLink href="https://www.learnbay.co">Learnbay</ExternalLink> and{' '}
                <ExternalLink href="https://www.excelr.com">ExcelR</ExternalLink>
              </>,
            ]}
          />
        </div>

        <h2 className="tech-section-label">// projects</h2>
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

          <ProjectCard
            name="mutualfundsanalysis"
            tags={['Python', 'PCA', 'k-means', 'forecasting']}
            tree
            items={[
              'Descriptive analysis of scheme characteristics',
              'Structural PCA — dimensionality reduction on scheme features',
              'Unsupervised clustering (k-means) — groups schemes by behavior',
              'Contemporaneous explanatory analysis',
              'Governed next-month forecasting on scheme-level panel data',
            ]}
            links={
              <ExternalLink href="https://github.com/mashok21/mutualfundsanalysis">
                github.com/mashok21/mutualfundsanalysis
              </ExternalLink>
            }
          />

          <ProjectCard
            name="ask-austrian"
            tags={['LangGraph', 'MongoDB Atlas Vector Search', 'sentence-transformers', 'Gemini', 'Claude']}
            items={[
              'Retrieval-augmented research assistant — LangGraph agent',
              'Retrieval: MongoDB Atlas vector index, local sentence-transformer embeddings',
              'Generation: Gemini (primary) → Claude (automatic fallback)',
              'Guardrails: pre-filter + post-generation check block financial/investment advice',
            ]}
            links={<ExternalLink href="https://austrianprocess.com">austrianprocess.com</ExternalLink>}
          />
        </div>
      </div>
    </div>
  )
}

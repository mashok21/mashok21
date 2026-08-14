import SectionHeader from '../components/SectionHeader'
import ExternalLink from '../components/ExternalLink'

export default function AustrianProcess() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Applied Project"
          title="Austrian Process"
          intro="An educational platform that turns Austrian capital theory into interactive tools: a visual model of capital structure, live interest-rate data, and a research assistant grounded in primary texts."
        />

        <p>
          <ExternalLink href="https://www.austrianprocess.com">austrianprocess.com</ExternalLink>
        </p>

        <section className="entry-group">
          <h2 className="entry-group__title">The Hayekian-Garrison Triangle</h2>
          <p>
            The triangle shows how time preference shapes the structure of capital. A single
            slider sets the balance between saving and consumption. Move it toward saving and the
            production structure lengthens. Move it toward consumption and it shortens. Two
            triangles, an initial phase and a later phase, make the compounding effect of that
            choice visible directly, rather than as an abstract claim.
          </p>
          <img
            src="/images/garrison-triangle.png"
            alt="The Hayekian-Garrison Triangle tool on austrianprocess.com, showing an initial and later phase of capital structure at a high time preference setting."
            style={{ width: '100%', borderRadius: '2px', border: '1px solid var(--border)' }}
          />
          <p className="text-muted" style={{ fontSize: '0.85rem', marginTop: '0.4rem' }}>
            The live tool at austrianprocess.com/garrison-triangle.
          </p>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Ask Austrian: the research assistant</h2>
          <p>
            Ask Austrian is a retrieval-augmented assistant grounded in 28 primary Austrian
            economics texts, including Mises, Rothbard, Menger, Böhm-Bawerk and Hayek. A LangGraph
            agent retrieves passages from a MongoDB Atlas vector index built on local
            sentence-transformer embeddings, then answers using Gemini as the primary model with
            Claude as an automatic fallback. Two independent guardrails, a pre-filter and a
            post-generation check, stop it from giving financial or investment advice. It answers
            from the texts directly, not from a general model's prior knowledge.
          </p>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Also on the platform</h2>
          <p>
            Live interest-rate telemetry pulled from FRED data with historical crisis annotations,
            a central-planning simulator built around the economic calculation problem, a scored
            quiz on Austrian concepts, and a curated reading shelf. The site was built with an
            autonomous build loop: an AI assessment pass, an implementation pass, and an automated
            test pass, repeated until a change is verified.
          </p>
        </section>

        <div className="action-row">
          <ExternalLink className="btn" href="https://www.austrianprocess.com">
            Visit austrianprocess.com
          </ExternalLink>
        </div>
      </div>
    </div>
  )
}

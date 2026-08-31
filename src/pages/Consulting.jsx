import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'

export default function Consulting() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Engagement"
          title="Consulting"
          intro="Independent macro research advisory for Stonelink Investment Labs. This puts Austrian capital theory to work as an industry consulting engagement, not an academic exercise."
        />

        <Section title="Stonelink Investment Labs">
          <p>
            Stonelink is a private research and intelligence firm based in R.A. Puram, Chennai,
            incorporated in September 2019. It tracks Indian capital markets through macro
            research and quantitative analysis.
          </p>
          <p>
            I've served as Research Economist since January 2026, working out of Bengaluru. The
            role involves producing periodic commentary on credit conditions, liquidity cycles,
            and interest-rate transmission, work that feeds directly into capital allocation
            decisions for investment teams.
          </p>
        </Section>

        <Section title="The Austrian hat">
          <p>
            The mandate is narrow and deliberate: read credit conditions, liquidity cycles and
            interest-rate transmission the way the Austrian school reads them: as signals about
            the real structure of capital, not just aggregate demand. That lens is what
            distinguishes the commentary from conventional macro research, and it's the same
            theoretical grounding behind Austrian Process.
          </p>
        </Section>
      </div>
    </div>
  )
}

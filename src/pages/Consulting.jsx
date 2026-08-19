import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'

export default function Consulting() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Practice"
          title="Consulting"
          intro="Independent macro research advisory for Stonelink Investment Labs – putting Austrian capital theory to work as a paid, ongoing engagement, not an academic exercise."
        />

        <Section title="Stonelink Investment Labs">
          <p>
            A private research and intelligence firm incorporated on 9 September 2019 and
            headquartered in R.A. Puram, Chennai, tracking Indian capital markets, macro research
            and quantitative analysis.
          </p>
          <p>
            Research Economist, Jan 2026 – Present, Bengaluru. Produces periodic commentary on
            credit conditions, liquidity cycles, and interest-rate transmission to inform capital
            allocation decisions for investment teams.
          </p>
        </Section>

        <Section title="The Austrian hat">
          <p>
            The mandate is narrow and deliberate: read credit conditions, liquidity cycles and
            interest-rate transmission the way the Austrian school reads them – as signals about
            the real structure of capital, not just aggregate demand. That lens is what
            distinguishes the commentary from conventional macro research, and it's the same
            theoretical grounding behind Austrian Process.
          </p>
        </Section>
      </div>
    </div>
  )
}

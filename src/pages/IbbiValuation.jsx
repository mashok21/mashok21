import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'

const credentials = [
  {
    title: 'Registered Valuer, Securities or Financial Assets',
    meta: 'Jan 2021',
    note: (
      <>
        Insolvency and Bankruptcy Board of India (IBBI). Credential ID
        IBBI/RV/13/2021/13794.
      </>
    ),
  },
  {
    title: 'Valuation Examination, Securities or Financial Assets',
    meta: 'Oct 2020',
    note: (
      <>
        Passed under the Companies (Registered Valuers and Valuation) Rules, 2017.
        Certificate No. IBBI/SFA/001706.
      </>
    ),
  },
]

const resources = [
  {
    label: 'Insolvency and Bankruptcy Board of India (IBBI)',
    href: 'https://ibbi.gov.in',
    note: 'The government body that licenses valuers and regulates company insolvency and liquidation in India, under Section 247 of the Companies Act, 2013 and the Companies (Registered Valuers and Valuation) Rules, 2017.',
  },
  {
    label: 'IOV Registered Valuers Foundation (IOV RVF)',
    href: 'https://iovrvf.org',
    note: 'The IBBI-recognised professional body I am enrolled with for the Securities or Financial Assets license.',
  },
]

export default function IbbiValuation() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Practice"
          title="Private Company Share Valuations"
          intro="I do equity valuations for closely held and venture-backed companies. This covers primary funding rounds, secondary transfers and buy-backs. I do this work as a government-licensed valuer under India's Insolvency and Bankruptcy Board (IBBI), the regulator that certifies valuers for company law and insolvency matters."
        />

        <Section title="Credential">
          <EntryList items={credentials} itemKey={(item) => item.title}>
            {(item) => (
              <>
                <span className="entry__title">{item.title}</span>
                <span className="entry__meta">{item.meta}</span>
                <div className="entry__note">{item.note}</div>
              </>
            )}
          </EntryList>
        </Section>

        <Section title="Scope">
          <div className="prose">
            <p>
              Indian law requires sign-off from an independent, government-licensed valuer for
              certain private-company share transactions. This includes new shares being issued,
              a company buying back its own shares, or a company going through insolvency.
              Valuer licensing is split into three specialisms. Mine is{' '}
              <em>Securities or Financial Assets (SFA)</em>: shares, debentures and similar
              instruments. The other two cover <em>Land & Building</em> and{' '}
              <em>Plant & Machinery</em>. The regulator is the Insolvency and Bankruptcy Board of
              India (IBBI), under the Companies (Registered Valuers and Valuation) Rules, 2017
              (Section 247 of the Companies Act, 2013).
            </p>
            <p>An SFA-licensed valuer is called in for:</p>
            <ul>
              <li>
                <em>Statutory share valuations.</em> This covers new share issuances, buy-backs,
                and mergers or restructuring schemes, wherever company law requires an independent
                valuation.
              </li>
              <li>
                <em>Fair value</em> and <em>liquidation value</em> determinations for financial
                assets during corporate insolvency and liquidation proceedings.
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Assignments">
          <div className="prose">
            <p>
              Work to date has been <em>equity share valuations</em> for unlisted private
              companies. This is the kind of valuation a founder or board needs for a funding
              round or a buy-back. The law requires it be certified by a licensed valuer rather
              than done in-house. Clients so far have been in <em>deep-tech manufacturing</em>
              (AI-robotics hardware) and <em>technology services</em> (software and data
              analytics).
            </p>
            <p>
              The valuations use the <em>Income Approach</em> (Discounted Free Cash Flow) on a
              going-concern basis, with the cost of equity derived from CAPM. This is the same
              core methodology used across investment banking and private equity. Here it is
              applied under a specific statutory mandate: preferential share allotments (Section
              62(1)(c) of the Companies Act, 2013, read with Rule 13(1) of the Companies (Share
              Capital and Debentures) Rules, 2014) and share buy-backs (Section 68 of the
              Companies Act, 2013, read with the same Rules).
            </p>
          </div>
        </Section>

        <Section title="Resources">
          <EntryList items={resources} itemKey={(item) => item.href}>
            {(item) => (
              <>
                <span className="entry__title">
                  <ExternalLink href={item.href}>{item.label}</ExternalLink>
                </span>
                <div className="entry__note">{item.note}</div>
              </>
            )}
          </EntryList>
        </Section>
      </div>
    </div>
  )
}

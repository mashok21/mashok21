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
    note: 'The statutory valuation authority under Section 247 of the Companies Act, 2013, and the regulator of the Registered Valuer framework under the Companies (Registered Valuers and Valuation) Rules, 2017.',
  },
  {
    label: 'IOV Registered Valuers Foundation (IOV RVF)',
    href: 'https://iovrvf.org',
    note: 'The IBBI-recognised Registered Valuers Organisation (RVO) I am enrolled with for the Securities or Financial Assets asset class.',
  },
]

export default function IbbiValuation() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Credential"
          title="IBBI Registered Valuer"
          intro="Registered Valuer, Securities or Financial Assets, empanelled with the Insolvency and Bankruptcy Board of India."
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
              <em>Securities or Financial Assets (SFA)</em> is one of three IBBI asset classes
              for Registered Valuers – alongside <em>Land & Building</em> and{' '}
              <em>Plant & Machinery</em> – each with its own registration and valuation
              examination under the Companies (Registered Valuers and Valuation) Rules, 2017,
              framed under <em>Section 247</em> of the Companies Act, 2013, which designates IBBI
              as the valuation authority.
            </p>
            <p>
              The SFA class covers valuation of shares, debentures and other securities or
              financial instruments, and is engaged wherever company law or insolvency law
              specifically calls for a Registered Valuer in this class:
            </p>
            <ul>
              <li>
                <em>Statutory share valuations</em> under the Companies Act – including
                preferential allotments, buy-backs and schemes of compromise or arrangement
              </li>
              <li>
                <em>Fair value</em> and <em>liquidation value</em> determinations for financial
                assets during corporate insolvency resolution and liquidation under the IBC
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Assignments">
          <div className="prose">
            <p>
              Assignments to date have been <em>equity share valuations</em> for unlisted private
              limited companies. An SFA Registered Valuer is typically required for:
            </p>
            <ul>
              <li>
                the <em>further issue of share capital</em> by way of preferential allotment
                (Section 62(1)(c) of the Companies Act, 2013, read with Rule 13(1) of the
                Companies (Share Capital and Debentures) Rules, 2014)
              </li>
              <li>
                <em>share buy-backs</em> (Section 68 of the Companies Act, 2013, read with the
                same Rules)
              </li>
            </ul>
            <p>
              – a statutory requirement of those processes, not a discretionary exercise.
              Assignments to date have included clients in <em>deep-tech manufacturing</em>
              (AI-robotics hardware) and <em>technology services</em> (software and
              data-analytics), using the Income Approach (Discounted Free Cash Flow method) on a
              going-concern basis, with a CAPM-derived cost of equity.
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

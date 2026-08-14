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
  { label: 'Insolvency and Bankruptcy Board of India (IBBI)', href: 'https://ibbi.gov.in' },
  { label: 'IOV Registered Valuers Foundation (IOV RVF)', href: 'https://iovrvf.org' },
]

export default function IbbiValuation() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Practice"
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
          <p>
            The Securities or Financial Assets category covers valuation of shares, financial
            instruments and other financial assets under the Companies (Registered Valuers and
            Valuation) Rules, 2017. Registered Valuers in this category are engaged in matters
            including insolvency resolution, corporate restructuring and statutory valuation
            requirements under Indian company law.
          </p>
        </Section>

        <Section title="Assignments">
          <p>
            Assignments to date have been equity share valuations for unlisted private limited
            companies, principally for the further issue of share capital by way of preferential
            allotment under Section 62 of the Companies Act, 2013 — the valuation is a statutory
            requirement of that process, not a discretionary exercise. Fair value is determined
            under the Income Approach (Discounted Free Cash Flow method) on a going-concern basis,
            drawing on audited financials, management-certified projections and a CAPM-derived
            cost of equity.
          </p>
        </Section>

        <Section title="Resources">
          <EntryList items={resources} itemKey={(item) => item.href}>
            {(item) => <ExternalLink href={item.href}>{item.label}</ExternalLink>}
          </EntryList>
        </Section>
      </div>
    </div>
  )
}

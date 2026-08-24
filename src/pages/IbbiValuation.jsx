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
            Securities or Financial Assets (SFA) is one of three IBBI asset classes for
            Registered Valuers – alongside Land & Building and Plant & Machinery – each with its
            own registration and valuation examination under the Companies (Registered Valuers
            and Valuation) Rules, 2017, framed under Section 247 of the Companies Act, 2013,
            which designates IBBI as the valuation authority. The SFA class covers valuation of
            shares, debentures and other securities or financial instruments, and is engaged
            wherever company law or insolvency law specifically calls for a Registered Valuer in
            this class: statutory share valuations under the Companies Act (including
            preferential allotments, buy-backs and schemes of compromise or arrangement), and
            fair value and liquidation value determinations for financial assets during corporate
            insolvency resolution and liquidation under the IBC.
          </p>
        </Section>

        <Section title="Assignments">
          <p>
            Assignments to date have been equity share valuations for unlisted private limited
            companies. An SFA Registered Valuer is typically required for the further issue of
            share capital by way of preferential allotment (Section 62(1)(c) of the Companies
            Act, 2013, read with Rule 13(1) of the Companies (Share Capital and Debentures)
            Rules, 2014) and for share buy-backs (Section 68 of the Companies Act, 2013, read
            with the same Rules) – a statutory requirement of those processes, not a
            discretionary exercise.
          </p>
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

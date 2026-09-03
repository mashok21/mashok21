import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import Section from '../components/Section'
import EntryList from '../components/EntryList'
import ExternalLink from '../components/ExternalLink'
import { usePageMetaForRoute } from '../hooks/usePageMeta'

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
    note: 'Designated the Authority for registered valuers by the Central Government under Section 458 of the Companies Act, 2013. Licenses valuers and regulates company insolvency and liquidation in India under the Companies (Registered Valuers and Valuation) Rules, 2017.',
  },
  {
    label: 'IOV Registered Valuers Foundation (IOV RVF)',
    href: 'https://iovrvf.org',
    note: 'The Registered Valuers Organisation (RVO) I am enrolled with for the Securities or Financial Assets Asset Class. IBBI designates RVOs as the first line of regulators for valuers.',
  },
]

export default function IbbiValuation() {
  usePageMetaForRoute('/ibbi-valuation')

  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Practice"
          title="Securities or Financial Assets Valuations"
          intro={
            <>
              I do valuations of securities and financial assets, listed and unlisted, through{' '}
              <ExternalLink href="https://capadvisors.in">capadvisors.in</ExternalLink>, run
              alongside the wealth practice at{' '}
              <Link to="/mannheim-capital">Mannheim Capital</Link>. This covers company law,
              insolvency, SEBI, and FEMA matters wherever an independent registered valuer is
              required. Client work to date has focused on equity valuations for closely held and
              venture-backed companies.
            </>
          }
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
              Since 1 February 2019, only a registered valuer can sign off a valuation under the
              Companies Act, 2013 or the Insolvency and Bankruptcy Code, 2016. IBBI splits valuer
              registration into three Asset Classes. Mine is{' '}
              <em>Securities or Financial Assets (SFA)</em>: equity shares, preference shares,
              debentures and other securities, listed or unlisted. The other two are{' '}
              <em>Land & Building</em> and <em>Plant & Machinery</em>. The regulator, the
              Insolvency and Bankruptcy Board of India (IBBI), is designated the Authority for
              registered valuers under Section 247 of the Companies Act, 2013, and administers
              registration under the Companies (Registered Valuers and Valuation) Rules, 2017.
            </p>
            <p>An SFA-licensed valuer is called in for:</p>
            <ul>
              <li>
                <em>Statutory share valuations.</em> New share issuances, buy-backs, mergers,
                demergers and other restructuring schemes, and winding up, wherever company law
                requires an independent valuation.
              </li>
              <li>
                <em>Fair value</em> and <em>liquidation value</em> determinations for financial
                assets during corporate insolvency and liquidation proceedings under the IBC.
              </li>
              <li>
                <em>SEBI-regulated matters</em> involving listed companies: open offers and
                takeovers, delisting, and employee stock schemes.
              </li>
              <li>
                <em>Cross-border share pricing</em> under FEMA and RBI regulations.
              </li>
            </ul>
          </div>
        </Section>

        <Section title="Assignments">
          <div className="prose">
            <p>
              Work to date has been <em>equity share valuations</em> for unlisted private
              companies. This is the kind of valuation a founder or board needs for a funding
              round or a buy-back. For a funding round, the law requires it be certified by a
              registered valuer rather than done in-house. For a buy-back, a rigorous valuation
              isn't itself a legal mandate, but it's what a defensible price and the auditor's
              solvency certificate both rest on. Clients so far have included an
              <em>AI-robotics hardware manufacturer</em> and a{' '}
              <em>software and data-analytics services company</em>.
            </p>
            <p>
              The valuations use the <em>Income Approach</em> (Discounted Free Cash Flow) on a
              going-concern basis, with the cost of equity derived from CAPM. This is the same
              core methodology used across investment banking and private equity. For
              preferential share allotments (Section 62(1)(c) of the Companies Act, 2013), it is
              applied under a specific statutory mandate: Rule 13(1) of the Companies (Share
              Capital and Debentures) Rules, 2014 requires a registered valuer's report before the
              price is fixed. Share buy-backs (Section 68) don't carry that same registered-valuer
              mandate under Rule 17 of the same Rules, which only requires the buy-back price and
              its basis to be disclosed. The same DCF approach is still applied there, both to
              ground a defensible price and to give the statutory auditor's solvency certificate
              something rigorous to rely on.
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

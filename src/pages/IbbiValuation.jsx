import SectionHeader from '../components/SectionHeader'
import ExternalLink from '../components/ExternalLink'

export default function IbbiValuation() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Practice"
          title="IBBI Registered Valuer"
          intro="Registered Valuer, Securities or Financial Assets, empanelled with the Insolvency and Bankruptcy Board of India."
        />

        <section className="entry-group">
          <h2 className="entry-group__title">Credential</h2>
          <ul className="entry-list">
            <li className="entry">
              <span className="entry__title">Registered Valuer, Securities or Financial Assets</span>
              <span className="entry__meta">Jan 2021</span>
              <div className="entry__note">
                Insolvency and Bankruptcy Board of India (IBBI). Credential ID
                IBBI/RV/13/2021/13794.
              </div>
            </li>
            <li className="entry">
              <span className="entry__title">Valuation Examination, Securities or Financial Assets</span>
              <span className="entry__meta">Oct 2020</span>
              <div className="entry__note">
                Passed under the Companies (Registered Valuers and Valuation) Rules, 2017.
                Certificate No. IBBI/SFA/001706.
              </div>
            </li>
          </ul>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Scope</h2>
          <p>
            The Securities or Financial Assets category covers valuation of shares, financial
            instruments and other financial assets under the Companies (Registered Valuers and
            Valuation) Rules, 2017. Registered Valuers in this category are engaged in matters
            including insolvency resolution, corporate restructuring and statutory valuation
            requirements under Indian company law.
          </p>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Assignments</h2>
          <p>
            Assignments to date have been equity share valuations for unlisted private limited
            companies, principally for the further issue of share capital by way of preferential
            allotment under Section 62 of the Companies Act, 2013 — the valuation is a statutory
            requirement of that process, not a discretionary exercise. Fair value is determined
            under the Income Approach (Discounted Free Cash Flow method) on a going-concern basis,
            drawing on audited financials, management-certified projections and a CAPM-derived
            cost of equity.
          </p>
        </section>

        <section className="entry-group">
          <h2 className="entry-group__title">Resources</h2>
          <ul className="entry-list">
            <li className="entry">
              <ExternalLink href="https://ibbi.gov.in">
                Insolvency and Bankruptcy Board of India (IBBI)
              </ExternalLink>
            </li>
            <li className="entry">
              <ExternalLink href="https://iovrvf.org">
                IOV Registered Valuers Foundation (IOV RVF)
              </ExternalLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

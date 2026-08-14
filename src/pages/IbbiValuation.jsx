import SectionHeader from '../components/SectionHeader'

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
          <h2 className="entry-group__title">Resources</h2>
          <ul className="entry-list">
            <li className="entry">
              <a href="https://ibbi.gov.in" target="_blank" rel="noreferrer">
                Insolvency and Bankruptcy Board of India (IBBI)
              </a>
            </li>
            <li className="entry">
              <a href="https://iovrvf.org" target="_blank" rel="noreferrer">
                IOV Registered Valuers Foundation (IOV RVF)
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

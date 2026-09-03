import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found', "The page you're looking for doesn't exist.")

  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="404"
          title="Page not found"
          intro="That page doesn't exist, or the link may be out of date."
        />
        <p>
          Try the <Link to="/">homepage</Link>, or one of the sections in the nav above:{' '}
          <Link to="/experience">Experience</Link>, <Link to="/qualifications">Qualifications</Link> or{' '}
          <Link to="/research">Research</Link>.
        </p>
      </div>
    </div>
  )
}

import SectionHeader from '../components/SectionHeader'
import EntryGroupTree from '../components/EntryGroupTree'
import { certificationGroups } from '../data/certifications'

export default function ContinuousLearning() {
  return (
    <div className="page">
      <div className="container">
        <SectionHeader
          eyebrow="Continuous Learning"
          title="Ongoing training and credentials"
          intro="Organized by theme, not by date. Certifications and coursework that feed directly into research, teaching or the tools used to build things."
        />

        {certificationGroups.map((group) => (
          <EntryGroupTree group={group} key={group.theme} />
        ))}
      </div>
    </div>
  )
}

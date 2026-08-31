// Sourced from master_profile.md, Appendix: Education.
// CFA, FCA and the IBBI Registered Valuer license are professional
// qualifications, not academic education — they live in
// `qualifications.js` instead.
//
// The trunk `gradient` runs the vertical connector line through the gold
// scale top to bottom; each branch's `color` tints its own tick to match
// its position on that gradient, so the tree reads as a progression
// rather than a flat list.

export const educationTree = {
  theme: 'Education',
  gradient: 'linear-gradient(to bottom, var(--gold), var(--gold-soft), var(--gold-pale))',
  subgroups: [
    {
      theme: 'Doctoral Studies',
      color: 'var(--gold)',
      entries: [
        {
          title: 'Doctor of Philosophy (PhD), Economics',
          issuer: 'Srinivas University',
          date: 'In progress',
        },
      ],
    },
    {
      theme: 'Postgraduate Studies',
      color: 'var(--gold-soft)',
      entries: [
        {
          title: 'Master of Arts (MA), Economics',
          issuer: 'Jain (Deemed-to-be University)',
          date: 'Degree conferred with Distinction, 25 Jul 2024 · Reg. No. 211VMAR00052',
        },
        {
          title: 'Master of Business Administration (MBA), Finance',
          issuer: 'University of Mysore',
          date: 'Jul 2021 – Nov 2023 · First Class, CGPA 7.735 · Convocation 18 Jan 2025 · Reg. No. MBF21024',
        },
      ],
    },
    {
      theme: 'Undergraduate & School',
      color: 'var(--gold-pale)',
      entries: [
        {
          title: 'Bachelor of Commerce (BCom), Distance Education',
          issuer: 'Annamalai University',
          date: 'May 2002 – May 2005',
        },
        {
          title: 'Pre-University Course, Commerce',
          issuer: 'SSMRV College (Sivananda Sarma Memorial R.V. College)',
          date: 'Mar 1999 – Jun 2000 · First Class',
        },
        {
          title: 'High School',
          issuer: 'The Hyderabad Public School Ramanthapur (HPS-R)',
          date: '',
        },
      ],
    },
  ],
}

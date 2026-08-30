// Sourced from master_profile.md, Appendix: Education, plus the CFA/CA
// credentials from Section 2 (moved here under "Professional" so the tree
// covers the full academic + professional path in one place; the
// All-India Rank 45 honor nests under FCA as its `note`, rather than
// living in a separate flat Honors section).

export const educationTree = {
  theme: 'Education',
  subgroups: [
    {
      theme: 'Doctoral Studies',
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
    {
      theme: 'Professional',
      entries: [
        {
          title: 'CFA Charterholder',
          issuer: 'CFA Institute',
          date: '2011',
          url: 'https://credentials.cfainstitute.org/d9c923b3-0c64-4dd1-9e1d-b3a6d5facf13#acc.kOMDRatq',
        },
        {
          title: 'Fellow Chartered Accountant (FCA)',
          issuer: 'Institute of Chartered Accountants of India',
          date: 'Associate (ACA) Feb 2005 → Fellow (FCA) Oct 2015',
          note: 'All-India Rank 45, ICAI Professional Education Examination-II (May 2003).',
        },
      ],
    },
  ],
}

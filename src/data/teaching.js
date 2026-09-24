// Sourced from master_profile.md, Section 5.
//
// Each role's title is the position (plus cohort, in parens, where one
// applies); `topic` is the subject(s) taught, kept as its own field and
// rendered on its own line by PositionRow rather than folded into the
// title, so a multi-course role doesn't produce a wrapping run-on heading.

export const pedagogyNote =
  'Teaching is practitioner-anchored across every role. The emphasis is on economic reasoning and quantitative judgment in real business contexts, not mechanical application of methods or tools.'

export const teachingRoles = [
  {
    title: 'Adjunct Faculty (M.A. Economics)',
    topic: 'Behavioural Economics and Statistics for Economics',
    institution: 'JAIN Online, JAIN (Deemed-to-be University), Bengaluru',
    period: 'Sep 2026 – Present',
    status: 'current',
    description:
      'Teaching Behavioural Economics and Statistics for Economics to M.A. Economics students, delivered fully online.',
  },
  {
    title: 'Adjunct Professor (MBA)',
    topic: 'Statistics for Decision Making, Managerial Economics and Business Research Methods',
    institution: 'Srinivas University',
    period: 'Sep 2025 – Present',
    status: 'current',
    description:
      'Teaching Statistics for Decision Making, Managerial Economics and Business Research Methods across two semesters, to an MBA cohort that includes Indian defence personnel on study leave. All three courses are practitioner-anchored, with emphasis on reading quantitative patterns and economic reasoning in real business contexts.',
  },
  {
    title: 'Adjunct Faculty (Foundation Course, MBA & BBA)',
    topic: 'Business Economics',
    institution: 'JAIN Online, JAIN (Deemed-to-be University), Bengaluru',
    period: 'Aug 2026',
    status: 'past',
    description:
      'Taught the Foundation Course Series for MBA and BBA students, delivered fully online across four live Saturday sessions.',
  },
  {
    title: 'Adjunct Faculty (EMBA)',
    topic: 'Indian Ethos and Business Ethics',
    institution: 'RV University, School for Continuing Education & Professional Studies (SCEPS)',
    period: 'Apr 2026 – Jun 2026',
    status: 'past',
    description:
      "Blended course for a cohort of mid-to-senior working professionals. It reads Western business ethics through an Indian philosophical lens, including Dharma, Satya and the Bhagavad Gita's Sthitaprajna, grounded in cases like Satyam and Wells Fargo.",
  },
  {
    title: 'Adjunct Faculty (Undergraduate)',
    topic: 'Ethical Foundations of Finance and Auditing',
    institution: 'School of Business, RV University',
    period: 'Jan 2026 – Apr 2026',
    status: 'past',
    description:
      "Taught undergraduate management students, drawing on classical moral philosophy, particularly Adam Smith's framework, applied to contemporary financial decision-making. The course aimed to develop normative reasoning alongside technical competence.",
  },
  {
    title: 'Visiting Faculty (MBA545F)',
    topic: 'Digital Technology in Finance',
    institution: 'School of Business and Management, CHRIST (Deemed to be University), Bangalore',
    period: 'Nov 2022 – Feb 2023',
    status: 'past',
    description:
      'Taught to MBA Finance-specialization students at the Kengeri campus, situating technologies like blockchain within broader capital market and institutional contexts.',
  },
  {
    title: 'Faculty (CA Intermediate)',
    topic: 'Economics for Finance',
    institution: 'The Institute of Chartered Accountants of India (ICAI), Bengaluru Branch',
    period: '2022',
    status: 'past',
    description: 'Taught Economics for Finance to CA Intermediate students.',
  },
  {
    title: 'Faculty (CMA Final)',
    topic: 'Advanced Corporate Accounting',
    institution: 'The Institute of Cost Accountants of India (ICMAI)',
    period: '2022',
    status: 'past',
    description: 'Taught Advanced Corporate Accounting to CMA Final students.',
  },
  {
    title: 'CFA Trainer (CFA Levels I & II)',
    topic: 'Financial Reporting and Analysis, Economics and Alternative Investments',
    institution: 'EduPristine',
    period: '2012 – 2016',
    status: 'past',
    description:
      'Taught Financial Reporting and Analysis, Economics and Alternative Investments for CFA Levels I and II, delivering over 100 hours of classes with feedback ratings above 4.2/5.',
  },
  {
    title: 'Instructor',
    topic: 'Data Science',
    institution: 'Learnbay and ExcelR',
    period: 'Jan 2022 – Dec 2023',
    status: 'past',
    description:
      'Taught a full-cycle, roughly 40-session data science curriculum in R and Python, running from statistical foundations like hypothesis testing and ANOVA through regression, classification and ensemble methods such as Random Forest, XGBoost and LightGBM. The syllabus continued into unsupervised learning, including clustering, PCA and recommendation systems, then neural networks, text mining and time-series forecasting, ending in model deployment and a capstone project. Mentored roughly 200 students across two institutions.',
  },
]

export const talks = [
  {
    title: 'Board of Studies Member (Invited Industry Expert)',
    venue: 'JAIN Online, JAIN (Deemed-to-be University), Centre for Distance and Online Education, Bengaluru',
    date: '24 Jun 2025',
    description:
      'Invited as a Chartered Accountant with an investment industry background to contribute to curriculum design and syllabus review for Academic Year 2025-2026, ahead of joining as Adjunct Faculty.',
  },
  {
    title: 'How Data Science Can Help Auditors',
    venue: 'Special Webinar, Institute of Internal Auditors (IIA) Madras Chapter',
    date: '23 Jun 2023',
    url: 'https://www.youtube.com/watch?v=VI6wwqzftXo&t=3753s',
    description:
      'Invited session for the internal audit profession on applying data science techniques to audit sampling, anomaly detection and risk assessment.',
  },
]

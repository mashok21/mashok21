// Sourced from master_profile.md, Section 2.
// One line per entry: issuer, date, short note on relevance.
// `url` links to the specific credential's verification page where the
// author provided one directly; otherwise it falls back to the issuing
// organization's official site (LinkedIn's source export was a flat
// rasterized PDF with no extractable verification links of its own).
//
// The former "AI and Tooling" bucket is split into groups that mirror the
// actual architecture layers of austrianprocess.com. "Tech Stack" nests
// "Web Full-Stack" (frontend + backend, the two halves of the site's
// request/response layer) and "Data and Python" (the data layer) as a
// tree. AI and Agent Orchestration sits above that as its own top-level
// group rather than a peer of frontend/backend — it's the layer that
// drives the other two, not one more item alongside them, the same
// tech-stack-as-narrative principle used to describe that project on the
// Austrian Process page.

export const certificationGroups = [
  {
    theme: 'Tech Stack',
    note: 'The layers behind austrianprocess.com, from the browser down to the data.',
    subgroups: [
      {
        theme: 'Web Full-Stack',
        subgroups: [
          {
            theme: 'Frontend',
            entries: [
              {
                title: 'Introduction to JavaScript',
                issuer: 'Great Learning',
                url: 'https://www.mygreatlearning.com/certificate/BJWLOGFC',
                date: 'Aug 2026',
                note: 'Core language for the front end of this site.',
              },
            ],
          },
          {
            theme: 'Backend',
            entries: [
              {
                title: 'Full Stack Web Development with MERN Stack',
                issuer: 'Great Learning',
                url: 'https://www.mygreatlearning.com/certificate/QTVXTJMW',
                date: 'Aug 2026',
                note: 'MongoDB, Express, React and Node, the stack behind this site.',
              },
              {
                title: 'C for Beginners',
                issuer: 'Great Learning',
                url: 'https://www.mygreatlearning.com/certificate/RXEIULLC',
                date: 'Aug 2026',
                note: 'Foundational systems programming.',
              },
            ],
          },
        ],
      },
      {
        theme: 'Data and Python',
        entries: [
          {
            title: 'Master Data Science & Machine Learning in Python',
            issuer: 'Great Learning',
            url: 'https://www.mygreatlearning.com/certificate/IWMLJKTM',
            date: 'Aug 2026',
            note: 'Applied data science and machine learning workflows in Python.',
          },
          {
            title: 'Python for Data Science and Machine Learning Bootcamp',
            issuer: 'Udemy',
            url: 'https://www.udemy.com/certificate/UC-59e88d7a-0769-4a20-8004-8e92567a536d/',
            date: 'Oct 2021',
            note: 'Applied Python for statistical modelling and machine learning workflows.',
          },
          {
            title: 'The Complete Python Bootcamp: From Zero to Hero in Python',
            issuer: 'Udemy',
            url: 'https://www.udemy.com/certificate/UC-80ffc661-0276-4f33-bcc8-019f44d2cac6/',
            date: 'Oct 2021',
            note: 'Python fundamentals for research tooling and automation.',
          },
          {
            title: 'Data Analysis with Pandas and Python',
            issuer: 'Udemy',
            url: 'https://www.udemy.com/certificate/UC-54c64218-39de-4e25-9cd3-57191fb605f3/',
            date: 'Feb 2020',
            note: 'Data wrangling for empirical research.',
          },
          {
            title: 'MTA: Introduction to Programming Using Python',
            issuer: 'Microsoft',
            url: 'https://learn.microsoft.com/en-us/users/ashokm-9619/',
            date: 'Apr 2021',
            note: 'Proctored exam. Certification number C7E3AB-86X6EA.',
          },
          {
            title: 'Python 3 Programming Specialization',
            issuer: 'University of Michigan (Coursera)',
            url: 'https://www.coursera.org/account/accomplishments/specialization/2NEJHWE9MX2V',
            date: 'Sep 2020',
            note: 'Coursera course certificate. Structured programming foundations.',
          },
          {
            title: 'Python for Everybody Specialization',
            issuer: 'University of Michigan (Coursera)',
            url: 'https://www.coursera.org/account/accomplishments/specialization/SRB74TUQW5PZ',
            date: 'Aug 2020',
            note: 'Coursera course certificate. Python for data retrieval, analysis and visualization.',
          },
        ],
      },
    ],
  },
  {
    theme: 'AI and Agent Orchestration',
    entries: [
      {
        title: 'Claude Code in Action',
        issuer: 'Anthropic',
        url: 'https://verify.skilljar.com/c/jn4pet5dsqgu',
        date: 'Aug 2026',
        note: 'Applied directly to building this site and other software projects.',
      },
      {
        title: 'AI Fluency: Framework & Foundations',
        issuer: 'Anthropic',
        url: 'https://verify.skilljar.com/c/cxi7mj9yzs8h',
        date: 'Aug 2026',
        note: 'Framework for working with AI systems as a practitioner, not just a user.',
      },
      {
        title: 'AI Agent Workflows Using LangGraph',
        issuer: 'Great Learning',
        url: 'https://www.mygreatlearning.com/certificate/NBLBREOQ',
        date: 'Aug 2026',
        note: 'Multi-step agent orchestration, informs the RAG system behind austrianprocess.com.',
      },
      {
        title: 'Foundation: Introduction to LangGraph (Python)',
        issuer: 'LangChain',
        url: 'https://academy.langchain.com/certificates/lcopyzzetp',
        date: 'Aug 2026',
        note: 'Graph-based orchestration for LLM applications.',
      },
      {
        title: 'AI For Everyone',
        issuer: 'DeepLearning.AI',
        url: 'https://www.coursera.org/account/accomplishments/verify/DQNYV34AHLSS',
        date: 'Oct 2021',
        note: 'Early grounding in AI capability and limitation for non-technical decisions.',
      },
    ],
  },
  {
    theme: 'Econometrics and Research Methods',
    entries: [
      {
        title: 'Summer Research Methodology Workshop',
        issuer: 'Indian Institute of Management, Bangalore',
        url: 'https://www.iimb.ac.in',
        date: '20–25 Apr 2026',
        note: 'Six-day workshop. Advanced research design and publication-oriented thinking for the PhD.',
      },
      {
        title: 'Workshop on Applied Econometrics Using STATA, R and Python',
        issuer: 'Dr. B.R. Ambedkar School of Economics University, Bengaluru',
        url: 'https://base.ac.in',
        date: '21–25 Jul 2025',
        note: 'One-week workshop. Empirical modelling methods applied directly in doctoral research.',
      },
      {
        title: 'Qualitative Research Methods',
        issuer: 'University of Amsterdam (Coursera)',
        url: 'https://www.coursera.org/account/accomplishments/verify/0DMS583FLKID',
        date: 'Jul 2025',
        note: 'Coursera course certificate. Complements quantitative training for mixed-methods economic research.',
      },
    ],
  },
  {
    theme: 'Finance and Markets',
    entries: [
      {
        title: 'Decentralized Finance (DeFi) Infrastructure',
        issuer: 'Duke University (Coursera)',
        url: 'https://www.coursera.org/account/accomplishments/verify/WKHX4AEGA7JX',
        date: 'Nov 2022',
        note: 'Coursera course certificate. Structural understanding of DeFi protocols and infrastructure.',
      },
    ],
  },
]

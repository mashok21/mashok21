// Single source of truth for per-route <title>/description, consumed both
// at runtime (usePageMeta, in each page) and at build time (scripts/
// prerender-meta.mjs, which bakes these into a static HTML shell per route
// so non-JS crawlers/scrapers see correct tags too, not just index.html's
// generic fallback). Keep this the only place these strings are written.
import { pedagogyNote } from './data/teaching.js'

export const routeMeta = {
  '/': {
    title: null,
    description:
      'Ashok M — Research economist, investment practitioner, and educator. CFA, FCA, PhD scholar in Economics.',
  },
  '/experience': {
    title: 'Experience',
    description:
      'Twenty years in financial markets, including equity research, wealth management, investment banking and corporate-finance leadership.',
  },
  '/qualifications': {
    title: 'Qualifications',
    description:
      'CFA Charterholder, Fellow Chartered Accountant and IBBI Registered Valuer, plus education from a PhD in progress through school.',
  },
  '/research': {
    title: 'Research',
    description: 'Doctoral work in Economics, journal publications and conference presentations.',
  },
  '/austrianprocess': {
    title: 'Austrian Process',
    description:
      'An educational platform that turns Austrian capital theory into interactive tools: a visual model of capital structure, live interest-rate data, and a research assistant grounded in primary texts.',
  },
  '/teaching': {
    title: 'Teaching',
    description: pedagogyNote,
  },
  '/mannheim-capital': {
    title: 'Mannheim Capital',
    description:
      'A boutique mutual fund distribution practice in Bengaluru, built on capital stewardship aligned with time, not prediction or market timing.',
  },
  '/consulting': {
    title: 'Consulting',
    description:
      'Independent macro research advisory for Stonelink Investment Labs, putting Austrian capital theory to work as an industry consulting engagement.',
  },
  '/ibbi-valuation': {
    title: 'IBBI Valuation',
    description:
      'IBBI-registered valuations of listed and unlisted securities and financial assets through capadvisors.in, covering company law, insolvency, SEBI and FEMA matters.',
  },
  '/tech-stack': {
    title: 'Tech Stack',
    description:
      'The full-stack toolkit behind these projects: React and Vite on the frontend, a MERN backend, and Python for applied data science and AI/agent orchestration.',
  },
  '/continuous-learning': {
    title: 'Continuous Learning',
    description:
      'Certifications and coursework that feed directly into research, teaching or the tools used to build things.',
  },
}

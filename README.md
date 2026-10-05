# Ashok M

Research economist working at the intersection of economic theory and capital markets.
Founder of Mannheim Capital, a mutual fund distribution practice.

Website: **[mashok21.com](https://mashok21.com)**

## Featured work

- **[mutualfundsanalysis](https://github.com/mashok21/mutualfundsanalysis)**: modular Python project
  analysing mutual fund scheme characteristics: descriptive analysis, structural PCA, clustering,
  explanatory regression with VIF diagnostics, and a governed next-month forecasting exercise.
  The underlying dataset is proprietary and not included.

## Other repositories

- [challenges](https://github.com/mashok21/challenges): Python practice notebooks (2021-2024)
- [nodejs_sample](https://github.com/mashok21/nodejs_sample), [js-projects](https://github.com/mashok21/js-projects):
  Node.js / Express and React learning projects (2023-2024)

## About this repository

This repo is the source of the personal website above.

- **Front end:** Vite + React 18 with React Router. Pages cover research, teaching, experience,
  qualifications, Mannheim Capital, IBBI valuation and more (`src/pages/`).
- **Server:** a small Express service in `server/` (see `server/.env.example` for its settings).
- **Deployment:** configured for Vercel (`vercel.json`). `npm run build` builds the site and
  pre-renders page metadata.
- **Automation:** GitHub Actions run a build check (`ci.yml`) and a daily sync of writing from
  Mannheim Capital (`sync-mannheim-writing.yml`).
- **Content:** page content lives in `src/data/`, sourced from `master_profile.md`.

### Run locally

```bash
npm ci
npm run dev
```

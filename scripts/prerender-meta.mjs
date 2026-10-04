// Runs after `vite build`. The site is a client-rendered SPA, so
// dist/index.html only ever carries Home's title/meta tags baked in;
// usePageMeta (src/hooks/usePageMeta.js) swaps them client-side on
// navigation, which real visitors and JS-executing crawlers see but a
// non-JS scraper never will. This generates a static HTML shell per route
// — a copy of dist/index.html with that route's title/description/OG/
// Twitter tags substituted in, from the same routeMeta.js table the
// runtime hook reads — so every route has correct tags before any JS runs.
// vercel.json rewrites each route path to its shell; the JS bundle then
// hydrates the same as it would from index.html.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { routeMeta } from '../src/routeMeta.js'
import { interests } from '../src/data/home.js'
import { experienceGroups } from '../src/data/experience.js'
import { qualifications } from '../src/data/qualifications.js'
import { phd, publications, presentations } from '../src/data/research.js'
import { teachingRoles } from '../src/data/teaching.js'
import { clientRecommendations, teachingRecommendations } from '../src/data/recommendations.js'

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const distDir = path.join(rootDir, 'dist')
const template = readFileSync(path.join(distDir, 'index.html'), 'utf-8')

const SITE_NAME = 'Ashok M'
const SITE_URL = 'https://mashok21.com'

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function replaceAttr(html, selectorPattern, value) {
  return html.replace(selectorPattern, (match, prefix, suffix) => `${prefix}${escapeHtml(value)}${suffix}`)
}

// Visible text for non-JS readers (plain fetchers, many AI tools). React's
// createRoot clears #root on mount, so real visitors never see this block;
// it is built from the same data modules the pages render from, so it cannot
// drift from them. Routes without an entry here get just their heading,
// description and the site links.
const li = (items) => `<ul>${items.map((t) => `<li>${t}</li>`).join('')}</ul>`
const e = escapeHtml
const recos = (items) =>
  items.map((r) => `<blockquote><p>\u201c${e(r.quote)}\u201d</p><footer>${e(r.name)}, ${e(r.role)}</footer></blockquote>`).join('')

const bodies = {
  '/': () => `<h2>Research interests</h2>${li(interests.map(e))}`,
  '/experience': () =>
    experienceGroups
      .map(
        (g) =>
          `<h2>${e(g.theme)}</h2>${li(
            g.roles.map((r) => `<strong>${e(r.title)}</strong>, ${e(r.employer)} (${e(r.period)}). ${e(r.description)}`),
          )}`,
      )
      .join(''),
  '/qualifications': () =>
    li(qualifications.map((q) => `<strong>${e(q.title)}</strong>, ${e(q.meta)}${q.note ? '. ' + e(q.note) : ''}${q.noteLink ? ` (${e(q.noteLink.label)}: ${e(q.noteLink.url)})` : ''}`)),
  '/research': () =>
    `<h2>Doctoral research</h2><p>${e(phd.degree)}, ${e(phd.institution)} (${e(phd.status)}). ${e(phd.description)}</p>` +
    `<p>Thesis: ${e(phd.thesis)}. Supervisor: ${e(phd.supervisor)}. ORCID: ${e(phd.orcid)}.</p>` +
    `<h2>Publications</h2>${li(publications.map((x) => `${e(x.citation)} ${e(x.note)}${x.certificateUrl ? ` (Certificate: ${e(x.certificateUrl)})` : ''}`))}` +
    `<h2>Conference presentations</h2>${li(presentations.map((x) => `<strong>${e(x.title)}</strong>, ${e(x.venue)} (${e(x.date)})${x.certificateUrl ? ` (Certificate: ${e(x.certificateUrl)})` : ''}`))}`,
  '/teaching': () =>
    li(teachingRoles.map((r) => `<strong>${e(r.title)}</strong>, ${e(r.institution)} (${e(r.period)}). ${e(r.topic)}`)) +
    `<h2>What learners say</h2>${recos(teachingRecommendations)}`,
  '/mannheim-capital': () => `<h2>What clients say</h2>${recos(clientRecommendations)}`,
}

function staticBody(routePath, meta) {
  const heading = meta.title || 'Ashok M — Research Economist'
  const links = Object.entries(routeMeta)
    .filter(([p]) => p !== routePath)
    .map(([p, m]) => `<a href="${p}">${e(m.title || 'Home')}</a>`)
  const body = bodies[routePath] ? bodies[routePath]() : ''
  return `<main><h1>${e(heading)}</h1><p>${e(meta.description)}</p>${body}<nav>${links.join(' · ')}</nav></main>`
}

function withBody(html, routePath, meta) {
  return html.replace('<div id="root"></div>', `<div id="root">${staticBody(routePath, meta)}</div>`)
}

// Home: dist/index.html already has Home's tags, so only the body is added.
writeFileSync(path.join(distDir, 'index.html'), withBody(template, '/', routeMeta['/']))

let count = 0
for (const [routePath, meta] of Object.entries(routeMeta)) {
  if (routePath === '/') continue // handled above

  const fullTitle = meta.title ? `${meta.title} — ${SITE_NAME}` : `${SITE_NAME} — Research Economist`
  const url = SITE_URL + routePath

  let html = template
  html = html.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(fullTitle)}</title>`)
  html = replaceAttr(html, /(<meta name="description" content=")[^"]*("[^>]*>)/, meta.description)
  html = replaceAttr(html, /(<meta property="og:title" content=")[^"]*("[^>]*>)/, fullTitle)
  html = replaceAttr(html, /(<meta property="og:description" content=")[^"]*("[^>]*>)/, meta.description)
  html = replaceAttr(html, /(<meta property="og:url" content=")[^"]*("[^>]*>)/, url)
  html = replaceAttr(html, /(<meta name="twitter:title" content=")[^"]*("[^>]*>)/, fullTitle)
  html = replaceAttr(html, /(<meta name="twitter:description" content=")[^"]*("[^>]*>)/, meta.description)

  html = withBody(html, routePath, meta)

  writeFileSync(path.join(distDir, `${routePath.replace(/^\//, '')}.html`), html)
  count++
}

console.log(`prerender-meta: wrote static shells (meta + body text) for ${count} routes plus Home`)

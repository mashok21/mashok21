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

let count = 0
for (const [routePath, meta] of Object.entries(routeMeta)) {
  if (routePath === '/') continue // dist/index.html already has Home's tags

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

  writeFileSync(path.join(distDir, `${routePath.replace(/^\//, '')}.html`), html)
  count++
}

console.log(`prerender-meta: wrote static title/meta shells for ${count} routes`)

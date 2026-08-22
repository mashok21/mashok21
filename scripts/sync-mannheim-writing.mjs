#!/usr/bin/env node
// Regenerates src/data/mannheimWriting.js from the live, public article
// list at mannheimcapital.com/writing. Run via `npm run sync:mannheim`,
// or on a schedule by .github/workflows/sync-mannheim-writing.yml.
//
// Scrapes the public page rather than reading the private source repo
// (mashok21/mannheimcapital) — no GitHub token/secret required. The site
// lists newest first, so we keep that order and take the top 10.

import { writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const WRITING_URL = 'https://mannheimcapital.com/writing'
const ARTICLE_COUNT = 10
const OUTPUT_PATH = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'data',
  'mannheimWriting.js',
)

const MONTH_ABBREV = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
}

function abbreviateDate(rawDate) {
  const match = rawDate.trim().match(/^(\w+)\s+(\d{4})$/)
  if (!match) return rawDate.trim()
  const [, month, year] = match
  return `${MONTH_ABBREV[month] ?? month} ${year}`
}

function quote(value) {
  // Prefer single quotes, but switch to double quotes when the value
  // contains an apostrophe and no double quote, avoiding an escape —
  // matches the style already used in this file (e.g. "India's ...").
  if (value.includes("'") && !value.includes('"')) {
    return `"${value}"`
  }
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
}

const NAMED_ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
}

function decodeEntities(value) {
  return value.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g, (full, code) => {
    if (code.startsWith('#x')) return String.fromCodePoint(parseInt(code.slice(2), 16))
    if (code.startsWith('#')) return String.fromCodePoint(parseInt(code.slice(1), 10))
    return NAMED_ENTITIES[code] ?? full
  })
}

async function fetchArticles() {
  const res = await fetch(WRITING_URL, {
    headers: { 'User-Agent': 'mashok21-sync/1.0 (+https://mashok21.com)' },
  })
  if (!res.ok) {
    throw new Error(`Fetch failed: ${res.status} ${res.statusText}`)
  }
  const html = await res.text()

  const articles = []
  const itemRe = /<a class="article-item" href="([^"]+)">(.*?)<\/a>/gs
  let match
  while ((match = itemRe.exec(html)) !== null) {
    const [, href, inner] = match
    const dateMatch = inner.match(/<span>([^<]+)<\/span>/)
    const titleMatch = inner.match(/<h2 class="article-item-title">([^<]+)<\/h2>/)
    if (!dateMatch || !titleMatch) continue
    articles.push({
      title: decodeEntities(titleMatch[1].trim()),
      date: abbreviateDate(decodeEntities(dateMatch[1])),
      url: new URL(href, WRITING_URL).toString(),
    })
  }

  if (articles.length === 0) {
    throw new Error('No articles parsed from mannheimcapital.com/writing — page markup may have changed.')
  }

  return articles.slice(0, ARTICLE_COUNT)
}

function renderFile(articles) {
  const entries = articles
    .map(
      (a) =>
        `  {\n    title: ${quote(a.title)},\n    date: ${quote(a.date)},\n    url: ${quote(a.url)},\n  },`,
    )
    .join('\n')

  return `// Sourced directly from mannheimcapital.com/writing.
// Synced automatically by scripts/sync-mannheim-writing.mjs via the
// "Sync Mannheim writing" GitHub Actions workflow. Do not edit by hand —
// run \`npm run sync:mannheim\` locally to refresh, or wait for the
// scheduled sync.

export const mannheimArticles = [
${entries}
]
`
}

async function main() {
  const articles = await fetchArticles()
  const content = renderFile(articles)
  await writeFile(OUTPUT_PATH, content)
  console.log(`Wrote ${articles.length} articles to ${path.relative(process.cwd(), OUTPUT_PATH)}`)
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})

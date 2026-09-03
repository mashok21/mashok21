import { useEffect } from 'react'
import { routeMeta } from '../routeMeta'

const SITE_NAME = 'Ashok M'
const SITE_URL = 'https://mashok21.com'

function setMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Sets the browser tab title and description/Open Graph/Twitter Card meta
// tags for the current route on navigation. This covers client-side
// transitions between routes; scripts/prerender-meta.mjs bakes the same
// values (from routeMeta.js) into each route's static HTML shell at build
// time, so the first paint and non-JS crawlers see correct tags too.
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Research Economist`
    document.title = fullTitle

    if (description) {
      setMetaByName('description', description)
      setMetaByProperty('og:description', description)
      setMetaByName('twitter:description', description)
    }

    setMetaByProperty('og:title', fullTitle)
    setMetaByName('twitter:title', fullTitle)
    setMetaByProperty('og:url', SITE_URL + window.location.pathname)
  }, [title, description])
}

// Convenience wrapper for the 11 real routes, which all pull from the
// routeMeta.js table shared with the build-time prerender script.
export function usePageMetaForRoute(path) {
  const meta = routeMeta[path]
  usePageMeta(meta.title, meta.description)
}

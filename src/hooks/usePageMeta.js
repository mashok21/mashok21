import { useEffect } from 'react'

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
// tags for the current route. Client-side only: crawlers that execute JS
// (Google, LinkedIn) pick this up, but simple non-JS scrapers only ever see
// index.html's static fallback tags.
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
